const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const AUTHENTICATION_URL = 'http://ec2-3-91-52-122.compute-1.amazonaws.com:3000/api';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(AUTHENTICATION_URL)

module.exports = {
  getuser: async function ({id}) {
    res = await api.get(`/user/${id}`)
    return res.data
  },

  getusers: async function () {
    res = await api.get(`/users`)
    return res.data
  },

  setUser: async function ({user}) {
    res = await api.post(`/user`, user)
    return res.data
  },

  updateUser: async function ({id,user}){
    res = await api.put(`/user/${id}`,user)
    return res.data
  },

  deleteUser: async function ({id}){
    res = await api.delete(`/user/${id}`)
    res.data.success=true
    return res.data
  }
}