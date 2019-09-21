import * as types from './mutation-types'

export default {
  [types.SET_ACCESS_TOKEN] (state, access_token) {
    state.access_token = access_token
  },
}