const qrTypeDef = `
    type Payment {
        _id: String!
        id_user: String!
        amount: Float!
        date: String!
    }

    input PaymentInput {
        _id: String!
        id_user: String!
        amount: Float!
        date: String!
    }


    type Stop_bus {
        _id: String!
        code: String!
        name: String!
        address: String!
    }

    input Stop_busInput {
        _id: String!
        code: String!
        name: String!
        address: String!
    }

    type Vehicle {
        _id: String!
        code: String!
        name: String!
        capacity: Int!
        licensePlate: String!
        kind: String!
    }
    
    input VehicleInput {
        _id: String!
        code: String!
        name: String!
        capacity: Int!
        licensePlate: String!
        kind: String!
    }
`

const qrQueries= `
    getAllPayment:[Payment]!
    getPaymentById(id:String):Payment!
    getPaymentByIdUser(id_user: String!):Payment!


    getAllVehicle:[Vehicle]!
    getVehicleById(id:String):Vehicle!
    getVehicleByCode(code:String):Vehicle!
    getVehicleByKind(kind:String):Vehicle!

    getAllStopBus:[Stop_bus]!
    getStopBusById(id:String):Stop_bus!
    getStopBusByCode(code:String):Stop_bus!
`

const qrMutations = `
    postPayment(payment: PaymentInput!): Payment!
    putPayment(id: String!, payment: PaymentInput!): Payment!
    deletePayment(id: String!): String!
    

    postVehicle(vehicle: VehicleInput!): Vehicle!
    putVehicle(id: String!, vehicle: VehicleInput!): Vehicle!
    deleteVehicle(id: String!): String!

    postStopBus(stop_bus: Stop_busInput!): Stop_bus!
    putStopBus(id: String!, stop_bus: Stop_busInput!): Stop_bus!
    deleteStopBus(id: String!): String!
`

module.exports = {
    qrTypeDef,
    qrQueries,
    qrMutations
}