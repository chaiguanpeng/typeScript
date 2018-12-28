"use strict";
//void 没有任何类型，一般用于定义方法的时候方法没有返回值
function greeting(name) {
    console.log('hello', name);
}
greeting('zfpx');
//never类型
var xx;
xx = (function () {
    throw new Error('Wrong');
})();
//object
var yy = { name: 'zfpx' };
