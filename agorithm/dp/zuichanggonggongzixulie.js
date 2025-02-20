// 最长公共子序列，与最长公共子串不一样，不要求连续
function zuichanggonggongzixulie(text1, text2) {
    let m = text1.length, n = text2.length;
    // dp[i][j]代表text1[0...i]和text2[0...j]的最长公共子序列
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1[i] === text2[j]) {
                // dp[i][j] = dp[i-1][j-1] + 1; 为了避免i=0，j=0这种边界情况，直接全部+1
                dp[i+1][j+1] = dp[i][j] + 1;
            } else {
                // 代码层面与子串唯一不一样的地方就是这儿，因为子串是连续的，如果不相等，子串直接就是0了，子序列就是取最大值。
               // 但其实dp的含义也有些区别，一个是0-i和0-j里面最大的子序列的长度，一个是以str1[i]和str2[j]结尾的公共子串的长度。
                dp[i+1][j+1] = Math.max(dp[i+1][j], dp[i][j+1]); 
            }
        }
    }
    return dp[m][n];
}
console.log(zuichanggonggongzixulie("1AB2345CD","12345EF"));