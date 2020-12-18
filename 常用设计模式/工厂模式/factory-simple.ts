// 简单⼯⼚模式⼜叫 静态⽅法模式，因为⼯⼚类中定义了⼀个静态⽅法⽤于创建对象。简单⼯⼚让使⽤者
// 不⽤知道具体的参数就可以创建出所需的 ”产品“ 类，即使⽤者可以直接消费产品⽽不需要知道产品的具
// 体⽣产细节。

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

class CarFactory {
  static buildCar(model: number) {
    if(model === 110) {
      return new Car110()
    } else if(119){
      return new Car119()
    }
  }
}

// 调用
const car110 = CarFactory.buildCar(110)
const car119 = CarFactory.buildCar(119)
car110.run()
car119.run()

// 应用场景
// ⼯⼚类负责创建的对象⽐较少：由于创建的对象⽐较少，不会造成⼯⼚⽅法中业务逻辑过于复杂。
// 客户端只需知道传⼊⼯⼚类静态⽅法的参数，⽽不需要关⼼创建对象的细节