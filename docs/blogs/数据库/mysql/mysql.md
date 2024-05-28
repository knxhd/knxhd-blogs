---
title: mysql基础
date: "2024-05-13 09:10:12"
sidebar: "auto"
categories:
  - 数据库
tags:
  - mysql
---

## 用户管理

### 创建用户

```mysql
create user "用户名"@"localhost" identified by "password";
```

>- localhost: 表示只能在本地登录，如果想要远程登录，则设置为`%`，也可以指定ip

### 查询用户

```mysql
--查询用户
select user,host from mysql.user;
```

### 删除用户

```mysql
--删除用户“test”
drop user test@localhost ;
--若创建的用户允许任何电脑登陆，删除用户如下
drop user test@'%';
```

#### 更改密码

- 方法一：

```mysql
update  mysql.user set  password=password('1234')  where user='test'
--刷新
flush privileges;
```

- 方法二：

```mysql
set password for test = password('1122');
--刷新
flush privileges;
```

### 用户分配权限

```mysql
--授予用户test通过外网IP对数据库“testdb”的全部权限
grant all privileges on 'testdb'.* to 'test'@'%' identified by '1234';  
--刷新权限
flush privileges; 
```

```mysql
--授予用户“test”通过外网IP对于该数据库“testdb”中表的创建、修改、删除权限,以及表数据的增删查改权限
grant create,alter,drop,select,insert,update,delete on testdb.* to test@'%';
```

### 查看用户权限

```mysql
show grants for test;
```

