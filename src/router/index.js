import Vue from 'vue'
import VueRouter from 'vue-router'
import pageRouter from '@/page/router'
import indexRouter from '@/page/index/router'
import SystemSettingRouter from '@/page/SystemSetting/router'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  routes: [],
})

let Router = createRouter()

export function initRouter (router) {
  router.addRoutes([
    ...indexRouter,
    ...pageRouter,
    ...SystemSettingRouter,
  ])
}

initRouter(Router)

export function resetRouter () {
  const newRouter = createRouter()
  initRouter(newRouter)
  Router.matcher = newRouter.matcher
}

export default Router
