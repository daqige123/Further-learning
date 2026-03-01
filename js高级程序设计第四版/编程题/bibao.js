function test() {
    let a = 1;

    return function () {
        console.log(a);
    };
}

let fn1 = test();
let fn2 = test();

fn1();
fn2();