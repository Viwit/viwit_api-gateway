const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const TRANSACTION_URL = 'http://localhost:8081';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL)

module.exports = {
  update_token: async function ({id}) {
    res = await api.get(`/update-token/${id}`)
    return res.data
  },

  read_token: async function ({id}) {
    res = await api.get(`/read-token/${id}`)
    return res.data
  },

  create_token: async function ({id}) {
    res = await api.get(`/create-token/${id}`)
    return res.data
  },
}
