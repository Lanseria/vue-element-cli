import request from '@/router/axios'

export const getRoleList = () => {
  return request({
    url: '/roles/',
    method: 'get',
  })
}
