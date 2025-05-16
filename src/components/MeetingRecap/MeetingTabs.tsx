import React from 'react';
import { FileText, Layers } from 'lucide-react';

interface MeetingTabsProps {
  activeTab: 'slides' | 'transcript';
  setActiveTab: (tab: 'slides' | 'transcript') => void;
}

const MeetingTabs: React.FC<MeetingTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200">
      <button
        onClick={() => setActiveTab('slides')}
        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
          activeTab === 'slides'
            ? 'text-navy border-b-2 border-teal'
            : 'text-gray-500 hover:text-navy'
        }`}
      >
        <Layers size={16} />
        <span>Slides</span>
      </button>
      
      <button
        onClick={() => setActiveTab('transcript')}
        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
          activeTab === 'transcript'
            ? 'text-navy border-b-2 border-teal'
            : 'text-gray-500 hover:text-navy'
        }`}
      >
        <FileText size={16} />
        <span>Transcript</span>
      </button>
    </div>
  );
};

export default MeetingTabs;