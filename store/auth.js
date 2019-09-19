export const state = () => ({
  auth: null
})

export const mutations = {
  setAuth(state, payload) {
    state.auth = payload
  }
}

export const actions = {
  setAuth({ commit }, payload) {
    commit('setAuth', payload)
  }
}

export const getters = {
  auth: (state) => state.auth,
  status: (state) => !!state.auth
}
