import { initState } from './Observe/index'
import Watcher from './Observe/Watcher'
import { compiler } from './Observe/utils'
function MyVue(options) {
  this._init(options)
}
MyVue.prototype._init = function (options) {
  let vm = this;
  // this.$options表示是Vue中的参数,如若我们细心的话我们发现vue框架的可读属性都是$开头的
  vm.$options = options;

  // MVVM原理 重新初始化数据  data
  initState(vm)

  // 初始化渲染页面
  if (vm.$options.el) {
    vm.$mount()
  }
}

function query(el) {
  if (typeof el === 'string') {
    return document.querySelector(el)
  }
  return el
}

/**
 * 先获得dom树，
 * 替换dom树中的数据
 * 把新dom挂载到页面上去
 * @date 2020-10-15
 * @returns {any}
 */
MyVue.prototype.$mount = function () {
  let vm = this
  let el = vm.$options.el
  el = vm.$el = query(el) //获取当前节点

  let updateComponent = () => {
    console.log('更新和渲染的实现')
    vm._update()
  }

  new Watcher(vm,updateComponent)
}

MyVue.prototype._update = function () {
  let vm = this
  let el = vm.$el

  let node = document.createDocumentFragment()
  let firstChild
  while (firstChild = el.firstChild){
    node.appendChild(firstChild)
  }

  console.log(firstChild,el,node, 'vmvmvmvmvm')

  compiler(node, vm)

  el.appendChild(node)
}


export default MyVue