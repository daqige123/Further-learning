const PENDING = 'pending';
const FULFILLED = 'fulFilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(excutor) {
        this.value = undefined;
        this.status = PENDING;
        this.callbacks = [];
        const resolve = (value) => {
            if (this.status !== PENDING) {
                return;
            }
            this.status = FULFILLED;
            this.value = value;
            this.callbacks.forEach((cb) => {
                this._handle(cb);
            })
        }
        const reject = (reason) => {
            if (this.status !== PENDING) {
                return;
            }
            this.status = REJECTED;
            this.value = reason;
            this.callbacks.forEach((cb) => {
                this._handle(cb);
            })
        }
        try {
            excutor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._handle({
                onFulfilled: typeof onFulfilled === 'function' ? onFulfilled : v => v,
                onRejected: typeof onRejected === 'function' ? onRejected : (err) => { throw err },
                resolve,
                reject
            })
        })
    }
    catch(onRejected) {
        this.then({}, onRejected);
    }
    _handle(callback) {
        if (this.status === PENDING) {
            this.callbacks.push(callback);
        }
        const cb = this.status === FULFILLED ? callback.onFulfilled : callback.onRejected;
        setTimeout(() => {
            try {
                const result = cb(this.value); // 就是在这儿传来的value
                if (result instanceof MyPromise) {  // 若返回Promise，则等待其状态变化
                    result.then(callback.resolve, callback.reject)
                } else {
                    callback.resolve(result);
                }
            } catch (error) {
                callback.reject(error);
            }
        }, 0)
    }
}
