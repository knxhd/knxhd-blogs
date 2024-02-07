---
title: Docker基本命令
date: '2023-10-28 08:00:00'
sidebar: 'auto'
categories:
 - 运维
tags:
 - Docker
---

## 帮助命令

```shell
docker version # 显示版本信息
docker info # docker的系统信息，包括容器、镜像的信息
docker 命令 --help # 帮助信息
```

- 帮助文档地址：https://docs.docker.com/reference/

## 镜像命令

### 1. docker images 显示镜像

>- 查看主机上的所有的镜像

```shell
可选项
-a # 显示所有的镜像
-q # 只显示镜像ID
```

### 2. docker search 搜索镜像

````shell
[root@node01 ~]# docker search mysql
NAME                            DESCRIPTION                                      STARS     OFFICIAL 
mysql                           MySQL is a widely used, open-source relation…   14824     [OK]
mariadb                         MariaDB Server is a high performing open sou…   5662      [OK]
percona                         Percona Server is a fork of the MySQL relati…   624       [OK]
````

#### 可选项

```shell
-f # 搜索镜像,可根据字段进行筛选
```

```shell
[root@node01 ~]# docker search mysql --filter=STARS=3000
NAME      DESCRIPTION                                      STARS     OFFICIAL
mysql     MySQL is a widely used, open-source relation…   14824     [OK]
mariadb   MariaDB Server is a high performing open sou…   5662      [OK]
```

### 3. docker pull 下载镜像

```shell
# tag可不写，不写，则默认为最新版本的镜像
docker pull 镜像名[:tag]
```

- 例如：mysql

```shell
[root@node01 ~]# docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
72a69066d2fe: Pull complete  # 分层下载
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
688ba7d5c01a: Pull complete 
00e060b6d11d: Pull complete 
1c04857f594f: Pull complete 
4d7cfa90e6ea: Pull complete 
e0431212d27d: Pull complete 
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709 # 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest # 真实地址
```

>- 分层下载的作用，例如：mysql 5.7镜像和mysql 8.0镜像中，存在相同的部分，则下载5.7时，不需要再次下载全部的依赖，而只需下载5.7中缺少的即可

```shell
[root@node01 ~]# docker pull mysql:5.7
5.7: Pulling from library/mysql
72a69066d2fe: Already exists 
93619dbc5b36: Already exists 
99da31dd6142: Already exists 
626033c43d70: Already exists 
37d5d7efb64e: Already exists 
ac563158d721: Already exists 
d2ba16033dad: Already exists 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7
```

### 4. 删除镜像

1. 根据ID删除，也支持删除多个ID采用空格隔开即可

```shell
[root@node01 ~]# docker rmi -f d2c94e258dcb
Untagged: hello-world:latest
Untagged: hello-world@sha256:4bd78111b6914a99dbc560e6a20eab57ff6655aea4a80c50b0c5491968cbc2e6
Deleted: sha256:d2c94e258dcb3c5ac2798d32e1249e42ef01cba4841c2234249495f87264ac5a
```

2. 根据特定的参数批量删除

>- 使用`$`传入特定的参数来删除，例如：docker images -aq 表示获取全部容器的ID，此时删除的为全部的容器

```shell
[root@node01 ~]# docker rmi -f $(docker images -aq)
Untagged: mysql:5.7
Untagged: mysql@sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Deleted: sha256:c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab302a76
Deleted: sha256:6567396b065ee734fb2dbb80c8923324a778426dfd01969f091f1ab2d52c7989
Deleted: sha256:0910f12649d514b471f1583a16f672ab67e3d29d9833a15dc2df50dd5536e40f
Deleted: sha256:6682af2fb40555c448b84711c7302d0f86fc716bbe9c7dc7dbd739ef9d757150
Deleted: sha256:5c062c3ac20f576d24454e74781511a5f96739f289edaadf2de934d06e910b92
Untagged: mysql:latest
Untagged: mysql@sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709
Deleted: sha256:3218b38490cec8d31976a40b92e09d61377359eab878db49f025e5d464367f3b
Deleted: sha256:aa81ca46575069829fe1b3c654d9e8feb43b4373932159fe2cad1ac13524a2f5
Deleted: sha256:0558823b9fbe967ea6d7174999be3cc9250b3423036370dc1a6888168cbd224d
Deleted: sha256:a46013db1d31231a0e1bac7eeda5ad4786dea0b1773927b45f92ea352a6d7ff9
Deleted: sha256:af161a47bb22852e9e3caf39f1dcd590b64bb8fae54315f9c2e7dc35b025e4e3
Deleted: sha256:feff1495e6982a7e91edc59b96ea74fd80e03674d92c7ec8a502b417268822ff
Deleted: sha256:8805862fcb6ef9deb32d4218e9e6377f35fb351a8be7abafdf1da358b2b287ba
Deleted: sha256:872d2f24c4c64a6795e86958fde075a273c35c82815f0a5025cce41edfef50c7
Deleted: sha256:6fdb3143b79e1be7181d32748dd9d4a845056dfe16ee4c827410e0edef5ad3da
Deleted: sha256:b0527c827c82a8f8f37f706fcb86c420819bb7d707a8de7b664b9ca491c96838
Deleted: sha256:75147f61f29796d6528486d8b1f9fb5d122709ea35620f8ffcea0e0ad2ab0cd0
Deleted: sha256:2938c71ddf01643685879bf182b626f0a53b1356138ef73c40496182e84548aa
Deleted: sha256:ad6b69b549193f81b039a1d478bc896f6e460c77c1849a4374ab95f9a3d2cea2
```

## 容器命令

>- 有镜像才能够创建容器

### 新建容器并启动

```shell
docker run [可选参数] image

# 参数说明
--name="name" 容器名称， tomcat01、tomcat02，用来区分容器
-d 后台运行
-it 使用交互方式运行，进入容器查看内容
-p 指定容器端口，例如：-p 8080:8080，前者表示主机端口，后者表示容器端口
```

### 退出容器

```shell
exit # 退出并停止
control + P + q # 不停止退出
```

### 列出所有运行的容器

```shell
# 查看正在运行的容器
docker ps

# 查看所有的容器
docker ps -a

# 显示最新创建的容器
docker ps -n=?

 -q #只显示容器ID
 
```

### 删除容器

```shell
# 根据容器ID删除
docker rm 容器ID

# 根据筛选条件删除，示例为删除全部
docker rm -f $(docker ps -aq)
```

### 启动和停止容器操作

```shell
docker start 容器ID
docker restart 容器ID
docker stop 容器ID
docker kill 容器ID
```

## 常用其他命令

### 后台启动命令

```shell
# 使用-d启动
docker run -d 容器名称
```

>- docker 容器使用后台运行，就必须要有一个前台进程，如果docker发现没有应用，则会自动停止。

## Docker Compose语法

