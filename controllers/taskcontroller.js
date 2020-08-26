const express = require('express');
const router = express.Router();
const { Router } = require('express');

const validateSession = require('../middleware/validate-session');
const Task = require('../db').import('../models/task');

// CREATE A TASK
router.post('/create', (req, res) => {
    const createPost = {
        title: req.body.task.title,
        category: req.body.task.category,
        priority: req.body.task.priority,
        info: req.body.task.priority,
        isResolved: false,
        resolveComment: null,
    }
    Task.create(createTask)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(500).json({error: err}))
});

// GET ALL TASKS
router.get('/', (req, res) => {
    Task.findAll()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({error: err}))
});

// GET ALL PENDING TASKS
router.get('/pending', (req, res) => {
    Task.findAll({
        where: {isResolved: false}
    })
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({error: err}))
});

// UPDATE TASK INFO
router.put('/update/:entryId', (req, res) => {
    const updateTask = {
        title: req.body.task.title,
        category: req.body.task.category,
        priority: req.body.task.priority,
        info: req.body.task.priority,
        isResolved: false,
        resolveComment: null,
    }

    const query = {where: {id: req.params.entryId}};

    Task.update(updateTask, query)
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) => res.status(500).json({error: err}))

});

// RESOLVE TASK
router.put('/resolve/:entryId', (req, res) => {
    const updateTask = {
        title: req.body.task.title,
        category: req.body.task.category,
        priority: req.body.task.priority,
        info: req.body.task.priority,
        isResolved: true,
        resolveComment: req.body.task.resolveComment,
    }

    const query = {where: {id: req.params.entryId}};

    Task.update(updateTask, query)
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) => res.status(500).json({error: err}))

});

// DELETE A TASK
router.delete('/delete/:id', (req, res) => {
    const query = {where: {id: req.params.id}};

    Task.destroy(query)
        .then(() => res.status(200).json({message: 'Task Deleted'}))
        .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;