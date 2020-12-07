
/**
 * 描述
 * @date 2020-12-07
 * @param {any} fn
 * @param {any} dely
 * @returns {any}
 */
function debounce(fn, dely) {
  let timer = null
  return function() {
    clearTimeout(timer)
    
    timer = setTimeout(() => {
      fn.call(this, arguments)
    }, dely); 
  }
}

// debounce(fn, dely)