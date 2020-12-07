import {observe} from './index'

let oldArrayPrototypeMethods = Array.prototype

export let arrayMethods = Object.create(oldArrayPrototypeMethods)

// 重写的方法
let methods = ['push', 'shift', 'unshift', 'pop', 'reverse', 'sort', 'splice']

methods.forEach(method => {
  arrayMethods[method] = function(...arg) {
    // 返回新的数组方法，并执行监听
    let res = oldArrayPrototypeMethods[method].apply(this, arg)
    // 监听
    console.log('重写数组方法监听', arg, arg.slice(2))
    // observerArray
    let inserted
    switch (method) {
      case 'push':
      case 'unshift': 
        inserted = arg
        break;
      case 'splice': 
        inserted = arg.slice(2)
        break;
      default:
        break;
    }
    if (inserted) {
      observerArray(inserted)
    }
    this.__ob__.dep.notify()
    return res
  }
})

export function observerArray(inserted) {
  // 循环监听每一个新增的属性 inserted不一定是一个值，也可能是多个，例如[].push(1,2,3)。
  for(let i =0;i<inserted.length;i++){
    observe(inserted[i])
  }
}


