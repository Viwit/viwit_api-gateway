const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')
const {transactionTypeDef, transactionMutations, transactionQueries} = require('./transaction/schema');

let typeDefs = [scoreTypeDef, generalTypeDef,transactionTypeDef ]
let queries = [scoreQueries, generalQueries,transactionQueries ]
let mutations = [scoreMutations, generalMutations, transactionMutations]

const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

