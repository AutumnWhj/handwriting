// ⼯⼚⽅法模式（Factory Method Pattern）⼜称为⼯⼚模式，也叫多态⼯⼚（Polymorphic Factory）模
// 式，它属于类创建型模式。
// 在⼯⼚⽅法模式中，⼯⼚⽗类负责定义创建产品对象的公共接⼝，⽽⼯⼚⼦类则负责⽣成具体的产品对
// 象， 这样做的⽬的是将产品类的实例化操作延迟到⼯⼚⼦类中完成，即通过⼯⼚⼦类来确定究竟应该实
// 例化哪⼀个具体产品类
abstract class Car {
  abstract run() : void
}
//有不同型号的车
class Car110 extends Car{
  run(): void {
    console.log('Car110请求出战！')
  }
}
class Car119 extends Car{
  run(): void {
    console.log('Car119请求出战！')
  }
}

abstract class CarFactory {
  abstract buildeCar(): Car
}
class Car110Factory extends CarFactory{
  buildeCar(): Car {
    return new Car110()
  }
}
class Car119Factory extends CarFactory{
  buildeCar(): Car {
    return new Car119()
  }
}

const car110 = new Car110Factory().buildeCar()
const car119 = new Car119Factory().buildeCar()

car110.run()
car119.run()

//场景
// ⼀个类不知道它所需要的对象的类：在⼯⼚⽅法模式中，客户端不需要知道具体产品类的类名，只
// 需要知道所对应的⼯⼚即可，具体的产品对象由具体⼯⼚类创建；客户端需要知道创建具体产品的
// ⼯⼚类。
// ⼀个类通过其⼦类来指定创建哪个对象：在⼯⼚⽅法模式中，对于抽象⼯⼚类只需要提供⼀个创建
// 产品的接⼝，⽽由其⼦类来确定具体要创建的对象，利⽤⾯向对象的多态性和⾥⽒代换原则，在程
// 序运⾏时，⼦类对象将覆盖⽗类对象，从⽽使得系统更容易扩展










//调用
