import {observe} from './index'
import {arrayMethods, observerArray} from './array'
import Dep from './dep'

/**
 * observe()将传入的data先进行判断，如果data是对象，则new 一个Observe对象来使这个data 实现数据监听
 * Observe 将data传入walk方法里，在walk方法里对data进行遍历，然后将data的每一个属性和对应的值传入defineReactive
 * @date 2020-10-14
 */
class Observe {
  constructor(data) {
    // 将用户的数据使用defineProperty定义
    Object.defineProperty(data, '__ob__', {
      get: () => this
    })
    if (Array.isArray(data)) {
      data.__proto__ = arrayMethods
      observerArray(data)
    } else {
      this.walk(data)
    }
  }
  walk(data) {
    let keys = Object.keys(data)
    for (let i = 0;i<keys.length;i++){
      let key  = keys[i]; // 所有的key
      let value = data[keys[i]] //所有的value
      defineReactive(data,key,value)
    }
  }
}

/**
 * 借助defineProperty进行监听
 * @date 2020-10-14
 * @param {any} data
 * @param {any} key
 * @param {any} value
 * @returns {any}
 */
function defineReactive(data, key, value) {
  console.log('data', data)
  // 多层级嵌套对象监听——递归
  observe(value)
  let dep = new Dep()
  Object.defineProperty(data, key, {
    get() {
      if (Dep.target){
        dep.depend() //让dep保存watcher，也让watcher保存这个dep
      }
      return value
    },
    set(newValue) {
      if (newValue === value) return
      value = newValue
      observe(value)

      // 当属性更新时，通知相关watcher更新
      dep.notify()
    }
  })
}
export default Observe