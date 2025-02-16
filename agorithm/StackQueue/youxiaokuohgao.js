// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：

// 1、左括号必须用相同类型的右括号闭合。

// 2、左括号必须以正确的顺序闭合。
function youxiaokuohao1(str) {
    let stack = [];
    let map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i]=== '[') {
            stack.push(str[i]);
        }
        if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            if (stack.length === 0) return false;
            if ( str[i] !== map.get(stack.pop())) return false;
        }
    }
    return stack.length === 0;
}