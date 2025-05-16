export interface Slide {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  fullSizeUrl: string;
}

export interface TranscriptEntry {
  speaker: string;
  timestamp: string;
  text: string;
  isHighlighted?: boolean;
}

export interface CoachIdea {
  id: string;
  category: 'client-talking-points' | 'trade-ideas' | 'policy-updates';
  title: string;
  content: string;
  source: {
    type: 'slide' | 'transcript';
    slideNumber?: number;
    timestamp?: string;
    title: string;
    thumbnailUrl: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface MeetingData {
  id: string;
  date: string;
  title: string;
  keyTakeaways: string[];
  slides: Slide[];
  transcript: TranscriptEntry[];
  coachIdeas: CoachIdea[];
}

export interface SearchResult {
  id: string;
  date: Date;
  type: 'slide' | 'coach-idea' | 'qa';
  title: string;
  snippet: string;
  content: string;
  thumbnailUrl?: string;
}