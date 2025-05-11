import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import AuthProvider from '../components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ProManage+ | Project Management System',
  description: 'A full-featured project management system for developers and teams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
