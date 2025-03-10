// 模拟异步任务
function asyncTask(time, data) {
    return function() { 
        return  new Promise((resolve)=> {
            setTimeout(() => {
                console.log(data)
                resolve(data)
            }, time);
        });
    }
}
const p1 = asyncTask(500, 1);
const p2 = asyncTask(1000, 2);
const p3 = asyncTask(1500, 3);
const p4 = asyncTask(2000, 4);
const p5 = asyncTask(2500, 5);
const p6 = asyncTask(3000, 6);
const tasks = [p1, p2, p3, p4, p5, p6];

function controlMax(tasks, maxLen) {
    let len = tasks.length, doing = 0, index = 0;
    while(index < len-1 && doing <= maxLen){
        tasks[index]().finally(() => {
            doing--;
            tasks[index]();
            doing++;
            index++;
        });
        doing++;
        index++;
    }
}
controlMax(tasks, 2);