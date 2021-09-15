// 函数AOP
Function.prototype.before = (fn) => {
  return (...args) => {
    const result = fn.apply(null, args)
    return this.call(null, result)
  }
}
Function.prototype.after = (fn) => {
  return (...args) => {
    const result = this.apply(null, args)
    return fn.call(null, result)
  }
}

const composeAOP = (...args) => {
  // 取出当前调用的两个函数
  const before = args.pop()
  const start = args.pop()
  if(args.length) {
    return args.reverse().reduce(function(f1,f2) {
      return f1.after(f2)
    }, start.before(before))
  }
  return start.before(before)
}

const compose = (...args) => {
  if (args.length) {
    return args.reverse().reduce(function(f1, f2) {
      return f1.after(f2)
    })
  }
}