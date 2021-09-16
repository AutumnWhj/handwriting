// 动手实现一下compose函数
// 返回的是一个function
// 递归实现 ... 看着就费劲
function compose(...funcs) {
  // 从args入手 从后往前执行
  let len = funcs.length
  let count = len - 1
  let result = null
  return function fn(...args) {
    // 计算当前的结果
    result = funcs[count].apply(this, args)
    // 还有其他方法 则递归并把当前的result作为下一个方法的参数
    if(count <= 0) {
      // 重置count
      count = len - 1
      return result
    } else {
      count--
      return fn.call(null, result)
    }
  }
}
// resuce实现 够简洁
const compose = (...fns) => (value) => fns.reverse().reduce((acc , fn ) => fn(acc),value);

// test
// 测试
const greeting = (name) => `hello ${name}`;
const toUpper = (str) => str.toUpperCase();
const fn = compose(toUpper, greeting);
console.log(fn("yideng")); // 预期输出 'HELLO YIDENG'