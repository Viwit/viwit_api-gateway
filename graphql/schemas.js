const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')
const {transactionTypeDef, transactionMutations, transactionQueries} = require('./transaction/schema');
const {tokenTypeDef, tokenQueries, tokenMutations} = require('./Authentication2/schema')

let typeDefs = [scoreTypeDef, generalTypeDef,transactionTypeDef, tokenTypeDef ]
let queries = [scoreQueries, generalQueries,transactionQueries, tokenQueries ]
let mutations = [scoreMutations, generalMutations, transactionMutations, tokenMutations]

const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

