---
title: Python基础知识学习
date: '2025-01-20 14:00:00'
sidebar: 'auto'
categories:
 - Python
tags:
 - Python
---

## 程序基本格式

- Python中不区分大小写

- Python中的结构区分采用空格和占位符来标识，没有大括号这种形式。这里需要注意的是占位符和空格数目要相同

- Python的注释形式

  1. 行内形式： #

  2. 多行注释：三个单引号或者双引号来表示，例如

     ```python
     '''
     多行注释
     '''
     """
     多行注释
     """
     ```

## 基础知识

- 标识符：用于变量、函数、类、模块等名称

- 变量名必须以字母开头

- 标识符不能使用关键字

- 可通过help() -- keywords查看关键

- 命名规则

  1. 模块和包名

     全部小写字母，多个单词下划线隔开

  2. 函数名

     全小写字母，多个单词使用下划线隔开

  3. 类名

     首字母大写，采用驼峰状写法

  4. 常量名

     全部大写字母，多个单词使用下划线隔开

## 赋值

### 1. 链式赋值

链式赋值用于将同一个对象赋值给多个变量，例如

x=y=30 相当于 x=30; y=30

### 2. 系列解包赋值

系列数据赋值给多个变量，例如

a,b,c=10,20,30相当于a=10;b=20;c=30

### 3. 常量

Python不支持常量，只能通过大小写来规定是否为常量，但是依然可以修改

## 运算符

```python
+ - * /
// 表示整除
** 表示幂
% 求余
```

### 判断语句

>1. Python可以指定非0或非空值为true，0或None非false
>
>2. if控制语句格式如下：
>
>   - 【elif】为其他情况
>   - 每个判断条件后需要加冒号
>
>   ```python
>   if 判断条件1:
>   	 执行语句
>   elif 判断条件2:
>   	 执行语句
>   else
>      执行语句
>   ```

## 循环语句

>在循环语句中，可以使用break、continue，pass三种控制循环
>
>1. break：跳出循环
>2. continue：跳出本次循环
>3. pass：占位符，没有实际意义

### for循环

>1. for...i...形式
>
>   - 循环数字
>
>   ```
>   for i in range(10):
>   	print(i)
>   ```
>
>   - 自增循环
>
>   ```
>   # 参数1:初始值 参数2:最大范围 参数3:自增
>   for i in range(1, 10, 2):
>   	print(i)
>   ```
>
>   - 循环数组
>
>   ```
>   a = ["aa", "bb", "cc", "dd"]
>   for i in range(len(a)):
>   	print(a[i])
>   ```
>
>2. foreach形式
>
>   - 循环字符
>
>   ```
>   a = "chengdu"
>   for i in a:
>   	print(i)
>   ```
>
>   - 循环数组
>
>   ```
>   a = ["aa", "bb", "cc", "dd"]
>   for i in a:
>   	print(i)
>   ```

### while循环

>- 和其他语言类似情况
>
>```
>a = 0
>while a < 5:
>	print(a)
>	a+=1
>```
>
>- while中也可以使用else
>
>```
>a = 0
>while a < 5:
>	print(a)
>	a+=1
>else:
>	print("不满足条件")
>```
>
>

## 字符串、列表、元组、字典

### 字符串

- Python的核心数据类型

>* Python字符串可以用`单引号`、`双引号`、`三引号(三个单引号或三个双引号)`,使用`\`表示转义字符
>
>  - 三引号可以保存输入字符串的格式，例如：
>
>    ```python
>    # 输出时可以保存格式
>    paragraph = """
>          这是一个段落
>          可以由多行组成
>    """
>    ```
>
>  - 单引号和双引号
>
>* Python3源码文件默认以UTF-8编码，所有字符都是unicode字符
>
>* 支持字符串的拼接、截取等多种运算

### 常用转义字符

| 转义字符 |    描述    |
| :------: | :--------: |
|   \\\    | 反斜杠符号 |
|   \\'    |   单引号   |
|   \\"    |   双引号   |
|   \\n    |    换行    |
|   \\a    |    响铃    |
|   \\b    |    退格    |
|  \\000   |     空     |
|   \\n    |    换行    |
|   \\t    |   制表符   |
|          |            |

### 修改字符串的大小写

- title()

>将文本首字母大写转换
>
>```python
>word = "hello world"
>print(word.title())
>
># 输出：Hello World
>```
>
>

- upper()

>将文本全部大写转换
>
> ```python
> word = "hello world"
> print(word.upper())
> 
> # 输出：HELLO WORLD
> ```
>
>

- lower()

>将文本全部小写转换
>
>```python
>word = "Hello World"
>print(word.lower())
>
># 输出：hello world
>```
>
>

- islower()

>判断文本是否全部小写，如果为中文，则为False
>
>```python
>word = "hello world"
>print(word.islower())
>
># 输出：True
>```
>
>

- isupper()

>判断文本是否全部大写，如果为中文，则为False
>
>```python
>word = "hello world"
>print(word.isupper())
>
># 输出：True
>```
>
>

## 运算函数

### 截取字符串

>- 基本形式 str[起始位置:结束位置:步进值]，起始位置为开始截取位置(包含该位置)、结束位置(不包含该位置)、步进值(跳着截取长度)
>
>```python
>str = "名侦探柯南，柯南：真相只有一个"
>print(str)
>print(str[0]) # 从0截取，截取一个 结果：名
>print(str[0:3]) # 从0开始截取，截取到第3位，结果：名侦探
>print(str[1:7:2]) # 从1开始截取，截取到第7位，每次跳2个， 结果位：侦柯，
>```
>
>- 简写模式
>
>```python
>print(str[3:])  # 结束位置为最后
>print(str[3:7])
>print(str[:7]) # 起始位置为第一位
>```
>
>

### 拼接字符串

>- 使用+号连接 `print(str + ",你好")`
>- 使用*号连续输出`print(str*3)`,连续输出三次`str`
>- 使用r可以取消正则表达式功能`print(r"江户川柯南\n灰原哀"),`\n`转义字符不再生效，结果为：`江户川柯南\n灰原哀

### 内置函数

|                             方法                             |                             描述                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                         capitalize()                         |                          首字母大写                          |
|                     center(length, word)                     | 字符串居中，length表示长度，word表示填充的字符串，不足填充该字符串 |
|                    count(sub, start, end)                    |       统计字符串sub出现的次数，start和end表示统计范围        |
| [string.decode(encoding='UTF-8', errors='strict')] | 以 encoding 指定的编码格式解码 string，如果出错默认报一个 ValueError 的 异 常 ， 除 非 errors 指 定 的 是 'ignore' 或 者'replace' |
| [string.encode(encoding='UTF-8', errors='strict')](https://www.w3cschool.cn/python/att-string-encode.html) | 以 encoding 指定的编码格式编码 string，如果出错默认报一个ValueError 的异常，除非 errors 指定的是'ignore'或者'replace' |
| **[string.endswith(obj, beg=0, end=len(string))](https://www.w3cschool.cn/python/att-string-endswith.html)** | 检查字符串是否以 obj 结束，如果beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True,否则返回 False. |
| [string.expandtabs(tabsize=8)](https://www.w3cschool.cn/python/att-string-expandtabs.html) | 把字符串 string 中的 tab 符号转为空格，默认的空格数 tabsize 是 8. |
| **[string.find(str, beg=0, end=len(string))](https://www.w3cschool.cn/python/att-string-find.html)** | 检测 str 是否包含在 string 中，如果 beg 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回-1 |
| **[string.index(str, beg=0, end=len(string))](https://www.w3cschool.cn/python/att-string-index.html)** | 跟 find() 方法一样，只不过如果 str 不在 string 中会报一个异常. |
| [string.isalnum()](https://www.w3cschool.cn/python/att-string-isalnum.html) | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True,否则返回 False |
| [string.isalpha()](https://www.w3cschool.cn/python/att-string-isalpha.html) | 如果 string 至少有一个字符并且所有字符都是字母则返回 True,否则返回 False |
| [string.isdecimal()](https://www.w3cschool.cn/python/att-string-isdecimal.html) |   如果 string 只包含十进制数字则返回 True 否则返回 False.    |
| [string.isdigit()](https://www.w3cschool.cn/python/att-string-isdigit.html) |      如果 string 只包含数字则返回 True 否则返回 False.       |
| [string.islower()](https://www.w3cschool.cn/python/att-string-islower.html) | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False |
| [string.isnumeric()](https://www.w3cschool.cn/python/att-string-isnumeric.html) |  如果 string 中只包含数字字符，则返回 True，否则返回 False   |
| [string.isspace()](https://www.w3cschool.cn/python/att-string-isspace.html) |    如果 string 中只包含空格，则返回 True，否则返回 False.    |
| [string.istitle()](https://www.w3cschool.cn/python/att-string-istitle.html) | 如果 string 是标题化的 (见 title()) 则返回 True，否则返回 False |
| [string.isupper()](https://www.w3cschool.cn/python/att-string-isupper.html) | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True，否则返回 False |
| **[string.join(seq)](https://www.w3cschool.cn/python/att-string-join.html)** | Merges (concatenates)以 string 作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串 |
| [string.ljust(width)](https://www.w3cschool.cn/python/att-string-ljust.html) | 返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串 |
| [string.lower()](https://www.w3cschool.cn/python/att-string-lower.html) |              转换 string 中所有大写字符为小写.               |
| [string.lstrip()](https://www.w3cschool.cn/python/att-string-lstrip.html) |                    截掉 string 左边的空格                    |
| [string.maketrans(intab, outtab\])](https://www.w3cschool.cn/python/att-string-maketrans.html) | maketrans() 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。 |
| [max(str)](https://www.w3cschool.cn/python/att-string-max.html) |               返回字符串 *str* 中最大的字母。                |
| [min(str)](https://www.w3cschool.cn/python/att-string-min.html) |               返回字符串 *str* 中最小的字母。                |
| **[string.partition(str)](https://www.w3cschool.cn/python/att-string-partition.html)** | 有点像 find()和 split() 的结合体,从 str 出现的第一个位置起,把 字 符 串 string 分 成 一 个 3 元 素 的 元 组 (string_pre_str,str,string_post_str),如果 string 中不包含str 则 string_pre_str == string. |
| **[string.replace(str1, str2, num=string.count(str1))](https://www.w3cschool.cn/python/att-string-replace.html)** | 把 string 中的 str1 替换成 str2,如果 num 指定，则替换不超过 num 次. |
| [string.rfind(str, beg=0,end=len(string) )](https://www.w3cschool.cn/python/att-string-rfind.html) |           类似于 find()函数，不过是从右边开始查找.           |
| [string.rindex( str, beg=0,end=len(string))](https://www.w3cschool.cn/python/att-string-rindex.html) |              类似于 index()，不过是从右边开始.               |
| [string.rjust(width)](https://www.w3cschool.cn/python/att-string-rjust.html) | 返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串 |
| [string.rpartition(str)](https://www.w3cschool.cn/python/att-string-rpartition.html) |         类似于 partition()函数,不过是从右边开始查找.         |
| [string.rstrip()](https://www.w3cschool.cn/python/att-string-rstrip.html) |                删除 string 字符串末尾的空格.                 |
| **[string.split(str="", num=string.count(str))](https://www.w3cschool.cn/python/att-string-split.html)** | 以 str 为分隔符切片 string，如果 num有指定值，则仅分隔 num 个子字符串 |
| [string.splitlines(num=string.count('\n'))](https://www.w3cschool.cn/python/att-string-splitlines.html) | 按照行分隔，返回一个包含各行作为元素的列表，如果 num 指定则仅切片 num 个行. |
| [string.startswith(obj, beg=0,end=len(string))](https://www.w3cschool.cn/python/att-string-startswith.html) | 检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果beg 和 end 指定值，则在指定范围内检查. |
| **[string.strip([obj\])](https://www.w3cschool.cn/python/att-string-strip.html)** |             在 string 上执行 lstrip()和 rstrip()             |
| [string.swapcase()](https://www.w3cschool.cn/python/att-string-swapcase.html) |                    翻转 string 中的大小写                    |
| [string.title()](https://www.w3cschool.cn/python/att-string-title.html) | 返回"标题化"的 string,就是说所有单词都是以大写开始，其余字母均为小写(见 istitle()) |
| **[string.translate(str, del="")](https://www.w3cschool.cn/python/att-string-translate.html)** | 根据 str 给出的表(包含 256 个字符)转换 string 的字符,要过滤掉的字符放到 del 参数中 |

## 列表

- List(列表)

>- 列表中可以放不同的数据类型
>- 列表索引值以0开始，-1位末尾的开始位置
>- 列表可以用+号表示拼接，使用*表示重复
>- 支持for...i...和foreach循环语句

```python
nameList = ["柯南", "灰原哀", "原太", "步美", "光彦", 9527]
print(nameList[0])
print(nameList[-1])
print(nameList[len(nameList) - 1])

print(type(nameList[-1]))  # 类型为int，而不会自动转换为字符串

wordList = ["琴酒", "伏特加", "贝尔摩德", "朗伯", 6782]

print(nameList + wordList)  # 数组合并
print(wordList * 3) # 数组重复
```

### 内置方法

- 方法分为增删该查和排序五个主要的操作

| 操作名称                        | 描述                                                         | 举例                          |
| ------------------------------- | ------------------------------------------------------------ | ----------------------------- |
| 【增】append(object)            | 在末尾增加一个元素，可以是数组对象，数组对象作为一个完整的元素存在 |                               |
| 【增】extend(object)            | 在末尾扩展，可以是数组对象，如果是数组，则会将数组元素拼接到元素中 |                               |
| 【增】insert(index, object)     | 在指定位置添加一个元素                                       |                               |
| 【增】使用+拼接                 | 效率相对不高                                                 |                               |
| 【删】del                       | 删除某个元素                                                 | del nameList[3]               |
| 【删】pop(index)                | 删除指定位置元素                                             | name.pop(3)                   |
| 【删】remove(object)            | 删除指定元素                                                 | remove("柯南")                |
| 【查】in                        | 查询元素是否存在                                             | "柯南" in nameList            |
| 【查】not in                    | 查询元素是否不在                                             | "柯南" not in nameList        |
| 【查】index(object, start, end) | 可以查询指定范围的元素，返回元素索引,找不到会抛出异常        | nameList.index("步美", 3, 10) |
| 【查】count(object)             | 查询object出现的次数                                         | nameList.count("步美")        |
| 【反转】reverse                 | 数组反转                                                     | nameList.reverse()            |
| 【排序】sort(option)            | 排序,默认正序，反序时，option为reverse=True，可以不写。排序时数据类型必须一致 | nameList.sort(reverse=True)   |

### Tuple元祖

>- tuple和list类似，使用小括号表示，多个用逗号隔开
>- 如果仅仅包含一个元素，则必须加逗号,不加逗号，是普通的数据类型
>- 元祖的元素不可变，但是可以包含可变对象，例如list
>
>```python
>tuple = ()
>print(type(tuple))
>
># 不加元祖，则默认为int
>tuple2 = (30)
>print(type(30))
>
>tuple1 = (50, )
>print(tuple1)
>```
>
>- 元祖不能直接修改里面的元素，但是可以通过+号扩展成一个新的元祖，删除所有的元祖

#### 新增

>- 使用+号可以扩展之前的元祖
>
>```python
>tup = (11, 2, 34)
>tup2 = ("11", "ed", "rf")
>tup3 = tup + tup2
>```
>
>

#### 删除

>- 使用del可以将整个元祖删除
>
>```python
>tup = (1, 2, 3)
>del tup
>print(tup)
>
>"""
> 执行会出现tup未定义的异常，这是由于使用del会将整个对象删除
>"""
>```

#### 查询

>```python
>for item in tuple3:
>  print(item)
>```

### dict(字典)

>- 字典是无序对象集合，使用键-值对表示
>- 键(key)是不可变类型

#### 基本使用方式

```python
person = {"name": "柯南小海盗", "age": 1000, "child": [{"name": "柯南", "age": 500}, {"name": "灰原", "age": 500}]}
# 字典访问，使用此方法，如果key不存在，则会抛出异常
print(person["name"])

# 使用get进行访问,如果不存在，则返回None，相当于其他语言中的null
print(person.get("name"))

# 同时get还可以设置默认值，如果返回None时，可以使用默认值
print(person.get("name", "小五郎"))
```

##### 增加和修改元素

>- 新增和修改方式和js类似，`person["key"] = value`

##### 删除元素

>- 删除操作有两种，即del和clear，前者是删除整个对象，后者是清空其中的元素
>  1. del person # 删除整个对象
>  2. person.clear() # 清空整个对象
>  3. del person["name"] #删除name这个元素



##### 查询元素

>- 查询有两种方式，即查询所有的键和插叙所有的值
>- 查询键使用keys()方法
>- 查询值使用values()方法
>- 查询所有的项，使用items()方法
>
>```python
>for key in person.keys():
>  print(key)
>
>for value in person.values():
>  print(value)
>
>for item in person.items():
>  print(item)
>  
>for key, value in person.items():
>  print(key)
>  print(value)
>```
>
>- 遍历所有的元素
>
>```python
>for key in person.keys():
>  print("k：%s, value：%s" % (key, person[key]))
>```

### 函数

#### 定义函数

- 无参数无返回值

```python
def add():
	print("---")
```

- 带参数函数

```python
def add(a,b):
	print(a+b)
```

- 带返回值函数

```python
def add(a, b):
	return a + b
```

- 带多个返回的函数

```python
def devid(a, b):
  shang = a / b
  yushu = a % b
  return shang, yushu

# 函数调用方式1
sh, yu = devid(5, 2)
# 结果：sh = 2.5, yu = 1

# 函数调用方式2:
# 结果为Set集合存储结果
a = devid(5, 2)
# 结果：a = (2.5, 1)
```



#### enumerate(枚举函数)

#### list转枚举

```python
mylist = ["a", "b", "c","d"]
for i,v in enumerate(mylist):
  print(i,v)
  
"""
 输出结果为：
 0 a
 1 b
 2 c
 3 d
"""  
```

## 引入模块

>- 在Python中，使用import或者from ... import来导入相应的模块
>- 将整个模块(module)导入，格式为 `import somemodule`
>- 从某个模块引入某个函数：`from somemodule import somefunction`
>- 从某个模块引入多个函数：`from somemodule from somefunction, somefunctoin2`
>- 从某个模块引入全部函数：`from somemodule import \*`

