const express = require("express")
const router = express.Router()

const {
    getAllVillagers
} = require("../controllers/villagerController")

router.route("/").get(getAllVillagers)

module.exports = router