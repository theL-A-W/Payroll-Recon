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

// const createRun = async (req, res) => {
//     const { baseFare, surcharge, bags, gratuity, waiting, other } = req.body

//     try {
//         const run = new Run({
//             baseFare,
//             surcharge,
//             bags,
//             gratuity,
//             waiting,
//             date,
//             resId
//         })

//         await run.save()
//         return res.status(201).json(run)
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

const createRuns = async (req, res) => {
    try {
        const run = await new Run(req.body)
        await run.save()
        return res.status(201).json({
            run
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRuns = async (req, res) => {
    try {
        let { id } = req.params;
        let run = await Run.findByIdAndUpdate(id, req.body, { new: true })
        if (run) {
            return res.status(200).json(run)
        }
        throw new Error("Run not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRuns = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Run.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Run deleted");
        }
        throw new Error("Run not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getAllRuns,
    getOneRun,
    createRuns,
    updateRuns,
    deleteRuns
}
