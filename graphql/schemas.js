const {buildSchema} = require('graphql');
const mergeSchemas = require('../util/mergeSchemas')
const {scoreTypeDef, scoreMutations, scoreQueries} = require('./score/schema');


let typeDefs = [scoreTypeDef]
let queries = [scoreQueries]
let mutations = [scoreMutations]

const mainSchema = buildSchema(mergeSchemas(typeDefs,queries,mutations));

module.exports = mainSchema

