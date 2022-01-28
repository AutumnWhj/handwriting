
// 创建一个XMLHttpRequest对象
// 处理请求optionsc参数
// 区分get/post请求
// 监听请求状态
function ajax(options) {
  const xhr = new XMLHttpRequest()
  const methods =  options.type.toUpperCase()
  const { url, data } = options || {}
  if(methods === 'GET') {
    xhr.open(methods, `${url}?data`, true)
    xhr.send(null)
  } else if(methods === 'POST') {
    xhr.open(methods, url, true)
    xhr.send(data)
  }

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status >= 200 && xhr.status <300) {
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        options.fail && options.fail(status)
      }
    }
  }
}

ajax({
  type: 'post',
  dataType: 'json',
  data: {},
  url: 'https://xxxx',
  success: function(text,xml){//请求成功后的回调函数
      console.log(text)
  },
  fail: function(status){////请求失败后的回调函数
      console.log(status)
  }
})