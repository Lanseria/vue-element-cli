import NProgress from 'nprogress'
import router from '@/router/index'
import store from '@/store/index'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const {
    accessToken,
  } = store.getters
  NProgress.start()
  const meta = to.meta || {}
  if (accessToken) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (meta.isAuth === false) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
