'use client';

import { useState, useEffect } from 'react';
import ProjectList from '../../components/ProjectList';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Mock data for demonstration
  useEffect(() => {
    // This would be replaced with actual API calls
    const mockProjects = [
      {
        id: '1',
        name: 'Mobile Banking App',
        company: 'FinTechX',
        status: 'On Schedule',
        progress: 45,
        favorite: true,
        members: [
          { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
          { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
          { id: '3', name: 'Bob Johnson', avatar: '/avatars/bob.jpg' },
          { id: '4', name: 'Alice Brown', avatar: '/avatars/alice.jpg' }
        ]
      },
      {
        id: '2',
        name: 'Teamcamp Onboarding',
        company: 'Pixel Digital',
        status: 'Behind Schedule',
        progress: 90,
        favorite: true,
        members: [
          { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
          { id: '5', name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
          { id: '6', name: 'Sarah Lee', avatar: '/avatars/sarah.jpg' },
          { id: '7', name: 'Tom Davis', avatar: '/avatars/tom.jpg' },
          { id: '8', name: 'Emma White', avatar: '/avatars/emma.jpg' }
        ]
      },
      {
        id: '3',
        name: 'VR Training Platform',
        company: 'ImmersivePro',
        status: 'At Risk',
        progress: 70,
        favorite: true,
        members: [
          { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
          { id: '3', name: 'Bob Johnson', avatar: '/avatars/bob.jpg' },
          { id: '9', name: 'Chris Green', avatar: '/avatars/chris.jpg' }
        ]
      },
      {
        id: '4',
        name: 'AI Chatbot Integration',
        company: 'Nova Solutions',
        status: 'On Schedule',
        progress: 50,
        favorite: true,
        members: [
          { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
          { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
          { id: '5', name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
          { id: '10', name: 'Lisa Black', avatar: '/avatars/lisa.jpg' }
        ]
      },
      {
        id: '5',
        name: 'IoT Home Automation',
        company: 'SmartLiving Inc.',
        status: 'On Schedule',
        progress: 40,
        favorite: true,
        members: [
          { id: '3', name: 'Bob Johnson', avatar: '/avatars/bob.jpg' },
          { id: '4', name: 'Alice Brown', avatar: '/avatars/alice.jpg' },
          { id: '7', name: 'Tom Davis', avatar: '/avatars/tom.jpg' },
          { id: '9', name: 'Chris Green', avatar: '/avatars/chris.jpg' },
          { id: '11', name: 'David Gray', avatar: '/avatars/david.jpg' }
        ]
      },
      {
        id: '6',
        name: 'Event Management System',
        company: 'Pixel Digital',
        status: 'Behind Schedule',
        progress: 75,
        favorite: true,
        members: [
          { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
          { id: '5', name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
          { id: '6', name: 'Sarah Lee', avatar: '/avatars/sarah.jpg' },
          { id: '8', name: 'Emma White', avatar: '/avatars/emma.jpg' },
          { id: '10', name: 'Lisa Black', avatar: '/avatars/lisa.jpg' },
          { id: '12', name: 'Kevin Red', avatar: '/avatars/kevin.jpg' }
        ]
      },
      {
        id: '7',
        name: 'E-Commerce Revamp',
        company: 'ShopBuddy',
        status: 'At Risk',
        progress: 60,
        favorite: false,
        members: [
          { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
          { id: '4', name: 'Alice Brown', avatar: '/avatars/alice.jpg' },
          { id: '6', name: 'Sarah Lee', avatar: '/avatars/sarah.jpg' }
        ]
      },
      {
        id: '8',
        name: 'E-Learning Portal',
        company: 'EduSpark',
        status: 'Not Started Yet',
        progress: 0,
        favorite: false,
        members: [
          { id: '3', name: 'Bob Johnson', avatar: '/avatars/bob.jpg' },
          { id: '7', name: 'Tom Davis', avatar: '/avatars/tom.jpg' },
          { id: '9', name: 'Chris Green', avatar: '/avatars/chris.jpg' }
        ]
      },
      {
        id: '9',
        name: 'Healthcare Mobile App',
        company: 'MediCare+',
        status: 'Behind Schedule',
        progress: 85,
        favorite: false,
        members: [
          { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
          { id: '5', name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
          { id: '10', name: 'Lisa Black', avatar: '/avatars/lisa.jpg' }
        ]
      },
      {
        id: '10',
        name: 'Marketing Website',
        company: 'Greenline Marketing',
        status: 'Behind Schedule',
        progress: 80,
        favorite: false,
        members: [
          { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
          { id: '6', name: 'Sarah Lee', avatar: '/avatars/sarah.jpg' },
          { id: '8', name: 'Emma White', avatar: '/avatars/emma.jpg' }
        ]
      }
    ];

    setProjects(mockProjects);
    setLoading(false);
  }, []);

  // Filter projects based on search term and status filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Project
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="On Schedule">On Schedule</option>
          <option value="Behind Schedule">Behind Schedule</option>
          <option value="At Risk">At Risk</option>
          <option value="Not Started Yet">Not Started Yet</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <ProjectList projects={filteredProjects} listView={true} />
      )}
    </div>
  );
}
