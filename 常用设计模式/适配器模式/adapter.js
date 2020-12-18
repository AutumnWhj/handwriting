var AliyunCloudLogger = /** @class */ (function () {
    function AliyunCloudLogger() {
    }
    AliyunCloudLogger.prototype.sentToServer = function (message, type) {
        console.log(message);
        console.log('this is AliyunCloudLogger —— sentToServer');
    };
    return AliyunCloudLogger;
}());
// 实现一个适配器 本地打印的同时sentToServer
var CloudLoggerAdater = /** @class */ (function () {
    function CloudLoggerAdater(cloudLogger) {
        this.cloudLogger = cloudLogger;
    }
    CloudLoggerAdater.prototype.info = function (message) {
        this.cloudLogger.sentToServer(message, 'info');
    };
    return CloudLoggerAdater;
}());
// 调用的类
var NotificationService = /** @class */ (function () {
    function NotificationService(logger) {
        this.logger = logger;
    }
    NotificationService.prototype.sent = function (message) {
        this.logger.info(message);
    };
    return NotificationService;
}());
var aliyunCloudLogger = new AliyunCloudLogger();
var cloudLoggerAdater = new CloudLoggerAdater(aliyunCloudLogger);
var notificationService = new NotificationService(cloudLoggerAdater);
notificationService.sent('溜溜实打实');
