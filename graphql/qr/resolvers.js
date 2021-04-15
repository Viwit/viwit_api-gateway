const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const QR_URL = 'http://3.94.196.153:8050';

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(QR_URL);


module.exports = {


    // PAYMENT
    getAllPayment: async function({}){
        res = await api.get('/api/payments-qr/')
        return res.data
    },

    getPaymentById: async function({id}){
        res = await api.get(`/api/payments-qr/${id}`)
        return res.data
    },

    getPaymentByIdUser: async function({id_user}){
        res = await api.get(`/api/payments-qr/id-user/${id_user}`)
        return res.data

    },

    postPayment: async function({payment}){
        res= await api.post(`/api/payments-qr/payment`, payment)
        return res.data
    },

    putPayment: async function({id, payment}){
        res = await api.put(`/api/payments-qr/${id}`,payment)
        return res.data
    },

    deletePayment: async function({id}){
        res= await api.delete(`/api/payments-qr/payment/${id}`)
        return res.data
    },

    // VEHICLE
    getAllVehicle: async function(){
        
        res = await api.get('/api/vehicules-qr/')
        console.log(res.data)
        return res.data
    },

    

    getVehicleById: async function({id}){
        res = await api.get(`/api/vehicules-qr/${id}`)
        return res.data
    },

    getVehicleByCode: async function({code}){
        res = await api.get(`/api/vehicules-qr/code/${code}`)
        return res.data
    },

    getVehicleByKind: async function({kind}){
        res = await api.get(`/api/vehicules-qr/kind/${kind}`)
        return res.data
    },

    postVehicle: async function({vehicle}){
        res= await api.post(`/api/vehicules-qr/vehicle`, vehicle)
        return res.data
    },

    putVehicle: async function({id, vehicle}){
        res = await api.put(`/api/vehicules-qr/vehicle/${id}`,vehicle)
        return res.data
    },

    deleteVehicle: async function({id}){
        res= await api.delete(`/api/vehicules-qr/vehicle/${id}`)
        return res.data
    },

    // STOP BUS
    getAllStopBus: async function({}){
        res = await api.get('/api/stop-buses-qr/')
        return res.data
    },
    getStopBusById: async function({id}){
        res = await api.get(`/api/stop-buses-qr/${id}`)
        return res.data
    },

    getStopBusByCode: async function({code}){
        res = await api.get(`/api/stop-buses-qr/code/${code}`)
        return res.data
    },

    postStopBus: async function({stop_bus}){
        res= await api.post(`/api/stop-buses-qr/stop-bus`, stop_bus)
        return res.data
    },

    putStopBus: async function({id, stop_bus}){
        res = await api.put(`/api/stop-buses-qr/stop-bus/${id}`,stop_bus)
        return res.data
    },

    deleteStopBus: async function({id}){
        res= await api.delete(`/api/stop-buses-qr/stop-bus/${id}`)
        return res.data
    }

  };