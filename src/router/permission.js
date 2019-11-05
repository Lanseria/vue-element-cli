import Vue from 'vue'
import NProgress from 'nprogress'
import router from '@/router/index'
// import store from '@/store/index'
import * as types from '@/store/modules/User/mutation-types'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const meta = to.meta || {}
  if (Vue.ls.get(types.SET_ACCESS_TOKEN)) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (meta.isAuth === false) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
