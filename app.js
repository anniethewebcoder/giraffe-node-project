require("express-async-errors")
require("dotenv").config()

const express = require("express")
const app = express()


//Connect to MongoDB
const connectDB = require('./db/connect')

const villagerRouter = require('./routes/villagerRouter')

app.use(express.json())

app.use(express.static('views'))

//Routes
app.use('/api/v1/villager', villagerRouter)

const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
    }
}

start()