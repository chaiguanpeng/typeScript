// 抽象类不能实例化
abstract class Animal3{
    abstract speak():void
}
// let animal3 = new Animal3();  抽象类不能实例化


//如果Cat3继承抽象类Animal3,抽象类的抽象方法也需要实现,不然报错
class Cat3 extends Animal3{
    speak(){
        console.log('小猫喵喵喵');
    }
}