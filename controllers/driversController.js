const { Driver } = require('../models')

const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find()
       return res.json(drivers)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

async function getOneDriver(req, res) {
    try{
        const id = req.params.id
        const driver = await Driver.findById(id)
        if (driver){
            return res.json(driver)
        }
        res.status(404).send('Driver with specified ID does not exist')
    }catch(error){
        return res.status(500).send(error.message)
    }
}


const createDrivers = async (req, res) => {
        try {
            const driver = await new Driver(req.body)
            await driver.save()
            return res.status(201).json({
                driver
            });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    const updateDrivers = async (req, res) => {
        try {
            let { id } = req.params;
            let driver = await Driver.findByIdAndUpdate(id, req.body, { new: true })
            if (driver) {
                return res.status(200).json(driver)
            }
            throw new Error("Driver not found")
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
    
    const deleteDrivers = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Driver.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send("Driver deleted");
            }
            throw new Error("Driver not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }







module.exports = {
    getAllDrivers,
    getOneDriver,
    createDrivers,
    updateDrivers,
    deleteDrivers
}