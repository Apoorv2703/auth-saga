import React from 'react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulse ring */}
        <div className="w-16 h-16 rounded-full border-4 border-indigo-100 animate-ping absolute inset-0 opacity-75"></div>
        {/* Spinning gradient ring */}
        <div className="w-14 h-14 rounded-full border-4 border-t-indigo-600 border-r-indigo-400 border-b-indigo-200 border-l-transparent animate-spin"></div>
      </div>
      <p className="mt-5 text-sm font-semibold tracking-wide text-gray-500 animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default Loader;
