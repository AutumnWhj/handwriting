function mynew(Func, ...args) {
  // 创建一个新对象
  const obj = Object.create({})
  // 新对象的__proto__指向func的原型
  obj.__proto__ = Func.prototype
  // this指向新对象
  const result = Func.apply(obj, args)
  return result instanceof Object ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log(this.name)
}

let p = mynew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // huihui
