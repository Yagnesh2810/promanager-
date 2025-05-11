const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching projects' });
    }
});

// Create project
router.post('/', async (req, res) => {
    const { name, description, startDate, dueDate, members } = req.body;
    try {
        const newProject = new Project({ name, description, startDate, dueDate, members });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: 'Error creating project' });
    }
});

// Update project
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, startDate, dueDate, members } = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, { name, description, startDate, dueDate, members }, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: 'Error updating project' });
    }
});

// Delete project
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting project' });
    }
});

module.exports = router;
