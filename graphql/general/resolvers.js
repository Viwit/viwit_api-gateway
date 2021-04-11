const apiAdapter = require('../../apiAdapter');

//BASE URL FOR THE MICROSERVICE
const GENERAL_URL = 'http://localhost:4000';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(GENERAL_URL);

module.exports = {
  getBusByLicensePlate : async function({licensePlate}){
    res = await api.get(`/Bus/${licensePlate}`)
    return res.data  
  }
}




