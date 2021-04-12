const apiAdapter = require('../../apiAdapter');

//BASE URL FOR THE MICROSERVICE
const TRANSACTION_URL = 'http://localhost:4100';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL);

module.exports = {

  postCreateWallet: async function({wallet}){
    res = await api.post(`/wallet`, wallet)   
    return res.data
  },

  getWalletByUserId : async function({id}){
    res = await api.get(`/transaction/${id}`)
    return res.data  
  },

  getAllWallet : async function(){
    res = await api.get(`/wallet`)
    return res.data 
  },

}




