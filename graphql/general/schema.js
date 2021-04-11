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

const generalMutations = ``

module.exports = {
  generalTypeDef,
  generalQueries,
  generalMutations
}

