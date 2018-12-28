"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p1 = new Person('zpfx', 10);
console.log(p1);
//类的继承
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.getName = function () {
        return this.name;
    };
    return Parent;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, num) {
        var _this = _super.call(this, name, age) || this;
        _this.num = num;
        return _this;
    }
    Student.prototype.getNum = function () {
        return this.num;
    };
    return Student;
}(Parent));
var s1 = new Student('zs', 10, 5);
console.log(s1);
