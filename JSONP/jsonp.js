
const jsonp = ({url, params, callbackName}) => {
  const generateUrl = () => {
    let dataStr = ''
    for(let key in params) {
      dataStr += `${key}=${params[key]}$`
    }
    dataStr += `callback=${callbackName}`
    return `${url}?${dataStr}`
  }
  return  new Promise((resolve, reject) => {
    // 初始化回调函数
    callbackName = callbackName || Math.random().toString.replace(',', '')
    const scriptEle = document.createElement('script')
    scriptEle.src = generateUrl()
    document.body.appendChild(scriptEle)
    console.log(1212)
    // 绑定到window 方便调用
    window[callbackName] = (data) => {
      resolve(data)
      // 执行完后，清楚无用元素
      document.body.removeChild(scriptEle)
    }
  })
}

// 调用
jsonp({
  url: 'http://localhost:3000',
  params: {
    a:1,
    b:1
  }
}).then(data => {
  // 拿到数据进行处理
  console.log(data)
})