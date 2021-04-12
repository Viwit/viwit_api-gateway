const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const TRANSACTION_URL = 'localhost:8080';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL)

module.exports = {
  update_token: async function ({ id }) {
    res = await api.post(`/update-token/${id}`)
    return res.data
  },

  read_token: async function ({ id }) {
    res = await api.get(`/read-token/${id}`)
    return res.data
  },

  create_token: async function ({ id }) {
    res = await api.post(`/create-token/${id}`)
    return res.data
  },
}
