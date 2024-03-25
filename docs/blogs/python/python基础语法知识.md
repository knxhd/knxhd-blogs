---
title: python语法
date: '2024-01-25 08:00:00'
sidebar: 'auto'
categories:
 - Python
tags:
 - pip
---



## 函数

### `*` 和`**`区别

#### 说明

```python
def method(
        self,
        xy,
        text,
        fill=None,
        *args,
        **kwargs,
    )
```

>- `*` 表示参数已数组的形式传入
>- `**`表示参数以字典的形式存入

#### 示例

##### 01

```python
def test(name, *role, **userInfo):
    print(name)
    print(role)
    print(userInfo)


test('1', '2', '3', '4', '5')

# 返回值，此时userinfo值为空

1
('2', '3', '4', '5')
{}
```

##### 02

```python
def test(name, *role, **userInfo):
    print(name)
    print(role)
    print(userInfo)

test('1', role=['2', '3', '4', '5'], userInfo='111')

# 返回值，此时，role值为空，会把后2个参数当成字典赋值给userInfo
def test(name, *role, **userInfo):
    print(name)
    print(role)
    print(userInfo)

test('1', role=['2', '3', '4', '5'], userInfo='111')
```

##### 03

```python
def test(name, *role, **userInfo):
    print(name)
    print(role)
    print(userInfo)

# 此时，name为1，role为【2，3】
test('1', 2, 3, role=['2', '3', '4', '5'], userInfo='111')

1
(2, 3)
{'role': ['2', '3', '4', '5'], 'userInfo': '111'}
```

## 字符串

### 字符串前增加u、r、b、f的作用

>- u 表示使用unicode编码，多用于中文
>
>- r 表示字符串中的转义字符为普通字符，例如：\n
>
>- b 表示后面字符串是bytes 类型。
>
>- f 格式化，类似于js中的``，例如：
>
>  ```python
>  name="肯尼斯"
>  print(f'name={name}')
>  ```