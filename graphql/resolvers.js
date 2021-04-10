const apiAdapter = require('../apiAdapter');

//BASE URL FOR THE MICROSERVICE
const BASE_URL = 'http://localhost:8000';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(BASE_URL);

module.exports= {
  getscore: async function({},req){
    return 'hello'
  }

}