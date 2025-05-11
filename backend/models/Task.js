const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    priority: { type: String, default: 'Medium' },
    status: { type: String, default: 'To Do' },
    dueDate: { type: Date },
    assigneeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', TaskSchema);
