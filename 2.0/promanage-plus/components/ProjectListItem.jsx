'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectListItem({ project }) {
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
    <li>
      <Link href={`/projects/${project.id}`} className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleFavorite}
                className="text-yellow-400 hover:text-yellow-500 focus:outline-none mr-3"
              >
                {isFavorite ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )}
              </button>
              <p className="text-sm font-medium text-blue-600 truncate">{project.name}</p>
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                project.status === 'On Schedule' ? 'bg-green-100 text-green-800' :
                project.status === 'Behind Schedule' ? 'bg-red-100 text-red-800' :
                project.status === 'At Risk' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                {project.company}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <div className="flex -space-x-1 overflow-hidden">
                {project.members.slice(0, 3).map((member, index) => (
                  <img
                    key={index}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={member.avatar || `https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${index + 1}.jpg`}
                    alt={member.name}
                  />
                ))}
                {project.members.length > 3 && (
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 ring-2 ring-white text-xs font-medium text-gray-500">
                    +{project.members.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full ${getStatusColor(project.status)}`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      </Link>
    </li>
  );
}
