class MyPromise {
    constructor(executor) {
        this.state = 'pending';  // 状态机：pending/fulfilled/rejected
        this.value = undefined; // 存储成功值/失败原因
        this.callbacks = [];    // 存放 then 方法的回调队列
  
        // 成功回调（箭头函数绑定this）
        const resolve = (value) => {
            if (this.state !== 'pending') return; // 状态不可逆
            this.state = 'fulfilled';
            this.value = value;
            this.callbacks.forEach(cb => this._handle(cb)); // 触发所有等待的回调
        };
  
        // 失败回调
        const reject = (reason) => { // 同上，但设置rejected状态
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = reason;
            this.callbacks.forEach(cb => this._handle(cb));
        };
  
        // 关键点：立即执行传入的函数
        try {
            executor(resolve, reject); // 用户代码在此执行
        } catch (err) {
            reject(err); // 同步错误直接reject
        }
    }
  
    then(onFulfilled, onRejected) {
        // 关键点：返回新Promise实现链式调用
        return new MyPromise((resolve, reject) => {
          // 包装回调到统一格式
            this._handle({
                onFulfilled: typeof onFulfilled === 'function' ? onFulfilled : v => v,
                onRejected: typeof onRejected === 'function' ? onRejected : err => { throw err },
                resolve, // 新Promise的resolve
                reject   // 新Promise的reject
            });
        });
    }
  
    _handle(callback) {
        if (this.state === 'pending') {
            this.callbacks.push(callback); // 异步未完成时存储回调
            return;
        }
    
        // 根据状态选择处理器
        const cb = this.state === 'fulfilled' 
            ? callback.onFulfilled 
            : callback.onRejected;
    
        // 模拟微任务队列（实际应用应使用queueMicrotask）
        setTimeout(() => {
            try {
                // 执行回调（可能返回普通值或Promise）
                const result = cb(this.value);
                
                // 处理返回值
                if (result instanceof MyPromise) {
                // 若返回Promise，则等待其状态变化
                result.then(callback.resolve, callback.reject);
                } else {
                // 普通值直接传递
                callback.resolve(result);
                }
            } catch (err) {
                callback.reject(err); // 捕获回调中的错误
            }
        }, 0);
    }
}

// 测试用例
new MyPromise((resolve) => {
    setTimeout(() => resolve('成功啦!'), 1000)
})
.then(res => {
    console.log(res);  // 1秒后输出"成功啦!"
    return '第二次'
})
.then(console.log);  // 立即输出"第二次"