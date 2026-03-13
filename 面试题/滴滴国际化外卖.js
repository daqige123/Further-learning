Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');

// start promise1  time1 promise2 timer2

// start  promise1，time1, promise2， time2， 
// sse 和 websocket 的区别，怎么重连的，都是基于什么协议？
// 为什么用替换 setinternal，raq 后台会执行吗，假设有两万字，会卡顿吗，怎么来让页面不卡顿。
// 翻译热更新，
// indexdb 和 localrage 的区别（同步还是异步）
// http码  405, 304  强缓存和协商缓存返回的http码 
// vue-router 的原理，hash 和 history 的区别，怎么监听到的
// vue2和 vue3 最大的区别，
// 事件循环的原理, 微任务有哪些，宏任务有哪些
// vite 为什么快， 第二次更快（预编译）比第一次
// treesharking 原理



