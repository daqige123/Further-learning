// 最长公共子串
// 假设 dp[i][j]表示 以str1[i]和str2[j]结尾的公共子串的长度。
// 如果str1[i]和str2[j]相等，那么dp[i][j] = dp[i-1][j-1] + 1
// 如果不相等，那么dp[i][j] = 0；
function zuichanggonggongzichuan(str1, str2) {
    let maxlength = 0; // 记录最大长度
    let maxLastIndex  = 0; // 记录最大子串的最后一个字符串在text1字符串中的index
    const m = str1.length, n = str2.length;
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(false));
    // 之所以没有直接用dp = new Array(m).fill(new Array(n).fill(false))是因为这样会让数组的dp[1],dp[2]全都至此昂传入进来的 new Array(n).fill(false)
    for (let i= 0; i < m; i++ ){
        for (let j = 0; j < n; j++) {
            if (str1[i] === str2[j]) {
                dp[i+1][j+1] = dp[i][j] + 1; // 这里用i+1和j+1来表示下标0到下标i的str1和下标0到下标j的str2的最大子串，避免用i-1出现0-1这种边界case
                if (dp[i+1][j+1] > maxlength) {
                    maxlength = dp[i+1][j+1];
                    maxLastIndex = i;
                }
            } else {
                dp[i+1][j+1] = 0;
            }
        }
    }
    return str1.substring(maxLastIndex - maxlength + 1, maxLastIndex + 1);
}
console.log(zuichanggonggongzichuan('1AB2345CD','12345EF'));