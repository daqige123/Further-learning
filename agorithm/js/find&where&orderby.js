let data = [{
    userId: '1001',
    title: 'title1'
},
{
    userId: '2001',
    title: 'title2'
},
{
    userId: '2002',
    title: 'title3'
},
];
// 调用find方法
// find(data).where(userId, /2/).orderBy('userId', 'desc')

// 返回结果：
// [{"userId":11,"title":"title2"},{"userId":15,"title":"title3"}]

function find(arr) {
    Array.prototype.where = where;
    Array.prototype.orderBy = orderBy;
    return arr;
}

function where(field, reg) {
    // const a = this.filter(item => {
    //     console.log(reg.test(item[field]))
    //     return reg.test(item[field]);
    // })
    // console.log('where:', this);
    // console.log('where1:', a);

    // return a;
    return this.filter((item) => reg.test(item[field]))
}
function orderBy(field, sortWay) {
    if (sortWay === 'asc') {
        this.sort((a, b) => a[field] - b[field]);
    } else {
        this.sort((a, b) => b[field] - a[field]);
    }
    console.log('orderby', this);
    return this;
}
console.log(find(data).where('userId', /2/).orderBy('userId', 'desc'));