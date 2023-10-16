const mongoose = require('mongoose')
const driverSchema = require('./driver')
const runSchema = require('./run')
const paymentSchema = require('./payment')

const Driver = mongoose.model('Driver', driverSchema)
const Run = mongoose.model('Run', runSchema)
const Payment = mongoose.model('Payment', paymentSchema)

module.exports = { Driver, Run, Payment }