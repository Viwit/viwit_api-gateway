const tokenTypeDef = `
  type token{
    token_id: Int!
    token: String!
    expiration_date: String!
    creation_date: String!
  }

  type token_id{
    token_id: Int!
  }

`
const tokenQueries = `
read_token(id: Int!): token!
`

const tokenMutations = `
update_token(id: Int!): token_id!
create_token(id: Int!): token_id!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
