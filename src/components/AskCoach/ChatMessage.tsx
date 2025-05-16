import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Copy, CheckCircle2 } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [feedback, setFeedback] = useState<'thumbsUp' | 'thumbsDown' | null>(null);
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] rounded-xl p-3 ${
        isAssistant 
          ? 'bg-light-gray text-navy' 
          : 'bg-navy text-white'
      }`}>
        <p className="text-sm">{message.content}</p>
        
        {isAssistant && (
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 border-opacity-50">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setFeedback('thumbsUp')}
                className={`p-1 rounded-full transition-colors ${
                  feedback === 'thumbsUp' 
                    ? 'bg-teal/10 text-teal' 
                    : 'text-gray-400 hover:text-navy'
                }`}
              >
                <ThumbsUp size={14} />
              </button>
              
              <button 
                onClick={() => setFeedback('thumbsDown')}
                className={`p-1 rounded-full transition-colors ${
                  feedback === 'thumbsDown' 
                    ? 'bg-red-500/10 text-red-500' 
                    : 'text-gray-400 hover:text-navy'
                }`}
              >
                <ThumbsDown size={14} />
              </button>
            </div>
            
            <button 
              onClick={copyToClipboard}
              className="p-1 rounded-full text-gray-400 hover:text-navy transition-colors"
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;