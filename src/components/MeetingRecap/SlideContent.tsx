import React, { useState } from 'react';
import { Maximize2, Download } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';
import SlideModal from './SlideModal';

const SlideContent = () => {
  const { meetingData } = useAppContext();
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  
  return (
    <div className="p-4 overflow-y-auto h-full">
      <div className="grid grid-cols-2 gap-3">
        {meetingData.slides.map((slide, index) => (
          <div 
            key={index}
            className="bg-light-gray rounded-lg overflow-hidden cursor-pointer group relative"
            onClick={() => setSelectedSlide(index)}
          >
            <img 
              src={slide.thumbnailUrl} 
              alt={`Slide ${index + 1}: ${slide.title}`}
              className="w-full object-cover aspect-[4/3]"
            />
            
            <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Maximize2 size={20} className="text-white" />
            </div>
            
            <div className="p-2">
              <h4 className="text-xs font-medium text-navy truncate">{slide.title}</h4>
            </div>
          </div>
        ))}
      </div>
      
      {selectedSlide !== null && (
        <SlideModal 
          slide={meetingData.slides[selectedSlide]} 
          onClose={() => setSelectedSlide(null)}
          onNext={() => setSelectedSlide(prev => (prev! < meetingData.slides.length - 1 ? prev! + 1 : prev))}
          onPrevious={() => setSelectedSlide(prev => (prev! > 0 ? prev! - 1 : prev))}
          currentIndex={selectedSlide}
          totalSlides={meetingData.slides.length}
        />
      )}
    </div>
  );
};

export default SlideContent;