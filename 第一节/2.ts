/*
* 数据类型typescript
* string    字符串
* boolean   布尔型
* number    数字型
* 元组类型(tuple) =》长度和类型都是固定的
* 枚举类型(enum)

*/
let isMarried:boolean = true;
isMarried = false;

let age:number = 10;
let firstname = '张';
let hobby:string[] = ['smoking','drinking','haire'];         //值为字符串的数组
let numbers:Array<number> = [4,5,6];                         //值为数字的数组
let students:Array<object> = [{name:'zfpx1'},{name:'zfpx2'}] //值为对象的数组
let fullname:[string,string,number] = ['张','三',9];         //元组   
let arr2:Array<string|number|object|boolean> = ['hello',9,{name:'zfpx1'}];
let arr3:Array<any> = ['hello',9,true];                     //任意类型

// 枚举类型(enum),某些固定值，比如性别，春夏秋冬
enum Gender{    //定义了一个枚举类型的值 性别，有两个 选项 GIRL BOY
    GIRL='女生',
    BOY='男生'
}
console.log(`李雷是${Gender.BOY},梅梅是${Gender.GIRL}`);

//拼多多买货
enum OrderStatus{
    WaitForPay = '等待付款',
    WaitForSend = '等待发货',
    Sended = '已发货',
    Signed = '已签收'
}