const express = require('express');
const jwt = require('jsonwebtoken');
const Project = require('../models/Project');
const User = require('../models/User');
const router = express.Router();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'promanage-secret-key';

// Middleware to verify JWT token
const auth = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Get all projects
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('members.userId', 'name email avatar')
      .populate('createdBy', 'name email');
    
    res.json(projects);
  } catch (error) {
    console.error('Get projects error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get projects for current user
router.get('/my', auth, async (req, res) => {
  try {
    const projects = await Project.find({
      'members.userId': req.user.id
    })
      .populate('members.userId', 'name email avatar')
      .populate('createdBy', 'name email');
    
    res.json(projects);
  } catch (error) {
    console.error('Get my projects error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get favorite projects
router.get('/favorites', auth, async (req, res) => {
  try {
    const projects = await Project.find({
      'members.userId': req.user.id,
      favorite: true
    })
      .populate('members.userId', 'name email avatar')
      .populate('createdBy', 'name email');
    
    res.json(projects);
  } catch (error) {
    console.error('Get favorite projects error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get project by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('members.userId', 'name email avatar')
      .populate('createdBy', 'name email')
      .populate('tasks');
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Get project error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new project
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, company, status, members } = req.body;
    
    // Create new project
    const project = new Project({
      name,
      description,
      company,
      status: status || 'Not Started Yet',
      members: [{ userId: req.user.id, role: 'admin' }], // Add creator as admin
      createdBy: req.user.id
    });
    
    // Add additional members if provided
    if (members && members.length > 0) {
      for (const member of members) {
        // Check if user exists
        const user = await User.findById(member.userId);
        if (user) {
          // Add to project members if not already added
          if (!project.members.some(m => m.userId.toString() === member.userId)) {
            project.members.push({
              userId: member.userId,
              role: member.role || 'member'
            });
          }
          
          // Add project to user's projects
          user.projects.push(project._id);
          await user.save();
        }
      }
    }
    
    // Add project to creator's projects
    const creator = await User.findById(req.user.id);
    creator.projects.push(project._id);
    await creator.save();
    
    await project.save();
    
    res.json(project);
  } catch (error) {
    console.error('Create project error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update project
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, description, company, status, progress, favorite, members } = req.body;
    
    // Find project
    let project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user is authorized to update project
    const isAdmin = project.members.some(
      member => member.userId.toString() === req.user.id && member.role === 'admin'
    );
    
    if (!isAdmin && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update project' });
    }
    
    // Update project fields
    if (name) project.name = name;
    if (description) project.description = description;
    if (company) project.company = company;
    if (status) project.status = status;
    if (progress !== undefined) project.progress = progress;
    if (favorite !== undefined) project.favorite = favorite;
    
    // Update members if provided
    if (members && members.length > 0) {
      // Get current member IDs
      const currentMemberIds = project.members.map(m => m.userId.toString());
      
      for (const member of members) {
        // Check if user exists
        const user = await User.findById(member.userId);
        if (user) {
          // Add to project members if not already added
          if (!currentMemberIds.includes(member.userId.toString())) {
            project.members.push({
              userId: member.userId,
              role: member.role || 'member'
            });
            
            // Add project to user's projects
            user.projects.push(project._id);
            await user.save();
          } else {
            // Update existing member's role
            const memberIndex = project.members.findIndex(
              m => m.userId.toString() === member.userId.toString()
            );
            if (memberIndex !== -1 && member.role) {
              project.members[memberIndex].role = member.role;
            }
          }
        }
      }
    }
    
    project.updatedAt = Date.now();
    await project.save();
    
    res.json(project);
  } catch (error) {
    console.error('Update project error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Toggle project favorite status
router.put('/:id/favorite', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Toggle favorite status
    project.favorite = !project.favorite;
    project.updatedAt = Date.now();
    
    await project.save();
    
    res.json({ favorite: project.favorite });
  } catch (error) {
    console.error('Toggle favorite error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete project
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user is authorized to delete project
    const isAdmin = project.members.some(
      member => member.userId.toString() === req.user.id && member.role === 'admin'
    );
    
    if (!isAdmin && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete project' });
    }
    
    // Remove project from all members' projects
    for (const member of project.members) {
      const user = await User.findById(member.userId);
      if (user) {
        user.projects = user.projects.filter(
          p => p.toString() !== project._id.toString()
        );
        await user.save();
      }
    }
    
    await project.remove();
    
    res.json({ message: 'Project deleted' });
  } catch (error) {
    console.error('Delete project error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
