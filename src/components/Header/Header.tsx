import React, { useState } from 'react';
import { Calendar, ChevronDown, Search } from 'lucide-react';
import DateToggle from './DateToggle';
import SearchBar from './SearchBar';
import { useAppContext } from '../../contexts/AppContext';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { currentDate, setCurrentDate, currentView, setCurrentView } = useAppContext();
  
  return (
    <header className="bg-navy text-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-semibold">Morning Meeting DeepDive</h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
            <DateToggle />
            
            <button 
              onClick={() => setCurrentView(currentView === 'search' ? 'meeting' : 'search')}
              className="bg-teal hover:bg-teal/90 text-white py-1.5 px-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Search size={18} />
              <span className="hidden md:inline">
                {currentView === 'search' ? 'Back to Meeting' : 'Search Archives'}
              </span>
            </button>
          </div>
        </div>
        
        {showSearch && currentView !== 'search' && <SearchBar />}
      </div>
    </header>
  );
};

export default Header;