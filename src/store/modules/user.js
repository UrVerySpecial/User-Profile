const DUMMY_USERS = [
  {
    email: 'testkang1803@gmail.com',
    firstName: 'jungmo',
    lastName: 'kang'
  },
  {
    email: 'defaultImage@gmail.com',
    firstName: 'default',
    lastName: 'user'
  }
]

// return dummy users
// and return type is promise because I want to make same as real API call
const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(DUMMY_USERS), 3000)
  })
}

const state = {
  isLoading: false, // for display loading spinner
  users: []
}

const mutations = {
  setLoading (state, status) {
    state.isLoading = status
  },
  setUsers (state, users) {
    state.users = users
  }
}

const actions = {
  async getUsers ({ commit }) {
    commit('setLoading', true)
    let users = await getUsers()
    commit('setUsers', users)
    commit('setLoading', false)
  }
}
const getters = {
  users: state => {
    return state.users
  },
  isLoading: state => {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
