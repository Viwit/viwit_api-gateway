const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');
const {generalTypeDef, generalMutations, generalQueries} = require('./general/schema')

let typeDefs = [scoreTypeDef, generalTypeDef]
let queries = [scoreQueries, generalQueries]
let mutations = [scoreMutations, generalMutations]

const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

