const state = {
  users: [{
    msg: 'hello world'
  }]
}

const mutations = {}
const actions = {}
const getters = {
  users: state => {
    return state.users
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
