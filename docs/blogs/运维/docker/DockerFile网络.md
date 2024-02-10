---
title: Docker网络
date: '2024/2/9 19:53'
sidebar: 'auto'
categories:
 - 扩展知识
tags:
 - Docker
---

## 理解网络

>- docker安装并启动后，查看网络信息
>- `1:lo`：本地环路接口
>- `ens33`: 网络接口
>- `docker0`: docker虚拟出的网络接口

### 测试网络

1. 安装Docker并启动后，查看网络信息

```shell
[root@node01 ~]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:2f:ff:b4 brd ff:ff:ff:ff:ff:ff
    inet 172.16.152.139/24 brd 172.16.152.255 scope global noprefixroute dynamic ens33
       valid_lft 1416sec preferred_lft 1416sec
    inet6 fe80::e963:800d:f1f3:a41c/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:ee:10:7b:f7 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:eeff:fe10:7bf7/64 scope link 
       valid_lft forever preferred_lft forever
```

2. 下载镜像并启动一个容器

```shell
[root@node01 centos]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:2f:ff:b4 brd ff:ff:ff:ff:ff:ff
    inet 172.16.152.139/24 brd 172.16.152.255 scope global noprefixroute dynamic ens33
       valid_lft 1292sec preferred_lft 1292sec
    inet6 fe80::e963:800d:f1f3:a41c/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ee:10:7b:f7 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:eeff:fe10:7bf7/64 scope link 
       valid_lft forever preferred_lft forever
290: veth00fc87b@if289: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether fe:a1:56:ff:62:50 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::fca1:56ff:feff:6250/64 scope link 
       valid_lft forever preferred_lft forever
```

3. 进入容器内部，查看对应的网络信息

>- 可以看到主机上生成 一个网络对：`290: veth00fc87b@if289`，而进入容器内部，可以看到生成了网络信息为：`289: eth0@if290`，二者是成对出现的。

>- 容器内部的ip和docker的ip在同一个网段上
>- 每启动一个容器，则会生成一个新的网卡且网卡的网段和docker的网段是同一个
>- 在同一个docker内部的容器之间时可以ping通的

```shell
[root@node01 centos]# docker exec -it 41fb72ee528d /bin/bash
[root@41fb72ee528d local]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
289: eth0@if290: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
```

### 结论

>Docker默认完成网络配置的过程为：
>
>1. 在主机上创建一对虚拟网卡<font color="red">veth pair</font>设备。veth设备总是成对出现的，它们组成了一个数据的通道，数据从一个设备进入，就会从另一个设备出来。因此，veth设备常用来连接两个网络设备。
>2. Docker将veth pair设备的一端放在新创建的容器中，并命名为eth0。另一端放在主机中，以veth65f9这样类似的名字命名，并将这个网络设备加入到docker0网桥中，可以通过brctl show命令查看。
>3. docker0相当于一个路由器，新建的所有容器公用一个docker0，所有的容器在不指定网络的情况下，由docker0 路由的，docker会给容器分配一个默认的可用ip

## link

> 🙋：先有2个docker容器，即mysql和springboot服务，Springboot服务连接到Mysql服务，如果Mysql服务的容器重启后，网络ip则会重新分配，此时，如果采用ip进行连接时，需要重新启动Springboot服务。
>
> 🤔：是否可以在2个容器之间通过服务名称来访问，ip可以变化，但是服务的名称是固定的:question:即：2个容器之间是否可以通过名称进行ping通，而不是通过ip
>
> :a:`link`可以解决此类问题(比较老的技术)

```shell
## 此时，在容器01中，可以通过 容器02进行ping通，即ping 容器02
docker run -d  -P -it --name 容器名01 --link 容器名02  mysql:5.5

进入容器01容器中，查看hosts，可以看到hosts中添加来容器02的ip信息

root@a4d447b8d67f local]# cat /etc/hosts 
127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.17.0.2      centos01 095d6e51e653
172.17.0.3      a4d447b8d67f
```

>- 此时，容器01可以`ping`通容器02，但是容器02不能ping通容器01
>- link其实就是在hosts中配置了域名-ip的映射，因此可以通过容器名来ping通

## network命令-- 自定义网络

### 基本命令

```shell
[root@node01 ~]# docker network --help

Usage:  docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network # 连接容器
  create      Create a network # 创建一个网络
  disconnect  Disconnect a container from a network # 断开连接
  inspect     Display detailed information on one or more networks # 展示详细信息
  ls          List networks # 展示所有的网络
  prune       Remove all unused networks # 移除未使用的网络
  rm          Remove one or more networks # 删除网络
```

1. 查看所有的网络

>- 默认有三种网络模式
>  1. bridge：桥接模式
>  2. none：不配置网络
>  3. host：和宿主机共享网络
>  4. container：容器连通(不常用)

```shell
[root@node01 ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
57adcb16b684   bridge    bridge    local
35c0bfa5a310   host      host      local
4e1a8771bfb9   none      null      local
```

### 默认网络配置


```shell
docker run -d -P --name centos01 centos:1.0 # 此时，默认参数--net为bridge，等同于
docker run -d -P --name centos01 --net bridge centos:1.0
```

### 创建自定义网络

>- 可以通过`docker network create --help`查看创建的命令

```shell
# 创建网络
docker network create --driver bridge --gateway 网关地址 --subnet 子网掩码 网络名称
# 同一个集群使用同一个网络进行通信
docker run -d -P --name 容器名称 --net 网络名称 镜像名称
```

>- 不同的集群可以使用不同的网络，保证集群内部的安全性和健康性。
>- 集群之间可以通过网络连通的方式来连接

### 测试自定义网络

#### 1. 准备工作

##### 1.1 构建一个centos镜像

1. Dockerfile文件

```shell
# 基础镜像
FROM centos
# 维护者信息
MAINTAINER tianluhua<tianlh0915@163.com>
# 添加环境变量
ENV MYOPATHY /usr/local
# 设置工作目录
WORKDIR $MYOPATHY

# 配置yum源(可选，需要自己查看源是否可用，这里是centos8不可用才进行的更新)
RUN cd /etc/yum.repos.d/
RUN sed -i -e "s/mirrorlist=/#mirrorlist=/g" /etc/yum.repos.d/CentOS-Linux-*.repo
RUN sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-Linux-*.repo


# 更新vim
RUN yum -y install vim
RUN yum -y install net-tools

# 暴露端口
EXPOSE 80
CMD echo $MYOPATHY
CMD echo '------------end---------'

CMD /bin/bash
```

2. 构建镜像

```shell
docker build -f Dockerfile -t centos:1.0 .
```

#### 2. 创建自定义网络

>- 其中，网关和子网掩码可以自定义，不需要和主机，docker0相同

```shell
docker network create --driver bridge --subnet 172.18.0.0/16  --gateway 172.18.0.1 centos-network
```

- 此时查看网络信息，发现多个一个网络

```shell
[root@node01 centos]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:2f:ff:b4 brd ff:ff:ff:ff:ff:ff
    inet 172.16.152.139/24 brd 172.16.152.255 scope global noprefixroute dynamic ens33
       valid_lft 1753sec preferred_lft 1753sec
    inet6 fe80::e963:800d:f1f3:a41c/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:ee:10:7b:f7 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:eeff:fe10:7bf7/64 scope link 
       valid_lft forever preferred_lft forever
303: br-23afbbfadb75: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:ec:7d:b1:df brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global br-23afbbfadb75
       valid_lft forever preferred_lft forever
```

- 执行`docker network ls`，可以看到新增的网络

```shell
[root@node01 centos]# docker network ls
NETWORK ID     NAME             DRIVER    SCOPE
57adcb16b684   bridge           bridge    local
23afbbfadb75   centos-network   bridge    local
35c0bfa5a310   host             host      local
4e1a8771bfb9   none             null      local

# 网络详细信息
[root@node01 centos]# docker network inspect centos-network
[
    {
        "Name": "centos-network",
        "Id": "23afbbfadb754ae4c8af592459dbe710f4bc350d8c23a1efc8e55c00979d2af1",
        "Created": "2024-02-08T05:13:29.697584252+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]

```

#### 3. 新增2个容器

- 新增`centos01`、`centos02`两个容器且使用同一个网络

```shell
[root@node01 centos]# docker run -d -it --net centos-network --name centos01 centos:1.0
43b841cfafb47c30b8f24e989445082f7533e459cace07c0e5d22eb82eb8994b
[root@node01 centos]# docker run -d -it --net centos-network --name centos02 centos:1.0
23784f3bca07adc80b417f7547c5bd4e848b6633daef8a49abb8f9cdf8c7d362
[root@node01 centos]# docker ps
CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS          PORTS     NAMES
23784f3bca07   centos:1.0   "/bin/sh -c /bin/bash"   3 seconds ago    Up 2 seconds    80/tcp    centos02
43b841cfafb4   centos:1.0   "/bin/sh -c /bin/bash"   12 seconds ago   Up 11 seconds   80/tcp    centos01
```

#### 4. 进入容器内，测试是否可以ping

>- 此时，centos01、centos02相互可以ping通

```shell
[root@node01 centos]# docker ps
CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS          PORTS     NAMES
23784f3bca07   centos:1.0   "/bin/sh -c /bin/bash"   3 seconds ago    Up 2 seconds    80/tcp    centos02
43b841cfafb4   centos:1.0   "/bin/sh -c /bin/bash"   12 seconds ago   Up 11 seconds   80/tcp    centos01
[root@node01 centos]# docker exec -it 23784f3bca07 /bin/bash
[root@23784f3bca07 local]# ping centos01
PING centos01 (172.18.0.2) 56(84) bytes of data.
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=1 ttl=64 time=0.132 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=2 ttl=64 time=0.174 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=3 ttl=64 time=0.072 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=4 ttl=64 time=0.122 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=5 ttl=64 time=0.233 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=6 ttl=64 time=0.125 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=7 ttl=64 time=0.172 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=8 ttl=64 time=0.901 ms
64 bytes from centos01.centos-network (172.18.0.2): icmp_seq=9 ttl=64 time=0.180 ms
^C
--- centos01 ping statistics ---
9 packets transmitted, 9 received, 0% packet loss, time 8018ms
rtt min/avg/max/mdev = 0.072/0.234/0.901/0.240 ms
```

## 网络连通

### 基本语法

```shell
[root@node01 ~]# docker network connect --help

Usage:  docker network connect [OPTIONS] NETWORK CONTAINER

Connect a container to a network

Options:
      --alias strings           Add network-scoped alias for the container
      --driver-opt strings      driver options for the network
      --ip string               IPv4 address (e.g., "172.30.100.104")
      --ip6 string              IPv6 address (e.g., "2001:db8::33")
      --link list               Add link to another container
      --link-local-ip strings   Add a link-local address for the container

```

>- NETWORK表示网络名称
>- CONTAINER：容器ID

### 测试网络连通

#### 1. 准备工作

> 1. 基础镜像构建，名称为：centos:1.0

### 2. 创建2个网络

```shell
docker network create --driver bridge --subnet 172.18.0.0/16  --gateway 172.18.0.1 centos-network01
```

```shell
docker network create --driver bridge --subnet 172.19.0.0/16  --gateway 172.19.0.1 centos-network02
```

### 3. 创建四个容器

>1. centos011、centos012 网络为 centos-network01
>2. centos021、centos022 网络为 centos-network02

```shell
# 网络 centos-network01
docker run -d -it --name  centos011 --net centos-network01 centos:1.0
docker run -d -it --name  centos012 --net centos-network01 centos:1.0

# 网络 centos-network02
docker run -d -it --name  centos021 --net centos-network02 centos:1.0
docker run -d -it --name  centos022 --net centos-network02 centos:1.0
```

4. 连通容器和网络

4.1 查看容器

>- 前2个网络为：centos-network02，后2个为 entos-network01
>- centos022和centos021可以互相ping通，centos012和centos011可以互相ping通；centos011或centos012 不可以和 centos022或centos021 ping通

```shell
[root@node01 ~]# docker ps
CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS          PORTS     NAMES
b8cb01478ccb   centos:1.0   "/bin/sh -c /bin/bash"   8 seconds ago    Up 8 seconds    80/tcp    centos022
f5aec31b4543   centos:1.0   "/bin/sh -c /bin/bash"   12 seconds ago   Up 12 seconds   80/tcp    centos021
83fc2bf5c441   centos:1.0   "/bin/sh -c /bin/bash"   16 seconds ago   Up 15 seconds   80/tcp    centos012
b4d6392dc5f8   centos:1.0   "/bin/sh -c /bin/bash"   23 seconds ago   Up 22 seconds   80/tcp    centos011
```

4.2 添加网络连通

```shell
[root@node01 ~]# docker network connect centos-network01 centos022
[root@node01 ~]# docker exec -it centos022 ping centos012
PING centos012 (172.18.0.3) 56(84) bytes of data.
64 bytes from centos012.centos-network01 (172.18.0.3): icmp_seq=1 ttl=64 time=0.221 ms
64 bytes from centos012.centos-network01 (172.18.0.3): icmp_seq=2 ttl=64 time=0.125 ms
64 bytes from centos012.centos-network01 (172.18.0.3): icmp_seq=3 ttl=64 time=0.173 ms
64 bytes from centos012.centos-network01 (172.18.0.3): icmp_seq=4 ttl=64 time=0.178 ms
64 bytes from centos012.centos-network01 (172.18.0.3): icmp_seq=5 ttl=64 time=0.113 ms
```

>- centos022和centos-network01连通后，centos-network01网络下的所有容器都可以和centos022进行相互ping通。这个是相互的操作
