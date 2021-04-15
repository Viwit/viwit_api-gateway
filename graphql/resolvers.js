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
// Qr microservice
const { getAllPayment, getPaymentById, getPaymentByIdUser, postPayment, putPayment, deletePayment
      , getAllVehicle, getVehicleById, getVehicleByCode, getVehicleByKind, postVehicle, putVehicle, deleteVehicle
      , getAllStopBus, getStopBusById, getStopBusByCode, postStopBus, putStopBus, deleteStopBus} = require('./qr/resolvers')


module.exports = {
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
    postCreateTransaction,

    getAllPayment, 
    getPaymentById, 
    getPaymentByIdUser, 
    postPayment, 
    putPayment, 
    deletePayment,
    getAllVehicle, 
    getVehicleById, 
    getVehicleByCode, 
    getVehicleByKind, 
    postVehicle, 
    putVehicle, 
    deleteVehicle, 
    getAllStopBus, 
    getStopBusById, 
    getStopBusByCode, 
    postStopBus, 
    putStopBus, 
    deleteStopBus

};