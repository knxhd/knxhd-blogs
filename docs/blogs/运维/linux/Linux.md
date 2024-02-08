---
title: Linux命令
date: '2023-10-27 08:00:00'
sidebar: 'auto'
categories:
- 扩展知识
tags:
 - Linux
---

## LInux配置

### 配置文件

1. /etc/profile

>- 存储系统的系统变量，针对所有的用户生效。每次系统启动后，都会加载此文件，永久性添加
>- 修改后，需要通过命令`source /etc/profile`来生效
>- 如果仅仅想本次登录生效，则可以通过`PATH=$PATH:/root/shells`来设置

2. HOME/.bash_profile

>- 仅仅针对特定用户生效，先加载/etc/profile再加载HOME/.bash_profile

### 防火墙

1. 查看防火墙命令

```shell
systemctl status firewalld.service
```

2. 启动防火墙

```shell
systemctl start firewalld.service
```

3. 关闭防火墙

```shell
systemctl stop firewalld.service
```

4. 防火墙禁用

```shell
systemctl disable firewalld.service
```

5. 防火墙规则

```shell
firewall-cmd –list-all
```

6. 查询开发的端口

```shell
firewall-cmd –query-port=8080/tcp
```

7. 重启防火墙

```shell
firewall-cmd --reload
```

8. 开放指定端口

```shell
firewall-cmd --permanent --add-port=8080/tcp
```

9. 禁用指定端口

```shell
firewall-cmd --permanent --remove-port=8080/tcp
```

### SSH免密登录

>1. `cd ~/.ssh`进入.ssh目录下
>2. `ssh-keygen -t rsa`生成ssh免登录密钥。（连续四个回车），执行完上面命令后，会生成两个文件id_rsa（私钥）、id_rsa.pub（公钥）
>3. `ssh-copy-id node01`相当于该主机给自身设置免密码登录，主机名视虚拟机实际主机名而定
>4. 此时，`ssh node01`，则不再需要使用密码即可登录

## shell命令

### tgz解压缩

1. 解压，如果后缀名称为 tar.gz则，解压命令为-xzvf；如果后缀名为 tar，则解压命令为：-xvf

```shell
tar -zxvf xxx.tgz
```

2. 压缩,，如果压缩后，后缀名为tar.gz，则压缩命令为zxvf，否则为 cvf

```shell
tar -zcvf xxx.tar.gz
```

### scp

1. 基本格式：

```shell
scp localfile remote_username@remote_ip:remote_file
```

>1. 其中，用户名可省略，省略后为，在命令行中可输入用户名和密码
>
>```
>scp localfile remote_ip:remote_file
>```

### 更改主机名

>1. 主机名即域名，可通过域名解析出ip
>
>2. 查看主机名命令：`hostname`
>
>3. 永久更改命令：
>
>   ```shell
>   sudo hostnamectl set-hostname newhostname
>   ```
>
>4. 临时更改命令：
>
>   ```shell
>   sudo hostname newhostname
>   ```

## Shell指令

| 指令      | 说明         |
| --------- | ------------ |
| Ctrl+a    | 回到光标行首 |
| Ctrl+e    | 回到光标末尾 |
| G/Shift+g | 跳到最后一行 |
| gg        | 跳到第一行   |

