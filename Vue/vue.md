### 说说你对vue的理解?

vue的一个优点是双向数据绑定， 在数据操作方面比较简单。

组件化：实现了html元素的封装，组件重用比较方便。

虚拟DOM:  不在直接操作dom, 解放性能。

#### 渐进式框架的理解
答：主张最少；可以根据不同的需求选择不同的层级；

### 说说你对双向绑定的理解?

```js
v-model 

let input = document.querySelector("#input");
let p = document.querySelector("#p");
let object = {message: "hello world"};
// data ==> input
Object.defineProperty(object, 'message', {
	get(){
        return val;
    },
    setter(newValue) {
 		p.innerHTML = newValue;
        input.value = newValue;
    }
})
// input ==> data
input.addEventListener("input", function (e){
    obj.message = e.target.value;
}) 


```

### 说说你对Vue生命周期的理解?

<img src="https://segmentfault.com/img/bVVORa?w=1200&h=3039/view" alt="preview" style="zoom:200%;" />

总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。
创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和**数据对象**data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。                    data的初试化完成了。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。      
更新前/后：当data变化时，会触发beforeUpdate和updated方法。
销毁前/后：**beforeDestroy**钩子函数在实例销毁之前调用。对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在，实例仍然完全可用。**destroyed** 钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### Vue组件间通信方式都有哪些?

**父传子：**在props里面给子组件定义属性， 然后就是在父组件中使用子组件时，将父组件中的data中的数据给他绑定到定义的属性上去 。然后子组件就可以使用这些值了。

**子传父：** 在子组件中自定义事件this.$emit('send', item),  在父组件中通过v-on绑定子组件发送过来的事件。 

$parent和$children

### Vue中的v-show和v-if怎么理解？

v-show 实质上是修改的元素的样式的display: none， v-if 就是

### 为什么v-for和v-if不建议一起使用



### vueX

vue框架中状态管理。在main.js引入store，注入。
新建了一个目录store.js，….. export 。
场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车.

state => 基本数据(数据源存放地)
getters => 从基本数据派生出来的数据
mutations => 提交更改数据的方法，同步！
actions => 像一个装饰器，包裹mutations，使之可以异步。
modules => 模块化Vuex

### 知道模块化编程吗

### 看过vue源码吗

### diff 算法了解吗

### webpack

### CLI

### **为什么使用key?**
答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。
作用主要是为了高效的更新虚拟DOM。

#### 如何让CSS只在当前组件中起作用？
答：在组件中的style前面加上scoped

**13.请说出vue.cli项目中src目录每个文件夹和文件的用法？**
答：assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置; app.vue是一个应用主组件；main.js是入口文件

​	······

**20.单页面应用和多页面应用区别及优缺点**
答：单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。
多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新
单页面的优点：
用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。
单页面缺点：
不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。