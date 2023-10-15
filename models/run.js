const mongoose = require('mongoose')
const { Schema } = mongoose

const runSchema = new Schema({
    baseFare: { type: Number, required: true },
    run_id: { type: Schema.Types.ObjectId, ref: 'run_id', primaryKey: true },
    surcharge: { type: Number, required: true },
    bags: { type: Number, required: true },
    gratuity: { type: Number, required: true },
    waiting: { type: Number, required: true },
    other: { type: Number, required: true}
}, { timestamps: true }
)

const Run = mongoose.model('Run', runSchema)
module.exports = Run