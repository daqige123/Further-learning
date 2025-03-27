
async function pause(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, ms)
    });
    // return await new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res();
    //     }, ms)
    // })
}

async function wait() {
    console.log(111);
    await pause(2000);
    console.log(2000);
}
wait();

