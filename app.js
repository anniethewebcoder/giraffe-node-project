const express = require("express")
require("express-async-errors")

const app = express()

require("dotenv").config()

app.use(express.static('views'))

const port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
    }
}

start()