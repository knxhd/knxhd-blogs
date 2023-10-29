---
title: Scala基础语法
date: '2023-10-27 08:00:00'
sidebar: 'auto'
categories:
 - 大数据
tags:
 - Scala
---

## 基本语法

>- 区分大小写
>
>- 类名，首字母大写，例如： `class HelloWorld`
>
>- 程序名称和类名称一致
>
>- 执行方式：通过main方法执行
>
>  ```scala
>  def main(args: Array[String]): Unit = {
>  	 println("Hello World!")
>  }
>  ```

## 关键字

| abstract  | case        | catch    | class   |
| --------- | ----------- | -------- | ------- |
| def       | do          | else     | extends |
| false     | final       | finally  | for     |
| forSome   | if          | implicit | import  |
| lazy      | match       | new      | null    |
| object    | override    | package  | private |
| protected | return      | sealed   | super   |
| this      | throw       | trait    | try     |
| true      | type        | val      | var     |
| while     | with        | yield    |         |
| -         | :(明确类型) | =        | =>      |
| <-        | <:          | <%       | >:      |
| #         | @           |          |         |

## 数据类型

| 类型    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| Byte    | 8位                                                          |
| Short   | 16位                                                         |
| Int     | 32位                                                         |
| Long    | 64位                                                         |
| Float   | 32位                                                         |
| Double  | 64位                                                         |
| Char    | 16位                                                         |
| String  |                                                              |
| Boolean | true或false                                                  |
| Unit    | 表示无值，和其他语言中void等同。用作不返回任何结果的方法的结果类型。Unit只有一个实例值，写成()。 |
| Null    | null 或空引用                                                |
| Nothing | Nothing类型在Scala的类层级的最底端；它是任何其他类型的子类型。 |
| Any     | Any是所有其他类的超类                                        |
| AnyRef  | AnyRef类是Scala里所有引用类(reference class)的基类           |

