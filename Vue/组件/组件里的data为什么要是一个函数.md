#### 组件里的data为什么要是一个函数，然后用函数返回一个对象

组件是可复用的`vue`实例，一个组件被创建好之后，就可能被用在各个地方，而组件不管被复用了多少次，组件中的`data`数据都应该是相互隔离，互不影响的，基于这一理念，组件每复用一次，`data`数据就应该被复制一次，之后，当某一处复用的地方组件内`data`数据被改变时，其他复用地方组件的`data`数据不受影响

```js
Vue.component('cpn', {
    template: '#cpn',
    data() {
        return {
            counter: 0,
        }
    },
})
```

```js
//第一种情况：
        function fun1() {

            return {
                uname: `ash`,
                age: 18
            }
            //这里返回一个字面量对象，
            //每次返回的不是同一对象地址，所以改变obj2的age属性，obj1，obj3,age属性是不会有影响的
        }
        obj1 = fun1();
        obj2 = fun1();
        obj3 = fun1();
        obj2.age = 16;
        console.log(obj1.age);
        console.log(obj2.age);
        console.log(obj3.age);
```

### 我的理解：

```js
如果是
data： {a: 100}的话， 相当于直接给所有的组件实例 instatent.data = Component.data
===》 所有的instance.data = {a:100}
而
data () {
    return {   // 这里是返回的对象字面量
        a: 100,
    }
}
其实相当于
data() {
    let obj = new obj();
    obj.a = 100;
    return obj;
}
所以就是给每个组件实例化的时候，就相当于 组件里的 instants.data = Component.data() 
===> data() 函数给所有instances通过对象字面量 都返回了一个自己的实例。
```





