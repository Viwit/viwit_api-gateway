const tokenTypeDef = `
  type token{
    finish: String!
    id: Int!
    initial: String!
    token: String!
    type: String!
  }

  type result{
    result: [token_firebase!]
  }

  type token_firebase{
    creation_date: String!
    expiration_date: String!
    token: String!
    token_firebase: String!
    token_id: Int!
    type: String!
    user_id: Int
  }
  type post_token{
    id: String!
    token: String!
  }

  type islogin_res{
    isLogin: Int!
    user_id: Int!
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
get_login(email: String!, password: String!): islogin_res!
get_token_firebase(id: Int!): result!
`

const tokenMutations = `
put_token_firebase(id: Int!, firebase: String!): token_put!
put_token(id: Int!, token: String!): token_put!
post_token(id: Int!, type: String!): post_token!
unlock_account(id_user: Int!): response!
block_account(id_user: Int!): response!
`

module.exports = {
  tokenTypeDef,
  tokenQueries,
  tokenMutations
}
