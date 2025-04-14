# ProManage+ Developer Guide

This guide provides information for developers who want to contribute to or extend the ProManage+ project.

## Table of Contents

1. [Development Environment](#development-environment)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [State Management](#state-management)
5. [API Integration](#api-integration)
6. [Adding New Features](#adding-new-features)
7. [Testing](#testing)
8. [Deployment](#deployment)

## Development Environment

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup

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
│   │   ├── layout.tsx      # Dashboard layout
│   │   ├── page.tsx        # Dashboard main page
│   │   ├── projects/       # Projects pages
│   │   ├── tasks/          # Tasks pages
│   │   └── ...             # Other feature pages
│   ├── login/              # Authentication pages
│   ├── register/           # User registration
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── dashboard-*.tsx     # Dashboard components
│   └── landing-*.tsx       # Landing page components
├── lib/                    # Utility functions
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── docs/                   # Documentation
\`\`\`

## Component Architecture

ProManage+ follows a component-based architecture using React and Next.js. Components are organized as follows:

### UI Components

Located in `components/ui/`, these are reusable UI components based on shadcn/ui:
- Button
- Card
- Input
- Dropdown
- etc.

### Feature Components

Located in the root of the `components/` directory, these are feature-specific components:
- `dashboard-header.tsx`: Header for the dashboard
- `dashboard-sidebar.tsx`: Sidebar navigation
- `dashboard-overview.tsx`: Dashboard overview cards
- etc.

### Page Components

Located in the `app/` directory, these are Next.js pages:
- `app/page.tsx`: Landing page
- `app/dashboard/page.tsx`: Dashboard page
- `app/dashboard/projects/page.tsx`: Projects page
- etc.

## State Management

ProManage+ uses React's built-in state management with hooks:

- `useState`: For component-level state
- `useContext`: For sharing state between components
- `useReducer`: For more complex state logic

For server state and data fetching, the application uses:
- Next.js Server Components
- React Query (for client components)

## API Integration

### API Structure

The application expects a RESTful API with the following endpoints:

- `/api/auth`: Authentication endpoints
- `/api/projects`: Project management
- `/api/tasks`: Task management
- `/api/users`: User management
- `/api/chat`: Chat functionality
- `/api/meetings`: Meeting management
- `/api/notes`: Notes management
- `/api/files`: File management
- `/api/github`: GitHub integration

### Making API Requests

For client components, use the fetch API:

\`\`\`typescript
const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};
\`\`\`

For server components, use the native fetch API:

\`\`\`typescript
async function getProjects() {
  const res = await fetch('https://api.example.com/projects');
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
\`\`\`

## Adding New Features

To add a new feature to ProManage+:

1. Create a new page in the appropriate directory (e.g., `app/dashboard/feature-name/page.tsx`)
2. Create any necessary components in the `components/` directory
3. Add the feature to the sidebar navigation in `components/dashboard-sidebar.tsx`
4. Update the documentation to include the new feature

## Testing

### Unit Testing

Run unit tests with Jest:

\`\`\`bash
npm test
# or
yarn test
\`\`\`

### End-to-End Testing

Run E2E tests with Cypress:

\`\`\`bash
npm run cypress
# or
yarn cypress
\`\`\`

## Deployment

### Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

### Deploying to Vercel

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Other Deployment Options

- **Docker**: Use the provided Dockerfile
- **Static Export**: Use `next export` for static hosting
- **Custom Server**: Deploy to your own Node.js server
