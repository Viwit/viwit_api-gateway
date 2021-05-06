const tokenTypeDef = `
  type token{
    finish: String!
    id: Int!
    initial: String!
    token: String!
  }

  type token_id{
    id: String!
  }

  type response{
    message: String!
  }
`
const tokenQueries = `
getToken(id: Int!): token!
`

const tokenMutations = `
deleteToken(id: Int!): response!
putToken(id: Int!): token_id!
postToken(id: Int!): token_id!
unlock_account(id_user: Int!): response!
block_account(id_user: Int!): response!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
