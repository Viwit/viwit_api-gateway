const apiAdapter = require('../../util/apiAdapter');

//BASE URL FOR THE MICROSERVICE
const { SCORE_URL } = require('../../util/servers');

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(SCORE_URL);

module.exports = {
  getAllScores : async function () {
    res = await api.get('/scores/');
    let entities = []
    res.data.entities.forEach(element => {
      entities.push({
        id : parseInt(element._id),
        kind: parseInt(element.kind),
        score : parseFloat(element.score)
      })
    });
    return entities;
  },
  
  getscore: async function ({ id, kind }) {
    res = await api.get('/score/', { params: { id: id, kind: kind } });
    return {
      id: parseInt(res.data.id),
      score: parseFloat(res.data.score),
    };
  },
  putscore: async function ({ entity }) {
    res = await api.put('/score/', entity);
    return {
      message: res.data.message,
    };
  },
};
