function flat(arr, deepth) {
    if (deepth <= 0) return arr;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && deepth > 0) {
           res.push(...flat(arr[i], deepth - 1)); // 核心逻辑，如果是数组，递归 flat
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

function flat2(arr, deepth) {
    if (deepth === 0) return arr;
    return [].concat(...arr.map(item => Array.isArray(item) ? flat(item, deepth - 1) : item));
}

const arr = [1, [[[1], 2, 3], 4], 5, [[[6], 7, 8], 4]];
console.log(flat2(arr, 1));
console.log(flat2(arr, 2));