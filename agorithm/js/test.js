async function asyncPool(tasks, limit) {
    const executing = [];
    const result = [];
    for (let i =0; i< tasks.length; i++) {
        const p = tasks[i]().then((res)=> {
            result[i] = res;
        }).finally(() => {
            executing.splice(executing.indexOf(p), 1);
        });
        executing.push(p);
        if (executing.length >= limit) {
            await Promise.race(executing);
        }
        
    }
    await Promise.all(executing);
    return result;
}

const mockTask = (id, delay) => {
    return () => new Promise((resolve) => {
        console.log(`[开始] 任务 ${id} (耗时 ${delay}ms)`);
        setTimeout(() => {
            console.log(`[完成] 任务 ${id}`);
            resolve(`结果 ${id}`);
        }, delay);
    });
};
const tasksA = [
    mockTask(1, 1000),
    mockTask(2, 5000),
    mockTask(3, 3000),
    mockTask(4, 4000),
    mockTask(5, 1000)
];

console.log('--- 测试用例 A 开始 ---');
asyncPool(tasksA, 2).then(res => console.log('最终结果:', res));