// 选一个项目自己介绍
// 做了性能优化，还有优化手段么
// 你做了防作弊，那你了解浏览器的安全策略有哪些么？ 比如，cookie，cros，。。
// http1和 http2 的区别
// 宏任务 微任务的 console
const now1 = new Date().getSeconds();
new Promise((resolve) => {
    console.log('111');
    resolve();
    console.log(222);

}).then(function () {
    console.log(333);
    while (true) {
        let now2 = new Date().getSeconds();
        if (now2 - now1 > 4) {
            console.log('4444');
            break;
        }
    }
});

setTimeout(() => {
    console.log('settimeout');
}, 1000);
console.log('end');

// 找出所有数组中消失的数，letcode448 要求不使用额外空间，时间复杂度 O（n）
// 一个数能写成 2 的阶层相加，比如，24 = 2^4 + 2^3, 输出[4,3]
// 怎么做代码放劣化