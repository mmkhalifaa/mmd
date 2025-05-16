import React, { useState } from 'react';
import { Search as SearchIcon, Calendar, Tag, Filter, Copy, Share2, Pin, MessageSquarePlus } from 'lucide-react';
import { Listbox } from '@headlessui/react';
import { format } from 'date-fns';

type ViewType = 'morning-meeting' | 'coach-ideas' | 'qa-only';
type SearchResult = {
  id: string;
  date: Date;
  type: 'slide' | 'coach-idea' | 'qa';
  title: string;
  snippet: string;
  content: string;
  thumbnailUrl?: string;
};

const viewOptions: { id: ViewType; name: string }[] = [
  { id: 'morning-meeting', name: 'Morning Meeting' },
  { id: 'coach-ideas', name: 'Coach Ideas' },
  { id: 'qa-only', name: 'Q&A Only' },
];

const topicTags = [
  'Equities',
  'Fixed Income',
  'Policy',
  'Tax',
  'Credit',
  'Client Strategy',
  'Markets',
];

const mockResults: SearchResult[] = [
  {
    id: '1',
    date: new Date('2025-04-04'),
    type: 'slide',
    title: 'Tech Sector Rotation',
    snippet: 'Analysis shows increasing rotation out of growth into value stocks...',
    content: 'Detailed analysis of the ongoing rotation from growth to value stocks, with particular focus on technology sector valuations and earnings expectations.',
    thumbnailUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
  },
  {
    id: '2',
    date: new Date('2025-03-27'),
    type: 'coach-idea',
    title: 'Consider trimming overweight AI exposure',
    snippet: 'Given elevated valuations in AI-focused companies...',
    content: 'Recommendation to reduce exposure to AI-focused companies due to stretched valuations and increasing regulatory scrutiny.',
  },
  {
    id: '3',
    date: new Date('2025-02-14'),
    type: 'qa',
    title: 'Q1 earnings outlook discussion',
    snippet: 'Tech earnings may disappoint; stay selective...',
    content: 'Q&A session discussing potential earnings disappointments in the technology sector and strategies for selective positioning.',
  },
];

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedView, setSelectedView] = useState<ViewType>('morning-meeting');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search meetings, ideas, and Q&A (e.g., 'tech stocks', 'munis', 'Fed policy')..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* View Toggle */}
              <Listbox value={selectedView} onChange={setSelectedView}>
                <div className="relative">
                  <Listbox.Button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy text-white">
                    <Filter size={16} />
                    <span>{viewOptions.find(v => v.id === selectedView)?.name}</span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
                    {viewOptions.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        value={option.id}
                        className={({ active }) =>
                          `px-4 py-2 cursor-pointer ${active ? 'bg-light-gray' : ''}`
                        }
                      >
                        {option.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Date Range */}
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="px-2 py-1 rounded border border-gray-200"
                />
                <span>to</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="px-2 py-1 rounded border border-gray-200"
                />
              </div>

              {/* Topic Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={16} className="text-gray-500" />
                {topicTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTags(prev =>
                        prev.includes(tag)
                          ? prev.filter(t => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-teal text-white'
                        : 'bg-light-gray text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Results Panel */}
          <div className="w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-navy">Search Results</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {mockResults.map((result) => (
                <button
                  key={result.id}
                  onClick={() => setSelectedResult(result)}
                  className={`w-full text-left p-4 hover:bg-light-gray transition-colors ${
                    selectedResult?.id === result.id ? 'bg-light-gray' : ''
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1">
                    {format(result.date, 'MMM d, yyyy')}
                  </div>
                  <h3 className="font-medium text-navy mb-1">{result.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{result.snippet}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden">
            {selectedResult ? (
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold text-navy">{selectedResult.title}</h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-light-gray rounded-lg" title="Copy">
                      <Copy size={18} />
                    </button>
                    <button className="p-2 hover:bg-light-gray rounded-lg" title="Share">
                      <Share2 size={18} />
                    </button>
                    <button className="p-2 hover:bg-light-gray rounded-lg" title="Pin">
                      <Pin size={18} />
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                  {selectedResult.thumbnailUrl && (
                    <img
                      src={selectedResult.thumbnailUrl}
                      alt={selectedResult.title}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-6"
                    />
                  )}
                  <p className="text-gray-700 mb-6">{selectedResult.content}</p>
                </div>

                <div className="p-4 border-t border-gray-200 bg-light-gray">
                  <button className="flex items-center gap-2 text-teal hover:text-teal-dark transition-colors">
                    <MessageSquarePlus size={18} />
                    <span>Ask Coach about this</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a result to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;