import React, { useState } from 'react';
import { Clock, Search, User } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

const TranscriptContent = () => {
  const { meetingData } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const filteredTranscript = searchTerm
    ? meetingData.transcript.filter(entry => 
        entry.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.speaker.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : meetingData.transcript;
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search transcript..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-light-gray rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
          />
          <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {searchTerm && filteredTranscript.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No results found for "{searchTerm}"</p>
        ) : (
          <div className="space-y-6">
            {filteredTranscript.map((entry, index) => {
              const isHighlighted = entry.isHighlighted || 
                (searchTerm && entry.text.toLowerCase().includes(searchTerm.toLowerCase()));
                
              return (
                <div 
                  key={index} 
                  className={`${isHighlighted ? 'bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`flex items-center gap-1 text-xs ${isHighlighted ? 'text-navy font-medium' : 'text-gray-500'}`}>
                      <User size={14} />
                      <span>{entry.speaker}</span>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={14} />
                      <span>{formatTime(entry.timestamp)}</span>
                    </div>
                  </div>
                  <p className={`text-sm ${isHighlighted ? 'text-navy' : 'text-gray-700'}`}>{entry.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TranscriptContent;