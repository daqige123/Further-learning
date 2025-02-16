function quickSort(arr, left, right) {
    if (left >=  right) { // 当left小于right时执行
        return 
    }
    let i = left;
    let j = right;
    let povit = arr[i];
    while (i < j) {
        while(i< j && arr[j] >= povit) j--;
        if (i < j) arr[i] = arr[j]; // 从右往左遍历，遇到比povit小的，把arr[j]移到povit的左边
        while(i < j && arr[i] <= povit) i++;
        if (i < j) arr[j] = arr[i]; // 遇到比povit大的，把arr[i]移到povit的右边
    }
    arr[i] = povit; // 一轮排完了，需要把哨兵放在最中间的位置
    quickSort(arr, 0, i - 1); // 对哨兵左边的排序
    quickSort(arr, j+1, right); // 对哨兵右边的排序
}
let arr = [0, -1, 2, -2, 6,-1,9, 10,-4 ];
// let arr = [0, -1, 2, -2, 10000, 0, -1, 0, 6,-1,9, 10,-4 ];
quickSort(arr, 0, arr.length - 1);
console.log(arr);