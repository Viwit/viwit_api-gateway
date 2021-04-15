const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')

//IMPORT SCHEMAS FROM EACH MICROSERVICE
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')
const {transactionTypeDef, transactionMutations, transactionQueries} = require('./transaction/schema');
const {authenticationTypeDef, authenticationMutations, authenticationQueries} = require('./auth1/schema');
const {tokenTypeDef, tokenQueries, tokenMutations} = require('./auth2/schema');
const {qrTypeDef, qrMutations, qrQueries} = require('./qr/schema');

//MERGE IN ARRAYS
let typeDefs = [scoreTypeDef, generalTypeDef,transactionTypeDef,authenticationTypeDef , tokenTypeDef, qrTypeDef]
let queries = [scoreQueries, generalQueries,transactionQueries,authenticationQueries,qrQueries, tokenQueries ]
let mutations = [scoreMutations, generalMutations, transactionMutations,authenticationMutations, qrMutations, tokenMutations]


//CONCATENATE AND BUILD MAIN SCHEMA
const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema