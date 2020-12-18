// 建造者模式（Builder Pattern）将⼀个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创
// 建它们，最后构建成该复杂对象
// 造车
var Car = /** @class */ (function () {
    function Car(engine, body, chassis) {
        this.engine = engine;
        this.body = body;
        this.chassis = chassis;
    }
    return Car;
}());
// 定义一个造车builder 提供造车流程方法 并返回this支持链式调用
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.buildEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    CarBuilder.prototype.buildBody = function (body) {
        this.body = body;
        return this;
    };
    CarBuilder.prototype.buildClassis = function (classis) {
        this.classis = classis;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return new Car(this.engine, this.body, this.classis);
    };
    return CarBuilder;
}());
// 调用
var car = new CarBuilder().buildEngine('引擎').buildBody('车身').buildClassis('底盘').build();
console.log('车车', car);
// 应用场景
// 需要⽣成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员属性。
// 需要⽣成的产品对象的属性相互依赖，需要指定其⽣成顺序。
// 隔离复杂对象的创建和使⽤，并使得相同的创建过程可以创建不同的产品。
