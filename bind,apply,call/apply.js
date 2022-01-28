function _apply(context, arr) {
  context.fn = this
  // 如果存在参数，则传递进去
  // 将结果返回给 result
  let result
  if (arr) {
    result = context.fn(...arr);
  } else { // 否则不传
    result = context.fn();
  }
  delete context.fn
  return result
} 