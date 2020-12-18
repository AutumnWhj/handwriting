// 单例模式（Singleton Pattern）是⼀种常⽤的模式，有⼀些对象我们往往只需要⼀个，⽐如全局缓存、
// 浏览器中的 window 对象等。单例模式⽤于保证⼀个类仅有⼀个实例，并提供⼀个访问它的全局访问
// 点。
class Singleton {
  private static singleton: Singleton
  private constructor() {}
  public static getInstance(): Singleton {
    if(!Singleton.singleton) {
      Singleton.singleton = new Singleton()
    }
    return Singleton.singleton
  }
}


// 调用 返回同一个实例
const single1 = Singleton.getInstance()
const single2 = Singleton.getInstance()

console.log(single1 === single2)

// 需要频繁实例化然后销毁的对象。
// 创建对象时耗时过多或耗资源过多，但⼜经常⽤到的对象。
// 系统只需要⼀个实例对象，如系统要求提供⼀个唯⼀的序列号⽣成器或资源管理器，或者需要考虑
// 资源消耗太⼤⽽只允许创建⼀个对象。