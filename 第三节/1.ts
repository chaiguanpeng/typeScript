
// 静态属性
class Person2{
    static myName = 'hello'
    //加上 static表示这个属性是静态的属性,是属于类的属性,不属于实例
    static getName(){

    }
}
let p = new Person2();
console.log(Person2.getName);
console.log(p.getName);

