const mongoose = require('mongoose')

const VillagerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    season: {
        type: String
    },
    day: {
        type: Number
    },
    address: {
        type: String
    },
    family: {
        type: Array
    },
    town: {
        type: String
    },
    portrait: {
        type: String
    },
    status: {
        type: String
    },
    loves: {
        type: Array
    },
    hates: {
        type: Array
    }
})

module.exports = mongoose.model('Villager', VillagerSchema)