function zuichanghuiwenzichuan(s) {
    const n = s.length;
    if (n <= 1) return s;
    let dp = [];
    for (let i = 0; i< n; i++) {
        dp[i] = new Array(n).fill(false);
    }
    let res = '', left = 0, right = 0;
    for (let i = n - 2; i >= 0; i--) {
        dp[i][i] = true;
        for (let j = i+1; j < n; j++) {
            if ( (s[i] === s[j] && (dp[i+1][j-1] || j - i < 3))) {
                dp[i][j] = true;
                if (j - i > right - left) {
                    left = i;
                    right = j;
                }
            }
            
        }
    }
    // sdad
    console.log(s.substring(left, right + 1))
    return s.substring(left, right);
}
zuichanghuiwenzichuan('cbbd');