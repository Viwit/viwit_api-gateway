const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const {AUTHENTICATION_2_URL} = require('../../util/servers') 

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(AUTHENTICATION_2_URL)

module.exports = {
  putToken: async function ({id},{token}) {
    res = await api.put(`/token/${id}/${token}`)
    return res.data
  },

  deleteToken: async function ({id}) {
    res = await api.delete(`/token`)
    return res.data
  },

  postToken: async function ({id},{type}) {
    res = await api.post(`/token/${id}/${type}`)
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
