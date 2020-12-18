
interface Logger {
  info(message: string): void
}

interface CloudLogger {
  sentToServer(message: string, type: string): void
}

class AliyunCloudLogger implements CloudLogger{
  sentToServer(message: string, type: string): void {
    console.log(message)
    console.log('this is AliyunCloudLogger —— sentToServer')
  }
}

// 实现一个适配器 本地打印的同时sentToServer
class CloudLoggerAdater implements Logger{
  cloudLogger: CloudLogger
  constructor(cloudLogger: CloudLogger) {
    this.cloudLogger =  cloudLogger
  }
  info(message: string): void {
    this.cloudLogger.sentToServer(message, 'info')
  }
}
// 调用的类
class NotificationService {
  logger: Logger
  constructor(logger: Logger) {
    this.logger = logger
  }
  sent(message: string): void {
    this.logger.info(message)
  }
}

const aliyunCloudLogger = new AliyunCloudLogger()
const cloudLoggerAdater = new CloudLoggerAdater(aliyunCloudLogger)
const notificationService =  new NotificationService(cloudLoggerAdater)
notificationService.sent('溜溜实打实')