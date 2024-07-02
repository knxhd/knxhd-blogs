---
title: ES数据库管理
date: '2024-05-16 08:00:00'
sidebar: 'auto'
categories:
 - 数据库
tags:
 - ElasticSearch
---
## 索引操作

### 新建索引

1. 接口：http://ip:port/indexName
2. 请求方式：PUT application/json
3. 参数示例

> - settings配置索引的分片等配置
> - mapping定义索引的字段和结构，其中，`_doc`标识Type

```json
{
    "settings": {
        "number_of_shards": 3,
        "number_of_replicas": 2
    },
    "mapping": {
        "_doc": {
            "properties": {
               "team_name": {
                   "type": "keyword"
               },
               "team_news_content": {
                   "type": "text"
               }
            }
        }
    }
}
```

## mapping

### 定义参数

#### enabled

> - 默认为true，表示是否可用，设置为false，则字段即不存储，也无法作为字段查询。是在查询结果_source中可以显示。

#### index

> - 默认为true，表示字段是否可作为查询字段。如果为false，则不能通过字段进行查询，但是在查询结果_source中可以显示。

#### store

> - 默认为false, 表示自动字段是否单独开启一个磁盘进行存储，而不是直接放到_source中

### 数据类型

#### 文本类型

1. keyword

> - keyword检索时，不会进行分词，适用于精确匹配。例如：名称，唯一描述等

2. text

> - text检索时，会根据文本进行分词，分词后进行匹配。适用于长文本，例如：新闻内容等

#### 数字类型

> - long、integer、short、byte、double、float、half_float、scaled_float

## 数据管理

### 删除接口

> - 接口地址：/_delete_by_query
> - 请求方式：POST contentType: application/json

```js
{
    "query": {
        "term": {
            "_id": "97G_n48BJkwT89JoZ4ii"
        }
    }
}
```
