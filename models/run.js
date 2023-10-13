const mongoose = require('mongoose')
const { Schema } = mongoose

const runSchema = new Schema({
    baseFare: { type: Number, required: true },
    run_id: { type: Schema.Types.ObjectId, ref: 'run_id', primaryKey: true },
    surcharge: { type: Number, required: true },
    bags: { type: Number, required: true },
    gratuity: { type: Number, required: true },
    waiting: { type: Nuymber, required: true },
    other: { type: Number, required: true}
}, { timestamps: true }
)

const Driver = mongoose.model('Driver', driverSchema)
module.exports = Driver