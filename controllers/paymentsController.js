const { Payment } = require('../models')

const createPayment = async (req, res) => {
    const { emp_id, run_id, date, totalAmount, reimbursements } = req.body;

    try {
        const payment = new Payment({
            emp_id,
            run_id,
            totalAmount,
            reimbursements
        })

        await payment.save()
        return res.status(201).json(payment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('emp_id run_id')
        return res.json(payments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getOnePayment = async (req, res) => {
    try {
        const id = req.params.id
        const payment = await Payment.findById(id).populate('emp_id run_id')
        if (payment) {
            return res.json(payment)
        }
        return res.status(404).send('Payment with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createPayment,
    getAllPayments,
    getOnePayment
}
