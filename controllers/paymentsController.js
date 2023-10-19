const { Payment } = require('../models')

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('emp_name week_ending')
        return res.json(payments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOnePayment = async (req, res) => {
    try {
        const id = req.params.id
        const payment = await Payment.findById(id).populate('emp_name week_ending')
        if (payment) {
            return res.json(payment)
        }
        return res.status(404).send('Payment with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



const createPayments = async (req, res) => {
        try {
            const payment = await new Payment(req.body)
            await payment.save()
            return res.status(201).json({
                payment
            });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    const updatePayments = async (req, res) => {
        try {
            let { id } = req.params;
            let payment = await Payment.findByIdAndUpdate(id, req.body, { new: true })
            if (payment) {
                return res.status(200).json(payment)
            }
            throw new Error("Payment not found")
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
    const deletePayments = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Payment.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send("Payment deleted");
            }
            throw new Error("Run not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }


module.exports = {
    getAllPayments,
    getOnePayment,
    createPayments,
    updatePayments,
    deletePayments
   
}
