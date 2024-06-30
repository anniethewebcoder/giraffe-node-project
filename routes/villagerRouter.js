const express = require("express")
const router = express.Router()

const {
    getCarousel
} = require("../controllers/villagerController")

router.route("/").get(getCarousel)

module.exports = router