import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, CheckCircle2, Info } from 'lucide-react';
import { CoachIdea } from '../../types';

interface IdeaCardProps {
  idea: CoachIdea;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(idea.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const toggleSource = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSource(!showSource);
  };
  
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md">
      <div 
        className={`p-4 cursor-pointer ${idea.category === 'client-talking-points' ? 'bg-navy/5' : 
          idea.category === 'trade-ideas' ? 'bg-teal/5' : 'bg-yellow-500/5'}`}
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-2 ${
              idea.category === 'client-talking-points' ? 'bg-navy/10 text-navy' : 
              idea.category === 'trade-ideas' ? 'bg-teal/10 text-teal' : 
              'bg-yellow-500/10 text-yellow-700'
            }`}>
              {idea.category === 'client-talking-points' ? 'Client Talking Point' : 
               idea.category === 'trade-ideas' ? 'Trade Idea' : 'Policy Update'}
            </div>
            <h3 className="font-medium text-navy">{idea.title}</h3>
          </div>
          
          <button 
            className={`p-1 rounded-full transition-colors ${
              isExpanded ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <>
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-700 mb-4">{idea.content}</p>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={toggleSource}
                className="text-xs flex items-center gap-1 text-gray-500 hover:text-navy transition-colors"
              >
                <Info size={14} />
                <span>{showSource ? 'Hide source' : 'Show source'}</span>
              </button>
              
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs font-medium text-teal hover:text-teal-dark transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy to clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          {showSource && (
            <div className="p-4 bg-light-gray border-t border-gray-200">
              <div className="flex items-start gap-2">
                <div className="bg-white p-2 rounded-md border border-gray-200">
                  <img 
                    src={idea.source.thumbnailUrl} 
                    alt="Source slide"
                    className="w-16 h-12 object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Source: Slide {idea.source.slideNumber}</p>
                  <p className="text-xs font-medium text-navy">{idea.source.title}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default IdeaCard;