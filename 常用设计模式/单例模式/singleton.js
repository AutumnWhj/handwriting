// 单例模式（Singleton Pattern）是⼀种常⽤的模式，有⼀些对象我们往往只需要⼀个，⽐如全局缓存、
// 浏览器中的 window 对象等。单例模式⽤于保证⼀个类仅有⼀个实例，并提供⼀个访问它的全局访问
// 点。
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    return Singleton;
}());
// 调用 返回同一个实例
var single1 = Singleton.getInstance();
var single2 = Singleton.getInstance();
console.log(single1 === single2);
