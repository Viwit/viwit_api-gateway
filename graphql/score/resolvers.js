const apiAdapter = require('../../apiAdapter');

//BASE URL FOR THE MICROSERVICE
const SCORE_URL = 'http://host.docker.internal:8000';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(SCORE_URL);


module.exports = {
  getscore: async function({id, kind }) {
    res = await api.get('/score/', { params: { id: id, kind: kind }})
    return {
      id: parseInt(res.data.id),
      score: parseFloat(res.data.score),
    };
  },
  putscore: async function({entity}){
    res = await api.put('/score/', entity)    
    return{
      message: res.data.message
    }
  }
};
