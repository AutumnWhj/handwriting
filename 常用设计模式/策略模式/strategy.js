var WechatStrategy = /** @class */ (function () {
    function WechatStrategy() {
    }
    WechatStrategy.prototype.authenticate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("wechat auth");
    };
    return WechatStrategy;
}());
var LocalStrategy = /** @class */ (function () {
    function LocalStrategy() {
    }
    LocalStrategy.prototype.authenticate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("local auth");
    };
    return LocalStrategy;
}());
var Authenticator = /** @class */ (function () {
    function Authenticator() {
    }
    Authenticator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Authenticator.prototype.authenticate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.strategy.authenticate();
    };
    return Authenticator;
}());
var auth = new Authenticator();
auth.setStrategy(new WechatStrategy());
auth.authenticate('12345611');
auth.setStrategy(new LocalStrategy());
auth.authenticate('abao', '123');
