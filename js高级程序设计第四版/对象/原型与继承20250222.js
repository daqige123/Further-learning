// 建议还是看一下红宝书，很快
// 工厂函数模式创建一个对象
function createObj(name, age, job){
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    return o;
}

// new 操作符
// 1. 内存里面创建一个新对象
// 2. 将新对象里面的__pro__指向构造函数的原型
// 3. 将构造里面this指向新对象。
// 4. 执行构造函数里面的语句，给新对象赋值
// 5. 如果构造函数里面有renturn就返回return得对象，没有得话，就默认返回新创建的对象

// __pro__ 和 prototype 和constructor
// 每一个函数都有一个prototype属性，指向prototype对象，然后peototype对象有一个constructor属性，指回构造函数， 使用new 新创建的对相的__pro__会指向构造函数的原型，这个也就是原型继承的核心实现。

// 继承的六种形式
// 1.原型链继承
function SuperType(name, age) {
    this.name = name;
    this.age = age;
}
function SubType() {

}
SubType.prototype = new SuperType();
// 原型链的问题是引用类型的属性会被各个实例共享，其次是弱化了向父类构造函数传参的能力。
// 2.盗用构造函数
function SuperType() {
    this.color = ['red', 'blue'];
}
function SubType() {
    SubType.call(this); // 这样就每个实例都会有自己的属性
}
// 问题是没有原型，不能复用。
// 3. 组合式继承
// 原理： 我们将想要共享的属性或者方法放到父类的原型上，让子类通过原型链的方式来继承，然后将子类独有的属性就放到构造函数当中，让子类通过盗用构造函数来自己实例化一份
function SuperType(name, age) {
    this.name = name;
    this.age = age;
    this.color = ["red", "blue", "black"];
}
this.SuperType.prototype.sayName = ['red', 'blue']; 
function SubType() {
    SuperType.call(this, name, age);
}
SubType.prototype = new SuperType();

// 4. 原型式继承

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
// 其实这个就是在为后面的寄生式做铺垫。这就高数我们，想要实现原型链其实不一定要直接连，还可以一个空白的临时的构造函数F

// 5.寄生式继承
// 完全就是给4封装了一下，然后加了一些属性
function create(origin) {
    let clone = object(origin);
    clone.age = 100;
    clone.sayName = function() {}
    return clone;
}

6. // 寄生式组合继承
// 组合式继承其实是调用了两次父类的构造函数，然后也导致了子类的原型上也有没用的父类构造函数里main的属性。所以参考原生式继承，可以利用临时构造函数，来优化一下。
// 第一次调用父类构造函数
SubType.prototype = new SuperType();
// 第二次调用是实例化子类的时候，会调用子类构造函数，而子类构造函数又会调用
function SubType() {
    SuperType.call(this); // 这儿就是第二次调用
}
// 其实第一次调用是可以优化的，我们使用这句话的目的就是Subtype.prototype.__pro__ =  SuperType.prototype

function F(){} // 先创建一个临时构造函数
F.prototype = SuperType.prototype; // 
SubType.prototype = new F(); // 这样SubType.prototype.__pro__ =  F.prototype = SuperType.prototype
// 说白了就是相比new SuperType(), new F()里面什么都没有，不会给子类的原型添加任何多余的不必要的父类构造函数里面的属性