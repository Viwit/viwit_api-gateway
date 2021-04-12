const transactionTypeDef = `
  type Wallet {
    balance: Int!
    id: Int!
    token: String!
    user_id:  Int!
  }

  type DataWallet {
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

  type Tran {
    data: Transaction!
  }

  input WalletInput {
    token: String!
    user_id: Int!
  }

 
`
const transactionQueries= `
getAllWallet: DataWallet!
getWalletByUserId(id: Int!): Tran!

`

const transactionMutations = `
postCreateWallet(wallet:WalletInput!):Wallet!

`

module.exports = {
  transactionTypeDef,
  transactionQueries,
  transactionMutations
}

