// Vue2简易版的双向绑定
const divTest = document.querySelector('.test');
const button = document.querySelector('button');
let initText = 'init'
let data = {
    // text: ''
}
Object.defineProperty(data, 'text', {
    get() {
        console.log(initText, 'get 获取值！');
        // return initText;
        return divTest.innerText;
    },
    // 响应式的实现， 借助data对象和defineProperty 实现了{}data的改动 =》 dom的改动
    set(newValue) {
        console.log(newValue, 'set 修改值！');
        divTest.innerText = newValue;
    }
    // 双向绑定则好需要第二步， div的改动同步给data
})
button.addEventListener('click', (e) => {
    divTest.innerText += 1;
    // 就是这一步，简单的赋值给data.text就行啦
    data.text = divTest.innerText;
    console.log(data.text);
})
