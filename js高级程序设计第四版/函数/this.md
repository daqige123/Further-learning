### this

1. 在标准函数中的this引用的是把函数当作方法调用的上下文对象。我们判断this到底指向哪儿的时候必须要等他调用的时候才能确定。

2. 在默认情况(非严格模式下,未使用 'use strict'),没找到直接调用者(通常是指匿名函数),则this指的是 window (约定俗成)。

   ```js
   比如：
   		function King() {
               this.myname = "Henry";
               // setTimeout(() => {
               //     console.log(this);   // King
               //     console.log(this.myname);  // henry
               // }, 1000)
               console.log(this);
               setTimeout(function () {
                   console.log(this);
                   console.log(this.myname);
               }, 1000)
           }
           new King();
   // 重点： 函数名只是一个指针(存的地址)，所以King里面的匿名函数没有明确的调用者，不会绑定到对象上，this会默认指向window.
   ```

   

3. 在严格模式下,没有直接调用者的函数中的this是 undefined。

4. 使用call,apply,bind(ES5新增)绑定的,this指的是 绑定的对象。

#### 箭头函数的this

在箭头函数中，this引用的是定义箭头函数的上下文。

#### apply、call

##### 因为函数就是在不同执行上下文中执行的一段代码，所以我们可以使用apply，call来改变这些代码的执行上下文。

call是一个个的传，apply是一个数组。