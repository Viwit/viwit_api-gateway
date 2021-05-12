const tokenTypeDef = `
  type token{
    finish: String!
    id: Int!
    initial: String!
    token: String!
    type: String!
  }

  type token_post{
    id: String!
    token: String!
  }

  type token_put{
    isValid: Int!
    token: token!
  }

  type response{
    message: String!
  }
`
const tokenQueries = `

`

const tokenMutations = `
deleteToken(): response!
putToken(id: Int!, token: String!): token_id!
postToken(id: Int!, , type: String!): token_post!
unlock_account(id_user: Int!): response!
block_account(id_user: Int!): response!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
