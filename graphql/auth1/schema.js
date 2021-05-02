const authenticationTypeDef = `
type User{
  User_id: Int!
  Firstname: String!
  Lastname: String!
  Email: String!
  Reg_date: String!
  User_type: Int!
}
input UserInput {
  User_id: Int
  Firstname: String!
  Lastname: String!
  Email: String!
  User_password: String!
  Block_account: Boolean!
}
  type CustomNull{
    success: Boolean!
  }
`
const authenticationQueries = `
  getuser(id: Int!): User!
  getusers: [User]!
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