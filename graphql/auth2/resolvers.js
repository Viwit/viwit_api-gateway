const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const {AUTHENTICATION_2_URL} = require('../../util/servers') 

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(AUTHENTICATION_2_URL)

module.exports = {
  put_token: async function ({id, token}) {
    res = await api.put(`/token/${id}/${token}`)
    return res.data
  },

  get_login: async function ({email, password}){
    res = await api.get(`/login/${email}/${password}`)
    return res.data
  },

  post_token: async function ({id, type}) {
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
