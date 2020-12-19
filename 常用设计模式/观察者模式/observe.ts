// 观察者模式，它定义了⼀种⼀对多的关系，让多个观察者对象同时监听某⼀个主题对象，这个主题对象
// 的状态发⽣变化时就会通知所有的观察者对象，使得它们能够⾃动更新⾃⼰。

interface Observer {
  notify: Function
}

class ConcreteObserver implements Observer{
  constructor(private name: string) {}

  notify() {
    console.log(`${this.name} notify`)
  }
}



class Subject {
  observer : Observer[] = []

  addObserver(observer: Observer) {
    this.observer.push(observer)
  }
  notifyObservers() {
    this.observer.forEach(observer => {
      observer.notify()
    })
  }
  deleteObserver(observer: Observer) {
    const n: number = this.observer.indexOf(observer)
    this.observer.splice(n, 1)
  }
}

// 调用
const subject: Subject = new Subject();
const xiaoQin = new ConcreteObserver("⼩秦");
const xiaoWang = new ConcreteObserver("⼩王");
subject.addObserver(xiaoQin);
subject.addObserver(xiaoWang);
subject.notifyObservers();
subject.deleteObserver(xiaoQin);
subject.notifyObservers();

// 场景
// ⼀个对象的⾏为依赖于另⼀个对象的状态。或者换⼀种说法，当被观察对象（⽬标对象）的状态发
// ⽣改变时 ，会直接影响到观察对象的⾏为。

