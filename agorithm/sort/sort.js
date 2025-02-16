// 冒泡排序
function bublleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j+1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
}

// 选择排序
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                arr[i] = arr[j];
                arr[j] = min;
                min = arr[i];
            }      
        }
    }
}

// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (j = i; j > 0 && temp < arr[j-1]; j--) {
            arr[j] = arr[j-1]; 
        }
        arr[j] = temp;
    }
}

let arr = [0, -1, 2, -2,10000, 0, -1, 0, 6,-1,9, 10,-4 ];
insertSort(arr);
console.log(arr);