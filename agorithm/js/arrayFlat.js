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
const arr = [1, [[[1], 2, 3], 4], 5];

function flat1(arr, depth) {
    let result = [];
    return arr.flat(depth);
}

console.log(flat(arr, 1));
console.log(flat1(arr, 2));