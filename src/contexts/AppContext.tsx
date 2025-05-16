import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  ChatMessage, 
  CoachIdea,
  MeetingData, 
  Slide, 
  TranscriptEntry 
} from '../types';
import { mockMeetingData } from '../mockData';

interface AppContextType {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  meetingData: MeetingData;
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  currentView: 'meeting' | 'search';
  setCurrentView: (view: 'meeting' | 'search') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [meetingData, setMeetingData] = useState<MeetingData>(mockMeetingData);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentView, setCurrentView] = useState<'meeting' | 'search'>('meeting');
  
  const addChatMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };
  
  return (
    <AppContext.Provider 
      value={{ 
        currentDate, 
        setCurrentDate, 
        meetingData, 
        chatMessages, 
        addChatMessage,
        currentView,
        setCurrentView
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};