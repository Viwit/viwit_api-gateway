const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const {AUTHENTICATION_2_URL} = require('../../util/servers') 

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(AUTHENTICATION_2_URL)

module.exports = {
  putToken: async function ({id}) {
    res = await api.put(`/token/${id}`)
    return res.data
  },

  getToken: async function ({id}) {
    res = await api.get(`/token/${id}`)
    return res.data
  },

  deleteToken: async function ({id}) {
    res = await api.delete(`/token/${id}`)
    return res.data
  },

  postToken: async function ({id}) {
    res = await api.post(`/token/${id}`)
    return res.data
  },

  unlock_account: async function ({id}){
    res = await api.put(`/update-unlockAccount/${id}`)
    return res.data
  },

  block_account: async function ({id}){
    res = await api.put(`/update-blockAccount/${id}`)
    return res.data
  }
}
