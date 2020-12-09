// call：可以改变函数指向，第一个参数是要改变指向的对象，之后的参数形式是 arg1, arg2... 的形式
// apply：基本同 call，不同点在于第二个参数是一个数组 [arg1, arg2...]
// bind：改变 this 作用域会返回一个新的函数，这个函数不会马上执行

function _bind(asThis, ...args1) {
  let fn = this;
  let resultFn = function(...args2) {
      return fn.call(this instanceof resultFn ? this : asThis, ...args1, ...args2);
  }
  let fnNo = new Function();
  fnNo.prototype = fn.prototype;
  // 使用fnNo做中转 resultFn.prototype.__proto__ === fnNo.prototype === fn.prototype;
  resultFn.prototype = new fnNo();
  return resultFn;
}
// 最终版
function _bind(asThis) {
  // 判断调用bind的是不是个函数
  if (typeof this !== 'function') {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var fn = this;
  var args1 = Array.prototype.slice.call(arguments, 1);
  var resultFn = function() {
      var args2 = Array.prototype.slice.call(arguments);
      return fn.apply(this instanceof resultFn ? this : asThis, args1.concat(args2));
  }
  
  var fnNo = new Function();
  fnNo.prototype = fn.prototype;
  resultFn.prototype = new fnNo();
  return resultFn;
}

Function.prototype.bind = Function.prototype.bind || _bind;