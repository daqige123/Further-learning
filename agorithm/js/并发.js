async function asyncPool(tasks, limit) {
    const results = []
    const executing = []

    for (let i = 0; i < tasks.length; i++) {
        const p = tasks[i]().then(res => {
            results[i] = res // 这样保证结果不乱序，
        })
        executing.push(p)
        if (executing.length >= limit) {
            await Promise.race(executing) // 核心就在这里，race 会卡住后面的代码执行，直到有一个期约完成
        }

        p.finally(() => { // 理论上.finally这一块也可以放到上面.then后面
            executing.splice(executing.indexOf(p), 1)
        })
    }
    // 这里还是需要等 executing队列剩下的执行完才能返回
    await Promise.all(executing)

    return results
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


