import React, { useState } from 'react';
import KeyTakeaways from './KeyTakeaways';
import MeetingTabs from './MeetingTabs';
import SlideContent from './SlideContent';
import TranscriptContent from './TranscriptContent';

const MeetingRecap = () => {
  const [activeTab, setActiveTab] = useState<'slides' | 'transcript'>('slides');
  
  return (
    <div className="bg-white rounded-xl shadow-md h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-navy">Meeting Recap</h2>
      </div>
      
      <KeyTakeaways />
      
      <MeetingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-hidden">
        {activeTab === 'slides' ? <SlideContent /> : <TranscriptContent />}
      </div>
    </div>
  );
};

export default MeetingRecap;