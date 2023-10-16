const db = require('./db')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const driversController = require('./controllers/driversController')
const runsController = require('./controllers/runsController')
const paymentsController = require('./controllers/paymentsController')
const Driver = require('./models/driver')
const Run = require('./models/run')
const Payment = require('./models/payment')

const PORT =  process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())





app.get('/', (req, res) => res.send('This is the homepage!'))
app.get('/drivers', driversController.getAllDrivers)
app.get('/runs', runsController.getAllRuns)
app.get('/payments', paymentsController.getAllPayments)

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))