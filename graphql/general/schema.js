const generalTypeDef = `
  type Bus {
    licensePlateBus: String!
    model: String!
    seatedPassengerCapacity: Int!
    standingPassengerCapacity: Int!
  }

  input BusInput {
    licensePlateBus: String!
    model: String!
    seatedPassengerCapacity: Int!
    standingPassengerCapacity: Int!
  }

  type BusStop{
    idBusStop: Int!
    nameOrAddressBusStop: String!
  }

  input BusStopInput{
    idBusStop: Int!
    nameOrAddressBusStop: String!
  }

  type Driver{
    driversLicense: String!
    name: String!
    driverExperience: Int!
    averageDriverRating: String!
  }

  input DriverInput{
    driversLicense: String!
    name: String!
    driverExperience: Int!
    averageDriverRating: String!
  }

  type Route{
    idRoute: Int!
    nameRoute: String!
    initialBusStop: String!
    finalBusStop: String!
    approximateDuration: String!
  }

  input RouteInput{
    idRoute: Int!
    nameRoute: String!
    initialBusStop: String!
    finalBusStop: String!
    approximateDuration: String!
  }

  type RouteStops{
    idRoute_Route: Int!
    idBusStop_BusStop: Int!
  }

  input RouteStopsInput{
    idRoute_Route: Int!
    idBusStop_BusStop: Int!
  }

  type Trip{
    idTrip: String!
    idRoute_Route: Int!
    licensePlateBus_Bus: String!
    driversLicense_Driver: String!
    idBusStop_BusStop: Int!
    currentTripOccupation: Int!
    startDate: String!
    tripStatus: String!
  }

  input TripInput{
    idTrip: String!
    idRoute_Route: Int!
    licensePlateBus_Bus: String!
    driversLicense_Driver: String!
    idBusStop_BusStop: Int!
    currentTripOccupation: Int!
    startDate: String!
    tripStatus: String!
  }
`
const generalQueries= `
  getAllBus: [Bus]!
  getBusByLicensePlate(licensePlate: String!): Bus!

  getAllBusStop: [BusStop]!
  getBusStopById(idBusStop: Int!): BusStop!

  getAllDriver: [Driver]!
  getDriverByDriversLicense(driversLicense: String!): Driver!

  getAllRoute: [Route]!
  getRouteByIdRoute(idRoute: Int!): Route!

  getAllRouteStops: [RouteStops]!
  getRouteStopByIdRouteStopsIdBusStop_BusStop(idRoute_Route: Int!, idBusStop_BusStop: Int!): RouteStops!

  getAllTrips: [Trip]!
  getTripByIdIdTrip(idTrip: String!): Trip!
  getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver(idRoute_Route: Int!, licensePlateBus_Bus: String!, driversLicense_Driver: String!): Trip!
`

const generalMutations = `
  putBus(licensePlate: String!, bus: BusInput!): Bus!
  postBus(bus: BusInput!): Bus!
  deleteBus(licensePlate: String!): Bus!

  putBusStop(idBusStop: Int!, busStop: BusStopInput!): BusStop!
  postBusStop(busStop: BusStopInput!): BusStop!
  deleteBusStop(idBusStop: Int!): BusStop!

  putDriver(driversLicense: String!, driver: DriverInput!): Driver!
  postDriver(driver: DriverInput!): Driver!
  deleteDriver(driversLicense: String!): Driver!

  putRoute(idRoute: Int!, route: RouteInput!): Route!
  postRoute(route: RouteInput!): Route!
  deleteRoute(idRoute: Int!): Route!

  postRouteStops(routeStops: RouteStopsInput!): RouteStops!
  deleteRouteStops(idRoute_Route: Int!, idBusStop_BusStop: Int!): RouteStops!

  putTrip(idTrip: String!, trip: TripInput!): Trip!
  postTrip(trip: TripInput!): Trip!
  deleteTrip(idTrip: String!): Trip!
`

module.exports = {
  generalTypeDef,
  generalQueries,
  generalMutations
}

