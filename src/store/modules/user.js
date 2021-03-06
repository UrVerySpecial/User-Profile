let DUMMY_USERS = [
  {
    id: 'testuser1',
    email: 'testkang1803@gmail.com',
    firstName: 'jungmo',
    lastName: 'kang'
  },
  {
    id: 'testuser2',
    email: 'defaultImage@gmail.com',
    firstName: 'default',
    lastName: 'user'
  }
]

// return dummy users
// and return type is promise because I want to make same as real API call
const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(DUMMY_USERS), 1000)
  })
}
const saveUser = (editedUser) => {
  let userIndex = DUMMY_USERS.findIndex(user => user.id === editedUser.id)
  if (userIndex >= 0) {
    DUMMY_USERS[userIndex] = editedUser
  }
  return Promise.resolve()
}
const changePassword = (userId, newPassword) => {
  let userIndex = DUMMY_USERS.findIndex(user => user.id === userId)
  if (userIndex >= 0) {
    DUMMY_USERS[userIndex].password = newPassword
  }
  return Promise.resolve()
}
const state = {
  init: false, // for check fetch users has call or not
  isLoading: false, // for display loading spinner
  users: []
}

const mutations = {
  setLoading (state, status) {
    state.isLoading = status
  },
  setUsers (state, users) {
    state.users = users
  },
  setInit (state) {
    state.init = true
  }
}

const actions = {
  async getUsers ({ commit, state }, initialFlag = true) {
    if (initialFlag && state.init) return // call as init and if init process has finished, do nothing.
    commit('setLoading', true)
    try {
      let users = await getUsers()
      commit('setUsers', users)
    } finally {
      commit('setLoading', false)
      commit('setInit')
    }
  },
  async editUser ({ commit, dispatch }, editedUser) {
    commit('setLoading', true)
    try {
      await saveUser(editedUser)
    } finally {
      await dispatch('getUsers', false)
    }
  },
  // payload: userId, newPassword
  changePassword (_, payload) {
    return changePassword(payload.userId, payload.newPassword)
  }
}
const getters = {
  users: state => {
    return state.users
  },
  userById: state => {
    return userId => state.users.find(user => {
      return user.id === userId
    })
  },
  isLoading: state => {
    return state.isLoading
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
