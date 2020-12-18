// 简单⼯⼚模式⼜叫 静态⽅法模式，因为⼯⼚类中定义了⼀个静态⽅法⽤于创建对象。简单⼯⼚让使⽤者
// 不⽤知道具体的参数就可以创建出所需的 ”产品“ 类，即使⽤者可以直接消费产品⽽不需要知道产品的具
// 体⽣产细节。
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
    CarFactory.buildCar = function (model) {
        if (model === 110) {
            return new Car110();
        }
        else if (119) {
            return new Car119();
        }
    };
    return CarFactory;
}());
// 调用
var car110 = CarFactory.buildCar(110);
var car119 = CarFactory.buildCar(119);
car110.run();
car119.run();
