const { Run } = require('../models')

const getAllRuns = async (req, res) => {
    try {
        const runs = await Run.find()
        return res.json(runs)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneRun = async (req, res) => {
    try {
        const id = req.params.id
        const run = await Run.findById(id)
        if (run) {
            return res.json(run)
        }
        return res.status(404).send('Run with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createRun = async (req, res) => {
    const { baseFare, surcharge, bags, gratuity, waiting, other } = req.body

    try {
        const run = new Run({
            baseFare,
            surcharge,
            bags,
            gratuity,
            waiting,
            other
        })

        await run.save()
        return res.status(201).json(run)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRuns,
    getOneRun,
    createRun
}
