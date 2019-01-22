// 多态
class Animal2{
    speak(){
        throw new Error('这是一个抽象的方法，不能直接 使用');
    }
}
class Dog extends Animal2{
    speak(){
        console.log('小狗汪汪汪');
    }
}
class Cat extends Animal2{
    speak(){
        console.log('小猫喵喵喵!');
        
    }
}

let dog = new Dog();
dog.speak();
let cat = new Cat();
cat.speak();