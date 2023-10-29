---
title: Spark基础知识
date: '2023-10-27 08:00:00'
sidebar: 'auto'
sidebarDepth: 5
categories:
 - 大数据
tags:
 - Spark
---

>Apache Spark是一个统一的计算引擎，设计用于大型分布式数据处理、数据中心或云计算。
>
>Spark基于内存进行迭代计算，使它比Hadoop MapReduce要快得多。而且它包含了用于机器学习的多种API库（MLlib）、用于交互式查询的SQL（Spark SQL）、用于与实时数据交互的流处理（结构化流）以及图计算（GraphX）这些功能模块。

## Spark核心模块

<img src="../../../.vuepress/public/images/Spark核心模块.png" alt="VuePress Logo">

- Spark Core

>提供了Spark核心的基础和核心的功能

- Spark SQL

>提供了一些操作结构化数据库的工具，例如：Hive等

- Spark Streaming

>提供了一些流操作的工具

- Spark MLLib

>提供了一些机器学习相关的工具算法，可以做一些简单的机器学习的工作

- Spark GrophX

>提供了一些图形计算的一些工具和算法

## Spark环境搭建

>- Spark是由scala语言开发，首先需要安装scala，并掌握基础的scala较好
>- [Scala学习路线](../scala/Scala.md)
>- Scala和Spark版本对应(可查看Spark官网进行查看版本)：https://mvnrepository.com/artifact/org.apache.spark/spark-core

>使用Docker搭建集群模式进行测试 (一主二从)
>
>```shell
>docker pull bitnami/spark:3
>```

-  在自定义工作目录创建，docker-compose.yml

```yaml
version: '2'

services:
  spark:
    image: docker.io/bitnami/spark:3
    hostname: master
    environment:
      - SPARK_MODE=master
      - SPARK_RPC_AUTHENTICATION_ENABLED=no
      - SPARK_RPC_ENCRYPTION_ENABLED=no
      - SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no
      - SPARK_SSL_ENABLED=no
    volumes:
      - ~/docker/spark/share:/opt/share
    ports:
      - '8180:8080'
      - '4040:4040'
  spark-worker-1:
    image: docker.io/bitnami/spark:3
    hostname: worker1
    environment:
      - SPARK_MODE=worker
      - SPARK_MASTER_URL=spark://master:7077
      - SPARK_WORKER_MEMORY=1G
      - SPARK_WORKER_CORES=1
      - SPARK_RPC_AUTHENTICATION_ENABLED=no
      - SPARK_RPC_ENCRYPTION_ENABLED=no
      - SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no
      - SPARK_SSL_ENABLED=no
    volumes:
      - ~/docker/spark/share:/opt/share
    ports:
      - '8081:8081'
  spark-worker-2:
    image: docker.io/bitnami/spark:3
    hostname: worker2
    environment:
      - SPARK_MODE=worker
      - SPARK_MASTER_URL=spark://master:7077
      - SPARK_WORKER_MEMORY=1G
      - SPARK_WORKER_CORES=1
      - SPARK_RPC_AUTHENTICATION_ENABLED=no
      - SPARK_RPC_ENCRYPTION_ENABLED=no
      - SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no
      - SPARK_SSL_ENABLED=no
    volumes:
      - ~/docker/spark/share:/opt/share
    ports:
      - '8082:8081'
```

- 在工作目录中执行docker命令启动集群，显示一下代码，则执行成功

```shell
docker-compose up -d 
```

```shell
[+] Building 0.0s (0/0)     docker:desktop-linux                                                          
[+] Running 4/4
 ✔ Network spark_default             Created                                                           
 ✔ Container spark-spark-1           Started  0.2s                                                      
 ✔ Container spark-spark-worker-1-1  Started  0.2s                                                           
 ✔ Container spark-spark-worker-2-1  Started  0.2s 
```
>- 通过命令 http://localhost:8080/ 可查看集群的状态

## Spark基础配置

### Spark端口

| 端口  | 作用                                                        | 修改方式                                                     |
| ----- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| 8080  | Master节点的web端口                                         | 配置方式在spark-env.sh加一行<br/>export SPARK_MASTER_WEBUI_PORT=8080 |
| 8081  | work节点的web端口是8081                                     | 配置方式在spark-env.sh加一行<br/>export SPARK_WORKER_WEBUI_PORT=8081 |
| 7077  | Master通信端口是7077                                        | 配置方式在spark-env.sh加一行<br/>export SPARK_MASTER_PORT=7077 |
| 18080 | Spark历史服务器端口是18080                                  | 配置方式在spark-defaults.conf加一行<br/>spark.history.ui.port    18080 |
| 6066  | Spark外部服务端口是6066，这个端口有被黑客攻击的漏洞建议关闭 | 关闭方式在spark-defaults.conf加一行<br/>spark.master.rest.enabled         false<br/>修改方式:<br/>spark.master.rest.port               16066 |



## 快速上手

### 连接Spark

>连接Spark后，可使用Spark提供的一系列接口来做数据分析和计算

#### Spark依赖

```xml
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_2.13</artifactId>
    <version>3.5.0</version>
 </dependency>
```

#### SparkContext类

>SparkContext表示Spark示例，通过创建SparkContext，相当于创建了一个连接Spark的连接，通过这个实例可实现调用Spark提供的数据计算和分析的接口，完成数据分析工作

