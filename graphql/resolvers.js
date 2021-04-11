const {getscore, putscore} = require('./score/resolvers')
const {getBusByLicensePlate} = require('./general/resolvers')


module.exports = {
  getscore,
  putscore,
  getBusByLicensePlate
};