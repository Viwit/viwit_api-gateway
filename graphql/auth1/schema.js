const authenticationTypeDef = `
type User{
  user_id: Int!
  firstname: String!
  lastname: String!
  email: String!
  reg_date: String!
}
input UserInput {
user_id: Int!
firstname: String!
lastname: String!
email: String!
user_password: String!
block_account: Boolean!}
type CustomNull{
  success: Boolean!
}
`
const authenticationQueries = `
getuser(id: Int!): User!
`

const authenticationMutations = `
setUser(user: UserInput!) : User!
updateUser(id: Int!,user: UserInput!) : User!
deleteUser(id: Int!) : CustomNull!
`

module.exports = {
  authenticationTypeDef,
  authenticationQueries,
  authenticationMutations
}