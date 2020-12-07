
import MyVue from '../source/index'

let vm = new MyVue({
  el: '#app',
  data() {
    return {
      info: 'hello world',
      obj: {
        name: 'huaj1in'
      },
      arr:[1,2,{name:"whj"}]
    }
  },
})
vm.arr.push({hah:'dasd'})
vm.info = 'hi'
console.log(1,vm)
console.log(2,vm._data.info)
console.log(3,vm.info)
console.log(4,vm.arr)