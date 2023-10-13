const mongoose = require('mongoose')
const { Schema } = mongoose

const driverSchema = new Schema({
    name: { type: String, required: true },
    emp_id: { type: Schema.Types.ObjectId, ref: 'emp_id', primaryKey: true },
    availability: { type: String, required: true },
    emp_email: { type: String, required: true },
    emp_pass: { type: String, required: true },
    has7D: { type: Boolean, required: true },
    hasDOT: { type: Boolean, required: true}
}, { timestamps: true }
)

const Driver = mongoose.model('Driver', driverSchema)
module.exports = Driver


