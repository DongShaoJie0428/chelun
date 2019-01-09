import JSBridge from '@/utils/JSBridge.js';

// 封装请求的方法
function sendRequest(url, method = 'GET', data = {}) {
  let params = {
      method,
      headers:{
        "content-type":"application/json"
      }
  };
  // 判断如果是一个post请求，带上请求体信息
  if (method == 'POST') {
      params.body = JSON.stringify(data);
  }
  // 判断请求查询url是否携带query
  if (url.indexOf('?') == -1) {
      url += `?_=${+new Date()}`
  } else {
      url += `&_=${+new Date()}`
  }
  // 拼接登陆态token
  // url += `&token=${getToken()}`;
  return fetch(url, params)
    .then(res => res.json())
    .then(body => body);
}

// 图片上传
export let uploadImg = (type)=>{
  return new Promise((resolve, reject)=>{
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function(res){
        resolve(res);
      }
    })
  })
}

// // 唤醒登陆
// export let goLogin = () => {
//   JSBridge.invoke('app', 'login', {
//     loginCallBackName: ()=>window.reload()
//   });
// }

// 唤起支付
export let gotoPay = () => {
  JSBridge.invoke('app', 'pay', {
    price: 398,
    orderNum: "6486917895967946754",
    channels:["weixin","alipay","baidu"],
    callbackUrl:'https://h5.chelun.com/2017/update-licence2/order.html'
  })
}

// 唤起分享功能
export let goShare = () => {
  JSBridge.invoke("ui","shareMessage")
}

// 获取签发城市
export let cityList = () => {
  return sendRequest("/api/ExchangeJiaZhao/cityList")
}

// 获取可补换的签发城市
export let costList = (...params) => {
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`)
}

// 获取用户是否是会员
export let isVip = () => {
  return sendRequest('/api2/api/status')
}

// 上传base64图片
export let uploadBase64 = (base64) => {
  return sendRequest("http://123.206.55.50:11000/upload_base64","POST",{base64})
}

// 图片转baes64
export let imgTobase64 = (url) => {
  return sendRequest("http://123.206.55.50:11000/tobase64","POST",{url})
}