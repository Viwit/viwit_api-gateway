exports.getScore = (req, res, next) => {
  const id = req.body.id;
  const kind = req.body.kind;

};

exports.putScore = (req, response, next) => {
  const id = req.body.id;
  const kind = req.body.kind;
  const score = req.body.score;

};
