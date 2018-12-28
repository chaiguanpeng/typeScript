"use strict";
var objA = {};
function attr(key, val) {
    if (val) {
        objA[key] = val;
    }
    else {
        return objA[key];
    }
}
attr('name', 'zfpx');
console.log(attr('name'));
