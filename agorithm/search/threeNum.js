// 三数之和，最优解法是固定前面的第一个数，然后采用双指针移动，找到跟目标等于目标值的数。当然事先需要数组排好序
function threeNum(arr, target) {
    const result  = [];
    arr.sort((a, b)=> a-b);
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        const temp = target - arr[i]; // 固定第一个数，将三数之和转换为两数之和
        let left = i + 1, right = arr.length - 1;
        while(left  < right) {
            if (arr[left] + arr[right] === temp) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            } else if (arr[left] + arr[right] > temp) {
                right--
            } else {
                left++
            }
        }
    }
    console.log(result);
}

const arr = [1,-1, 2,3,4,10,0,1,-1,2,5, 12];
threeNum(arr, 12)
