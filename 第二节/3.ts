/**
 * 
 * 函数的重载
 * Java里面重载:是指两个或两个以上的函数，参数的个数和类型不一样
 * TS中的函数重载
 * 
 */

 //函数的声明 只是用来限制参数的个数和类型
 function attr(val:string):void;
 function attr(val:number):void;
 function attr(val:boolean):void;
 function attr(val:[]):void;

 function attr(val:any){
     console.log(typeof val,val);
 }
 attr('zfpx');
 attr(10);
 attr(true);
//  attr({});  会报错，因为没有被声明



function parse(str:string):any|never{
    return JSON.parse(str)
}
let obj = parse('{"name":"zfpx"}');
console.log(obj);
