'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const [isFavorite, setIsFavorite] = useState(project.favorite);

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Schedule':
        return 'bg-green-500';
      case 'Behind Schedule':
        return 'bg-red-500';
      case 'At Risk':
        return 'bg-yellow-500';
      case 'Not Started Yet':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    // In a real app, you would call an API to update the favorite status
  };

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
            <button
              onClick={toggleFavorite}
              className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
            >
              {isFavorite ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">by {project.company}</p>
          
          <div className="mt-4">
            <div className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(project.status)} mr-2`}></span>
              <span className="text-sm text-gray-600">{project.status} ({project.progress}%)</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getStatusColor(project.status)}`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-4 flex -space-x-2 overflow-hidden">
            {project.members.slice(0, 5).map((member, index) => (
              <img
                key={index}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src={member.avatar || `https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${index + 1}.jpg`}
                alt={member.name}
              />
            ))}
            {project.members.length > 5 && (
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white text-xs font-medium text-gray-500">
                +{project.members.length - 5}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
