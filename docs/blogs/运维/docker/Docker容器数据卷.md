---
title: Docker容器数据卷
date: '2024/2/8 19:11'
sidebar: 'auto'
categories:
 - 扩展知识
tags:
- Docker
---

## 容器数据卷

>- 官方文档：https://docs.docker.com/storage/volumes/

### 什么是容器数据卷:question:

>- Docker是一个镜像，我们的数据存在容器中，如果容器删除后，则数据也会随之删除
>- 因此，在使用Docker时，有些数据需要持久化到磁盘上，例如：Mysql数据库等
>- 即卷技术其实就是目录的挂载，将容器内部的目录挂载到磁盘的路径

## 数据卷挂载

>- 数据卷挂载方式有2种，分别为 `-v`和 `--mount`。二者的区别为：`-v`命令比较简约，默认仅仅为 volume类型的挂载，而`--mount`则可以根据字段做进一步的自定义
>- `-v`语法：`-v 主机路径/挂载名称:容器内路径:[容器内路径权限]`
>  1. `主机路径/挂载名称`可以省略，省略后，则表示匿名挂载，挂载后的主机路径为`/var/lib/docker/volumes/随机字符串/_data`；`挂载名称`: 表示具名挂载方式，名称不能以`/`开头，否则为，指定路径挂载。此时默认路径为：`/var/lib/docker/volumes/挂载名称/_data`；`主机路径`：表示指定路径挂载，采用绝对路径方式
>  2. 容器内路径权限可选，值为`ro`(read only，仅仅可读，此时只能通过主机来写入数据，容器内不可写入)，`rw`  即可读又可写
>- --mount
>  1. mount包含多个字段，分别为type、source(又叫src)、destination(又叫dst、target)、readonly、volume-opt
>     - type：枚举值为：bind、volume、tmpfs
>     - readonly为可选
>     - volume-opt可选
>  2. 语法：`--mount type=typeName,source=主机路径,target=容器内路径,[readonly]`

### 使用`-v`命令进行挂载

```shell
docker run -it -v 外部目录:容器内目录 镜像名称 /bin/bash
```

#### 测试使用`-v`挂载方式

```shell
# 新建容器并挂载目录
[root@node01 test]# docker run -d -p 8080:8080 -v /usr/local/test:/home/test tomcat:02
63e666fa0a5017a4f84e3eeeb7360fc2a51b38eb63f26f03fe25e4c9b3b6927f
```

>- 在容器内部添加新文件后，则磁盘中的目录会自动同步文件和文件夹
>- 在磁盘中添加文件后，容器内部的目录也会自动同步文件和文件夹
>- <font color="red">即使容器停止后，只要容器存在，则在容器外增加文件，容器内也会增加</font>

#### 实战Mysql挂载

```shell
# 新建容器
docker run -d --name mysql -p 3306:3306 \
-v /home/mysql/config:/etc/mysql/conf.d \
-v /home/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=Root@123  mysql:5.7

# 连接数据库后，新建数据库，在外部目录中查看同步的数据

[root@node01 data]# ll
总用量 188484
-rw-r-----. 1 polkitd input       56 2月   7 17:43 auto.cnf
-rw-------. 1 polkitd input     1676 2月   7 17:43 ca-key.pem
-rw-r--r--. 1 polkitd input     1112 2月   7 17:43 ca.pem
-rw-r--r--. 1 polkitd input     1112 2月   7 17:43 client-cert.pem
-rw-------. 1 polkitd input     1680 2月   7 17:43 client-key.pem
-rw-r-----. 1 polkitd input     1352 2月   7 17:44 ib_buffer_pool
-rw-r-----. 1 polkitd input 79691776 2月   7 17:44 ibdata1
-rw-r-----. 1 polkitd input 50331648 2月   7 17:44 ib_logfile0
-rw-r-----. 1 polkitd input 50331648 2月   7 17:43 ib_logfile1
-rw-r-----. 1 polkitd input 12582912 2月   7 17:48 ibtmp1
drwxr-x---. 2 polkitd input     4096 2月   7 17:43 mysql
drwxr-x---. 2 polkitd input     8192 2月   7 17:43 performance_schema
-rw-------. 1 polkitd input     1676 2月   7 17:43 private_key.pem
-rw-r--r--. 1 polkitd input      452 2月   7 17:43 public_key.pem
-rw-r--r--. 1 polkitd input     1112 2月   7 17:43 server-cert.pem
-rw-------. 1 polkitd input     1680 2月   7 17:43 server-key.pem
drwxr-x---. 2 polkitd input     8192 2月   7 17:43 sys
drwxr-x---. 2 polkitd input       20 2月   7 17:48 test
[root@node01 data]# pwd
/home/mysql/data
```

>- mysql需要设置默认的root密码，使用-e来设置基本的配置

### 使用`--mount`挂载方式

```shell
docker run -d \
  -it \
  --name tmptest \
  --mount type=tmpfs,destination=/app \
  nginx:latest
```

## 具名挂载和匿名挂载

>- 挂载方式有三种，即具名挂载、匿名挂载和指定路径挂载
>  1. 具名挂载：仅仅指定容器内目录且挂载名自定义，方式：`-v 挂载名:容器内目录`，默认容器外目录为：`/var/lib/docker/volumes/挂载名/_data`，挂载名不以`/`开头
>  2. 匿名挂载：仅仅指定容器内目录，挂载名使用默认随机生成，方式`-v 容器内目录`，默认容器外目录为：`/var/lib/docker/volumes/随机位置/_data`
>  3. 指定目录挂载：使用自定义路径，方式：`-v 容器外目录:容器内目录`，容器外目录以`/`开头

### 具名挂载

```shell
# 具名挂载
docker run -d --name mysql01 -p 3306:3306 -v mysqlconfig:/etc/mysql/conf.d -v mysql01data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Root@123  mysql:5.7

# 查看挂载的所有内容
[root@node01 data]# docker volume ls
DRIVER    VOLUME NAME
local     001bf67a51726b0a7f9a62abf8f114e38d8f085a99f0c5a66daf36ce87bb70c6 # 匿名挂载
local     2bea99baeb10b34c1cc649651d677f78b837d4adceb1d152670142a6412ced0b
local     db6af1dbd3311fbde30dc196ff44c7d94b36eccdf963d0185f88921235199be2
local     e564530b647a20e9dec31a109ba7d9c7b35a97836135b5b9cd40220ccaddc05a
local     mysql01data # 具名挂载结果
local     mysqlconfig
```

### 匿名挂载

```shell
# 具名挂载
docker run -d --name mysql01 -p 3306:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=Root@123  mysql:5.7

# 查看挂载的所有内容
[root@node01 data]# docker volume ls
DRIVER    VOLUME NAME
local     001bf67a51726b0a7f9a62abf8f114e38d8f085a99f0c5a66daf36ce87bb70c6 # 匿名挂载
local     2bea99baeb10b34c1cc649651d677f78b837d4adceb1d152670142a6412ced0b
local     db6af1dbd3311fbde30dc196ff44c7d94b36eccdf963d0185f88921235199be2
local     e564530b647a20e9dec31a109ba7d9c7b35a97836135b5b9cd40220ccaddc05a
local     mysql01data # 具名挂载结果
local     mysqlconfig

# 通过inspect查看挂载的具体内容
[root@node01 data]# docker inspect dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd
[
    {
        "Id": "dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd",
        "Created": "2024-02-07T10:11:45.658551764Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "mysqld"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 29059,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-02-07T10:11:45.924870479Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab302a76",
        "ResolvConfPath": "/var/lib/docker/containers/dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd/hostname",
        "HostsPath": "/var/lib/docker/containers/dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd/hosts",
        "LogPath": "/var/lib/docker/containers/dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd/dd0385a041497e8f9d3d105d38f6e7aa0b3dd8839c04a8b9824851a2ef7c7ddd-json.log",
        "Name": "/mysql02",
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
            "PortBindings": {
                "3306/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "3306"
                    }
                ]
            },
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
                "LowerDir": "/var/lib/docker/overlay2/4d0cd10ab71bf8f8f1342ba97aae3bde5749b1a132abf27750928ac0a0cf904d-init/diff:/var/lib/docker/overlay2/5b74b0ba5d9b8717ec9659fe6a50fbe900d3da9f112d5a8e9908ac117ea3dac0/diff:/var/lib/docker/overlay2/90a93917b2566c7267f2cf62e613b05f613f4b5c7577aa24ce57d2b236891e46/diff:/var/lib/docker/overlay2/b7abb748fe1a5e7bfc2cad7f770f14c26459c108e2e890e9ae804ba03fedab3c/diff:/var/lib/docker/overlay2/3af017230f1857077367ee631bae8b9fae43eb14e572bcf5525104b3d82aba7d/diff:/var/lib/docker/overlay2/e13279daa23f935d4e17b6b58b509047490551ac79967c688c5cea0777df2431/diff:/var/lib/docker/overlay2/4065e5b9780ad262018bb97b83fb85c54d486bc046ebcce38d0826a3a15354b3/diff:/var/lib/docker/overlay2/7adab0514bfedd991a754660e55ebcb2bd1b28f3823aad1ca81c69b398c456e4/diff:/var/lib/docker/overlay2/7816798af94533798661c80fcdb08373eef57e2617b89966282b093f61d7845d/diff:/var/lib/docker/overlay2/40d5e2a3c68abf97a78ab57f0703da7463b4ee6bc410631d2463b92620c13aac/diff:/var/lib/docker/overlay2/9aaeb6c35f5f682567be29e72d12398e1af29ff6664078cf5e1d849b710ee70a/diff:/var/lib/docker/overlay2/025926b5c5781d5ff8a2f0c10d1f1b085432b4c9efdea9ae17fee4f0992c7174/diff",
                "MergedDir": "/var/lib/docker/overlay2/4d0cd10ab71bf8f8f1342ba97aae3bde5749b1a132abf27750928ac0a0cf904d/merged",
                "UpperDir": "/var/lib/docker/overlay2/4d0cd10ab71bf8f8f1342ba97aae3bde5749b1a132abf27750928ac0a0cf904d/diff",
                "WorkDir": "/var/lib/docker/overlay2/4d0cd10ab71bf8f8f1342ba97aae3bde5749b1a132abf27750928ac0a0cf904d/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "volume",
                "Name": "4ad6b2efef8886a80014b0927498ef1b8015196fb51a32fd1fcdfbc45fc2808c",
                "Source": "/var/lib/docker/volumes/4ad6b2efef8886a80014b0927498ef1b8015196fb51a32fd1fcdfbc45fc2808c/_data",
                "Destination": "/etc/mysql/conf.d",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            },
            {
                "Type": "volume",
                "Name": "9349b54f10bdced0996830c1b14f6ae5930eb7c442a0cd911ca2ecf53bb6408c",
                "Source": "/var/lib/docker/volumes/9349b54f10bdced0996830c1b14f6ae5930eb7c442a0cd911ca2ecf53bb6408c/_data",
                "Destination": "/var/lib/mysql",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "dd0385a04149",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "3306/tcp": {},
                "33060/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "MYSQL_ROOT_PASSWORD=Root@123",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "GOSU_VERSION=1.12",
                "MYSQL_MAJOR=5.7",
                "MYSQL_VERSION=5.7.36-1debian10"
            ],
            "Cmd": [
                "mysqld"
            ],
            "Image": "mysql:5.7",
            "Volumes": {
                "/etc/mysql/conf.d": {},
                "/var/lib/mysql": {}
            },
            "WorkingDir": "",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {}
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "9102ea2a2f1f74568deb746c9328a0b703b2d1ff4d4ab0d5f4cf756f72a87044",
            "SandboxKey": "/var/run/docker/netns/9102ea2a2f1f",
            "Ports": {
                "3306/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "3306"
                    },
                    {
                        "HostIp": "::",
                        "HostPort": "3306"
                    }
                ],
                "33060/tcp": null
            },
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "9281840dcb6ef7fc8c4adc167a292cd3d88230a071e3d94bdbc86dc6c07efb26",
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
                    "NetworkID": "57adcb16b68474c4637e5f6962a3637d43a411b4dd1a892d5565b34c70bc07c0",
                    "EndpointID": "9281840dcb6ef7fc8c4adc167a292cd3d88230a071e3d94bdbc86dc6c07efb26",
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

## 数据卷容器

>- 官方文档：https://docs.docker.com/compose/compose-file/05-services/#volumes_from

>- volume-from 命令可以实现多个容器的数据同步
>- 多个容器的数据进行同步，例如：2个mysql数据的同步，即多个容器共享一个目录

### 测试

1. 启动一个容器并挂载

```shell
docker run -d --name mysql01 -p 3306:3306 -v /home/mysql/config:/etc/mysql/conf.d \
-v /home/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=Root@123  mysql:5.7
```

2. 启动第二个容器并继承mysql01的挂载

```shell
docker run -d --name mysql02 -p 3306:3306 --volumes-from mysql01
-e MYSQL_ROOT_PASSWORD=Root@123  mysql:5.7
```

>- 此时，在第二个容器启动后，则数据会在mysql02中会自动拷贝一份。删除mysql01的数据后，mysql02的数据不会丢失

## 拓展

```shell
-v 容器外目录:容器内目录:权限
```

>- 权限：ro(即：read only)、rw(read and write)
>- 如果权限设置为ro，则表示容器内的目录和文件只能通过挂载的容器外进行操作，在容器内不能进行操作
