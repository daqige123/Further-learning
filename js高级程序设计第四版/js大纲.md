### 1. 对象

#### new 操作符创建对象的5步骤

​    1.  给新实例分配新空间

​    2.  将实例的[[prototype]]特性指向构造函数的prototype;

​    3.  将构造函数里的this指向新实例对象

​    4.  执行构造函数里面的代码， 就是给实例添加属性和属性值。

​    5.  返回构造函数里的返回值，如果没有返回值，就返回这个新构建的实例对象。

#### 原型，继承的方式   Object.defineProperty()







### 2.函数

#### this对象,  apply call bind,  箭头函数与普通函数的区别 ，闭包

#### 2.1 作用域终极版理解

##### 执行上下文：

​       一个函数被调用时，js就会给它创建一个执行上下文（每一个上下文都关联着一个变量对象（这个对象存储着该上下文中定义的所有变量和函数））。

​        补充：上下文分为全局上下文（window对象）和函数上下文。函数的每次执行都会创建的执行上下文都是独一无二。因为当函数执行完毕时，他产生的上下文就会被销毁，包括函数上下文中定义的变量和函数。

##### 作用域链：

​      上下文中的代码在执行时，会创建一个作用域链，这个作用域链就是，里面存储了函数执行时的上下文关联的变量对象和他父级的变量对象。

##### ![img](file://C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210430095933530.png?lastModify=1623395447)

猜测 ：其实这里的this 应该就是指向的一个上下文对应的变量对象。

定义： 在标准函数中this引用的是把函数当成方法调用的上下文对象。

#### 2.2 闭包   https://zhuanlan.zhihu.com/p/22486908

```js
		function sum() {
            let n = 1;
            return function () {
                console.log(++n);
            }
		}
		sum() // 2
		sum() // 2
       
		let a = sum();  
        a(); //  2   
        a();  // 3
        a();  // 4
// 这里是因为sum（）被存进了a, a又是全局变量，不会被垃圾回收，
// 下次调用a()的时候，a的值会在内存中保存，所以这就是再原有基础上加1的原因。
```



定义： 闭包是指那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的，return 一个函数，是为了使用内部的嵌套函数。

##### 闭包是js函数作用域的副产品，因为JS的函数内部可以使用外部的变量，所以这本来就符合了闭包的定义。

##### 闭包的作用：

#####    1.延长外部函数的局部变量的生命周期，可以实现计数器、累加器这种。

​       为什么？： 因为 a = sum()， 把函数保存在a中，a又是全局变量，不会被垃圾回收，a的值会在内存中被保存，也就是a里面的num也会被保存 ，然后下次调用a的时候，a里面的num就实现的累加，

#####    2.  隐藏变量（间接访问一个变量）

​         如果直接申明一个全局变量的话，那么很容易被误修改，因为无论哪里的代码都能通过作用域链         来操作全局变量（window永远处于作用域链的最顶层）。

​        但是如果把他变成一个函数里的局部变量，再通过返回一个函数（访问器），来让别人访问和操   作，就保险多了。



### 3. promise, awiat async

### 4. Dom、事件  事件循环

#### 4.1 Dom创建元素

```js
 var div = document.createElement('div');
 document.body.appendChild(div);

// 第二种就是 
document.write('新设置的内容<p>标签也可以生成</p>')；

// 第三种 innerHtML
var box = document.getElementById('div');
box.innerHTML = '新标签';
```

### 网络请求  jsonp cors, ajax, get post, 

#### 什么是跨域？

当一个请求url的**协议、域名、端口**三者之间任意一个与当前页面url不同即为跨域

#### 跨域解决方法

**jsonp:** 核心思想：网页通过添 加一个`<script>元素`，向服务器请求 JSON 数据，服务器收到请求后，将数据放在一个指定名字的回调函数的参数位置传回来。

```js

<script src="http://test.com/data.php?callback=dosomething"></script>
// 向服务器test.com发出请求，该请求的查询字符串有一个callback参数，用来指定回调函数的名字
 
// 处理服务器返回回调函数的数据
<script type="text/javascript">
    function dosomething(res){
        // 处理获得的数据
        console.log(res.data)
    }
</script>
```



**CORS**:  **1、普通跨域请求：只需服务器端设置Access-Control-Allow-Origin**

**图片探测：**



### 客服端存储  cook  storage的类型

### 4. 前面章节的基础知识

#### 3.1元素的基本类型

基本类型七种：

原始值：  1.null  2. undefined   3.symbol 4 number 5 string    6.boolean     

引用值： 7. object

#### 3.2 基本引用类型

Date，RegExp, Boolean, Number, String 

#### 3.3 集合引用类型

Object,  Array,  Map, Set

##### 3.3.1Array的api

Array 其实是一个构造函数，使用的时候可以省略new 

1. 数组的构建方法：Array.from(类数据结构)， Array.of() 将一组参数传换为数组
2.  检测数组: Array.isArray() 不同执行全局上下文的数组用instanceof检测会不相同
3. 迭代器的方法：keys(), values(),  entries()。
4. 填充复制：fill（）， copywith()
5. 转换为字符串：toString(), valueOf()
6. 栈和队列：push(), pop(),  shift(), unshift()在数组开头添加n个值。
7. 排序：reverse(), sort()
8. 操作方法: concat(),  slice(), splice(),
9. 搜索和位置方法：indexOf (),   lastIndexOf(), includes()
10. 迭代方法：every(),  filter(), forEach(), map() ,some()
11. reduceRight(), reduce(上一个归并值，当前元素，当前元素索引，数组本身)。 

##### 数组的复制（里面有引用值怎么复制）==》 深拷贝  

#### defer 和async

浏览器的内核可以分为渲染引擎和js引擎。渲染引擎碰到js就交出大权是因为他不知道js的内容会不会对接下来的渲染有没有影响。

1. 没有defer和async，就立即加载和执行脚本。
2. async模式   就是脚本会被异步加载，等下载完就马上执行。两个async的时候会看谁先加载完。
3. defer模式， 脚本会被异步加载，等到所有元素都解析完成后，再执行。两个defer的时候回按顺序。

#### typeof 返回值有哪些？

number, string,  boolean, undefined, function(Array,  Date..), symbol, object;  

#### 正则



####

