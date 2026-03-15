// 事件触发后就重新计时，只执行最后一次。
function debounce(fn, delay) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        console.log(timer);
        timer = setTimeout(()=> {
            fn.apply(this, arguments);
            // fn(); 之所以不直接调用，用 apply 是为了绑定 this，万一是在对象的方法用，就会有问题。
        }, delay);
    }
}
// const debounceFn = debounce(() => {
//     console.log('执行了')
// }, 2000)
// debounceFn()
// debounceFn()
// debounceFn()
// setTimeout(()=> {
//     debounceFn();
// }, 1000)

// 这一版会有一个问题，就是没有立即执行，而是等到 delay 后执行。
function throttle(fn, delay) {
    let isRun = false;
    return function() {
        if (isRun) {
            return;
        }
        isRun = true;
        setTimeout(() => {
            fn.apply(this, arguments);
            isRun = false;
        }, delay)
    }
}

//  这一版第一次就会执行，因为第一次last 是 0，now 肯定是一个 10 位数，必定大于 delay
function throttle2(fn, delay = 300) {
    let lastTime = 0
    return function (...args) {
        const now = Date.now()

        if (now - lastTime >= delay) {
            lastTime = now
            fn.apply(this, args)
        }
    }
}