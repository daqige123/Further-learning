function bigNoRepeatesubstr(s) {
    let left = 0, right = 0, start = 0, end = 0;
    for (let i = 1; i < s.length; i++) {
        if (!s.substring(start, i).includes(s[i])) {
            end = i;
            if (right - left < end - start) {
                right = end;
                left = start;
            }
        } else {
            start = i;
            end = i;
        }
    }
    return s.substring(left, right + 1);
}