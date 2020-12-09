
function _call(context) {
  context.fn = this
  // 获取args参数
  const otherArgs = Array.from(arguments).slice(1)
  // 传入参数并执行
  context.fn(...otherArgs)
  // 将这个方法的执行结果传给 result
  let result = context.fn(...otherArgs)
  // delete fn
  delete context.fn
  return result
} 