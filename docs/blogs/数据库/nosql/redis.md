---
title: elasticSearch查询接口
date: '2024-05-17 15:51:16'
sidebar: 'auto'
categories:
 - 数据库
tags:
 - redis
---

## 镜像安装

>- 下载镜像：`docker pull redis`
>
>- 外部映射文件夹
>
>  - `mkdir -p /opt/redis/conf `
>  - `mkdir -p /opt/redis/data`
>  - `touch /opt/redis/conf/redis.conf`
>
>- 运行镜像
>
>  ```she
>  # Docker 创建 Redis 容器命令
>  docker run \
>  --restart=always \
>  --log-opt max-size=100m \
>  --log-opt max-file=2 \
>  -p 6379:6379 \
>  --name redis \
>  -v /opt/redis/conf/redis.conf:/etc/redis/redis.conf  \
>  -v /opt/redis/data:/data \
>  -d 镜像名 redis-server /etc/redis/redis.conf \
>  --appendonly yes \
>  --requirepass 123456 
>  ```
>
>  

## Springboot整合

