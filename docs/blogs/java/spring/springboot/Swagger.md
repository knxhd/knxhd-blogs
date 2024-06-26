---
title: SpringBoot整合Swagger3
date: '2024/1/18 21:15'
sidebar: 'auto'
categories:
 - Spring
tags:
 - Swagger
---



>- 访问地址默认为：`/swagger-ui/index.html`

## 引入依赖

```java
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>3.0.0</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-boot-starter</artifactId>
            <version>3.0.0</version>
        </dependency>
```

## 添加配置类

### swagger配置

```
@Configuration
public class SwaggerConfig {
    @Bean
    public Docket docket() {
        // 采用stream流的方式将相关的配置一一写入，该配置为拦截所有路径下的所有api请求
        return new Docket(DocumentationType.OAS_30)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }
 
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().build();
    }
}
 
```

>- 注意：如果在项目中有拦截登录相关的东西，则需要将swagger相关接口加入白名单，即
>  1. /swagger-ui/**
>  2. /swagger-resources/**
>  3. /v3/**

### 配置文件配置

SpringBoot2.6.x之后的版本的默认匹配策略为path-pattern-matcher，需要手动修改path-pattern-matcher规则，否则会报错

```yml
# 修改swagger的路径匹配配置，使其兼容新版的SpringBoot
spring:
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher
```

