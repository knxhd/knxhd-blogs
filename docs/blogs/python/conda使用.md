---
title: conda的使用
date: '2024-03-06 08:00:00'
sidebar: 'auto'
categories:
 - Python
tags:
 - conda
---
## conda安装

1. 下载Miniconda安装脚本

   首先，访问Miniconda的官方网站，找到适合Linux的Miniconda3安装脚本的下载链接。通常，你可以使用 `wget`命令来下载：

   ```shell
   wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
   ```
2. 运行安装脚本

   > 你需要阅读并同意许可协议，然后选择安装路径（默认是你的home目录下的 `miniconda3`）。
   >

   ```shell
   bash Miniconda3-latest-Linux-x86_64.sh
   ```
3. 激活更改

   > 重新启动你的终端，或者运行以下命令以立即激活更改：
   >

   ```shell
   source ~/.bashrc
   ```
4. 更改配置为清华源，加快更新依赖包速度

   - 命令行方式设置

   首先，移除默认的源：

   ```shell
   conda config --remove-key channels
   ```

   然后，添加清华源：

   ```shell
   conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
   conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
   conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
   conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
   conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
   ```

   设置完成后，可以查看配置

   ```shell
   conda config --show
   ```

   - 修改.condarc问价

   打开或创建 `~/.condarc`文件，并添加以下内容：

   ```yaml
   report_errors: false
   auto_activate_base: false
   show_channel_urls: true
   channels:
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/fastai/
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
     - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
     - defaults
   env_prompt: ({default_env})
   ```


## 基本命令

### 创建环境

```shell
conda create [可选项] env_name python=3.7
# 可选项 -c 镜像地址，采用镜像地址创建环境
# 例如：conda create -c https://conda.anaconda.org/conda-forge -n python37 python=3.7
```

### 激活环境

1. 第一次采用 `source activate env_name`

### 查看有哪些环境

```shell
conda env list
```

### 退出环境

```shell
conda deactivate
```

### 删除环境

```shell
conda remove -n xxx --all
```

### 关闭自动激活的base环境：

```shell
conda config --set auto_activate_base false

## 同理，开启命令为
conda config --set auto_activate_base true
```

### 删除环境

```shell
conda remove --name env_name --all
```

## 安装依赖

### 安装OCC

```shell
conda install -c conda-forge pythonocc-core=7.7.2
```
