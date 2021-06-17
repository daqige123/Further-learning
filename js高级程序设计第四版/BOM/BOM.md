### BOM

1. window.top对象指向第一个窗口，而parent对象指向当前窗口的父窗口

2. window.open("http://www.wrox.com", "topFrom")  这里的第二个参数是一个已经存在的窗口。

3. 系统对话框   alert(), confirm()确认框， promt()提示框，一般用来提示用户输入信息。

### 路由的两种方式(实现页面的无刷新更新)

其实主要原理就是： 我们改变url的hash值是不会刷新页面的，但是会算作一条浏览器中的历史记录。然后就可以被后退，前进按钮操作了。

#### Location对象的hash改变路由

使用`window.location.hash`属性及窗口的`onhashchange`事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。

##### 主要原理就是：

1. 散列值（就是#home）是不会随请求发送到服务器端的，所以改变hash，不会重新加载页面；但是浏览器的地址栏是会变化的。
2. 监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置hash值；

```js
//设置 url 的 hash，会在当前url后加上'#abc'
window.location.hash='abc';
let hash = window.location.hash //'#abc'

window.addEventListener('hashchange',function(){
	//监听hash变化，点击浏览器的前进后退会触发
})
```



#### history对象改变路由

history对象提供了操作浏览器历史记录的能力，这里也可以实现在历史记录中导航，而且还可以修改历史记录。

##### 导航

```js
// history.go（） 可以沿着任何方向随意跳转 
history.go(-1) //  -1代表后退一页， 1代表前进一页， 2 代表前进两页
```

#### History.pushState() 和replaceState()

该方法用于在历史中添加一条记录。`pushState()`方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。history.pushState(object, title, url)

```js
// 假定当前网页是 example.com/example.html。
history.pushState({page: 1}, '', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, '', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, '', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3
```

