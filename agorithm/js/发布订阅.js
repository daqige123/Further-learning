class EventEmitter {
    constructor() {
        this.events = {};
    }
    on (event, fn) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(fn);
    }
    emit(event, ...args) {
        const fns = this.events[event] || [];
        fns.forEach(fn => fn(...args));
    }
    off (event, fn) { // 取消某个订阅，删除事件的某个回调。
        const fns = this.events[event] || [];
        this.events[event] = fns.filter(cb => cb !== fn);
    }
    once(event, fn) {
        const wrapper = (...args) => {
            fn(...args)
            this.off(event, wrapper)
        }
        this.on(event, wrapper)
    }
}

const emitter = new EventEmitter()

function fn1(name){
    console.log("hello", name)
}

function fn2(name){
    console.log("welcome", name)
}

emitter.on("login", fn1)
emitter.on("login", fn2)

emitter.emit("login", "Tom")