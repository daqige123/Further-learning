function afterK(arr, k) {
    arr.sort((a, b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && k > 0) {
            arr[i] = -arr[i];
            k--;
        }
    }
    arr.sort((a, b) => a-b);
    while (k > 0) {
        arr[0] = -arr[0];
        k--;
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
    return result;
}
let A1 = [4,2,3], K1 = 1;
let A2 = [3,-1,0,2], K2 = 3;
let A3 = [2,-3,-1,5,-4], K3 = 2;
afterK(A1, K1);
afterK(A2, K2);
afterK(A3, K3);


