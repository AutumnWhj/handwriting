import Observe from "./observe";


export function initState(vm) {
  let opt = vm.$options
  console.log('initState', vm, opt)
  if(opt.data) {
    initData(vm)
  }
  if (opt.watch){
    initWathch(vm);
  }
}

function initWathch(vm) {
  let watch = vm.$options.watch
  for (let key in watch){
      let handler = watch[key]
      createWatch(vm,key,handler)
  }
}
function createWatch(vm,key,handler) {
  return vm.$watch(key,handler)
}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key]
    },
    set(newValue) {
      return vm[source][key] = newValue
    }
  })
}


// 初始化data,传入observe中实现监听
function initData(vm) {
  let data = vm.$options.data
  console.log('initData', data)
  // 判断是不是函数，我们知道vue，使用data的时候可以data：{}这种形式，也可以data(){return{}}这种形式
    // 然后把把用户传入的打他数据赋值给vm._data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data ||{}
  // 实现一个proxy方法，该方法将传入的数据挂载到vm上，而当我们访问this.xxx的时候，其实是访问了this._data.xxx
  for (let key in data) {
    proxy(vm,"_data",key)
  }
  observe(data)
}

export function observe(data) {
  if (typeof data !== 'object' || data == null){
      return
  }
  return new Observe(data)
}