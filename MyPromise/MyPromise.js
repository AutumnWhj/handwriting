
/**
 * 描述
 * @date 2020-12-04
 * @param {any} executor
 * @returns {any}
 */
function MyPromise(executor) {
  let self = this

  //promise状态，resolve的值,reject的原因
  self.status = 'pending'
  self.value
  self.reason
  //存放所有成功和失败的回调
  self.onResolveCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if(self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
      self.onResolveCallbacks.forEach(function(fn) {
        fn()
      })
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.status = 'reject'
      self.reason = reason
      self.onRejectedCallbacks.forEach(function(fn) {
        fn()
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

/**
 * 描述
 * @date 2020-12-04
 * @param {any} newPromise
 * @param {any} result
 * @param {any} resolve
 * @param {any} reject
 * @returns {any}
 */
function resolvePromise(newPromise, result, resolve, reject) {
  console.log('resolvePromise', result)
  // 判断重读调用
  if(newPromise === result) {
    return reject(new TypeError('error: Repeat the same promise'))
  }
  let called // 表示promise是否被调用过
  // 如果是object或者function执行，否则直接resolve
  if((result !== null && typeof result === 'object') || typeof result === 'function') {
    try {
      let then = result.then
      // 如果then是一个函数，就认为他是Promise, 需要使用call执行then方法，改变this的指向为result, then中传入成功和失败的函数, 官方文档中指明成功函数的参数叫y，失败的参数为r
      if(typeof then === 'function') {
        then.call(result, function(y) {
          if(called) {
            return
          }
          called = true
          resolvePromise(newPromise, y, resolve, reject)
        }, function(r) {
          if(called) {
            return
          }
          called = true
          reject(r)
        })
      } else {
        if(called) {
          return
        }
        called = true
        resolve(then)
      }
    } catch (e) {
      if(called) {
        return
      }
      called = true
      reject(e)
    }
  } else {
    if(called) {
      return
    }
    called = true
    resolve(result)
  }
}

/**
 * 描述
 * @date 2020-12-04
 * @param {any} onFulfilled
 * @param {any} onRejected
 * @returns {any}
 */
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) { return data;};
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) { throw err;};
  let self = this
  const newPromise = new MyPromise(function (resolve, reject) {
    // 当状态resolved执行onFulfilled
    if(self.status === 'resolved') {
      setTimeout(function() {
        try {
          // 记录前一个then的值，往后传
          const result =  onFulfilled(self.value)
          resolvePromise(newPromise, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    // 当状态reject执行onRejected
    if(self.status === 'reject') {
      setTimeout(function() {
        try {
          const result =  onRejected(self.reason)
          resolvePromise(newPromise, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    // 把then要处理的存入队列，等status改变时再执行，使异步得以实现
    if(self.status === 'pending') {
      self.onResolveCallbacks.push(function() {
        setTimeout(function() {
          try {
            // 记录前一个then的值，往后传
            const result =  onFulfilled(self.value)
            resolvePromise(newPromise, result, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
      self.onRejectedCallbacks.push(function() {
        setTimeout(function() {
          try {
            const result =  onRejected(self.reason)
            resolvePromise(newPromise, result, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
    console.log('self.status', self.onResolveCallbacks)
  })
  // 链式调用，返回一个新的promise 使得 status= pending
  return newPromise
}
// 静态方法的实现
MyPromise.all = function (values) {
  return new MyPromise(function (resolve, reject) {
      var arr = []; // 最终结果的数组
      var index = 0;

      function processData (key, value) {
          index++;
          arr[key] = value;
          if (index === values.length) {
              resolve(arr);
          }
      }

      for (var i = 0; i < values.length; i++) {
          var current = values[i];
          if (current && current.then && typeof current.then === 'function') {
              current.then(function(y) {
                  processData(i, y);
              }, reject);
          } else {
              processData(i, current);
          }
      }
  });
}

MyPromise.race = function (values) {
  return new MyPromise(function (resolve, reject) {
      for (var i = 0; i < values.length; i++) {
          var current = values[i];
          if (current && current.then && typeof current.then === 'function') {
              current.then(resolve, reject);
          } else {
              resolve(current);
          }
      }
  });
}

MyPromise.resolve = function(value){
  return new MyPromise((resolve,reject)=>{
      resolve(value);
  });
}

MyPromise.reject = function(reason){
  return new MyPromise((resolve,reject)=>{
      reject(reason);
  });
}


// 测试用例
let p = new MyPromise((resolve, reject) => {
  setTimeout(function() {
    resolve('成功啦');
}, 1000) 
})

p.then(function(value) {
  return value
}).then(function(value) {
  return value
}).then(function(data) {
  console.log(data)
  return '牛🐂'
})