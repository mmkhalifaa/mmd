import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const KeyTakeaways = () => {
  const { meetingData } = useAppContext();
  
  return (
    <div className="p-4 bg-light-gray">
      <h3 className="text-md font-medium text-navy mb-2">Key Takeaways</h3>
      
      <ul className="space-y-2">
        {meetingData.keyTakeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center bg-teal text-white text-xs rounded-full w-5 h-5 mt-0.5 flex-shrink-0">
              ✓
            </span>
            <span className="text-sm">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;