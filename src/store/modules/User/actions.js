import Vue from 'vue'
import * as types from './mutation-types'
import { postLogin } from '@/api/User'

export const userLogin = async ({ commit }, form) => {
  try {
    const { data } = await postLogin(form)
    Vue.ls.set(types.SET_ACCESS_TOKEN, data.data, 7 * 24 * 60 * 60 * 1000)
    commit(types.SET_ACCESS_TOKEN, data.data)
    return data
  } catch (error) {
    console.log(error)
  }
}
