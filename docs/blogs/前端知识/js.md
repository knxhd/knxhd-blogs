---
title: JavaScript
date: '2024-05-24 09:19:26'
sidebar: 'auto'
categories:
 - 前端
tags:
 - JavaScript
---

## onselectstart

> - 作用：禁止双击或复制
> - onselectstart几乎可以用于所有对象，其触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中）。该事件常使用于使目标对象“禁止变蓝”，比如在很多地方当用户双击时，一些元素会变成蓝色（选中状态），而当我们要避免这种情况时就可以使用该事件。

1. 禁止所有的元素被复制或双击选中

```js
 
<script type="text/javascript">
      document.onselectstart = function () {
        return false;
      };
</script>
```

2. 禁止某些元素

```js
 
<script type="text/javascript">
      document.getElementById('idName').onselectstart = function () {
        return false;
      };
</script>
```