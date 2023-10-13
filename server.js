const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const driversController = require('./controllers/driversController')
const runsController = require('./controllers/runsController')
const Driver = require('./models/driver')
const Run = require('./models/run')

const PORT =  process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('This is the homepage!'))
app.get('/drivers', driversController.getAllDrivers)


//ADD search by ids here


app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))