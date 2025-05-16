import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

const DateToggle = () => {
  const { currentDate, setCurrentDate } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  const handleDateSelect = (daysToSubtract: number) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - daysToSubtract);
    setCurrentDate(newDate);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="bg-navy-light hover:bg-navy-lighter text-white py-1.5 px-3 rounded-lg flex items-center gap-2 transition-colors border border-navy-lighter"
      >
        <Calendar size={18} />
        <span>{formatDate(currentDate)}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white text-navy rounded-lg shadow-lg z-10 overflow-hidden">
          <ul>
            <li>
              <button 
                onClick={() => handleDateSelect(0)} 
                className="w-full text-left px-4 py-2 hover:bg-light-gray transition-colors"
              >
                Today
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleDateSelect(1)} 
                className="w-full text-left px-4 py-2 hover:bg-light-gray transition-colors"
              >
                Yesterday
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleDateSelect(2)} 
                className="w-full text-left px-4 py-2 hover:bg-light-gray transition-colors"
              >
                {formatDate(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleDateSelect(7)} 
                className="w-full text-left px-4 py-2 hover:bg-light-gray transition-colors"
              >
                Last Week
              </button>
            </li>
            <li className="border-t border-gray-200">
              <button 
                className="w-full text-left px-4 py-2 text-teal hover:bg-light-gray transition-colors"
              >
                View Archive
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DateToggle;