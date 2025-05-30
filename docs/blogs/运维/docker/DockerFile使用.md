---
title: DockerFile使用
date: '2024/2/8 21:16'
sidebar: 'auto'
categories:
 - 扩展知识
tags:
 - Docker
---

## DockerFile介绍

>DockerFile就是用来构建docker镜像的构建文件

1. 编写DockerFile，`vim DockerFile`

```shell
from mysql:5.7

# 挂载位置，可为空，挂载目录1和2，可以自定义，在容器内也会添加相应的目录，此方式为匿名挂载方式
volumn ['挂载的目录1', '挂载的目录2']

# echo为linux语法，表示在生成后，打印日志
CMD echo "--------end------------"
# 生成后，进入目录中
CMD /bin/bash
```

2. 通过docker build构建

```shell
docker build -f DockerFile文件位置 -t 镜像名:tag名称 镜像位置
```

3. 通过`docker run`运行镜像

4. 通过`docker push`发布镜像，可以发布到私有云或公有云。命令为：

   ```shell
   docker push 作者名/镜像名称:[tag]
   ```

### 基本命令

| 指令        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| FROM        | 指定所创建镜像的基础镜像                                     |
| MAINTAINER  | 指定维护者信息                                               |
| RUN         | 运行命令                                                     |
| CMD         | 指定启动容器时默认执行的命令                                 |
| LABEL       | 指定生成镜像的元数据标签信息                                 |
| EXPOSE      | 声明镜像内服务所监听的端口                                   |
| ENV         | 指定环境变量复制指定的<src>路径下的内容到容器中的<dest>路径下，<src>可以为URL |
| ADD         | 如果为tar文件，会自动解压到<dest>路径下                      |
| COPY        | 使用COPY，而不是ADD                                          |
| ENTRYPOINT  | 指定镜像的默认入口                                           |
| VOLUME      | 创建数据卷挂载点                                             |
| USER        | 指定运行容器时的用户名或UID                                  |
| WORKDIR     | 配置工作目录                                                 |
| ARG         | 指定镜像内使用的参数（例如版本号信息等）                     |
| ONBUILD     | 配置当所创建的镜像作为其他镜像的基础镜像时，所执行的创建操作指令 |
| STOPSIGNAL  | 容器退出的信号值                                             |
| HEALTHCHECK | 如何进行健康检查                                             |
| SHELL       | 指定使用shell时的默认shell类型                               |

## DockerFile构建过程

### 基础知识

>1. 每个保留关键字(指令) 采用大写字母
>2. 执行采用从上到下顺序执行
>3. 使用`#`表示注释
>4. 每个指令都会创建一个新的镜像层并提交
>5. dockerFile是面向开发的，发布项目就需要编写一个dockerfile文件

## DockerFile指令

```shell
FROM       #基础镜像	
MAINTAINER # 镜像维护者，即谁写的镜像
RUN        # 镜像构建时，需要执行的命令
ADD        # 步骤，添加内容，例如：添加jar包等
COPY.      # 将文件拷贝到镜像中
WORKDIR    # 镜像的工作目录
VOLUME		 # 挂载的目录
EXPOST		 # 暴露的端口
CMD				 # 指定容器启动时，要执行的命令，只有最后一个会会生效，可被替代
ENTRYPOINT # 指定容器启动时，要执行的命令，可以追加命令
ENV	       # 构建镜像时，设置环境变量
```

### ADD和COPY

>- ADD 是将文件或文件夹添加到镜像中；COPY是将文件或文件夹复制到容器中

### CMD和ENTRYPOINT测试

>- CMD命令：指定容器启动时，要执行的命令，只有最后一个会会生效，可被替代
>- ENTRYPOINT命令：指定容器启动时，要执行的命令，可以追加命令

```shell
# 基础镜像
FROM centos
# 维护者信息
MAINTAINER tianluhua<tianlh0915@163.com>
# 添加环境变量
ENV MYOPATHY /usr/local
# 设置工作目录
WORKDIR $MYOPATHY
# 在启动后，执行命令 ls -a
CMD [ls, -a]
```

1. 构建和运行容器

```shell
[root@node01 centos]# docker build -f dockerfile.cmd -t centos-cmd:1.0 .
[+] Building 0.0s (6/6) FINISHED                                                                                                                   docker:default
 => [internal] load build definition from dockerfile.cmd                                                                                                     0.0s
 => => transferring dockerfile: 285B                                                                                                                         0.0s
 => [internal] load metadata for docker.io/library/centos:latest                                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                            0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [1/2] FROM docker.io/library/centos:latest                                                                                                               0.0s
 => CACHED [2/2] WORKDIR /usr/local                                                                                                                          0.0s
 => exporting to image                                                                                                                                       0.0s
 => => exporting layers                                                                                                                                      0.0s
 => => writing image sha256:a7775a3de0aebc3140add37c476ef0f6bbb373a834fb9a7a82067f92e3f246f6                                                                 0.0s
 => => naming to docker.io/library/centos-cmd:1.0                                                                                                            0.0s
[root@node01 centos]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
mycentos     1.0       89baefc697d9   25 minutes ago   312MB
centos-cmd   1.0       a7775a3de0ae   45 minutes ago   231MB
centos       latest    5d0da3dc9764   2 years ago      231MB
[root@node01 centos]# docker run -it a7775a3de0ae
.  ..  bin  etc  games  include  lib  lib64  libexec  sbin  share  src
[root@node01 centos]# docker run -it a7775a3de0ae -l
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "-l": executable file not found in $PATH: unknown.
```

>- 运行时，添加来参数 `-l`，由于CMD执行时，最后的指令会做替换，因此，执行时，执行来-l，而不是ls -al，导致出现错误，此时如果改成ENTRYPOINT，则-l会追加到CMD后，即ls -al

## DockerFile实战

### 实战测试centos

>- 以centos为例

1. 新建dockerfile文件

>- 官方 centos 没有vim和nettools，即无法使用vim、ifconfig命令
>- 在dockerfile中添加对应的依赖

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
# 更新网络工具
RUN yum -y install net-tools

# 暴露端口
EXPOSE 80
CMD echo $MYOPATHY
CMD echo '------------end---------'

CMD /bin/bash
```

2. 构建镜像

```shell
docker build -f dockerfile -t mycentos:1.0 .
```

### 实战centos中部署springboot项目

1. 准备工作：

>1. jdk8压缩包，在centos中配置jdk环境
>2. jar包，soringboot项目包，项目可见：https://gitee.com/knxhd/spring-web.git，branch: demo

2. 编写Dockerfile文件

```shell
# 基础镜像
FROM centos
# 维护者信息
MAINTAINER tianluhua<tianlh0915@163.com>
# 添加环境变量
ENV MYOPATHY /usr/local/
# 设置工作目录，此时目录中就是此目录
WORKDIR $MYOPATHY
# 配置yum源(可选，需要自己查看源是否可用，这里是centos8不可用才进行的更新)
RUN cd /etc/yum.repos.d/
RUN sed -i -e "s/mirrorlist=/#mirrorlist=/g" /etc/yum.repos.d/CentOS-Linux-*.repo
RUN sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-Linux-*.repo

# 更新vim
RUN yum -y install vim
# 更新网络工具
RUN yum -y install net-tools

# 新增目录，存储安装包
RUN mkdir apps
# 将jdk添加到镜像中
ADD jdk-8u152-linux-x64.tar.gz /usr/local/apps/

# 解压文件并配置环境变量，这里需要注意的是，ADD命令会自动完成解压命令
# RUN cd /usr/local/apps
# RUN tar -zxvf ./jdk-8u152-linux-x64.tar.gz
ENV JAVA_HOME /usr/local/apps/jdk1.8.0_152
ENV CLASSPATH $JAVA_HOME/lib/dt.jar;$JAVA_HOME/lib/tools.jar
ENV PATH $PATH:$JAVA_HOME/bin

EXPOSE 8081

# 将jar拷贝到容器中
COPY java-demo-1.0-SNAPSHOT.jar /usr/local/
# 启动容器后执行的操作
ENTRYPOINT ["java", "-jar", "java-demo-1.0-SNAPSHOT.jar"]
# CMD nohup java -jar java-demo-1.0-SNAPSHOT.jar >> demo.log 2>&1 &
```

>- 这里需要注意的是，运行springboot的包时，不需要采用后台运行的方式，否则无法根据logback进行输出。只需要使用`java -jar`来运行即可，而在启动容器时，采用后台运行。
>- 尽量采用`ENTRYPOINT`来运行，采用`CMD`，如果在运行时，采用了`/bin/bash`，则会由于 后者覆盖`CMD`的指令，导致执行失效。
>- ADD命令如果是压缩包，则会自动解压压缩包，不需要再次解压。 ADD多用于需解压的文件；COPY更常用

3. 编译Dockerfile文件

```shell
docker build -f Dockerfile -t demo:1.0 .
```

4. 启动容器

```shell
docker run --name demo -p 8081:8081 -d -it demo:1.0 /bin/bash
```

4. 进入容器中，查看日志：

```shell
[root@node01 centos]# docker exec -it d048c35b4ab8 /bin/bash
[root@d048c35b4ab8 local]# ls
apps  bin  etc  games  include  java-demo-1.0-SNAPSHOT.jar  lib  lib64  libexec  logs  sbin  share  src
[root@d048c35b4ab8 local]# cd logs/
[root@d048c35b4ab8 logs]# tail -500f web_
web_debug.log  web_error.log  web_info.log   web_warn.log   
[root@d048c35b4ab8 logs]# tail -500f web_
web_debug.log  web_error.log  web_info.log   web_warn.log   
[root@d048c35b4ab8 logs]# tail -500f web_info.log 
2024-02-07 17:54:14.384 [main] INFO  com.knxhd.SpringDemoApplication - Starting SpringDemoApplication v1.0-SNAPSHOT using Java 1.8.0_152 on d048c35b4ab8 with PID 1 (/usr/local/java-demo-1.0-SNAPSHOT.jar started by root in /usr/local)
2024-02-07 17:54:14.401 [main] INFO  com.knxhd.SpringDemoApplication - The following profiles are active: dev
2024-02-07 17:54:17.616 [main] INFO  o.s.boot.web.embedded.tomcat.TomcatWebServer - Tomcat initialized with port(s): 8081 (http)
2024-02-07 17:54:17.658 [main] INFO  org.apache.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-8081"]
2024-02-07 17:54:17.659 [main] INFO  org.apache.catalina.core.StandardService - Starting service [Tomcat]
2024-02-07 17:54:17.659 [main] INFO  org.apache.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/9.0.50]
2024-02-07 17:54:17.873 [main] INFO  o.a.c.core.ContainerBase.[Tomcat].[localhost].[/] - Initializing Spring embedded WebApplicationContext
2024-02-07 17:54:17.873 [main] INFO  o.s.b.w.s.c.ServletWebServerApplicationContext - Root WebApplicationContext: initialization completed in 3317 ms
2024-02-07 17:54:19.825 [main] INFO  org.apache.coyote.http11.Http11NioProtocol - Starting ProtocolHandler ["http-nio-8081"]
2024-02-07 17:54:20.014 [main] INFO  o.s.boot.web.embedded.tomcat.TomcatWebServer - Tomcat started on port(s): 8081 (http) with context path ''
2024-02-07 17:54:20.035 [main] INFO  com.knxhd.SpringDemoApplication - Started SpringDemoApplication in 7.613 seconds (JVM running for 8.71)
2024-02-07 17:54:59.238 [http-nio-8081-exec-1] INFO  o.a.c.core.ContainerBase.[Tomcat].[localhost].[/] - Initializing Spring DispatcherServlet 'dispatcherServlet'
2024-02-07 17:54:59.238 [http-nio-8081-exec-1] INFO  org.springframework.web.servlet.DispatcherServlet - Initializing Servlet 'dispatcherServlet'
2024-02-07 17:54:59.241 [http-nio-8081-exec-1] INFO  org.springframework.web.servlet.DispatcherServlet - Completed initialization in 1 ms
2024-02-07 17:54:59.311 [http-nio-8081-exec-1] INFO  com.knxhd.controller.DemoController - 测试日志输出: dev
2024-02-07 17:55:03.216 [http-nio-8081-exec-2] INFO  com.knxhd.controller.DemoController - 测试日志输出: dev
```

## 发布镜像

>- 以阿里云镜像仓库为例：https://cr.console.aliyun.com/cn-hangzhou/instance/repositories
>- 新建命名空间和镜像仓库

1. 登录阿里云账号

```shell
docker login --username=tianluhua0915 registry.cn-hangzhou.aliyuncs.com
```

2. 将镜像推送到远程

```shell
# 镜像打标签版本
docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/knxhd/java-demo:[镜像版本号]
# 将镜像上传到远程
docker push registry.cn-hangzhou.aliyuncs.com/knxhd/java-demo:[镜像版本号]
```

