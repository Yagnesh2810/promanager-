'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Create auth context
export const AuthContext = createContext();

// Auth provider component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is authenticated on component mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        // In a real app, this would verify the token with the backend
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
          setUser(JSON.parse(userData));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Handle routing based on auth state
  useEffect(() => {
    if (!loading) {
      // Public routes that don't require authentication
      const publicRoutes = ['/login', '/register'];
      
      // If not authenticated and not on a public route, redirect to login
      if (!user && !publicRoutes.includes(pathname)) {
        router.push('/login');
      }
      
      // If authenticated and on a public route, redirect to dashboard
      if (user && publicRoutes.includes(pathname)) {
        router.push('/');
      }
    }
  }, [user, loading, pathname, router]);

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  // If still loading, show loading spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If not authenticated and not on a public route, don't render anything (will redirect)
  const publicRoutes = ['/login', '/register'];
  if (!user && !publicRoutes.includes(pathname)) {
    return null;
  }

  // If authenticated, render the app with sidebar
  if (user) {
    return (
      <AuthContext.Provider value={{ user, logout }}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </div>
      </AuthContext.Provider>
    );
  }

  // For public routes, render without sidebar
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
