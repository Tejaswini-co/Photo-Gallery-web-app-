import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        placeholder="Search by author name..."
        onChange={onSearch}
        className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default SearchBar;