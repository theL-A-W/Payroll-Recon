const mongoose = require('mongoose')
const Schema = mongoose

const paymentSchema = new Schema({
    emp_id: { type: Schema.Types.ObjectId, ref: 'Driver', required: true },
    run_id: { type: Schema.Types.ObjectId, ref: 'Run', required: true },
    totalAmount: { type: Number, required: true },
    reimbursements: { type: Number, required: true },
}, { timestamps: true }
)

module.exports = mongoose.model('Payment', paymentSchema)