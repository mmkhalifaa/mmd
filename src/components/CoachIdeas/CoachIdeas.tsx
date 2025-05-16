import React from 'react';
import { Lightbulb } from 'lucide-react';
import IdeaCard from './IdeaCard';
import { useAppContext } from '../../contexts/AppContext';

const CoachIdeas = () => {
  const { meetingData } = useAppContext();
  
  return (
    <div className="bg-white rounded-xl shadow-md h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-navy">Coach Ideas</h2>
        
        <div className="flex items-center gap-1 bg-light-gray rounded-full px-3 py-1">
          <Lightbulb size={16} className="text-teal" />
          <span className="text-xs text-gray-600">AI Generated</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {meetingData.coachIdeas.map((idea, index) => (
            <IdeaCard key={index} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachIdeas;