/*类的修饰符
** public       公开的，自己 子类 其它类都能访问
*  protected    受保护的， 自己 子类能访问, 但是其它人不能访问
*  private      私有的     只有自己访问，子类、其它人不能访问
*/
class Father{
    public      name:string    //这是实例的属性
    protected   age:number    //这是实例的属性
    private     money:number    
    constructor(name:string,age:number,money:number) {
        this.name = name;
        this.age = age;
        this.money = money
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getMoney():number{
        return this.money;
    }
}

class Child extends Father{
    getAge(){
        return this.age;
    }
}
let child = new Child('zs',10,1)
console.log(child.name);
console.log(child.age);
console.log(child.money);



class Animal{       //可以放在里面写
    constructor(public name:string){
        this.name = name;
    }
}


