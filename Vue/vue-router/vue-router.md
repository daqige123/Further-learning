# vue-router

## 1. vue-router 是什么？

本质上Vue Router 是 Vue.js 官方提供的客户端路由管理库，用于构建单页应用（SPA）的页面导航系统。

## 2.SPA 路由的核心原理？

###要实现前端路由，需要解决两个核心：

1. 如何改变 URL 却不引起页面刷新？
2. 如何检测 URL 变化了？

#### hash 模式

hash模式的标志是在域名之后带有一个 `#`，常用作锚点在页面内进行导航，**改变 URL 中的 hash 部分不会引起页面刷新**

`http://localhost:8888/#/home`

通过 `window.location.hash`获取到当前url的hash；hash模式下通过 `hashchange`方法可以监听url中hash的变化

```
window.addEventListener("hashchange", function(){}, false)
```

**优点： hash模式的特点是兼容性更好，并且hash的变化会在浏览器的history中增加一条记录，可以实现浏览器的前进和后退功能；**

**缺点：由于多了一个 `#`，所以url整体上不够美观**

通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：

1. 通过浏览器前进后退改变 URL
2. 通过 `<a>`标签改变 URL
3. 通过window.location改变URL

#### history模式

history模式是另一种前端路由模式，它基于HTML5的history对象

通过 `location.pathname`获取到当前url的路由地址；history模式下，通过 `pushState`和 `replaceState`方法可以修改url地址，结合 `popstate`方法监听url中路由的变化

**优点：history模式的特点是实现更加方便，可读性更强，同时因为没有了 `#`，url也更加美观；**

**缺点：当用户刷新或直接输入地址时会向服务器发送一个请求，所以history模式需要服务端进行支持，将路由都重定向到根路由**

1. 通过浏览器前进后退改变 URL 时会触发 popstate 事件
2. 通过pushState/replaceState或 `<a>`标签改变 URL 不会触发 popstate 事件。
3. 好在我们可以拦截 pushState/replaceState的调用和 `<a>`标签的点击事件来检测 URL 变化
4. 通过js 调用history的back，go，forward方法触发该事件

## 3. Vue Router 路由跳转流程

一个典型跳转流程：

```
router.push('/user')
```

内部流程：

router.push-> 路由匹配-> beforeEach-> beforeRouteEnter-> 更新URL->渲染组件
