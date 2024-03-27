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

## 对象

### 分类

>- 从引用方式不同，对象分为可变对象和不可变对象。不可变对象每次赋值时，python会创建一个新的对象赋值给变量，即内存地址发送改变，传递方式为值传递；而可变对象，python赋值时，会将内存地址指向变量，即引用传递
>  1. 可变对象：list，dictionary、自定义对象
>  2. 不可变对象：int、stirng、float、tuple

```
```

### 继承和多态

> 继承和多态
>
>1. 通过class 类名称(父类名称)
>
>2. Python为多继承，可以同时继承多个类
>
>3. 继承后，可对静态方法进行重写，修改对应的逻辑，即多态



```python
"""
 继承和多态
 1. 通过class 类名称(父类名称)
 2. Python为多继承，可以同时继承多个类
 3. 继承后，可对静态方法进行重写，修改对应的逻辑，即多态
"""

from abc import ABCMeta, abstractmethod

class Person:

    __slots__ = ("_name", "_age")

    def __init__(self, name, age):
        self._name = name
        self._age = age

    @property
    def age(self):
        return self._age

    @property
    def name(self):
        return self._name

    @age.setter
    def age(self, age):
        self._age = age


class Student(Person):

    def study(self):
        return self.name


class Teacher(Person):

    def teach(self):
        return self.age


class StudentAndTeacher(Student, Teacher):

    def print(self):
        return str(self.teach()) + "\t" + self.study()


teacher = Teacher("柯南", 7)
student = Student("会序", 18)

print(teacher.teach())
print(student.study())

studentAndTeacher = StudentAndTeacher("232r2r", 2323)
print(studentAndTeacher.print())


"""
 ----------------------------------------------多态----------------------------------------------
"""
class Pet:

    @abstractmethod
    def say(self):
        '''
         抽象方法
        '''
        pass

class Cat(Pet):

    def say(self):
        print('宠物猫，喵喵喵')

class Dog(Pet):

    def say(self):
        print('宠物狗，喵喵喵')

pets = {Dog(), Cat()}

for pet in pets:
    pet.say()
```

:question:其中，写abstractmethod和不写abstractmethod注解，方法执行结果相同，有什么区别？

>- 如果需要付类的方法必须被重写，则可以通过注解`abstractmethod` 做限制，且需在定义类时，添加参数`metaclass=ABCMeta`
>- 如果子类没有重写父类方法，则抛出`TypeError`错误

```python
from abc import ABCMeta, abstractmethod
class Pet(metaclass=ABCMeta):

    @abstractmethod
    def say(self):
        '''
         抽象方法
        '''
        pass

class Cat(Pet):

    def say1(self):
        print('宠物猫，喵喵喵')

class Dog(Pet):

    def say2(self):
        print('宠物狗，喵喵喵')

pets = {Dog(), Cat()}

for pet in pets:
    pet.say()
```

### 内置方法

#### `__new__`

>- 在创建对象时调用

```python
class Person:

    def __new__(cls, name, age):
		# cls值为对象
        return super(Person, cls).__new__(cls)
```



#### `__init__`

>- 构造方法，默认只能有一个构造函数，有多个，后者会代替前者，使用前者的方式构造会抛出异常
>- 如果有非空构造方法，则默认构造方法被覆盖
>- 在对象创建完成后调用，即初始化属性阶段

```python
class Person:

    def __init__(self, name, age):
        self._name = name
        self._age = age

    def __init__(self, name):
        self._name = name
        self._age = 0
```

```python
## 会报错，没有此构造方法
person = Person()

# 会报错
person = Person(‘11’， 1)

# 正确写法
person = Person(‘11’)
```

#### `__str__`

>- toString() 方法，默认打印出的对象为对象信息，不会显示属性数据

```python
class Person:

    def __init__(self, name, age):
        self._name = name
        self._age = age

    def __init__(self, name):
        self._name = name
        self._age = 0

    def __str__(self):
        return f"name:{self._name}, age: {self._age}"
```

#### `__slots__`

>- 指定对象有哪些属性。python的属性默认可以动态进行赋值。例如：Person 构造函数中，仅仅有 name和age，但我们可以通过person.test=111, 给person对象增加属性test
>- 为避免随机赋值，可通过`__slots__`限定对象有哪些属性，赋值不存在的属性，则会抛出异常

```python
class Person:
    """
    __slots__ 控制类的属性有哪些
    """

    __slots__ = ("_name", "_age")
```

```python
person = Person()
print(person)

person.age = 13
# 会抛出异常
person.test = 14
```

### 内置注解

#### `property`

>- 针对私有属性，用于设置get方法，可以通过`.属性名`来访问

```python

class User:

    __slots__=('_name', '_age', '_updateTime', '_modifier')

    def __init__(self, name, age, updateTime, modifier):
      self._name = name
      self._age = age
      self._updateTime = updateTime
      self._modifier = modifier

    @property
    def age(self): 
       return self._age
```

```python
# 不加注解时，访问age属性
user = User('ttt', 12, '2023-11-23 00:00:00', '2233')
user._age

# 加注解后，访问age属性
user.age
```

#### `@属性名.setter`

>- 针对私有属性，用于set方法，可通过`.属性名`设置属性
>
>- 注解中的属性名需要和实际的属性名一致，基本格式：
>
>  ```python
>  @属性名.setter
>  def 属性名(self, 传入值):
>       self._属性值 = 传入值
>  ```
>
>  

```python
class User:

    __slots__=('_name', '_age', '_updateTime', '_modifier')

    def __init__(self, name, age, updateTime, modifier):
      self._name = name
      self._age = age
      self._updateTime = updateTime
      self._modifier = modifier

    @property
    def age(self): 
       return self._age

    @age.setter
    def age(self, age):
       self._age = age
```

```python
user = User('ttt', 12, '2023-11-23 00:00:00', '2233')
user.age = 24
```

#### `staticmethod`

>- 用于标识方法为静态方法，可通过`类名.方法名`直接访问

#### `classmethod`

>- 类方法，可以获取类相关的信息，也可以通过类直接构造一个对象并返回
>- 调用方式和`staticmethod`类似

```python
class User:

    __slots__=('_name', '_age', '_updateTime', '_modifier')

    def __init__(self, name, age, updateTime, modifier):
      self._name = name
      self._age = age
      self._updateTime = updateTime
      self._modifier = modifier

    @property
    def age(self): 
       return self._age

    @age.setter
    def age(self, age):
       self._age = age

    @staticmethod
    def getCurrentUser():
       return 'tianluhua'
    
    @classmethod
    def classInfo(cls):
       return cls('11', 23, '2222', '222')
```



### 私有属性

>- 在python没有私有属性和公共属性的关键字可以标识，一切属性都是可以访问到。
>- 只不过会有约定俗称的写法，私有属性采用下划线标识`_`，但是依然可以被访问当

