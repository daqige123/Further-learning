// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。
// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
function feibonaqie(n) {
    let f0 = 0, f1 = 1;
    let sum = 0;
    while (n >= 2) {
        sum  = f0 + f1;
        f0 = f1;
        f1 = sum;
        n--;
    }
    return sum;
}

console.log(feibonaqie(5));
// 0 1 
// f2 = 1 f3 = 2 f4 = 3 f5 = 5
