var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        //定义一个存事件的MAP
        this.c = new Map();
    }
    // 订阅指定的主题
    EventEmitter.prototype.subscribe = function (topic) {
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        var topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push.apply(topics, handlers);
    };
    EventEmitter.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map(function (handler) {
            return handler.apply(void 0, args);
        });
    };
    // 取消订阅
    EventEmitter.prototype.unsubscribe = function (topic, handler) {
        if (!handler) {
            this.c["delete"](topic);
        }
        var topics = this.c.get(topic);
        var index = topics.indexOf(handler);
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c["delete"](topic);
        }
        return true;
    };
    return EventEmitter;
}());
//调用
var eventEmitter = new EventEmitter();
eventEmitter.subscribe("ts", function (msg) { return console.log("\u6536\u5230\u8BA2\u9605\u7684\u6D88\u606F\uFF1A" + msg); });
eventEmitter.publish("ts", "TypeScript发布订阅模式");
eventEmitter.unsubscribe("ts");
eventEmitter.publish("ts", "TypeScript发布订阅模式");
