import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import { Message } from 'element-ui'
import 'nprogress/nprogress.css'
import store from '@/store' // progress bar style
import router from '@/router/'

axios.defaults.timeout = 30000
axios.defaults.baseURL = '/api'

// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// NProgress Configuration
NProgress.configure({
  showSpinner: false,
})

// HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    NProgress.start() // start progress bar
    const isToken = (config.headers || {}).isToken === false
    let token = store.getters.access_token
    if (token && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + token // token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// HTTPresponse拦截
axios.interceptors.response.use(res => {
  NProgress.done()
  const status = Number(res.status) || 200
  const message = res.data.msg
  if (status === 401 || res.data.code === 401) {
    store.dispatch('FedLogOut').then(() => {
      router.push({ path: '/login' })
    })
    return
  } else if (status === 403 || res.data.code === 403) {
    router.push({ path: '/403' })
    return
  } else if (!(/[2|5]\d\d/.test('' + status)) || res.data.code === 1) {
    if (res.data.code === 1 && status === 400) {
      Message(message)
    }
    if (res.data.code === 1 && (/[2|5]\d\d/.test('' + status))) {
      return res
    }
    return Promise.reject(new Error(message))
  } else {
    return res
  }

},
  error => {
    NProgress.done()
    return Promise.reject(new Error(error))
  }
)

export default axios
