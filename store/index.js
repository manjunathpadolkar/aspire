export const state = () => ({
  users: [
    {username: 'manjunath@test.com', name: 'Manjunath Padolkar', password: 'password123'},
    {username: 'john@test.com', name: 'John Doe', password: 'password123'},
    {username: 'maryam@test.com', name: 'Maryam Cruz', password: 'password123'},
    {username: 'jenn@test.com', name: 'Jenn Lee', password: 'password123'}
  ],
  authUser: null,
})

export const mutations = {
  signup(state, userObj) {
    state.users.push(userObj)
    state.authUser = userObj
  },
  setAuthUser(state, authUser){
    state.authUser = authUser
  },
  unsetAuthUser(state){
    state.authUser = null
  }
}