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

module.exports = {
    getAllDrivers,
    getOneDriver
}