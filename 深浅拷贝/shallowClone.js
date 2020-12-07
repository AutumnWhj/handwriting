
/**
 * 描述
 * @date 2020-12-07
 * @param {any} target
 * @returns {any}
 */
function shallowClone(target) {
  const isArray = Array.isArray(target)
  if(target !== null && typeof target === 'object' && !isArray) {
    return {...target}
  }
  return isArray ? [...target] : target
}