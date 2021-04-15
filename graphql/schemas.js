const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')
const {transactionTypeDef, transactionMutations, transactionQueries} = require('./transaction/schema');

const {authenticationTypeDef, authenticationMutations, authenticationQueries} = require('./authentication1/schema');
let typeDefs = [scoreTypeDef, generalTypeDef,transactionTypeDef,authenticationTypeDef ]
let queries = [scoreQueries, generalQueries,transactionQueries,authenticationQueries ]
let mutations = [scoreMutations, generalMutations, transactionMutations,authenticationMutations]

const {tokenTypeDef, tokenQueries, tokenMutations} = require('./Authentication2/schema')


const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

