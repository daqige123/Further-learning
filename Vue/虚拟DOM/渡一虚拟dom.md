# 虚拟dom 树

### 什么是虚拟 dom 树？

虚拟 dom（this._vnode） 本质上就是一个 js 对象。就是 vue 框架设计用来表示实际 html dom 的一个 js 对象，里面包含了各种属性，比如 data、children、attributs等等。

每一个vue 组件都有一个 render 函数，render 函数就是用来生成虚拟 dom 树的，这就意味着每一个组件都对应着一颗虚拟 dom 树。

### 为什么需要虚拟dom树？

在vue 中，渲染视图的时候会调用 render 函数，这种渲染不仅发生在组件创建时，也发生在响应式数据更新时。

如果每一次就直接操作真实 dom，那么会带来极大的性能损耗，极大的想降低渲染效率。



