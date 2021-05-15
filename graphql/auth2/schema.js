const tokenTypeDef = `
  type token{
    finish: String!
    id: Int!
    initial: String!
    token: String!
    type: String!
  }
  input input_token{
    finish: String!
    id: Int!
    initial: String!
    token: String!
    type: String!
  }

  type post_token{
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
put_token(id: Int!, token: input_token!): token_put!
post_token(id: Int!, type: String!): post_token!
unlock_account(id_user: Int!): response!
block_account(id_user: Int!): response!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
