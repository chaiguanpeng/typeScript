"use strict";
// 静态属性
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    //加上 static表示这个属性是静态的属性,是属于类的属性,不属于实例
    Person2.getName = function () {
    };
    Person2.myName = 'hello';
    return Person2;
}());
var p = new Person2();
console.log(Person2.getName);
console.log(p.getName);
