const {buildSchema} = require('graphql');

module.exports = buildSchema(`

  type EntityScore {
    id: ID!
    score: Int!
  }

  type RootQuery {
    getscore(): EntityScore!
  }

  type RootMutation{
    test: String!
  }

  schema {
    query : RootQuery
    mutation : RootMutation
  }
`);