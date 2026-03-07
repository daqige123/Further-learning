## vue2 和vue3响应式的区别？
### vue2原理：
    递归遍历 data 属性， 使用object.defineProperty()来重写属性的 getter 和 setter，在 getter 的时候收集依赖，在 setter 的时候派发更新。
#### 缺点：
    1. 不能监听到对象属性的新增和删除，只能使用$set和$delete。
    2. 不能监听到数组的索引修改和长度，vue 重写数组的7 种方法。
    3. 初始化时必须递归遍历整个对象树，对象比较大时，初始化慢。
### vue3原理：
    使用 proxy 和 reflect 来实现响应式。
#### 优点：
    1. proxy天然支持对象的增删，以及数组的索引修改&长度。
    2. 懒加载：初始化时，只有访问到嵌套对象时，才会proxy 化。
    3. 支持 map，set，weakmap 和 weakset 等类型。
    4. 其实依赖收集的方式也有改变，vue2 是每个属性自己维护一个 dep列表，里面装的是需要更新的 watcher，
    而vue3 是直接采用的weakmap 来记录依赖和副作用的，大致结构 weakmap（target）-》set（（属性），（effect））。开销更小，更利于内存回收。
