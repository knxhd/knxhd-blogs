---
title: elasticSearch查询接口
date: '2024-06-25 09:26:20'
sidebar: 'auto'
categories:
 - JAVA
 - Spring Cloud
tags:
 - OpenFeign
---

## 基本使用

### API设置

#### 方式一：通过注解`@FeignClient`传入

```java
@FeignClient(name = "app-name", url = "/api")
public interface DemoApi {

   @PostMapping(consumes = {"application/json"}, produces = {"application/json;charset=UTF-8"})
   Object textGenerateText(URI uri, @RequestBody Map<String, String> request);

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

#### 方式一：通过注解`@HeaderMap`

>- HeaderMap为feign自带的注解，可传入一个map，定义多个header属性

```java
@FeignClient(name = "app-name")
public interface DemoApi {

   @PostMapping(consumes = {"application/json"}, produces = {"application/json;charset=UTF-8"})
   Object textGenerateText(URI uri, @HeaderMap Map<String, Object> headerMap, @RequestBody Map<String, String> request);

}
```

#### 方式二：通过注解`@RequestHeader`

>- RequestHeader为Spring Web中的注解，可用于OpenFeign，Controller普通接口等
>- 注解仅仅只能传入一个header属性，如果要传多个，则使用多次此注解

```java
@FeignClient(name = "app-name")
public interface DemoApi {
    
    @PostMapping
    Object api(@RequestHeader(value = "auth") String auth, @RequestHeader(value = "token") String token, @RequestBody Map<String,String> data);
}
```

#### 方式三：通过项目启动时配置

