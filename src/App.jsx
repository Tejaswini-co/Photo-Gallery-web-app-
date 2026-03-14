import React from 'react';
import Gallery from './components/Gallery';

// Main App component combining everything
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Photo Gallery
        </h1>
        <Gallery />
      </div>
    </div>
  );
}

export default App;