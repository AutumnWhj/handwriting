
interface Strategy {
  authenticate: Function
}
class WechatStrategy implements Strategy {
  authenticate (...args: any) {
    console.log(`wechat auth`)
  }
}
class LocalStrategy implements Strategy {
  authenticate (...args: any) {
    console.log(`local auth`)
  }
}

class Authenticator {
  private strategy: Strategy
  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }
  authenticate(...args: any) {
    this.strategy.authenticate()
  }
}

const auth = new Authenticator();
auth.setStrategy(new WechatStrategy());
auth.authenticate('123456');
auth.setStrategy(new LocalStrategy());
auth.authenticate('abao', '123');

// 场景
// ⼀个系统需要动态地在⼏种算法中选择⼀种时，可将每个算法封装到策略类中。
// 多个类只区别在表现⾏为不同，可以使⽤策略模式，在运⾏时动态选择具体要执⾏的⾏为。
// ⼀个类定义了多种⾏为，并且这些⾏为在这个类的操作中以多个条件语句的形式出现，可将每个条
// 件分⽀移⼊它们各⾃的策略类中以代替这些条件语句。