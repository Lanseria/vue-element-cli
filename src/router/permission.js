import NProgress from 'nprogress'
import router from '@/router/index'
import store from '@/store/index'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const {
    access_token,
  } = store.getters
  NProgress.start()
  const meta = to.meta || {}
  if (access_token) {
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
