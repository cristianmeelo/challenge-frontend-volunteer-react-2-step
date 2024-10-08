import React from 'react';

const SearchInput = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-2">
      <span className="text-gray-500 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.45-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholder || 'Buscar...'}
        className="bg-transparent outline-none text-gray-700 placeholder-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
