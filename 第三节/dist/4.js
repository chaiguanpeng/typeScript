"use strict";
/**
 * 接口  本质上是一种约束
 * 1、约束对象
 * 2、约束函数
 * 3、约束可索引的数组
 * 4、约束类
 */
//Demo1 约束对象  对上面的一种简化，对象的一种约束
function getUserInfo(user) {
    console.log(user.name + " " + user.age + " " + user.home);
}
function getVipInfo(user) {
    console.log(user.name + " " + user.age);
}
getUserInfo({ name: 'cgp', age: 10 });
getVipInfo({ name: 'cgp2', age: 10 });
var cost = function (price) {
    return price * .8;
};
console.log(cost(100));
var Dog5 = /** @class */ (function () {
    function Dog5(name) {
        this.name = name;
        this.name = name;
    }
    Dog5.prototype.speak = function (something) {
        console.log('小狗汪汪汪');
    };
    Dog5.prototype.fly = function () {
        console.log('狗也可以飞起来');
    };
    Dog5.prototype.machineFly = function () {
        console.log('坐在火箭上');
    };
    return Dog5;
}());
var dog5 = new Dog5('cgp');
dog5.fly();
