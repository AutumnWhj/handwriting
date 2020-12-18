// 抽象⼯⼚模式（Abstract Factory Pattern），提供⼀个创建⼀系列相关或相互依赖对象的接⼝，⽽⽆须
// 指定它们具体的类。
// 在⼯⼚⽅法模式中具体⼯⼚负责⽣产具体的产品，每⼀个具体⼯⼚对应⼀种具体产品，⼯⼚⽅法也具有
// 唯⼀性，⼀般情况下，⼀个具体⼯⼚中只有⼀个⼯⼚⽅法或者⼀组重载的⼯⼚⽅法。 但是有时候我们需
// 要⼀个⼯⼚可以提供多个产品对象，⽽不是单⼀的产品对象。
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
  abstract builde110Car(): Car110
  abstract builde119Car(): Car119
}

class CommonFactory extends CarFactory {
  builde110Car(): Car110 {
    return new Car110()
  }
  builde119Car(): Car119 {
    return new Car119()
  }
}


const carBuilder = new CommonFactory()

carBuilder.builde110Car().run()
carBuilder.builde119Car().run()

//场景
// ⼀个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的⼯⼚模式都
// 是重要的。
// 系统中有多于⼀个的产品族，⽽每次只使⽤其中某⼀产品族。
// 系统提供⼀个产品类的库，所有的产品以同样的接⼝出现，从⽽使客户端不依赖于具体实现。

