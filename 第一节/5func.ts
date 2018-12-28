//void 没有任何类型，一般用于定义方法的时候方法没有返回值
function greeting(name:string):void{
    console.log('hello',name);
}
greeting('zfpx');

//never类型
let xx:never;
xx=(()=>{
    throw new Error('Wrong')
})();

//object
let yy:object={name:'zfpx'}