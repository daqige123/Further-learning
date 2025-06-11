# 请阐述vue2响应式原理

**响应式数据的最终目标**，是当对象本身或对象属性发生变化时，将会运行一些函数，最常见的就是 render 函数。（其他的比如watch 里面的函数也肯定会重新执行）

在具体实现上，vue 用到了**几个核心部件：**

1. Obserever

2. Dep

3. Watcher

4. Scheduler

   ### Obserevr

   Observe 要实现的目标非常简单，就是把一个普通对象给转成响应式对象。

   为了实现这一点，Observer 把对象的每一个属性通过 Objject.defineProperty 转换为带有 getter 和 setter 的属性。这样一来当访问或者设置属性的时候，vue 就可以做一些其他的事情。

   可以使用 Vue.observable()简介使用这个功能。

   这一件事发生在组件 beforecreate 之后，create 之前。