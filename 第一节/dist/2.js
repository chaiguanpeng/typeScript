"use strict";
/*
* 数据类型typescript
* string    字符串
* boolean   布尔型
* number    数字型
* 元组类型(tuple) =》长度和类型都是固定的
* 枚举类型(enum)

*/
var isMarried = true;
isMarried = false;
var age = 10;
var firstname = '张';
var hobby = ['smoking', 'drinking', 'haire']; //值为字符串的数组
var numbers = [4, 5, 6]; //值为数字的数组
var students = [{ name: 'zfpx1' }, { name: 'zfpx2' }]; //值为对象的数组
var fullname = ['张', '三', 9]; //元组   
var arr2 = ['hello', 9, { name: 'zfpx1' }];
var arr3 = ['hello', 9, true]; //任意类型
// 枚举类型(enum),某些固定值，比如性别，春夏秋冬
var Gender;
(function (Gender) {
    Gender["GIRL"] = "\u5973\u751F";
    Gender["BOY"] = "\u7537\u751F";
})(Gender || (Gender = {}));
console.log("\u674E\u96F7\u662F" + Gender.BOY + ",\u6885\u6885\u662F" + Gender.GIRL);
//拼多多买货
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["WaitForPay"] = "\u7B49\u5F85\u4ED8\u6B3E";
    OrderStatus["WaitForSend"] = "\u7B49\u5F85\u53D1\u8D27";
    OrderStatus["Sended"] = "\u5DF2\u53D1\u8D27";
    OrderStatus["Signed"] = "\u5DF2\u7B7E\u6536";
})(OrderStatus || (OrderStatus = {}));
