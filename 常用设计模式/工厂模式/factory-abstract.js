var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ⼯⼚⽅法模式（Factory Method Pattern）⼜称为⼯⼚模式，也叫多态⼯⼚（Polymorphic Factory）模
// 式，它属于类创建型模式。
// 在⼯⼚⽅法模式中，⼯⼚⽗类负责定义创建产品对象的公共接⼝，⽽⼯⼚⼦类则负责⽣成具体的产品对
// 象， 这样做的⽬的是将产品类的实例化操作延迟到⼯⼚⼦类中完成，即通过⼯⼚⼦类来确定究竟应该实
// 例化哪⼀个具体产品类
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
//有不同型号的车
var Car110 = /** @class */ (function (_super) {
    __extends(Car110, _super);
    function Car110() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car110.prototype.run = function () {
        console.log('Car110请求出战！');
    };
    return Car110;
}(Car));
var Car119 = /** @class */ (function (_super) {
    __extends(Car119, _super);
    function Car119() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car119.prototype.run = function () {
        console.log('Car119请求出战！');
    };
    return Car119;
}(Car));
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    return CarFactory;
}());
var CommonFactory = /** @class */ (function (_super) {
    __extends(CommonFactory, _super);
    function CommonFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonFactory.prototype.builde110Car = function () {
        return new Car110();
    };
    CommonFactory.prototype.builde119Car = function () {
        return new Car119();
    };
    return CommonFactory;
}(CarFactory));
var carBuilder = new CommonFactory();
carBuilder.builde110Car().run();
carBuilder.builde119Car().run();
//场景
// ⼀个类不知道它所需要的对象的类：在⼯⼚⽅法模式中，客户端不需要知道具体产品类的类名，只
// 需要知道所对应的⼯⼚即可，具体的产品对象由具体⼯⼚类创建；客户端需要知道创建具体产品的
// ⼯⼚类。
// ⼀个类通过其⼦类来指定创建哪个对象：在⼯⼚⽅法模式中，对于抽象⼯⼚类只需要提供⼀个创建
// 产品的接⼝，⽽由其⼦类来确定具体要创建的对象，利⽤⾯向对象的多态性和⾥⽒代换原则，在程
// 序运⾏时，⼦类对象将覆盖⽗类对象，从⽽使得系统更容易扩展
