---
title: Docker
date: '2023-10-28 08:00:00'
sidebar: 'auto'
categories:
 - 运维
tags:
 - Docker
---

## Docker基本命令

- 搜索镜像

  ```shell
  docker search 镜像名
  ```

- 查看正在运行的实例

  ```shell
  docker ps
  ```

  ```shell
  CONTAINER ID   IMAGE             COMMAND                   CREATED          STATUS         PORTS                                            NAMES
  32882abb9a86   bitnami/spark:3   "/opt/bitnami/script…"   3 minutes ago    Up 3 minutes   0.0.0.0:4040->4040/tcp, 0.0.0.0:8180->8080/tcp   spark-spark-1
  6a6e365ff456   bitnami/spark:3   "/opt/bitnami/script…"   24 minutes ago   Up 3 minutes   0.0.0.0:8082->8081/tcp                           spark-spark-worker-2-1
  678c873d05bd   bitnami/spark:3   "/opt/bitnami/script…"   24 minutes ago   Up 3 minutes   0.0.0.0:8081->8081/tcp                           spark-spark-worker-1-1
  
  ```

- 进入容器内部

  ```shell
  docker exec -it container_id bash
  ```


## Docker Compose语法

