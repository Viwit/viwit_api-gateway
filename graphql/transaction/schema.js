const transactionTypeDef = `
  type Wallet {
    balance: Int!
    id: Int!
    token: String!
    user_id:  Int!
  }

  type DataAllWallet {
    data : [Wallet!]
  }

  type Transaction {
    id: Int!
    id_method_payment: Int!
    mount: Int!
    status: String!
    type: Int!
    wallet_id: Int!
  }

  type DataAllTransaction {
    data : [Transaction!]
  }

  type Tran {
    data: Transaction!
  }

  type SingleWallet {
    data: Wallet!
  }

  type SingleTransaction {
    data: Transaction!
  }

  input WalletInput {
    token: String!
    user_id: Int!
  }

  input TransactionInput {
    token: String!
    wallet_id: Int!
    id_method_payment: Int!
    mount: Int!
    type: Int!
  }
`
const transactionQueries = `
getAllWallet: DataAllWallet!
getWalletByUserId(id: Int!): SingleWallet!
getTransactionById(id: Int!): SingleTransaction!
getAllTransaction: DataAllTransaction!

`

const transactionMutations = `
postCreateWallet(wallet:WalletInput!): SingleWallet!
postCreateTransaction(transaction:TransactionInput!): SingleTransaction!

`

module.exports = {
  transactionTypeDef,
  transactionQueries,
  transactionMutations
}
