var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.notify = function () {
        console.log(this.name + " notify");
    };
    return ConcreteObserver;
}());
var Subject = /** @class */ (function () {
    function Subject() {
        this.observer = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observer.push(observer);
    };
    Subject.prototype.notifyObservers = function () {
        this.observer.forEach(function (observer) {
            observer.notify();
        });
    };
    Subject.prototype.deleteObserver = function (observer) {
        var n = this.observer.indexOf(observer);
        this.observer.splice(n, 1);
    };
    return Subject;
}());
// 调用
var subject = new Subject();
var xiaoQin = new ConcreteObserver("⼩秦");
var xiaoWang = new ConcreteObserver("⼩王");
subject.addObserver(xiaoQin);
subject.addObserver(xiaoWang);
subject.notifyObservers();
subject.deleteObserver(xiaoQin);
subject.notifyObservers();
