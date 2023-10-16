const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const runSchema = new Schema({
    baseFare: { type: Number, required: true },
    surcharge: { type: Number, required: true },
    bags: { type: Number, required: true },
    gratuity: { type: Number, required: true },
    waiting: { type: Number, required: true },
    date: { type: String, required: true},
    resId: { type: String, required: true}
}, { timestamps: true }
)


module.exports = runSchema