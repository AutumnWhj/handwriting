function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if(typeof left !== 'object' || left === null) return false
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  const proto = Object.getPrototypeOf(left)
  while(true) {
    if(proto === null) return false
    //找到相同原型对象，返回true
    if(proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}