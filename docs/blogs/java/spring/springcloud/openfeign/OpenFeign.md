---
title: Openfeign基本用法
date: '2023-07-28 08:00:00'
sidebar: 'auto'
categories:
 - 微服务
tags:
 - SpringCloud
 - 微服务
---

# Spring CLoud使用方式

## 基本原理

>1. 通过@EnableFeignClients开启使用feignclient
>
>   - basePackages(扫描基础包)、basePackageClasses(扫描基础类)、value(作用类似于basePackages);如果没有basePackages，则将@EnableFeignClients注解类所在的包作为基础扫描包
>
>   - defaultConfiguration：默认配置
>   - clients：被@FeignClient修饰的类集合，如果不为空，则不会再扫描包
>
>2. 扫描@EnableFeignClients的包下被@FeignClient修饰的类
>
>3. 将@FeignClient修改的类转换为BeanDefinition，同时根据配置的url,name,serviceId等，填充调用的URL，检查是否为接口
>
>4. 调用bean时，根据url获取调用地址

## 不使用注册中心

>- 引入openfeign依赖
>
>```java
><dependency>
>    <groupId>org.springframework.cloud</groupId>
>    <artifactId>spring-cloud-starter-openfeign</artifactId>
></dependency>
>```

>- 通过@FeignClient注解定义接口类
>  1. name: 定义名称，如果没有配置url，则使用name作为服务名进行服务发现的依据，多用于有注册中心的时候
>  2. url: 服务地址，可通过EL表达式注入配置文件中的值，例如：${openapi.auth.url}
>  3. path: 可选项，接口前缀，类似于controller类上的requestMapping的值
>  4. fallbackFactory：回调函数，用于配置熔断。需要配合熔断框架使用，例如sentinel、hytrix等

>- 定义具体调用的接口方法，和提供者的contrller写法相同，使用@GetMapping、@RequestBody等注解

```java
@FeignClient(name = "auth-user", url = "${openapi.auth.url}", path = "/user", fallbackFactory = UserApiFallbackFactory.class)
public interface UserApi {

    @GetMapping("/getCurrentUserName")
    String getCurrentUserName();


    @PostMapping(value = "/getAthUser")
    String getAthUser(@RequestBody AthUser athUser);
}
```

## 使用熔断

>- 熔断框架支持sentinel、hytrix等，这里以sentinel为例

>- 引入sentinel依赖
>
>```xml
> <!--引入sentinel依赖-->
><dependency>
>   <groupId>com.alibaba.cloud</groupId>
>   <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
></dependency>
>```
>
>- 设置配置文件使用sentinel
>
>```yml
>feign:
>  sentinel:
>    enabled: true
>```
>
>- 声明回调类，需要使用spring bean类
>
>```java
>@Component
>@Slf4j
>public class UserApiFallbackFactory implements FallbackFactory<UserApi> {
>
>    @Override
>    public UserApi create(Throwable cause) {
>
>        return new UserApi() {
>
>            @Override
>            public String getCurrentUserName() {
>                log.error("获取当前用户名称异常", cause);
>                return "";
>            }
>
>            @Override
>            public String getAthUser(AthUser athUser) {
>                log.error("获取当前用户异常", cause);
>                return "";
>            }
>        };
>    }
>}
>```
>
>- 使用@feignClient引用回调
>
>```java
>@FeignClient(name = "auth-user", url = "${openapi.auth.url}", path = "/user", fallbackFactory = UserApiFallbackFactory.class)
>```

## 配置

>- 推荐使用配置文件进行配置，简单灵活可读性高

### 单服务配置

#### 通过@FeignClient配置

>- 通过@FeignClient指定配置，可对不同的服务提供不同的配置

>1. 编写配置类
>
>```java
>public class OpenFeignConfig {
>
>
>    /**
>     * 声明openFeign的日志级别
>     *
>     * @return {@link Logger.Level}
>     */
>    @Bean
>    public Logger.Level getOpenFeignLoggerLevel() {
>        return Logger.Level.FULL;
>    }
>
>}
>```
>
>2. 声明配置
>
>```java
>@FeignClient(name = "auth-user", url = "${openapi.auth.url}", path = "/user", fallbackFactory = UserApiFallbackFactory.class, configuration = OpenFeignConfig.class)
>
>```

#### 配置文件中配置

>```yml
>feign:
>  sentinel:
>    enabled: true
>  client:
>    config:
>      auth-user:
>        loggerLevel: NONE
>```
>
>- 其中，auth-user为@feignClient中配置的name值，用于标识针对哪个接口进行配置
>- 配置文件的优先级高于@FeignClient的配置

### 全局配置

#### bean注入配置形式

- 方式一

```java
@Configuration
public class OpenFeignConfig {


    /**
     * 声明openFeign的日志级别
     *
     * @return {@link Logger.Level}
     */
    @Bean
    public Logger.Level getOpenFeignLoggerLevel() {
        return Logger.Level.FULL;
    }

}
```

- 方式二

>- 增加配置类
>
>```java
>public class OpenFeignConfig {
>
>
>    /**
>     * 声明openFeign的日志级别
>     *
>     * @return {@link Logger.Level}
>     */
>    @Bean
>    public Logger.Level getOpenFeignLoggerLevel() {
>        return Logger.Level.FULL;
>    }
>
>}
>```
>
>- 在`@EnableFeignClients`中声明默认配置
>
>```java
>@EnableFeignClients(defaultConfiguration = OpenFeignConfig.class)
>```

#### 配置文件配置

```yml
feign:
  sentinel:
    enabled: true
  client:
    config:
      default:
        loggerLevel: NONE
```

### API设置

#### 方式一：通过注解 `@FeignClient`传入

```java
@FeignClient(name = "app-name", url = "/api")
public interface DemoApi {

   @PostMapping(consumes = {"application/json"}, produces = {"application/json;charset=UTF-8"})
   Object textGenerateText(@RequestBody Map<String, String> request);

}
```

#### 方式二：通过参数传入

```java
@FeignClient(name = "app-name")
public interface DemoApi {

   @PostMapping(consumes = {"application/json"}, produces = {"application/json;charset=UTF-8"})
   Object textGenerateText(URI uri, @RequestBody Map<String, String> request);

}
```

### 添加headers

#### 方式一：通过注解 `@HeaderMap`

> - HeaderMap为feign自带的注解，可传入一个map，定义多个header属性

```java
@FeignClient(name = "app-name")
public interface DemoApi {

   @PostMapping(consumes = {"application/json"}, produces = {"application/json;charset=UTF-8"})
   Object textGenerateText(URI uri, @HeaderMap Map<String, Object> headerMap, @RequestBody Map<String, String> request);

}
```

#### 方式二：通过注解 `@RequestHeader`

> - RequestHeader为Spring Web中的注解，可用于OpenFeign，Controller普通接口等
> - 注解仅仅只能传入一个header属性，如果要传多个，则使用多次此注解

```java
@FeignClient(name = "app-name")
public interface DemoApi {
  
    @PostMapping
    Object api(@RequestHeader(value = "auth") String auth, @RequestHeader(value = "token") String token, @RequestBody Map<String,String> data);
}
```

#### 方式三：通过项目启动时配置
