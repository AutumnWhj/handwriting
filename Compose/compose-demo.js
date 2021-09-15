Function.prototype.after = function(fn) {
  const self = this
  return function(...args) {
    let result = self.apply(null, args)
    return fn.call(null,result)
  }
}
const compose = function(...args) {
  if (args.length) {
    return args.reverse().reduce(function(f1, f2) {
      return f1.after(f2)
    })
  }
}
const getCountStepAttr = function(args,N){
    // 获取前 N 步的入参；
    N = N -1
    let resObj = args[0]
    for(let i =0;i<N;i++){
        resObj = resObj.args[0]
    }
    return resObj
}
function init(...args){
    console.log("【在 init 中调用原始传参】：",getCountStepAttr(args,1))
    return {args:args,init1:"init1",init:"init"}
}
function step1(...args){
    return {args:args,step1:"step1"}
}
function step2(...args){
    return {args:args,step2:"param-step2",step2Add:"param-step2-add"}
}
function step3(...args){
    console.log("【在 step3 中调用 step2 的传参】：",getCountStepAttr(args,1).step2 , getCountStepAttr(args,1).step2Add)
    console.log("【在 step3 中调用 init 的传参】：",getCountStepAttr(args,3).init , getCountStepAttr(args,3).init1)
    console.log("【在 step3 中调用原始传参】：",getCountStepAttr(args,4))
    return {args:args,step3:"step3"}
}
compose(step3,step2,step1,init)("start")
// 【在 init 中调用原始传参】： start
// 【在 step3 中调用 step2 的传参】： param-step2 param-step2-add
// 【在 step3 中调用 init 的传参】： init init1
// 【在 step3 中调用原始传参】： start