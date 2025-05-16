import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="py-3 animate-slideDown">
      <div className="relative">
        <input
          type="text"
          placeholder="Search across all meetings, ideas, and Q&A..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-navy-lighter text-white placeholder:text-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal"
        />
        <Search size={18} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-300">
          Press Enter to search or try: "CPI impact", "tech stocks", "portfolio positioning"
        </div>
      )}
    </div>
  );
};

export default SearchBar;