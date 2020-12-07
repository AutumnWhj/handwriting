
/**
 * 描述
 * @date 2020-12-07
 * @param {any} target
 * @returns {any}
 */
// 基础版
function checkedType(target) {
  return Object.prototype.toString.call(target).slice(8, -1)
}
function deepClone(target) {
  let result, targetType = checkedType(target)
  if(target === 'Object') {
    result = {}
  } else if(target === 'Array') {
    result = []
  } else {
    return result
  }

  //递归
  for(let i in target) {
    let currenValue = target[i]
    if(checkedType(currenValue) === 'Object' || checkedType(currenValue) === 'Array') {
      result[i] = deepClone(currenValue)
    } else {
      result[i] = currenValue
    }
  }
  return result
}