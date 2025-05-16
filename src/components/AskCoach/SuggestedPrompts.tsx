import React from 'react';

interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const suggestedPrompts = [
  "Summarize for my top muni clients",
  "What changed vs. yesterday's meeting?",
  "Generate historical chart on CPI trends",
  "Relate today's insights to ultra-high net worth clients"
];

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ onPromptClick }) => {
  return (
    <div className="mt-3">
      <p className="text-xs text-gray-500 mb-2">Suggested prompts:</p>
      
      <div className="flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt)}
            className="text-xs bg-light-gray text-navy py-1.5 px-3 rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;