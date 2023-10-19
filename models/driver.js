const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    emp_name: { type: String, required: true },
    availability: { type: String, required: true },
    emp_email: { type: String, required: true },
    emp_pass: { type: String, required: true },
    has7D: { type: Boolean, required: true },
    hasDOT: { type: Boolean, required: true}
}, { timestamps: true }
)

module.exports = driverSchema


