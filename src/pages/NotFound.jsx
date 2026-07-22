import React from 'react';
import { Link } from 'react-router-dom';
import { IconSparkles, IconArrowRight } from '../components/Icons';

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center space-y-8 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-gray-100/80">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 text-indigo-600 rounded-2xl shadow-inner mb-2">
          <IconSparkles className="w-10 h-10 animate-pulse" />
        </div>
        <div>
          <h1 className="text-7xl font-extrabold text-gray-900 tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Page Not Found</h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another location.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gray-900 text-white font-semibold shadow-lg shadow-gray-900/10 hover:bg-gray-800 hover:shadow-gray-900/20 active:scale-[0.98] transition-all duration-200"
          >
            <span>Return to Home</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
