# ProManage+ Project Management System

![ProManage+ Logo](public/logo.png)

## Overview

ProManage+ is a comprehensive project management system designed for developers and teams. It provides a robust platform for collaboration, task management, and project tracking with a modern, responsive interface.

## Features

- **Dashboard**: Get an overview of projects, tasks, and team activity
- **Project Management**: Create, manage, and track projects with detailed views
- **Task Management**: Assign, prioritize, and track tasks with subtasks and comments
- **Team Collaboration**: Manage team members, roles, and permissions
- **Real-time Chat**: Communicate with team members through channels and direct messages
- **Meeting Management**: Schedule, manage, and track meetings
- **Notes & Documentation**: Create and share project notes and documentation
- **File Management**: Upload, organize, and share project files
- **GitHub Integration**: Connect with GitHub repositories and track development activity
- **User Profiles**: Detailed user profiles with activity tracking and task assignments

## Screenshots

![Dashboard](public/screenshots/dashboard.png)
![Projects](public/screenshots/projects.png)
![Tasks](public/screenshots/tasks.png)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/promanage-plus.git
   cd promanage-plus
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_API_URL=your_api_url
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
promanage-plus/
├── app/                    # Next.js app directory
│   ├── dashboard/          # Dashboard and feature pages
│   ├── login/              # Authentication pages
│   ├── register/           # User registration
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── dashboard-*.tsx     # Dashboard components
│   └── landing-*.tsx       # Landing page components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── docs/                   # Documentation
\`\`\`

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components
- **Lucide React**: Icon library

## Deployment

The application can be deployed on Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fpromanage-plus)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
