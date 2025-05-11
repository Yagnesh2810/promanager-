const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Project = require('./models/Project');
const Task = require('./models/Task');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/promanage-plus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

// Seed data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Project.deleteMany({});
    await Task.deleteMany({});

    console.log('Cleared existing data');

    // Create users
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const users = [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: hashedPassword,
        role: 'manager',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: hashedPassword,
        role: 'member',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        password: hashedPassword,
        role: 'member',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      {
        name: 'Alice Brown',
        email: 'alice@example.com',
        password: hashedPassword,
        role: 'member',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      }
    ];

    const createdUsers = await User.insertMany(users);
    console.log(`Created ${createdUsers.length} users`);

    // Create projects
    const projects = [
      {
        name: 'Mobile Banking App',
        description: 'A mobile banking application with secure transactions and user-friendly interface',
        company: 'FinTechX',
        status: 'On Schedule',
        progress: 45,
        favorite: true,
        members: [
          { userId: createdUsers[0]._id, role: 'admin' },
          { userId: createdUsers[1]._id, role: 'manager' },
          { userId: createdUsers[2]._id, role: 'member' },
          { userId: createdUsers[3]._id, role: 'member' }
        ],
        createdBy: createdUsers[0]._id
      },
      {
        name: 'Teamcamp Onboarding',
        description: 'Streamlined onboarding process for new team members',
        company: 'Pixel Digital',
        status: 'Behind Schedule',
        progress: 90,
        favorite: true,
        members: [
          { userId: createdUsers[0]._id, role: 'admin' },
          { userId: createdUsers[1]._id, role: 'manager' },
          { userId: createdUsers[4]._id, role: 'member' }
        ],
        createdBy: createdUsers[0]._id
      },
      {
        name: 'VR Training Platform',
        description: 'Virtual reality platform for employee training and skill development',
        company: 'ImmersivePro',
        status: 'At Risk',
        progress: 70,
        favorite: true,
        members: [
          { userId: createdUsers[2]._id, role: 'manager' },
          { userId: createdUsers[3]._id, role: 'member' }
        ],
        createdBy: createdUsers[2]._id
      },
      {
        name: 'AI Chatbot Integration',
        description: 'AI-powered chatbot for customer support and engagement',
        company: 'Nova Solutions',
        status: 'On Schedule',
        progress: 50,
        favorite: true,
        members: [
          { userId: createdUsers[1]._id, role: 'admin' },
          { userId: createdUsers[2]._id, role: 'member' },
          { userId: createdUsers[4]._id, role: 'member' }
        ],
        createdBy: createdUsers[1]._id
      },
      {
        name: 'E-Commerce Revamp',
        description: 'Redesign and optimization of e-commerce platform',
        company: 'ShopBuddy',
        status: 'At Risk',
        progress: 60,
        favorite: false,
        members: [
          { userId: createdUsers[2]._id, role: 'manager' },
          { userId: createdUsers[4]._id, role: 'member' }
        ],
        createdBy: createdUsers[2]._id
      }
    ];

    const createdProjects = await Project.insertMany(projects);
    console.log(`Created ${createdProjects.length} projects`);

    // Update user projects
    for (const project of createdProjects) {
      for (const member of project.members) {
        await User.findByIdAndUpdate(
          member.userId,
          { $push: { projects: project._id } }
        );
      }
    }
    console.log('Updated user projects');

    // Create tasks
    const tasks = [
      {
        title: 'Design User Interface',
        description: 'Create wireframes and mockups for the mobile banking app',
        status: 'Done',
        priority: 'High',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        assignedTo: createdUsers[2]._id,
        projectId: createdProjects[0]._id,
        createdBy: createdUsers[0]._id
      },
      {
        title: 'Implement Authentication',
        description: 'Set up secure authentication system with two-factor authentication',
        status: 'In Progress',
        priority: 'High',
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        assignedTo: createdUsers[1]._id,
        projectId: createdProjects[0]._id,
        createdBy: createdUsers[0]._id
      },
      {
        title: 'Create Onboarding Videos',
        description: 'Record and edit tutorial videos for the onboarding process',
        status: 'To Do',
        priority: 'Medium',
        deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        assignedTo: createdUsers[4]._id,
        projectId: createdProjects[1]._id,
        createdBy: createdUsers[0]._id
      },
      {
        title: 'Develop VR Environment',
        description: 'Create immersive 3D environment for training simulations',
        status: 'In Progress',
        priority: 'Urgent',
        deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        assignedTo: createdUsers[3]._id,
        projectId: createdProjects[2]._id,
        createdBy: createdUsers[2]._id
      },
      {
        title: 'Train AI Model',
        description: 'Train and fine-tune the AI model for the chatbot',
        status: 'Review',
        priority: 'High',
        deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        assignedTo: createdUsers[2]._id,
        projectId: createdProjects[3]._id,
        createdBy: createdUsers[1]._id
      }
    ];

    const createdTasks = await Task.insertMany(tasks);
    console.log(`Created ${createdTasks.length} tasks`);

    // Update project tasks
    for (const task of createdTasks) {
      await Project.findByIdAndUpdate(
        task.projectId,
        { $push: { tasks: task._id } }
      );
    }
    console.log('Updated project tasks');

    console.log('Database seeded successfully');
    console.log('\nLogin Credentials:');
    console.log('-------------------');
    console.log('Admin User:');
    console.log('Email: admin@example.com');
    console.log('Password: password123');
    console.log('\nManager:');
    console.log('Email: john@example.com');
    console.log('Password: password123');
    console.log('\nTeam Member:');
    console.log('Email: jane@example.com');
    console.log('Password: password123');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

// Run the seed function
seedDatabase();
