function compare(version1, version2){
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    while(v1.length !== v2.length) {
        if (v1.length > v2.length) {
            v2.push('0');
        } else {
            v1.push('0');
        }
    }
    for (let i = 0; i < v1.length; i++) {
        if (parseInt(v1[i]) < parseInt(v2[i])) return -1;
        if (parseInt(v1[i]) > parseInt(v2[i])) return 1;
    }
    return 0;
}

console.log(compare("1.1","2.1")); // -1
console.log(compare("1.1","1.01")); // 0
console.log(compare("1.1","1.1.1")); // -1
console.log(compare("2.0.1","2")); // 1
console.log(compare("0.226","0.36")); // 1
console.log(compare("0.0.01","0.0.01.0.0")); // 0

