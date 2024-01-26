---
title: Oauth2.0实战和Spring Security整合
date: '2024/1/18 21:15'
sidebar: 'auto'
categories:
 - JAVA
tags:
 - Oauth2.0
---

## 1. 什么是OAuth2.0?:question:

>- OAuth2.0是一个开放标准，允许用户授权第三方应用程序访问他们存储在另外一个服务器上的信息，而不再通过用户名和密码进行登录。例如：微信授权中心，登录百度等账号时，可以通过微信授权登录，此时，微信可以访问到我们在百度上的一些信息，校验是否登录成功。
>- OAuth2.0有四种不同的授权方式
>  1. 授权码模式
>  2. 简化模式
>  3. 密码模式
>  4. 客户端模式

### 1.1 OAuth2.0的角色介绍:star:

| 角色       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 客户端     | 本身不存储资源，可以是网站或APP                              |
| 资源拥有者 | 默认为客户                                                   |
| 授权服务器 | 用户服务提供者给资源拥有者的身份进行校验，对访问的资源进行授权等。 |
| 资源服务器 | 存储资源的服务器， 比如：微信存储的用户信息等。              |

>- 以登录知乎为例
>  1. 客户端：即知乎网址
>  2. 资源拥有者：用户本身
>  3. 授权服务器：微信授权中心
>  4. 资源服务器：微信的资源服务器，存储着用户的头像等。
>- 用户通过网址，访问知乎网站，可以通过微信授权登录，微信授权中心校验用户身份后，会返回对应的token，此时访问微信资源服务器时，通过token标识用户已经登录，可以在知乎上，看到自己的微信头像。



### 1️⃣ 授权码模式

<img src="../../.vuepress/public/images/授权码模式.png" alt="VuePress Logo">

>1. 授权码模式是最安全的一种类型。缺点：过于复杂
>1. 资源拥有者：用户
>1. 客户端：浏览器/手机APP
>1. 第三方应用：想要登录的地址
>1. 授权中心和资源中心(二者可以是同一个服务器，也可以是不同的服务器)

### 2️⃣ 简化模式
<img src="../../.vuepress/public/images/简化模式.png" alt="VuePress Logo">

>1. 和授权码模式相比，缺少了根据token申请令牌和返回令牌的过程。

### 3️⃣ 密码模式

>- 通过密码登录的形式，i将用户名/密码给第三方。例如，将微信的账号密码给知乎，此时通过用户买那个和密码登录知乎后，知乎可以根据用户名和密码获取微信的资源，即头像、昵称等信息。

<img src="../../.vuepress/public/images/密码模式.png" alt="VuePress Logo">

### 4️⃣ 客户端模式

>- 第三方直接申请令牌，不需要用户名/密码登录即可

## 2. 二维码

>- Hutool是一个java工具包类，对文件、流、加解密等组成的包，同时也可以生成二维码。

### 纠错级别

>- L、M、Q、H级别由低到高
>- 级别低的像素块更大，可以远距离进行识别，但是遮挡会造成无法识别
>- 高级别的则相反，像素块较小，允许遮挡一定范围，但是像素块更密集。

## JWT令牌

>- JWT就是一个加密后的字符串，用于权限校验时的校验。
>- JWT(Json Web Token)是一种为了在网络传输过程中的一种执行标准。
>- JWT通常是一个字符串，用来进行身份认证的凭证，分为三部分，头部、荷载和签证。

## Spring Security快速开始

### 引入依赖

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```



## Spring Securty执行流程

### 1. 自动配置

- 在SpringBoot启动后，会自动装配Spring Security中的参数，通过`UserDetailsServiceAutoConfiguration`可以做自动配置，深入到这个类的源码，可以看到自动配置的参数，同时，我们可以把默认的用户名和密码配置到yml文件中。

- Spring Security校验的调用链为如下：

  ```java
   WebAsyncManagerIntegrationFilter
    SecurityContextPersistenceFilter
    HeaderWriterFilter
    CsrfFilter
    LogoutFilter
    UsernamePasswordAuthenticationFilter
    DefaultLoginPageGeneratingFilter
    DefaultLogoutPageGeneratingFilter
    BasicAuthenticationFilter
    RequestCacheAwareFilter
    SecurityContextHolderAwareRequestFilter
    AnonymousAuthenticationFilter
    SessionManagementFilter
    ExceptionTranslationFilter
    FilterSecurityInterceptor
  ]
  ************************************************************
  ```

  

### 1. 系统启动时，Spring Security做了什么操作

>1. 在SpringBoot初始化时，完成Spring Security的配置文件的加载操作
>2. `DelegatingFilterProxy`在系统启动时，会完成初始化操作
>3. `DelegatingFilterProxy`获取代理的真实对象

### 2. 第一次请求时，Spring Security的处理流程



