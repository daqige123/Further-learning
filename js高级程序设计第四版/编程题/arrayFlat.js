function flat(arr, depth) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            result = result.concat(flat(arr[i], --depth));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
const arr = [1, [[[1], 2, 3], 4], 5]

console.log(flat(arr, 1));