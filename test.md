# vue2 和 vue3 最大的区别

## 响应式

1. vue2 define property， 缺点： 不能监听数值索引修改，对象新属性的新增或删除。而vue3： 使用 proxy，天然支持数组，对象属性的新增删除，并且还支持 weakmap, set, map, weadkset等数据类型，
2. vue2初始化成本高，递归重写 data 里面的所有数据，初始化成本低，只有当访问到具体子属性时，才会 把具体的子属性给 proxy 化。
3. 依赖收集的方式的变化，vue2 是每一个属性自己维护一个 deep 数组，里面装各种 watcher，而 vue3 是全局维护一个 weakmap（ target对象， set（对象属性， edffect）），更利于内存回收。


## 组合式 api & 选项式 api

从代码组织的角度： 组合式 api 比较难受，他分为 data，method，compute , 当代码比较多的时候，同一个功能，需要分散开来，写代码也得滑来滑去，而且较难复用。而 vue3 中，我们完全可以抽出去一个 hooks，在各种地方复用。

## 编译时优化

1. 静态提升，vue3 会把永远不会变的静态节点提前标注，提升到 render 函数外面，不参与 pathch，这也是 vue3 渲染性能变好的最大的原因。
2. patch flags, 会给节点分类，打上不同的 patchflags，比如 class 变化类型，就直接对这个 flag 进行相应的对比。
3. diff 算法的改进，以前是双端 diff，现在是最大子序列 diff。

## 树摇优化

vue3 采用 es module重写，支持按需导入，如果你没用到conputed，ref这些，他就不会打包进来。
