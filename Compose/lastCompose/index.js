// const compose = (...fns) => {
//   return (...args) => fns.forEach(task=>task(...args))
// }

// resuce实现 够简洁
const compose = (...fns) => (value) => {
  const reverseFns= fns.reverse()
  reverseFns.reduce((acc, fn, index, currArr) => {
      if (!fn(acc)) currArr.length = 0
      return (acc , fn) => fn(acc)
    }
    ,value)
}


