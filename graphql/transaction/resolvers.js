const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const {TRANSACTION_URL} = require('../../util/servers') 

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL)

module.exports = {
  postCreateWallet: async function ({ wallet }) {
    res = await api.post(`/wallet`, { wallet: wallet })
    return res.data
  },

  getWalletByUserId: async function ({ id }) {
    res = await api.get(`/wallet/${id}`)
    return res.data
  },

  getAllWallet: async function () {
    res = await api.get(`/wallet`)
    return res.data
  },

  postCreateTransaction: async function ({ transaction }) {
    res = await api.post(`/transaction`, { trans: transaction })
    return res.data
  },

  getTransactionById: async function ({ id }) {
    res = await api.get(`/transaction/${id}`)
    return res.data
  },

  getAllTransaction: async function () {
    res = await api.get(`/transaction`)
    return res.data
  },

}
