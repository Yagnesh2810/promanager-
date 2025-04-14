# ProManage+ API Documentation

This document outlines the expected API endpoints for the ProManage+ application. Note that this is a frontend project, and these endpoints represent the expected backend API structure.

## Base URL

All API endpoints are relative to the base URL:

\`\`\`
https://api.promanage-plus.com/v1
\`\`\`

## Authentication

### Register

\`\`\`
POST /auth/register
\`\`\`

Request body:
\`\`\`json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
\`\`\`

Response:
\`\`\`json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "jwt_token_here"
}
\`\`\`

### Login

\`\`\`
POST /auth/login
\`\`\`

Request body:
\`\`\`json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
\`\`\`

Response:
\`\`\`json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "jwt_token_here"
}
\`\`\`

### Logout

\`\`\`
POST /auth/logout
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Logged out successfully"
}
\`\`\`

## Projects

### Get All Projects

\`\`\`
GET /projects
\`\`\`

Response:
\`\`\`json
{
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Redesign the company website with new branding",
      "status": "In Progress",
      "startDate": "2023-07-15",
      "dueDate": "2023-09-30",
      "tasks": {
        "total": 24,
        "completed": 10
      },
      "members": [
        {
          "id": "user_123",
          "name": "John Doe",
          "image": "/images/john.jpg",
          "initials": "JD"
        }
      ]
    }
  ]
}
\`\`\`

### Get Project by ID

\`\`\`
GET /projects/:id
\`\`\`

Response:
\`\`\`json
{
  "id": 1,
  "name": "Website Redesign",
  "description": "Redesign the company website with new branding",
  "fullDescription": "This project involves a complete overhaul of the company website...",
  "status": "In Progress",
  "startDate": "2023-07-15",
  "dueDate": "2023-09-30",
  "tasks": {
    "total": 24,
    "completed": 10
  },
  "members": [
    {
      "id": "user_123",
      "name": "John Doe",
      "image": "/images/john.jpg",
      "initials": "JD"
    }
  ],
  "comments": 32,
  "files": 15,
  "activity": [
    {
      "user": {
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "action": "created the project",
      "time": "2023-07-15"
    }
  ]
}
\`\`\`

### Create Project

\`\`\`
POST /projects
\`\`\`

Request body:
\`\`\`json
{
  "name": "New Project",
  "description": "Project description",
  "startDate": "2023-08-01",
  "dueDate": "2023-10-31",
  "members": ["user_123", "user_456"]
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "name": "New Project",
  "description": "Project description",
  "status": "Planning",
  "startDate": "2023-08-01",
  "dueDate": "2023-10-31",
  "tasks": {
    "total": 0,
    "completed": 0
  },
  "members": [
    {
      "id": "user_123",
      "name": "John Doe",
      "image": "/images/john.jpg",
      "initials": "JD"
    },
    {
      "id": "user_456",
      "name": "Jane Smith",
      "image": "/images/jane.jpg",
      "initials": "JS"
    }
  ]
}
\`\`\`

### Update Project

\`\`\`
PUT /projects/:id
\`\`\`

Request body:
\`\`\`json
{
  "name": "Updated Project Name",
  "description": "Updated description",
  "status": "In Progress",
  "dueDate": "2023-11-15"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "name": "Updated Project Name",
  "description": "Updated description",
  "status": "In Progress",
  "startDate": "2023-08-01",
  "dueDate": "2023-11-15",
  "tasks": {
    "total": 0,
    "completed": 0
  },
  "members": [
    {
      "id": "user_123",
      "name": "John Doe",
      "image": "/images/john.jpg",
      "initials": "JD"
    },
    {
      "id": "user_456",
      "name": "Jane Smith",
      "image": "/images/jane.jpg",
      "initials": "JS"
    }
  ]
}
\`\`\`

### Delete Project

\`\`\`
DELETE /projects/:id
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Project deleted successfully"
}
\`\`\`

## Tasks

### Get All Tasks

\`\`\`
GET /tasks
\`\`\`

Response:
\`\`\`json
{
  "tasks": [
    {
      "id": 1,
      "title": "Design homepage mockup",
      "description": "Create wireframes and high-fidelity mockups for the new homepage",
      "project": "Website Redesign",
      "projectId": 1,
      "priority": "High",
      "status": "In Progress",
      "dueDate": "2023-08-15",
      "assignee": {
        "id": "user_456",
        "name": "Jane Smith",
        "image": "/images/jane.jpg",
        "initials": "JS"
      }
    }
  ]
}
\`\`\`

### Get Task by ID

\`\`\`
GET /tasks/:id
\`\`\`

Response:
\`\`\`json
{
  "id": 1,
  "title": "Design homepage mockup",
  "description": "Create wireframes and high-fidelity mockups for the new homepage",
  "project": "Website Redesign",
  "projectId": 1,
  "priority": "High",
  "status": "In Progress",
  "dueDate": "2023-08-15",
  "createdAt": "2023-08-10",
  "timeSpent": "4h 30m",
  "attachments": 2,
  "creator": {
    "id": "user_123",
    "name": "John Doe",
    "image": "/images/john.jpg",
    "initials": "JD"
  },
  "assignee": {
    "id": "user_456",
    "name": "Jane Smith",
    "image": "/images/jane.jpg",
    "initials": "JS"
  },
  "subtasks": [
    {
      "id": 1,
      "title": "Create wireframes",
      "completed": true
    },
    {
      "id": 2,
      "title": "Design desktop version",
      "completed": true
    }
  ],
  "comments": [
    {
      "id": 1,
      "user": {
        "id": "user_123",
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "content": "I've added some reference designs to the project files.",
      "time": "2023-08-11T10:30:00Z"
    }
  ]
}
\`\`\`

### Create Task

\`\`\`
POST /tasks
\`\`\`

Request body:
\`\`\`json
{
  "title": "New Task",
  "description": "Task description",
  "projectId": 1,
  "priority": "Medium",
  "dueDate": "2023-08-25",
  "assigneeId": "user_456",
  "subtasks": [
    {
      "title": "Subtask 1",
      "completed": false
    },
    {
      "title": "Subtask 2",
      "completed": false
    }
  ]
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "title": "New Task",
  "description": "Task description",
  "project": "Website Redesign",
  "projectId": 1,
  "priority": "Medium",
  "status": "To Do",
  "dueDate": "2023-08-25",
  "createdAt": "2023-08-15",
  "timeSpent": "0h 0m",
  "attachments": 0,
  "creator": {
    "id": "user_123",
    "name": "John Doe",
    "image": "/images/john.jpg",
    "initials": "JD"
  },
  "assignee": {
    "id": "user_456",
    "name": "Jane Smith",
    "image": "/images/jane.jpg",
    "initials": "JS"
  },
  "subtasks": [
    {
      "id": 3,
      "title": "Subtask 1",
      "completed": false
    },
    {
      "id": 4,
      "title": "Subtask 2",
      "completed": false
    }
  ],
  "comments": []
}
\`\`\`

### Update Task

\`\`\`
PUT /tasks/:id
\`\`\`

Request body:
\`\`\`json
{
  "title": "Updated Task Title",
  "status": "In Progress",
  "priority": "High",
  "dueDate": "2023-08-30"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "title": "Updated Task Title",
  "description": "Task description",
  "project": "Website Redesign",
  "projectId": 1,
  "priority": "High",
  "status": "In Progress",
  "dueDate": "2023-08-30",
  "createdAt": "2023-08-15",
  "timeSpent": "0h 0m",
  "attachments": 0,
  "creator": {
    "id": "user_123",
    "name": "John Doe",
    "image": "/images/john.jpg",
    "initials": "JD"
  },
  "assignee": {
    "id": "user_456",
    "name": "Jane Smith",
    "image": "/images/jane.jpg",
    "initials": "JS"
  },
  "subtasks": [
    {
      "id": 3,
      "title": "Subtask 1",
      "completed": false
    },
    {
      "id": 4,
      "title": "Subtask 2",
      "completed": false
    }
  ],
  "comments": []
}
\`\`\`

### Delete Task

\`\`\`
DELETE /tasks/:id
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Task deleted successfully"
}
\`\`\`

### Add Comment to Task

\`\`\`
POST /tasks/:id/comments
\`\`\`

Request body:
\`\`\`json
{
  "content": "This is a comment"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "image": "/images/john.jpg",
    "initials": "JD"
  },
  "content": "This is a comment",
  "time": "2023-08-15T14:30:00Z"
}
\`\`\`

## Users

### Get All Users

\`\`\`
GET /users
\`\`\`

Response:
\`\`\`json
{
  "users": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "Project Manager",
      "image": "/images/john.jpg",
      "initials": "JD",
      "status": "Online"
    },
    {
      "id": "user_456",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "role": "Frontend Developer",
      "image": "/images/jane.jpg",
      "initials": "JS",
      "status": "Offline"
    }
  ]
}
\`\`\`

### Get User by ID

\`\`\`
GET /users/:id
\`\`\`

Response:
\`\`\`json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "Project Manager",
  "image": "/images/john.jpg",
  "initials": "JD",
  "status": "Online",
  "bio": "Experienced Project Manager with a demonstrated history of working in the software industry.",
  "phone": "+1 (555) 123-4567",
  "location": "New York, USA",
  "joinedAt": "2022-01-01",
  "workExperience": [
    {
      "title": "Project Manager",
      "company": "ProManage+",
      "period": "2022 - Present",
      "description": "Leading software development projects and managing cross-functional teams."
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Technology",
      "period": "2014 - 2018"
    }
  ],
  "skills": [
    "Project Management",
    "Agile",
    "Scrum",
    "JavaScript",
    "React",
    "Node.js"
  ]
}
\`\`\`

### Update User

\`\`\`
PUT /users/:id
\`\`\`

Request body:
\`\`\`json
{
  "name": "John Doe",
  "bio": "Updated bio information",
  "phone": "+1 (555) 987-6543",
  "location": "San Francisco, USA"
}
\`\`\`

Response:
\`\`\`json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "Project Manager",
  "image": "/images/john.jpg",
  "initials": "JD",
  "status": "Online",
  "bio": "Updated bio information",
  "phone": "+1 (555) 987-6543",
  "location": "San Francisco, USA",
  "joinedAt": "2022-01-01"
}
\`\`\`

## Chat

### Get Channels

\`\`\`
GET /chat/channels
\`\`\`

Response:
\`\`\`json
{
  "channels": [
    {
      "id": "team-general",
      "name": "Team General",
      "lastMessage": "Let's discuss the new project requirements",
      "unread": 3
    }
  ]
}
\`\`\`

### Get Direct Messages

\`\`\`
GET /chat/direct
\`\`\`

Response:
\`\`\`json
{
  "directMessages": [
    {
      "id": "dm-1",
      "user": {
        "id": "user_123",
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "lastMessage": "Can you review my PR?",
      "unread": 1,
      "time": "10:30 AM"
    }
  ]
}
\`\`\`

### Get Messages

\`\`\`
GET /chat/:id/messages
\`\`\`

Response:
\`\`\`json
{
  "messages": [
    {
      "id": 1,
      "user": {
        "id": "user_123",
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "content": "Hey team, I've just pushed the latest changes to the repository.",
      "time": "10:30 AM"
    }
  ]
}
\`\`\`

### Send Message

\`\`\`
POST /chat/:id/messages
\`\`\`

Request body:
\`\`\`json
{
  "content": "This is a new message"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 2,
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "image": "/images/john.jpg",
    "initials": "JD"
  },
  "content": "This is a new message",
  "time": "11:45 AM"
}
\`\`\`

## Meetings

### Get All Meetings

\`\`\`
GET /meetings
\`\`\`

Response:
\`\`\`json
{
  "upcoming": [
    {
      "id": 1,
      "title": "Weekly Team Standup",
      "time": "Today, 10:00 AM - 10:30 AM",
      "type": "Video",
      "project": "Team",
      "participants": [
        {
          "id": "user_123",
          "name": "John Doe",
          "image": "/images/john.jpg",
          "initials": "JD"
        }
      ]
    }
  ],
  "past": [
    {
      "id": 4,
      "title": "API Integration Discussion",
      "time": "Yesterday, 3:00 PM - 4:00 PM",
      "type": "Video",
      "project": "API Integration",
      "participants": [
        {
          "id": "user_123",
          "name": "John Doe",
          "image": "/images/john.jpg",
          "initials": "JD"
        }
      ]
    }
  ],
  "recurring": [
    {
      "id": 6,
      "title": "Weekly Team Standup",
      "time": "Every Monday, 10:00 AM - 10:30 AM",
      "recurrence": "Weekly on Mondays",
      "type": "Video",
      "project": "Team",
      "participants": [
        {
          "id": "user_123",
          "name": "John Doe",
          "image": "/images/john.jpg",
          "initials": "JD"
        }
      ]
    }
  ]
}
\`\`\`

### Schedule Meeting

\`\`\`
POST /meetings
\`\`\`

Request body:
\`\`\`json
{
  "title": "New Meeting",
  "startTime": "2023-08-20T14:00:00Z",
  "endTime": "2023-08-20T15:00:00Z",
  "type": "Video",
  "project": "Website Redesign",
  "participants": ["user_123", "user_456"],
  "description": "Discuss project progress"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 8,
  "title": "New Meeting",
  "time": "August 20, 2023, 2:00 PM - 3:00 PM",
  "type": "Video",
  "project": "Website Redesign",
  "participants": [
    {
      "id": "user_123",
      "name": "John Doe",
      "image": "/images/john.jpg",
      "initials": "JD"
    },
    {
      "id": "user_456",
      "name": "Jane Smith",
      "image": "/images/jane.jpg",
      "initials": "JS"
    }
  ],
  "description": "Discuss project progress"
}
\`\`\`

## Notes

### Get All Notes

\`\`\`
GET /notes
\`\`\`

Response:
\`\`\`json
{
  "notes": [
    {
      "id": 1,
      "title": "Project Requirements",
      "preview": "This document outlines the requirements for the website redesign project...",
      "content": "<h2>Website Redesign Requirements</h2><p>This document outlines the requirements for the website redesign project.</p>",
      "project": "Website Redesign",
      "updated": "2 hours ago",
      "updatedDate": "2023-08-15T10:30:00",
      "starred": true
    }
  ]
}
\`\`\`

### Create Note

\`\`\`
POST /notes
\`\`\`

Request body:
\`\`\`json
{
  "title": "New Note",
  "content": "<h2>New Note</h2><p>This is a new note.</p>",
  "project": "Website Redesign"
}
\`\`\`

Response:
\`\`\`json
{
  "id": 6,
  "title": "New Note",
  "preview": "This is a new note.",
  "content": "<h2>New Note</h2><p>This is a new note.</p>",
  "project": "Website Redesign",
  "updated": "Just now",
  "updatedDate": "2023-08-15T15:30:00",
  "starred": false
}
\`\`\`

## Files

### Get All Files

\`\`\`
GET /files
\`\`\`

Response:
\`\`\`json
{
  "folders": [
    {
      "id": 1,
      "name": "Website Redesign",
      "files": 12,
      "updated": "2 hours ago"
    }
  ],
  "files": [
    {
      "id": 1,
      "name": "Project Requirements.docx",
      "type": "document",
      "size": "245 KB",
      "updated": "2 hours ago",
      "updatedDate": "2023-08-15T10:30:00"
    }
  ]
}
\`\`\`

### Upload File

\`\`\`
POST /files/upload
\`\`\`

Request body:
\`\`\`
FormData with file
\`\`\`

Response:
\`\`\`json
{
  "id": 6,
  "name": "New File.pdf",
  "type": "document",
  "size": "1.2 MB",
  "updated": "Just now",
  "updatedDate": "2023-08-15T15:30:00"
}
\`\`\`

## GitHub Integration

### Get Repositories

\`\`\`
GET /github/repositories
\`\`\`

Response:
\`\`\`json
{
  "repositories": [
    {
      "id": 1,
      "name": "promanage-frontend",
      "description": "Frontend repository for the ProManage+ application",
      "private": false,
      "branches": 4,
      "lastCommit": "2 hours ago",
      "pullRequests": 2
    }
  ]
}
\`\`\`

### Get Pull Requests

\`\`\`
GET /github/pull-requests
\`\`\`

Response:
\`\`\`json
{
  "pullRequests": [
    {
      "id": 1,
      "title": "Implement user authentication",
      "repository": "promanage-api",
      "status": "Open",
      "author": {
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "updatedAt": "1 hour ago"
    }
  ]
}
\`\`\`

### Get Issues

\`\`\`
GET /github/issues
\`\`\`

Response:
\`\`\`json
{
  "issues": [
    {
      "id": 1,
      "title": "Login page not working on mobile",
      "repository": "promanage-frontend",
      "status": "Open",
      "assignee": {
        "name": "John Doe",
        "image": "/images/john.jpg",
        "initials": "JD"
      },
      "createdAt": "2 days ago"
    }
  ]
}
\`\`\`

## Error Responses

All API endpoints return standard HTTP status codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

Error response format:

\`\`\`json
{
  "error": true,
  "message": "Error message",
  "code": "ERROR_CODE"
}
\`\`\`

## Rate Limiting

API requests are rate limited to 100 requests per minute per user. When the rate limit is exceeded, the API returns a 429 Too Many Requests response.

## Pagination

List endpoints support pagination using the following query parameters:

- `page`: Page number (default: 1)
- `limit`: Number of items per page (default: 20, max: 100)

Response format for paginated endpoints:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 20,
    "pages": 5
  }
}
\`\`\`

## Filtering and Sorting

List endpoints support filtering and sorting using the following query parameters:

- `sort`: Field to sort by (e.g., `name`, `createdAt`)
- `order`: Sort order (`asc` or `desc`)
- `filter[field]`: Filter by field value (e.g., `filter[status]=active`)

Example:

\`\`\`
GET /projects?sort=createdAt&order=desc&filter[status]=In%20Progress
