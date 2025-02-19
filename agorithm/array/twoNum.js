function twoSum(arr, target) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        console.log(map);
        const sub = target - arr[i];
        if (sub in map) {
            return [sub, arr[i]];
        } else {
            map[arr[i]] = sub;
        }
    }
}
// 两数之和 返回下标版。
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let sub = target - nums[i];
        if (sub in map) {
            return [map[sub], i];
        } else {
            map[nums[i]] = i;
        }
    }
    return -1
};
const arr1 = [3, 4, 6, 7, 0, 10, -2];
console.log(twoSum(arr1, 10));