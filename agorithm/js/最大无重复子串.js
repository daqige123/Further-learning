const bigNoRepeatesubstr = function(s) {
    let arr =[], max = 0;
    for (let i=0; i< s.length; i++) {
        const index = arr.indexOf(s[i]);
        arr.push(s[i]);
        if (arr.indexOf(s[i]) !== -1) {
            arr.splice(0, index + 1);
            // arr = arr.slice(index+1, arr.length); // 都是传入下标，左开右闭。
        }
        max = Math.max(max, arr.length);
    }
    return max;
};

const a = 'sdds1012abcdefgp1';
console.log(bigNoRepeatesubstr(a));
