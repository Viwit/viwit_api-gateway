const url = process.env.HOST || 'localhost';

const AUTHENTICATION_URL = process.env.AUTH ? `http://${url}:${process.env.AUTH}/api` : `http://${url}:3000/api`;
const AUTHENTICATION_2_URL =process.env.AUTH2 ? `http://${url}:${process.env.AUTH2}` : `http://${url}:8080`;
const TRANSACTION_URL = `http://54.237.94.101:4100`;
const GENERAL_URL = process.env.GEN ? `http://${url}:${process.env.GEN}` : `http://${url}:4000`;
const SCORE_URL = process.env.SCO ? `http://${url}:${process.env.SCO}` : `http://${url}:8000`;
const QR_URL = `http://100.25.223.26:8050`;

console.log(AUTHENTICATION_URL);
console.log(AUTHENTICATION_2_URL);
console.log(TRANSACTION_URL);
console.log(GENERAL_URL);
console.log(SCORE_URL);

module.exports = {
  AUTHENTICATION_URL,
  AUTHENTICATION_2_URL,
  TRANSACTION_URL,
  GENERAL_URL,
  SCORE_URL,
  QR_URL,
};
