//Score Microservice
const { getscore, putscore } = require('./score/resolvers')
//General Microservice
const { getBusByLicensePlate, getAllBus, putBus, postBus, deleteBus, getAllBusStop, getBusStopById
      , putBusStop, postBusStop, deleteBusStop
      , getAllDriver, getDriverByDriversLicense, putDriver, postDriver, deleteDriver
      , getAllRoute, getRouteByIdRoute, putRoute,postRoute,deleteRoute
      , getAllRouteStops, getRouteStopByIdRouteStopsIdBusStop_BusStop, postRouteStops, deleteRouteStops
      , getAllTrips, getTripByIdIdTrip, getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver, putTrip, postTrip, deleteTrip} = require('./general/resolvers')
const { postCreateWallet, getWalletByUserId,  getAllWallet, postCreateTransaction, getTransactionById, getAllTransaction } = require('./transaction/resolvers')
const { update_token, read_token, create_token} = require('./Authentication2/resolvers')

module.exports = {
  /*-----Authentication2-----*/
  update_token,
  read_token,
  create_token,

  //Score
  getscore,
  putscore,

  //General
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
  deleteTrip,

  /*------TRANSACTION------*/

  postCreateWallet,
  getWalletByUserId,
  getAllWallet,
  getTransactionById,
  getAllTransaction,
  postCreateTransaction


};