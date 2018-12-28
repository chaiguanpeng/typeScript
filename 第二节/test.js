
class Father{
    constructor(name,age,money) {
        this.name = name;
        this.age = age;
        this.money = money
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getMoney(){
        return this.money;
    }
}

class Child extends Father{
    getAge(){
        return this.age;
    }
}
//在Child类中 不写constructor，默认把所有参数都传给Father
let child = new Child('zs',10,1)
console.log(child);
console.log(child.getAge());


