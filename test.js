// 防抖
function debounce(fn, delay) {
    let timer = null;
    return function() {
        console.log('1111')
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    }
}

// function a1() {
//     console.log(new Date().getSeconds());
// }

// const deFunction = () => {
//     debounce(a1, 2000)();
// }
// deFunction();
// deFunction();
// deFunction();
// deFunction();

// const debounceFn = debounce(() => {
//     console.log('执行了')
// }, 2000)
// debounceFn()
// debounceFn()
// debounceFn()
// setTimeout(()=> {
//     debounceFn();
// }, 1000)