function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            track(target, key)
            return target[key]
        },
        set(target, key, value) {
            target[key] = value
            trigger(target, key)
        }
    })
}

function ref(value) {
    const refObject = {
        get value() {
            track(refObject, 'value')
            return value
        },
        set value(newValue) {
            value = newValue
            trigger(refObject, 'value')
        }
    }
    return refObject
}
let activeEffect

function track(target, key) {
    if (activeEffect) {
        const effects = getSubscribersForProperty(target, key)
        effects.add(activeEffect)
    }
}
function trigger(target, key) {
    const effects = getSubscribersForProperty(target, key)
    effects.forEach((effect) => effect())
}

// 当依赖change
function whenDepsChange(update) {
    const effect = () => {
        activeEffect = effect
        update()
        activeEffect = null
    }
    effect()
}




// 作者：前端胖头鱼
// 链接：https://juejin.cn/post/7090328834318270494
const $app = document.querySelector('#app')

const bucket = new Set()

const state = new Proxy({ text: 'hello fatfish' }, {
    get(target, key) {
        const value = target[key]
        // 第一步：收集依赖，在读取key时，将effect函数存储起来
        bucket.add(effect)
        console.log(`get ${key}: ${value}`)
        return value
    },
    set(target, key, newValue) {
        console.log(`set ${key}: ${newValue}`)

        target[key] = newValue
        // 第二步：设置值时，将依赖执行
        bucket.forEach((fn) => fn())
    }
})

function effect() {
    console.log('执行了effect')
    $app.innerText = state.text
}

effect()

setTimeout(() => {
    state.text = 'hello Vue3'
}, 1000)

