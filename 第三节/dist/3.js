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
// 抽象类不能实例化
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    return Animal3;
}());
// let animal3 = new Animal3();  抽象类不能实例化
//如果Cat3继承抽象类Animal3,抽象类的抽象方法也需要实现,不然报错
var Cat3 = /** @class */ (function (_super) {
    __extends(Cat3, _super);
    function Cat3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat3.prototype.speak = function () {
        console.log('小猫喵喵喵');
    };
    return Cat3;
}(Animal3));
