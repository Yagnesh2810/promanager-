const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
});

// Create task
router.post('/', async (req, res) => {
    const { title, description, projectId, priority, status, dueDate, assigneeId } = req.body;
    try {
        const newTask = new Task({ title, description, projectId, priority, status, dueDate, assigneeId });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
});

// Update task
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, priority, status, dueDate } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, priority, status, dueDate }, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
    }
});

// Delete task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
});

module.exports = router;
