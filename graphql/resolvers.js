// IMPORT RESOLVERS
const scoreResolvers = require('./score/resolvers')
const generalResolvers = require('./general/resolvers')
const transactionResolvers = require('./transaction/resolvers')
const auth1Resolvers = require('./auth1/resolvers')
const auth2Resolvers = require('./auth2/resolvers')
const qrResolvers = require('./qr/resolvers')

module.exports = {
  ...scoreResolvers,
  ...generalResolvers,
  ...transactionResolvers,
  ...auth1Resolvers,
  ...auth2Resolvers,
  ...qrResolvers
};