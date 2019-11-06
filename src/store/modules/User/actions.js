import Vue from 'vue'
import * as types from './mutation-types'
import { postLogin, getUserInfo } from '@/api/User'

export const userLogin = async ({ commit, dispatch }, form) => {
  try {
    const { data } = await postLogin(form)
    Vue.ls.set(types.SET_ACCESS_TOKEN, data.data, 7 * 24 * 60 * 60 * 1000)
    commit(types.SET_ACCESS_TOKEN, data.data)
    await dispatch('userInfo')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const userInfo = async ({ commit }) => {
  try {
    const userInfo = (await getUserInfo()).data.data
    console.log(userInfo)
    commit(types.SET_USERNAME, userInfo.username)
    commit(types.SET_ID, userInfo.id)
    return userInfo
  } catch (error) {
    console.log(error)
  }
}
