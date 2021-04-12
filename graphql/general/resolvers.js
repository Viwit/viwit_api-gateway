const apiAdapter = require('../../apiAdapter');

//BASE URL FOR THE MICROSERVICE
const GENERAL_URL = 'http://localhost:4000';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(GENERAL_URL);

module.exports = {

  /*-----BUS-----*/
  getBusByLicensePlate : async function({licensePlate}){
    res = await api.get(`/Bus/${licensePlate}`)
    return res.data  
  },
  getAllBus : async function(){
    res = await api.get(`/Bus`)
    return res.data 
  },
  putBus: async function({licensePlate, bus}){
    res = await api.put(`/Bus/${licensePlate}`, bus)   
    return res.data
  },
  postBus: async function({bus}){
    res = await api.post(`/Bus`, bus)   
    return res.data
  },
  deleteBus: async function({licensePlate}){
    res = await api.delete(`/Bus/${licensePlate}`)
    return res.data
  },

  /*-----BUS STOP-----*/
  getAllBusStop : async function(){
    res = await api.get(`/BusStop`)
    return res.data 
  },
  getBusStopById: async function({idBusStop}){
    res = await api.get(`/BusStop/${idBusStop}`)
    return res.data  
  },
  putBusStop: async function({idBusStop, busStop}){
    res = await api.put(`/BusStop/${idBusStop}`, busStop)   
    return res.data
  },
  postBusStop: async function({busStop}){
    res = await api.post(`/BusStop`, busStop)   
    return res.data
  },
  deleteBusStop: async function({idBusStop}){
    res = await api.delete(`/BusStop/${idBusStop}`)
    return res.data
  },

  /*-----DRIVER-----*/
  getAllDriver : async function(){
    res = await api.get(`/Driver`)
    return res.data 
  },
  getDriverByDriversLicense: async function({driversLicense}){
    res = await api.get(`/Driver/${driversLicense}`)
    return res.data  
  },
  putDriver: async function({driversLicense, driver}){
    res = await api.put(`/Driver/${driversLicense}`, driver)   
    return res.data
  },
  postDriver: async function({driver}){
    res = await api.post(`/Driver`, driver)   
    return res.data
  },
  deleteDriver: async function({driversLicense}){
    res = await api.delete(`/Driver/${driversLicense}`)
    return res.data
  },

  /*-----ROUTE-----*/
  getAllRoute : async function(){
    res = await api.get(`/Route`)
    return res.data 
  },
  getRouteByIdRoute: async function({idRoute}){
    res = await api.get(`/Route/${idRoute}`)
    return res.data  
  },
  putRoute: async function({idRoute, route}){
    res = await api.put(`/Route/${idRoute}`, route)   
    return res.data
  },
  postRoute: async function({route}){
    res = await api.post(`/Route`, route)   
    return res.data
  },
  deleteRoute: async function({idRoute}){
    res = await api.delete(`/Route/${idRoute}`)
    return res.data
  },

  /*-----ROUTE STOP-----*/
  getAllRouteStops : async function(){
    res = await api.get(`/RouteStops`)
    return res.data 
  },
  getRouteStopByIdRouteStopsIdBusStop_BusStop: async function({idRoute_Route, idBusStop_BusStop}){
    res = await api.get(`/RouteStops/Route/${idRoute_Route}/BusStop/${idBusStop_BusStop}`)
    return res.data  
  },
  postRouteStops: async function({routeStops}){
    res = await api.post(`/RouteStops`, routeStops)   
    return res.data
  },
  deleteRouteStops: async function({idRoute_Route, idBusStop_BusStop}){
    res = await api.delete(`/RouteStops/Route/${idRoute_Route}/BusStop/${idBusStop_BusStop}`)
    return res.data
  },

  /*-----TRIP-----*/
  getAllTrips : async function(){
    res = await api.get(`/Trip`)
    return res.data 
  },
  getTripByIdIdTrip: async function({idTrip}){
    res = await api.get(`/Trip/${idTrip}`)
    return res.data  
  },
  getTripByIdRoute_RouteLicensePlateBus_BusDriversLicense_Driver: async function({idRoute_Route, licensePlateBus_Bus, driversLicense_Driver}){
    res = await api.get(`/Trip/Route/${idRoute_Route}/LicensePlateBus/${licensePlateBus_Bus}/DriversLicense/${driversLicense_Driver}`)
    return res.data  
  },
  putTrip: async function({idTrip, trip}){
    res = await api.put(`/Trip/${idTrip}`, trip)   
    return res.data
  },
  postTrip: async function({trip}){
    res = await api.post(`/Trip`, trip)   
    return res.data
  },
  deleteTrip: async function({idTrip}){
    res = await api.delete(`/Trip/${idTrip}`)
    return res.data
  }
}




