import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw } from 'lucide-react';
import ChatMessage from './ChatMessage';
import SuggestedPrompts from './SuggestedPrompts';
import { useAppContext } from '../../contexts/AppContext';

const AskCoach = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { chatMessages, addChatMessage } = useAppContext();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    addChatMessage({ role: 'user', content: inputValue });
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      addChatMessage({ 
        role: 'assistant', 
        content: 'Based on today\'s meeting, I recommend highlighting the CPI data to clients with fixed income allocations. The higher-than-expected inflation reading (3.1% vs 2.9%) suggests the Fed may remain cautious about rate cuts in the near term.'
      });
      setIsLoading(false);
    }, 1500);
  };
  
  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);
  
  return (
    <div className="bg-white rounded-xl shadow-md h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-navy">Ask Coach</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
        {chatMessages.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-6">Ask Coach about today's meeting insights</p>
            <SuggestedPrompts onPromptClick={handlePromptClick} />
          </div>
        ) : (
          <div className="space-y-4">
            {chatMessages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-center py-6">
                <RefreshCw size={24} className="text-teal animate-spin" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about today's insights..."
            className="flex-1 bg-light-gray rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
            disabled={isLoading}
          />
          <button 
            type="submit"
            className="bg-teal text-white p-2 rounded-lg disabled:opacity-50"
            disabled={!inputValue.trim() || isLoading}
          >
            <Send size={18} />
          </button>
        </form>
        
        {chatMessages.length > 0 && chatMessages.length < 3 && (
          <SuggestedPrompts onPromptClick={handlePromptClick} />
        )}
      </div>
    </div>
  );
};

export default AskCoach;