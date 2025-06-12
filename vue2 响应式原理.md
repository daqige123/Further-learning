# 请阐述vue2响应式原理

**响应式数据的最终目标**，是当对象本身或对象属性发生变化时，将会运行一些函数，最常见的就是 render 函数。（其他的比如watch 里面的函数也肯定会重新执行）

在具体实现上，vue 用到了**几个核心部件：**

1. Obserever

2. Dep

3. Watcher

4. Scheduler

   ### Obserevr

   Observe 要实现的目标非常简单，就是把一个普通对象给转成响应式对象。

   为了实现这一点，Observer 把对象的每一个属性通过 Object.defineProperty 转换为带有 getter 和 setter 的属性。这样一来当访问或者设置属性的时候，vue 就可以做一些其他的事情。

   可以使用 Vue.observable()简介使用这个功能。

   这一件事发生在组件 beforecreate 之后，create 之前。

   具体实现上，它会递归遍历对象的所有属性，以完成深度的属性转换。

   > Tip： 细节可参考 test.html
   >
   > 1. 由于遍历时只能遍历到对象的当前属性，因此无法监测到后面动态增加或删除的属性，因此需要使用$set,$delete 这两个实例方法，来对已有响应式对象属性进行添加或删除。
   > 2. 对于数组，vue 会更改他的隐式原型，来监听那些 可能改变数组内容的方法。 数组-> 自定义对象(比如：pop, push)-> Array.prototype
   >
   > 

   总之 observer的目标就是让一个对象，他属性的读取，赋值，内部的数组的变化都要被 vue 感知到。

   感觉就是刚开始初始化时（beforecreate，create 之间）给 data 里面的数据通过 Object.defineProperty 来深度遍历一遍，将所有属性转换成 getter 和 setter 属性，数组的话就直接改写一下隐式原型。

   