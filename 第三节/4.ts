/**
 * 接口  本质上是一种约束
 * 1、约束对象
 * 2、约束函数
 * 3、约束可索引的数组
 * 4、约束类
 */
//Demo1 约束对象  对上面的一种简化，对象的一种约束

// function getUserInfo(user:{name:string,age:number}):void{
//     console.log(`${user.name} ${user.age}`);
// }
// function getVipInfo(user:{name:string,age:number}):void{
//     console.log(`${user.name} ${user.age}`);
// }
// getUserInfo({name:'zfpx',age:10})
// getVipInfo({name:'zfpx',age:10})


interface userInterface{
    name:string,
    age:number,
    home?:string    //?可以传也不可以不传
}
function getUserInfo(user:userInterface):void{
    console.log(`${user.name} ${user.age} ${user.home}`);
}
function getVipInfo(user:userInterface):void{
    console.log(`${user.name} ${user.age}`);
}
getUserInfo({name:'cgp',age:10})
getVipInfo({name:'cgp2',age:10})

//Demo2 函数的约束 如果希望对一个函数的参数和返回值 进行约束

// let cost = function(price:number):number{
//     return price * .8;
// }
// console.log(cost(100));

interface discount{
    (price:number):number
}
let cost:discount = function(price:number):number{
    return price * .8;
}
console.log(cost(100));

//Demo3 对索引数组的约束

// interface userInterface{
//     [index:number]:string
// }

// let arr5:userInterface = ['cgp1','cgp2'];
// console.log(arr5);

//Demo4 如何用接口约束类 ，一个类可以实现多个接口。
interface Animal5{
    name: string;
    speak(something:string):void
}
interface Bird{
    fly():void
}
interface MachineBird extends Bird{
    machineFly():void
}
class Dog5 implements Animal5,MachineBird{
   constructor(public name:string){
       this.name = name;
   }
   speak(something:string):void{
       console.log('小狗汪汪汪');
   }
   fly(){
       console.log('狗也可以飞起来');
   }
   machineFly(){
       console.log('坐在火箭上');
   }
}
let dog5 = new Dog5('cgp');
dog5.fly()


