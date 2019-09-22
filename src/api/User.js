import request from '@/router/axios'

export const postLogin = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data: data,
  })
}

export const postRegister = (data) => {
  return request({
    url: '/auth/register',
    method: 'post',
    data: data,
  })
}