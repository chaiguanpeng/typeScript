/**
 * any      任何值
 * void     是any的反面，不能有任何值
 * never    永远不会有返回值
 * 
 */
let ak:any = 10;
function say():void{
    
}

// never->1.这个函数一旦开始执行,就永远结束的时候，就进入 死循环
function sum():never{
    while(true){
        console.log(1);
    }
}
// never->2. 
function multi():never{
    throw Error('ok');
    let a = 10;
    let b = 10;
}
function divide(a:number,b:number):never|number{
    return a/b;
}
divide(10,2);
divide(10,0);