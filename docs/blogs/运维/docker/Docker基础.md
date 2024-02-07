---
title: Docker安装和配置
date: '2024/1/26 22:01'
sidebar: 'auto'
categories:
 - 运维
tags:
 - Docker
---

## Docker的基本组成

### 镜像

>- Docker镜像是一个模版，通过镜像可以创建一个服务，其中的基础配置都已经制作好了。例如：mysql镜像。一个镜像可以包含多个容器，例如：一个mysql镜像，启动多个mysql 容器服务

### 容器

>- 一个容器可以简单看作一个Linux系统，实际服务是在容器中运行的。

### 仓库

>- 存放镜像的地方
>- 国外镜像地址：docker hub
>- 国内镜像：阿里云仓库地址

## 安装

>- 官方文档：https://docs.docker.com/engine/install
>- 安装分为2种，即
>  1. docker desktop(桌面版，适用于界面化系统，例如：window、mac)
>  2. docker engine(无界面化操作)

### 帮助文档

1. 卸载已存在的版本

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

2. 安装方式有三种，即`yum install`、下载repo包手动安装和通过脚本进行安装

#### 通过yum install安装方式

```shell
# 安装所需的依赖包
sudo yum install -y yum-utils
# 设置docker国内镜像
# 默认地址
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装最新版docker
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 启动Docker

```shell
# 启动coker
sudo systemctl start docker
# 查看版本
docker version
```

#### 卸载docker

```shell
# 卸载依赖
sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
# 删除资源
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

#### 阿里云镜像加速

>1. 地址：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
>2. 通过命令行即可执行加速配置

## Docker执行流程

<img src="../../../.vuepress/public/images/docker/docker执行流程.png"></img>

### 底层原理

#### Docker是如何工作的

Docker是一个client-server结构的系统，Docker的守护进程运行在主机上，通过Socket从客户端访问。DocerServer接收到client命令后，执行对应的命令。

## Docker常用命令

