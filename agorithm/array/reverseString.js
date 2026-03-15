function reverse1(str) {
    // 字符串没有 reverse 方法，但是数组有，哈哈哈
    return str.split('').reverse().join('');
}

function reverse2(str) { // 字符串
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// 递归
function reverse3(str) {
    if (str === null || str.length <= 1)
        return str;
    return reverse3(str.substring(1)) + str.charAt(0);

}

let str = "hello world!";
console.log(reverse1(str));
console.log(reverse2(str));
console.log(reverse3(str));