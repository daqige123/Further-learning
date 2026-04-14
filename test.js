async function asc2() {
    console.log('1222');
}

async function asc1() {
    console.log('112222')
    await asc2();
    console.log(111);
}
asc1();
console.log('hahha')