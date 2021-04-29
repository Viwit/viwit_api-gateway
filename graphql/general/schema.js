const generalTypeDef = `

  type Message{
    message: String!
  }

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

  input BusStopInputPost{
    nameOrAddressBusStop: String!
  }

  type Driver{
    driversLicense: String!
    name: String!
    driverExperience: Int!
    averageDriverRating: String!
    userIdDriver: Int!
  }

  input DriverInput{
    driversLicense: String!
    name: String!
    driverExperience: Int!
    averageDriverRating: String!
    userIdDriver: Int!
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

  input RouteInputPost{
    nameRoute: String!
    initialBusStop: String!
    finalBusStop: String!
    approximateDuration: String!
  }

  type RouteStops{
    route_IdRoute: Int!
    busStop_IdBusStop: Int!
    positionRouteStops: Int!
  }

  input RouteStopsInput{
    route_IdRoute: Int!
    busStop_IdBusStop: Int!
    positionRouteStops: Int!
  }

  type Trip{
    idTrip: String!
    Route_IdRoute: Int!
    Bus_LicensePlateBus: String!
    Driver_DriversLicense: String!
    BusStop_IdBusStop: Int!
    currentTripOccupation: Int!
    startDate: String!
    tripStatus: String!
    totalPassengersTrip: Int!
  }

  input TripInput{
    idTrip: Int!
    Route_IdRoute: Int!
    Bus_LicensePlateBus: String!
    Driver_DriversLicense: String!
    BusStop_IdBusStop: Int!
    currentTripOccupation: Int!
    startDate: String!
    tripStatus: String!
    totalPassengersTrip: Int!
  }

  input TripInputPost{
    Route_IdRoute: Int!
    Bus_LicensePlateBus: String!
    Driver_DriversLicense: String!
    BusStop_IdBusStop: Int!
    currentTripOccupation: Int!
    startDate: String!
    tripStatus: String!
    totalPassengersTrip: Int!
  }

  type BusStopsByIdRoute{
    positionRouteStops: Int!
    nameOrAddressBusStop: String!
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
  getBusStopsByIdRoute(route_IdRoute: Int!): [BusStopsByIdRoute]!
  getRouteStopByIdRouteStopsIdBusStop_BusStop(route_IdRoute: Int!, busStop_IdBusStop: Int!): [RouteStops]!
  getRouteStopByIdRouteStopsIdBusStop_BusStop_Position(route_IdRoute: Int!, busStop_IdBusStop: Int!, positionRouteStops: Int!): RouteStops!

  getAllTrips: [Trip]!
  getTripByIdIdTrip(idTrip: Int!): Trip!
  getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver(idRoute_Route: Int!, licensePlateBus_Bus: String!, driversLicense_Driver: String!): Trip!
`

const generalMutations = `
  putBus(licensePlate: String!, bus: BusInput!): Bus!
  postBus(bus: BusInput!): Bus!
  deleteBus(licensePlate: String!): Bus!

  putBusStop(idBusStop: Int!, busStop: BusStopInput!): BusStop!
  postBusStop(busStop: BusStopInputPost!): Message!
  deleteBusStop(idBusStop: Int!): BusStop!

  putDriver(driversLicense: String!, driver: DriverInput!): Driver!
  postDriver(driver: DriverInput!): Driver!
  deleteDriver(driversLicense: String!): Driver!

  putRoute(idRoute: Int!, route: RouteInput!): Route!
  postRoute(route: RouteInputPost!): Message!
  deleteRoute(idRoute: Int!): Route!

  postRouteStops(routeStops: RouteStopsInput!): Message!
  deleteRouteStops(route_IdRoute: Int!, busStop_IdBusStop: Int!, positionRouteStops: Int!): RouteStops!

  putTrip(idTrip: Int!, trip: TripInput!): Trip!
  postTrip(trip: TripInputPost!): Message!
  deleteTrip(idTrip: Int!): Trip!
`

module.exports = {
  generalTypeDef,
  generalQueries,
  generalMutations
}

