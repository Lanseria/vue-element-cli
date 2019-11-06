import * as types from './mutation-types'

export default {
  [types.SET_ACCESS_TOKEN](state, access_token) {
    state.access_token = access_token
  },
  [types.SET_ID](state, id) {
    state.id = id
  },
  [types.SET_USERNAME](state, username) {
    state.username = username
  },
}
