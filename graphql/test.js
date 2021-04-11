module.exports = buildSchema(`
  type EntityScore {
    id: Int!
    score: Float!
  }

  input EntityInput {
    id: Int!
    kind: Int!
    score: Float!
  }

  type ScoreMessage{
    message: String
  }

  type RootQuery {
    getscore(id: Int!, kind: Int!): EntityScore!
  }

  type RootMutation{
    putscore(entity: EntityInput!): ScoreMessage!
  }

  schema {
    query : RootQuery
    mutation : RootMutation
  }
`);
