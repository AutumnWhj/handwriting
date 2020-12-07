
function throttle(fn, dely) {
  let timer = true
  return function()  {
    if(!timer) {
      return
    }
    timer = false
    setTimeout(() => {
      fn.call(this, arguments)
      timer = true 
    }, dely);
  }
}