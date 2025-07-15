// components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-white text-3xl font-bold animate-pulse">Loading Café...</h1>
    </div>
  );
};

export default Loader;
