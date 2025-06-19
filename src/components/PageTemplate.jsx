import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageTemplate({ title, children }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {location.pathname}
            </div>
          </div>
          
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
