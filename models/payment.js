const mongoose = require('mongoose')
const { Schema } = mongoose

const paymentSchema = new Schema({
    _id: { type: Schema.Types.ObjectId  },
    emp_id: { type: Schema.Types.ObjectId, ref: 'emp_id' },
    run_id: { type: Schema.Types.ObjectId, ref: 'run_id' },
    date: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    reimbursements: { type: Number, required: true },
}, { timestamps: true }
)

const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment