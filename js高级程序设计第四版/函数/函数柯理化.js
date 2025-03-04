function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}
/**
 * 函数柯里化工具函数
 * @param {Function} fn 需要柯里化的原函数
 * @returns {Function} 柯里化后的函数
 */
function curry1(fn) {
    // 获取原函数的参数长度
    const arity = fn.length;
  
    // 定义一个递归函数用于累积参数
    function curried(...args) {
      // 如果已传入的参数 >= 原函数需要的参数，直接执行
        if (args.length >= arity) {
            return fn.apply(this, args);
        } 
        // 否则返回一个新函数继续接收剩余参数
        else {
            return function(...nextArgs) {
            // 合并已有参数和新参数
            const combinedArgs = args.concat(nextArgs);
            // 递归调用自身，继续检查参数数量
            return curried.apply(this, combinedArgs);
            }
        }
    }
    return curried;
}
     
  // 使用示例
function sum(a, b, c) {
    return a + b + c;
}
   
  const curriedSum = curry1(sum);
  console.log(curriedSum(1)(2)(3)); // 输出：6
  console.log(curriedSum(1, 2)(3)); // 输出：6
  console.log(curriedSum(1)(2, 3)); // 输出：6
  console.log(curriedSum(1, 2, 3)); // 输出：6