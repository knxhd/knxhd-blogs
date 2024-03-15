---
title: Spring
date: '2023-09-28 08:00:00'
sidebar: 'auto'
categories:
 - JAVA
tags:
 - Spring
---

## Autowried和Resource区别

> - Resource是java自带的注解，Autowried是Spring中的注解

### 共同点

- 二者都可作用于字段和setter方法上。作用于字段上，则不再需要作用于setter方法上

### 不同点

1. Autowried按照byType方式注入。如果类型不存在，则会抛出异常；如果需要实现类型可不存在，则设置值required为false；默认采用byType方式注入，如果要通过byName来注入，则需要搭配Qualifier来使用。

## Conditional注解

- Conditional中包含多个注解，用来表示bean注入的条件

  | 注解                           | 用法                  |
  | ------------------------------ | --------------------- |
  | ConditionalOnBean              | bean存在时，则注入    |
  | ConditionalOnClass             | class存在时，则注入   |
  | ConditionalOnMissingBean       | bean不存在时，则注入  |
  | ConditionalOnMissingClass      | class不存在时，则注入 |
  | ConditionalOnCloudPlatform     |                       |
  | ConditionalOnExpression        |                       |
  | ConditionalOnJava              |                       |
  | ConditionalOnJndi              |                       |
  | ConditionalOnNotWebApplication |                       |
  | ConditionalOnProperty          |                       |
  | ConditionalOnResource          |                       |
  | ConditionalOnSingleCandidate   |                       |
  | ConditionalOnWarDeployment     |                       |
  | ConditionalOnWebApplication    |                       |



