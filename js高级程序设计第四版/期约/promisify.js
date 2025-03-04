const fs = require('fs');
// fs.readFile('./package.json', (err, data) => {
//     if (err) {
//         console.error('读取文件出错：', err);
//     } else {
//         console.log('文件内容：', data);
//     }
// });

function promisify(fn) {
    return function (path) {
        return new Promise((resolve, rejecet) => {
            fn(path, (error, result) => {
                if (error) {
                    rejecet(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}
promisify(fs.readFile)('./package1.json').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
