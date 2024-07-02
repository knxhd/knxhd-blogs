---
title: ES和Spring继承
date: '2023-07-28 08:00:00'
sidebar: 'auto'
categories:
 - 数据库
tags:
 - ElasticSearch
---
## spring-boot-starter方式

- 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

### findAll方法

- ES接口参数

```json
{"from":0,"size":287,"query":{"match_all":{"boost":1.0}},"version":true}
```

### 根据DQL查询

- NativeSearchQueryBuilder方式构造DQL查询，可实现更加灵活的方式查询。构造方式：

  ```java
  NativeSearchQueryBuilder nativeSearchQueryBuilder = new NativeSearchQueryBuilder();
  // 查询
  nativeSearchQueryBuilder.withQuery(BoolQueryBuilder boolQueryBuilder);
  // 排序
  nativeSearchQueryBuilder.withSort(SortBuilder sortBuilder);
  // 分页
  nativeSearchQueryBuilder.withPageable(Pageable pageable);
  ```

### BoolQueryBuilder
