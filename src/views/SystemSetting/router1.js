export default [
  {
    '_componentName': '@/layouts/index',
    'path': '/system_setting',
    'name': '系统设置',
    'icon': 'el-icon-menu',
    'redirect': '',
    component: () => import('@/layouts/index'),
    'children': [
      {
        '_componentName': '@/views/SystemSetting/User/index.vue',
        'path': 'user',
        'name': '用户管理',
        'icon': 'el-icon-menu',
        'redirect': '',
        component: () => import('@/views/SystemSetting/User/index.vue'),
        'children': [],
      },
      {
        '_componentName': '@/views/SystemSetting/Menu/index.vue',
        'path': 'menu',
        'name': '菜单管理',
        'icon': 'el-icon-menu',
        'redirect': '',
        component: () => import('@/views/SystemSetting/Menu/index.vue'),
        'children': [],

      },
    ],
  },
]
