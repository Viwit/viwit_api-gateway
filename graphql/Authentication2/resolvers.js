const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const TRANSACTION_URL = 'http://ec2-54-226-16-1.compute-1.amazonaws.com:8080';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL)

module.exports = {
  update_token: async function ({id}) {
    res = await api.put(`/update-token/${id}`)
    return res.data
  },

  read_token: async function ({id}) {
    res = await api.get(`/read-token/${id}`)
    return res.data
  },

  create_token: async function ({id}) {
    res = await api.post(`/create-token/${id}`)
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
