const scoreTypeDef = `
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
`
const scoreQueries= `
  getscore(id: Int!, kind: Int!): EntityScore!
`

const scoreMutations = `
  putscore(entity: EntityInput!): ScoreMessage!
`

module.exports = {
  scoreTypeDef,
  scoreQueries,
  scoreMutations
}

