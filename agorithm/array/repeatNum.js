// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 输入: [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

function findNum(arr) {
    let i = 0;
    while (i < arr.length) {
        if(arr[i] === i) {
           i++;
        } else {
            if (arr[i] === arr[arr[i]]) {
                return arr[i];
            } else {
                let temp = arr[i];
                arr[i] = arr[arr[i]];
                arr[temp] = temp;
            }
       }
    }
    return false;
}

let arr = [2, 3, 1, 0, 5, 3];
console.log(findNum(arr));