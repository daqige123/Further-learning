// 题目是找出数组中所有消失的数字。题目描述说给定一个长度为n的数组，其中所有整数都在1到n之间，有些元素出现两次而其他出现一次，要求找出所有在[1, n]范围内但没有出现在数组中的数字。需要在线性时间内完成，并且不使用额外空间，除了返回的列表。
// 方法思路

// ​利用数组本身标记出现过的数字：遍历数组，将每个元素对应的索引位置的值标记为负数。例如，元素num对应的索引是abs(num)-1，将该位置的数取负数。
// ​收集结果：再次遍历数组，所有仍为正数的位置对应的索引+1即为缺失的数字。

function findDisappearedNumbers(arr) {
    const res = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let index = Math.abs(arr[i]) - 1;
        if (arr[index] > 0) arr[index] *= -1;
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            res.push(i + 1);
        }
    }
    console.log(res);
}

function findDisappearedNumbers1(arr) {
    const res = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let index = arr[i] - 1;
        console.log('arr[]index:', index, arr[index]);
        if (index <= n) arr[index] += 3 * n;
    }
    console.log('arr', arr);
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 3 * n) {
            res.push(i + 1);
        }
    }
    console.log(res);
}
const arr = [1, 2, 6, 6, 7];
const arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
findDisappearedNumbers1(arr);
findDisappearedNumbers1(arr1);


