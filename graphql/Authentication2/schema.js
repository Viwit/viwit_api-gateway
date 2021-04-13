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
    String!
  }
`
const tokenQueries = `
read_token(id: Int!): token!
`

const tokenMutations = `
update_token(id: Int!): token_id!
create_token(id: Int!): token_id!
unlock_account(id_user: Int!): response!
block_account(id_user: Int!): response!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
