const {
    TypeKind
} = require('graphql')
const apiAdapter = require('../../util/apiAdapter')

//BASE URL FOR THE MICROSERVICE
const {
    TRANSACTION_URL
} = require('../../util/servers')

//API TOOL USING AXIOS FOR SENDING REQUESTS
const api = apiAdapter(TRANSACTION_URL)

module.exports = {
    postCreateWallet: async function({
        wallet
    }) {
        res = await api.post(`/wallet`, {
            wallet: wallet
        })
        return res.data
    },

    getWalletByUserId: async function({
        id
    }) {
        res = await api.get(`/wallet/${id}`)
        return res.data
    },

    getAllWallet: async function() {
        res = await api.get(`/wallet`)
        return res.data
    },

    postCreateTransaction: async function({
        transaction
    }) {
        res = await api.post(`/transaction`, {
            trans: transaction
        })
        return res.data
    },

    getTransactionById: async function({
        id
    }) {
        res = await api.get(`/transaction/${id}`)
        return res.data
    },

    getAllTransaction: async function() {
        res = await api.get(`/transaction`)
        return res.data
    },

    getTransactionsByWalletId: async function({
        id
    }) {
        res = await api.get(`/transaction/wallet/${id}`)
        return res.data
    },

    getTransactionsByWalletIdStatus: async function({
        id,
        status
    }, ) {
        res = await api.get(`/transaction/wallet/${id}/${status}`)
        return res.data
    },

    getTransactionsByWalletIdType: async function({
        id,
        type
    }, ) {
        res = await api.get(`/transaction/wallet/${id}/type/${type}`)
        return res.data
    },

    getTransactionsByWalletIdDate: async function({
        id
    }, ) {
        res = await api.get(`/transaction/wallet/${id}`)
        trans = res.data.data
        let data = []
        const tiempoTranscurrido = Date.now();
        var hoy = new Date(tiempoTranscurrido).toISOString().substr(0, 10);
        trans.forEach(element => {
            if (element.date == hoy) {
                data.unshift(element)

            }
        });
        res.data = {
            data
        }
        return res.data
    },
}