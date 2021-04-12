const { getscore, putscore } = require('./score/resolvers')
const { getBusByLicensePlate, getAllBus, putBus, postBus, deleteBus, getAllBusStop, getBusStopById
      , putBusStop, postBusStop, deleteBusStop
      , getAllDriver, getDriverByDriversLicense, putDriver, postDriver, deleteDriver
      , getAllRoute, getRouteByIdRoute, putRoute,postRoute,deleteRoute
      , getAllRouteStops, getRouteStopByIdRouteStopsIdBusStop_BusStop, postRouteStops, deleteRouteStops
      , getAllTrips, getTripByIdIdTrip, getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver, putTrip, postTrip, deleteTrip} = require('./general/resolvers')


module.exports = {
  /*------SCORE------*/
  getscore,
  putscore,

  /*------GENERAL------*/
  getBusByLicensePlate,
  getAllBus,
  putBus,
  postBus,
  deleteBus,

  getAllBusStop,
  getBusStopById,
  putBusStop,
  postBusStop,
  deleteBusStop,

  getAllDriver,
  getDriverByDriversLicense,
  putDriver,
  postDriver,
  deleteDriver,

  getAllRoute,
  getRouteByIdRoute,
  putRoute,
  postRoute,
  deleteRoute,

  getAllRouteStops,
  getRouteStopByIdRouteStopsIdBusStop_BusStop,
  postRouteStops,
  deleteRouteStops,

  getAllTrips,
  getTripByIdIdTrip,
  getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver,
  putTrip,
  postTrip,
  deleteTrip
};