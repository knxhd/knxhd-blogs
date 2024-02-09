---
title: Docker基本命令
date: '2023-10-28 08:00:00'
sidebar: 'auto'
categories:
- 扩展知识
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

### 1. 新建容器并启动

```shell
docker run [可选参数] image

# 参数说明
--name="name" 容器名称， tomcat01、tomcat02，用来区分容器
-d 后台运行
-it 使用交互方式运行，进入容器查看内容
-p 指定容器端口，例如：-p 8080:8080，前者表示主机端口，后者表示容器端口
```

### 2. 退出容器

```shell
exit # 退出并停止
control + P + q # 不停止退出
```

### 3. 列出所有运行的容器

```shell
# 查看正在运行的容器
docker ps

# 查看所有的容器
docker ps -a

# 显示最新创建的容器
docker ps -n=?

 -q #只显示容器ID
 
```

### 4. 删除容器

```shell
# 根据容器ID删除
docker rm 容器ID

# 根据筛选条件删除，示例为删除全部
docker rm -f $(docker ps -aq)
```

### 5. 启动和停止容器操作

```shell
docker start 容器ID
docker restart 容器ID
docker stop 容器ID
docker kill 容器ID
```

## 常用其他命令

### 1. 后台启动命令

```shell
# 使用-d启动
docker run -d 镜像ID
```

>- docker 容器使用后台运行，就必须要有一个前台进程，如果docker发现没有应用，则会自动停止。

### 2. 日志查看

```shell
docker logs -tf -tail n 容器ID

# -t 显示时间戳
# -f 实时显示
```

### 3. 查看进程信息

```shell
docker top 
```

### 4. 查看容器的元数据

```shell
docker inspect 容器ID
```

```shell
[root@node01 ~]# docker inspect f9170ece3612
[
    {
        "Id": "f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17",
        "Created": "2024-02-07T03:43:49.341928095Z",
        "Path": "/bin/bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 11342,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-02-07T04:13:51.428409624Z",
            "FinishedAt": "2024-02-07T03:55:25.534248656Z"
        },
        "Image": "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
        "ResolvConfPath": "/var/lib/docker/containers/f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17/hostname",
        "HostsPath": "/var/lib/docker/containers/f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17/hosts",
        "LogPath": "/var/lib/docker/containers/f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17/f9170ece3612e17a1a750371c5d570187c976b791102882cd2d708419f38bb17-json.log",
        "Name": "/dreamy_payne",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                43,
                162
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/b494009bf81800dc2f39d26fe7da513a0b5c5224c28ce99800f1e0b94f994e80-init/diff:/var/lib/docker/overlay2/c484255c9c655a30137cab58befbcb701a4a37d17f68215b4b12c99c14f1500f/diff",
                "MergedDir": "/var/lib/docker/overlay2/b494009bf81800dc2f39d26fe7da513a0b5c5224c28ce99800f1e0b94f994e80/merged",
                "UpperDir": "/var/lib/docker/overlay2/b494009bf81800dc2f39d26fe7da513a0b5c5224c28ce99800f1e0b94f994e80/diff",
                "WorkDir": "/var/lib/docker/overlay2/b494009bf81800dc2f39d26fe7da513a0b5c5224c28ce99800f1e0b94f994e80/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "f9170ece3612",
            "Domainname": "",
            "User": "",
            "AttachStdin": true,
            "AttachStdout": true,
            "AttachStderr": true,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": true,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/bash"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20210915",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "bd88db45e3b521fbe669e5eb8c1d3c64253f9586b139869f7866883b33d911ef",
            "SandboxKey": "/var/run/docker/netns/bd88db45e3b5",
            "Ports": {},
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "72ba7a17bb36642922f27bcb0c797d1a29b61432c8a4d22c52149c51dca8a17d",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "02:42:ac:11:00:02",
                    "NetworkID": "76ef8393ec7913fb0f4177a2146bc0867b02a9b7532597ab0f9d6a4d5b100ecc",
                    "EndpointID": "72ba7a17bb36642922f27bcb0c797d1a29b61432c8a4d22c52149c51dca8a17d",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DriverOpts": null,
                    "DNSNames": null
                }
            }
        }
    }
]
```

### 5. 进入当前正在运行的容器

#### 方式一：exec

```shell
docker exec -it 容器ID /bin/bash
```

#### 方式二：attach

```shell
docker attach 容器ID
```

#### 二者区别

>- exec进入后，会开启一个新的进程进入容器，即新开一个窗口，此时采用exit退出时，容器不会关闭，仍然在运行
>- 采用attach进入后，会进入当前的窗口，采用exit退出后，容器同时会关闭，即容器不再运行

### 6. 容器内拷贝文件到主机上

```shell
docker cp 容器id:容器内路径 主机外的路径
```

>- 主机拷贝到容器内，可以用挂载的形式来做

### 7. history：查看镜像是如何制作出来的

>- 语法： `docker history 镜像名:tag`或 `docker history 镜像id`

```shell
[root@node01 ~]# docker history 89baefc697d9
IMAGE          CREATED          CREATED BY                                       SIZE      COMMENT
89baefc697d9   6 minutes ago    CMD ["/bin/sh" "-c" "/bin/bash"]                 0B        buildkit.dockerfile.v0
<missing>      6 minutes ago    CMD ["/bin/sh" "-c" "echo '------------end--…   0B        buildkit.dockerfile.v0
<missing>      6 minutes ago    CMD ["/bin/sh" "-c" "echo $MYOPATHY"]            0B        buildkit.dockerfile.v0
<missing>      6 minutes ago    EXPOSE map[80/tcp:{}]                            0B        buildkit.dockerfile.v0
<missing>      6 minutes ago    RUN /bin/sh -c yum -y install net-tools # bu…   14.7MB    buildkit.dockerfile.v0
<missing>      6 minutes ago    RUN /bin/sh -c yum -y install vim # buildkit     66.3MB    buildkit.dockerfile.v0
<missing>      6 minutes ago    RUN /bin/sh -c sed -i -e "s|#baseurl=http://…   8.78kB    buildkit.dockerfile.v0
<missing>      6 minutes ago    RUN /bin/sh -c sed -i -e "s/mirrorlist=/#mir…   8.8kB     buildkit.dockerfile.v0
<missing>      6 minutes ago    RUN /bin/sh -c cd /etc/yum.repos.d/ # buildk…   0B        buildkit.dockerfile.v0
<missing>      26 minutes ago   WORKDIR /usr/local                               0B        buildkit.dockerfile.v0
<missing>      26 minutes ago   ENV MYOPATHY=/usr/local                          0B        buildkit.dockerfile.v0
<missing>      26 minutes ago   MAINTAINER tianluhua<tianlh0915@163.com>         0B        buildkit.dockerfile.v0
<missing>      2 years ago      /bin/sh -c #(nop)  CMD ["/bin/bash"]             0B        
<missing>      2 years ago      /bin/sh -c #(nop)  LABEL org.label-schema.sc…   0B        
<missing>      2 years ago      /bin/sh -c #(nop) ADD file:805cb5e15fb6e0bb0…   231MB     
```

##    例子

### 1. 安装nginx

```shell
#  搜索nginx镜像
docker pull nginx

# 新建容器并运行
docker run -it -d -p:3344:80 镜像ID /bin/bash
```

### 2. 部署ES+kibana

>- 官网docker部署方式：https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html

```shell
# 更新网络
docker network create elastic
# 下载elasticSdarch镜像
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.12.1
# 新建容器
docker run -d --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 -it elasticsearch
# 进入es中关闭安全校验
```

## 可视化

> - portainer
> - Rancher

## Docker镜像

### Docker镜像加载原理

>- UnionFS(联合文件系统)：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下
>- UnionFS是Docker镜像的基础。从整体上看，只有一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。
>- 分层的原因：
>  1. 资源共享
>  2. 有多个镜像都从相同的base镜像构建而来，那么宿主机只需在磁盘上保存一份base镜像；
>  3. 同时内存中也只需加载一份base镜像，就可以为所有容器服务了，而且镜像的每一层都可以被共享。
>- 下载的镜像是一个基础应用，在使用run命令新建一个容器后，获取一个新的层级，此时可以在新的层级中添加自己的环境和应用，例如：在基础镜像tomcat镜像中，添加jdk、mysql等。此时，镜像分为2个层，即镜像层和容器层。镜像层是一个基础层，不能修改，容器层作为自定义的层级，可以修改和提交。

### commit镜像

```shell
docker commit -m "描述信息" -a="作者" 容器id 镜像名:[tag]
```

#### 实战测试

```shell
# 1. 下载tomcat惊醒
docker pull tomcat

# 2. 新建一个容器
docker run -d -p 8080:8080 tomcat
# 3. 进入容器并将tomcat中webapps.dist中的服务复制到webapps中
# 3.1 进入容器中
docker exec -it 容器id /bin/bash

# 3.2 复制tomcat应用
cp -r webapps.dist/* webapps/

# 4. 将修改户的镜像进行提交，其中-a为可选项，添加后，查看镜像，发现多个一个自己修改后的镜像且大小更大
docker commit -m '添加默认服务' 41ce8aba836a tomcat:02

# 5. 效果：
[root@node01 ~]# docker commit -m '添加默认服务' 41ce8aba836a tomcat:02
sha256:a9e16e8464a6f59c5b960c905ece8a493dba058e63b62ad135703a0f70e49fda
[root@node01 ~]# 
[root@node01 ~]# 
[root@node01 ~]# docker images
REPOSITORY                                      TAG       IMAGE ID       CREATED         SIZE
tomcat                                          02        a9e16e8464a6   5 seconds ago   684MB
docker.elastic.co/kibana/kibana                 8.12.1    8ebc60d080bd   5 days ago      1.05GB
docker.elastic.co/elasticsearch/elasticsearch   8.12.1    fac663bf2f40   5 days ago      1.37GB
tomcat                                          latest    fb5657adc892   2 years ago     680MB
```



