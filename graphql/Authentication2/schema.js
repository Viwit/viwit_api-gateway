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
