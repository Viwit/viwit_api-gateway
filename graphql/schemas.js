const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')
const {transactionTypeDef, transactionMutations, transactionQueries} = require('./transaction/schema');
const {qrTypeDef, qrMutations, qrQueries} = require('./qr/schema');

let typeDefs = [scoreTypeDef, generalTypeDef,transactionTypeDef, qrTypeDef ]
let queries = [scoreQueries, generalQueries,transactionQueries,qrQueries ]
let mutations = [scoreMutations, generalMutations, transactionMutations, qrMutations]

const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

