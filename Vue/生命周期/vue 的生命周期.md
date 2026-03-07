## 整个 vue 项目的生命周期？
当你 createApp(APP) 时，
1. 创建 vue 实例，其中会包含mount，use，component 等方法的上下文。
2. vue 会将你传入的根组件，编译成根vnode。
3. 然后生命周期的启动：此时会触发 create，beforecreate 钩子，其中
beforecreate： 实例初始化完成，数据初始化完成，
create：此时已经完成响应式数据的处理，可以访问 data，props，但是 dom 还没生成。
4. beforemounted 和 mounted：
在 mounted 之前会完成整个 dom 的渲染和挂载，最开始是根组件，vnode 开始 patch，如果根组件有子组件开始递归 patch，有点类似于洋葱模型，当页面首次加载，父子组件同时存在时，执行顺序如下：
父组件 beforeCreate / setup()
父组件 created / setup() 完成
父组件 beforeMount
子组件 beforeCreate / setup() (父组件渲染到子组件标签时，触发子组件初始化)
子组件 created / setup() 完成
子组件 beforeMount
子组件 mounted (子组件 DOM 生成完毕)
父组件 mounted (父组件等待所有子组件挂载完成后，才认为自己挂载完成)
5.patch生成 dom：
vue 会对比新旧两棵虚拟 DOM 树（Diff 算法），并执行 Patch（打补丁） 操作：
• 创建： 对于新节点，调用 document.createElement。
• 更新： 利用编译阶段标记的 Patch Flags，Vue 3 不再全量对比，而是只对比可能变化的属性（如只更新文本，不检查 class）。
• 插入： 将处理好的 DOM 节点插入到父容器中，完成首屏渲染。


