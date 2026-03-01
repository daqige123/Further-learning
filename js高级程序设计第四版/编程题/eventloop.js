// 事件循环的作用？
// 是为了让 JavaScript 能够在单线程的环境下，处理异步任务和事件。它通过一个循环机制，不断地检查任务队列中是否有待处理的任务，并按照一定的顺序执行这些任务。
// 事件循环的工作原理如下：
// 1. JavaScript 引擎会维护一个任务队列（Task Queue），其中包含了所有待处理的任务。这些任务可以是用户交互事件、网络请求、定时器等。
// 2. 当 JavaScript 引擎执行完当前的同步代码后，它会进入事件循环阶段，检查任务队列中是否有待处理的任务。

const { time } = require("console");


// 重点： 1.是执行完同步代码后才会检查任务队列中的任务，如果是 while(true) 这种死循环的话，事件循环就无法进入，任务队列中的任务就无法被执行了。
// 2.微任务（Microtasks）永远会优先于宏任务（Macrotasks）执行。
// 3.await 相当于 promise.then()，它会将后续的代码放入微任务队列中，而不是直接执行。这就是为什么在使用 await 时，后续的代码会在当前同步代码执行完之后才执行的原因。
// 1. 
// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3");
//     Promise.resolve().then(() => {
//         console.log("4");
//     });
// });

// console.log("5");

// 2. await的本质
// console.log("A");

// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }

// test();

// console.log("D");

// 题目 3：await + setTimeout 混合
// async function foo() {
//     console.log("1");
//     await new Promise(resolve => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             resolve();
//         }, 0);
//     });
//     console.log("4");
// }

// console.log("5");
// foo();
// console.log("6");
// 输出结果：5 1 2 6 3 4
// 512634
// 4.
console.log("start");

setTimeout(() => {
    console.log("timeout1");

    Promise.resolve().then(() => {
        console.log("promise1");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("promise2");

    setTimeout(() => {
        console.log("timeout2");
    }, 0);
});

console.log("end");
// start end promise2 timeout1 promise1 timeout2
// start end promise2 timeout1 promise1 timeout2

// 5. node nexttick
// console.log("1");

// process.nextTick(() => {
//     console.log("2");
// });

// Promise.resolve().then(() => {
//     console.log("3");
// });

// setTimeout(() => {
//     console.log("4");
// }, 0);

// console.log("5");
