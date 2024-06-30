const Villager = require('./../models/Villager')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('./../errors')

const getAllVillagers = async (req, res) => {
    const villagers = await Villager.find(
        {}
    )

    res.status(StatusCodes.OK).json({
        villagers,
        count: villagers.length
    })
}

module.exports = {
    getAllVillagers
}