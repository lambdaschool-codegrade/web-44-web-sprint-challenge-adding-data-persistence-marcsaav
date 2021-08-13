const express = require('express')

const router = express.Router()

const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.status(200).json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = await Tasks.createTask(req.body)
        res.status(200).json(task)
    } catch(err) {
        next(err)
    }
})

module.exports = router
