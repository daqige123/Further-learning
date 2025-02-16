function twoNum(arr, target) {
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
const arr1 = [3, 4, 6, 7, 0, 10, -2];
console.log(twoNum(arr1, 10));