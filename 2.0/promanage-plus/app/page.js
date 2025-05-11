'use client';

import { useState, useEffect, useContext } from 'react';
import ProjectList from '../components/ProjectList';
import { AuthContext } from '../components/AuthProvider';

export default function Home() {
  const { user } = useContext(AuthContext);
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

    // Filter favorite projects
    const favorites = mockProjects.filter(project => project.favorite);
    setFavoriteProjects(favorites);
    setAllProjects(mockProjects);
    setLoading(false);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-gray-600">Welcome back, {user?.name || 'User'}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Project
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <section>
            <h2 className="text-xl font-semibold mb-4">Favourite</h2>
            <ProjectList projects={favoriteProjects} />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">All Projects</h2>
            <ProjectList projects={allProjects} listView={true} />
          </section>
        </>
      )}
    </div>
  );
}
