class Person{
    name:string    //这是实例的属性
    age:number    //这是实例的属性
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    getName():string{
        return this.name
    }
}
let p1 = new Person('zpfx',10);
console.log(p1);


//类的继承
class Parent{
    name:string    //这是实例的属性
    age:number    //这是实例的属性
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    getName():string{
        return this.name
    }
}

class Student extends Parent{
    num:number
    constructor(name:string,age:number,num:number){
        super(name,age);
        this.num = num;
    }
    getNum(){
        return this.num
    }
}
let s1 = new Student('zs',10,5);
console.log(s1);

