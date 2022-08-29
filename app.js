require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./database/connect')


//helpers
const morgan = require('morgan')
const cors = require('cors')
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.options("*", cors());

//routes

//middlewares
const ErrorHandlerMiddleware = require('./middleware/error-handler')
const NotFoundMiddleware = require('./middleware/not-found')
app.use(ErrorHandlerMiddleware)
app.use(NotFoundMiddleware)

const port = 5000
const url = process.env.MONGO_URL

const start = async() => {

    try {
        await connectDB(url)
        app.listen(port, () => {
            console.log(`the server is ON listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()