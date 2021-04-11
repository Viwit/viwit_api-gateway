const generalTypeDef = `
  type Bus {
    licensePlateBus: String!
    model: String!
    seatedPassengerCapacity: Int!
    standingPassengerCapacity: Int!
  }
`
const generalQueries= `
  getBusByLicensePlate(licensePlate: String!): Bus!
`

const generalMutations = `
  putscore(entity: EntityInput!): ScoreMessage!
`

module.exports = {
  generalTypeDef,
  generalQueries,
  generalMutations
}

