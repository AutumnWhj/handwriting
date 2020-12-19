// 在软件架构中，发布/订阅是⼀种消息范式，消息的发送者（称为发布者）不会将消息直接发送给特定的
// 接收者（称为订阅者）。⽽是将发布的消息分为不同的类别，然后分别发送给不同的订阅者。 同样的，
// 订阅者可以表达对⼀个或多个类别的兴趣，只接收感兴趣的消息，⽆需了解哪些发布者存在。
type EventHandle = (...args: any) => any
class EventEmitter {
  //定义一个存事件的MAP
  private c = new Map<string, EventHandle[]>()
  // 订阅指定的主题
  subscribe(topic: string, ...handlers: EventHandle[]) {
    let topics = this.c.get(topic)
    if(!topics) {
      this.c.set(topic, topics = [])
    }
    topics.push(...handlers)
  }
  publish(topic: string, ...args: any[]): any[] | null {
    let topics = this.c.get(topic)
    if (!topics) {
      return null
    }
    return topics.map(handler => {
      return handler(...args)
    })
  }
  // 取消订阅
  unsubscribe(topic: string, handler?: EventHandle): boolean {
    if(!handler) {
      this.c.delete(topic)
    }
    let topics = this.c.get(topic)
    const index = topics.indexOf(handler)
    topics.splice(index, 1)
    if(topics.length === 0) {
      this.c.delete(topic)
    }
    return true
  }
}


//调用
const eventEmitter = new EventEmitter();
eventEmitter.subscribe("ts", (msg) => console.log(`收到订阅的消息：${msg}`) );
eventEmitter.publish("ts", "TypeScript发布订阅模式");
eventEmitter.unsubscribe("ts");
eventEmitter.publish("ts", "TypeScript发布订阅模式");

// 对象间存在⼀对多关系，⼀个对象的状态发⽣改变会影响其他对象。
// 作为事件总线，来实现不同组件间或模块间的通信。