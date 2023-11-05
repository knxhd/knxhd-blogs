---
title: Spark基础知识
date: '2023-11-05 16:00:00'
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

## 运行模式

>spark有四种不同的运行模式，分别为：local(本地模式)、Standalone、YARN、Mesos

### local

>- lcoa模式，就是在计算过程中不会使用集群中的计算资源，一台机器单打独斗，故一般用于教学，调试，演示等，
>- 即：只需要一台机器，在服务器上部署Spark后，将任务提交到Spark上即可
>

### Standalone

> Standalone模式，即采用Spark自带的集群模式运行，也就是独立的部署模式，Spark的独立部署模式也就是主从模式。即至少有两个节点，即master和worker节点

#### 部署方式

1. 三台服务器，服务器信息如下：

| 服务器域名             | 环境     |
| ---------------------- | -------- |
| node01，最为master节点 | jdk8环境 |
| node02，作为worker节点 | jdk8环境 |
| node03，作为worker节点 | jdk8环境 |

2. 三台服务器设置spark，也可只设置master，通过xsync或scp将spark配置后的文件夹分发到另外2台服务器

>1. 修改slaves,，添加服务器节点，配置文件位于 `conf/slaves.template`，slaves.template为示例，需要将`.template`去掉，其中，node01,node02,node03为节点服务器计算机名,即域名
>
>```
>node01
>node02
>node03
>```

>2. 修改`spark-env.sh`文件，添加`JAVA_HOME`以及集群对应的master节点名，同理，对应的文件名为：`conf/spark-env.sh.template`
>
>```shell
>export JAVA_HMOE=/usr/local/softwares/jdk1.8.0_202
>SPARK_MASTER_HOST=node01
>SPARK_MASTER_PORT=7077
>```

>3. 由于使用`start-all.sh`命令启动所有的服务器节点，原理是通过此脚本，会运行每个节点上的启动命令，因此，需要设置免密执行shell的操作，否则，每次启动都需要输入密码。start-all.sh源码如下：
>
>   ```shell
>   #!/usr/bin/env bash
>   
>   #
>   # Licensed to the Apache Software Foundation (ASF) under one or more
>   # contributor license agreements.  See the NOTICE file distributed with
>   # this work for additional information regarding copyright ownership.
>   # The ASF licenses this file to You under the Apache License, Version 2.0
>   # (the "License"); you may not use this file except in compliance with
>   # the License.  You may obtain a copy of the License at
>   #
>   #    http://www.apache.org/licenses/LICENSE-2.0
>   #
>   # Unless required by applicable law or agreed to in writing, software
>   # distributed under the License is distributed on an "AS IS" BASIS,
>   # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
>   # See the License for the specific language governing permissions and
>   # limitations under the License.
>   #
>   
>   # Start all spark daemons.
>   # Starts the master on this node.
>   # Starts a worker on each node specified in conf/slaves
>   
>   if [ -z "${SPARK_HOME}" ]; then
>     export SPARK_HOME="$(cd "`dirname "$0"`"/..; pwd)"
>   fi
>   
>   # Load the Spark configuration
>   . "${SPARK_HOME}/sbin/spark-config.sh"
>   
>   # Start Master
>   "${SPARK_HOME}/sbin"/start-master.sh
>   
>   # Start Workers
>   "${SPARK_HOME}/sbin"/start-slaves.sh
>   ```

>4. 启动集群，使用`sbin/start-all.sh`命令启动集群
>5. 设置[ssh免密登录](../../运维/Linux.md#SSH免密登录)，不然执行ssh时，需要使用密码登录
>
>5. 需要开发一下端口对应的防火墙，避免出现端口访问不到的问题。需要开放的端口。[防火墙设置](../../运维/Linux.md#防火墙)
>   - 8080(master的web UI监控端口)
>   - 8081(worker的Web UI监控端口)
>   - 7077(集群的节点通讯端口)
>6. 访问master节点的web界面，查看集群状态。即：`http:xxxx:8080`

>7. 提交任务到master上，则可以使用集群来做对应的计算

## 基础概念

### HDFS

>- HDFS即 Hadoop Distributed File System，即Hadoop的分布式文件系统

### driver和executor进程

>- dirver: 负责任务调用，类似于 ApplicationMaster，负责将用户写的程序转换为一个job。
>- executor：负责执行spark中的具体任务
>- 在Standalone和yarn模式中都会存在

### master和worker节点

>- 搭建spark集群时，会有2种不同的节点，即master和worker节点，master节点负责向worker节点提交任务和管理worker节点，worker节点和master节点进行通讯，并管理excutor进程
>- master和worker只有standalone模式才会有

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

