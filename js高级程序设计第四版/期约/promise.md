### Promise

##### 回调地狱 ：深度嵌套。

promise有3个状态，peding（待定）, fulfilled（兑现）, rejected（拒绝）。

实例化一个期约的时候必须传入一个执行器（就是一个函数，可以为空）， 因为我们要用这个执行器来控制期约的状态。

**注意：** 

1. 期约里的执行函数是同步执行的。

2. 状态转换不可撤销，比如先resolved(), reject() 后面的reject是没有效果的。

```js
new Promise((resolve, reject){
    let data = 一些异步请求的返回结果；
    if (状态码==200)  resolve(data);
	else reject(data.error);
}).then (
    (data) => {} // 成功
    (error) => {} // 失败
)
```

#### 期约连锁

```js
        setTimeout(function () {
            console.log("第一个回调！");
            setTimeout(function () {
                console.log("第二个回调！");
                setTimeout(function () {
                    console.log("这是第3个回调！")
                    setTimeout(console.log("这是第四个回调！"), 1000)
                }, 1000)
            }, 1000)
        }, 1000);

       let p1 = new Promise((p1, p2) => {
            setTimeout(p1, 1000)
        }).then(function () {
            console.log("第1个promise回调！")
            return new Promise((p1, p2) => { setTimeout(p1, 1000) })
        }).then(function () {
            console.log("第2个promise回调！")
            return new Promise((p1, p2) => { setTimeout(p1, 1000) })
        }).then(function () {
            console.log("第3个promise回调！")
            return new Promise((p1, p2) => { setTimeout(p1, 1000) })
        }).then(function () {
            console.log("第4个promise回调！")
            return new Promise((p1, p2) => { setTimeout(p1, 1000) })
        })
```

##### 4. promise.all()

两个期越都解决，才能进行.then()

promise.all()就是传入一个promise数组,然后.then(result=>{})里面的result也是一个数组，包含了两个期越传入的值。

```js
let pAll = Promise.all([
            new Promise((resolve, reject) => {
                setTimeout(resolve({ name: 'daqige', age: 25 }), 2000);
            }),

            new Promise((resolve, reject) => {
                setTimeout(resolve({ name: '张政', age: 25 }), 1000);
            }),

        ])
        pAll.then(
            result => {
                console.log(result)
                console.log(result[1])
            }
        );
```

##### 5. Promise.race()

与Promise.all()相似，但是.then只执行状态先落定的期约的镜像。



#### 异步函数

为啥要用异步函数？ 因为我们其实把所有的异步操作都给放到promise里面去，也挺麻烦的。

直接定义一个异步函数，直接就可以异步执行了，就更方便了。

#### async

1. async 用于声明一个 function 是异步的，可以用在函数表达式，函数声明，箭头函数上。

而 await 用于等待一个异步方法执行完成。

2. 异步函数的返回值会被Promise.resolve()包装成一个期约。

```js
async function foo() {
    console.log(1);
    return 3;  
    // 这里会被包装成 return Promise.resolve(3);<===> return New Promise((resolve, reject)=>resolve(3))
}
// 因为返回的是一个期约，所以我们可以使用.then()来处理返回值
foo().then(console.log); // 这一步就是异步了，并且还属于微事件，要跟在宏事件后面。
console.log(2)   // 1 2 3
```



#### await

await只能在异步函数中使用，除非立即使用函数 。

await 会暂停执行异步函数后面的代码，先让出js的执行线程。



#### 注意：

1. 如果不使用 await.其实async 只是相当于一个标识符，并没有任何的异步效果。当然后面跟个.then()是异步的，这就是一个期约了。

2. 只有加了await，才会异步，就是暂时不执行了，等到异步操作完成了，在继续执行函数里面的代码。
3. 哈哈，await可不是简单的停下来等待一个值那么简单。即使await后面跟一个立即可用的值，函数的其余部份也会被异步求值。

4. 执行顺序规律：

   1. await后面的一定在await这一行的后面执行

   2. awit Promise 是排在最后面的，因为他是两个异步任务所以排在最后面。