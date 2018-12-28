"use strict";
function greet(name) {
    console.log('helo', name);
}
greet('zfpx');
//ts中形参和实参要完全一样,如果加? 表示可给可不给，可选参数一定要放最后一个
function greet2(name, age) {
    console.log('helo', name, age);
}
greet2('zfpx', 10);
//默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/user', 'post');
//剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (val, item) { return val + item; }, 0);
}
console.log(sum(1, 2, 3, 4));
