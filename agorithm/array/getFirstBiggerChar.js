// 输入一个已排序的数组如 [ 'a', 'c', 'f' ]（至少两个不同字母，可能存在重复的字符），一个字符如 b，找出大于所给字符的最小字母，如果没有，则返回第一个字母
function getFirstBiggerChar(letters, target) {
    const n = letters.length;
    let left = 0, right = n - 1;
    let res = n; // 初始化为数组长度，表示未找到

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (letters[mid] > target) {
            res = mid; // 记录可能的候选位置
            right = mid - 1; // 继续向左寻找更小的候选
        } else {
            left = mid + 1; // 向右寻找更大的字符
        }
    }

    // 如果 res 未更新，返回第一个字符
    return res < n ? letters[res] : letters[0];
}


console.log(getFirstBiggerChar(['a', 'c', 'f'], 'b')) // c
console.log(getFirstBiggerChar(['a', 'c', 'f'], 'c')) // f
console.log(getFirstBiggerChar(['a', 'c', 'f'], 'b')); // 输出 'c'
console.log(getFirstBiggerChar(['c', 'f', 'j'], 'a')); // 输出 'c'
console.log(getFirstBiggerChar(['x', 'y', 'y'], 'z')); // 输出 'x'
console.log(getFirstBiggerChar(['a', 'b', 'b'], 'b')); // 输出 'a'（若没有更大字符则返回第一个）