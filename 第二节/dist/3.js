"use strict";
/**
 *
 * 函数的重载
 * Java里面重载:是指两个或两个以上的函数，参数的个数和类型不一样
 * TS中的函数重载
 *
 */
function attr(val) {
    console.log(typeof val, val);
}
attr('zfpx');
attr(10);
attr(true);
//  attr({});  会报错，因为没有被声明
function parse(str) {
    return JSON.parse(str);
}
var obj = parse('{"name":"zfpx"}');
console.log(obj);
