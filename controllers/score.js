const apiAdapter = require('./apiAdapter');

//BASE URL FOR THE MICROSERVICE
const BASE_URL = 'http://localhost:8000';
//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(BASE_URL);

exports.getScore = (req, res, next) => {
  api
    .get(req.path, {
      params: req.query,
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

exports.putScore = (req, res, next) => {
  api
    .put(req.path, req.body)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};
