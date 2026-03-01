function curry(fn) {
    // 记录 fn 需要的参数个数
    const arity = fn.length;

    return function curried(...args) {
        // 如果参数够了，直接执行
        if (args.length >= arity) {
            return fn.apply(null, args);
        } else {
            // 如果参数不够，返回一个新函数
            // 关键点：这里利用闭包，把当前已有的 args 和未来的 args 拼接起来
            return function (...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

// 使用示例
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 输出：6
console.log(curriedSum(1, 2)(3)); // 输出：6
console.log(curriedSum(1)(2, 3)); // 输出：6
console.log(curriedSum(1, 2, 3)); // 输出：6