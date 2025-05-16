import React from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Slide } from '../../types';

interface SlideModalProps {
  slide: Slide;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalSlides: number;
}

const SlideModal: React.FC<SlideModalProps> = ({ 
  slide, 
  onClose, 
  onNext, 
  onPrevious,
  currentIndex,
  totalSlides
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="font-medium text-navy">{slide.title}</h3>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              Slide {currentIndex + 1} of {totalSlides}
            </span>
            
            <button 
              className="text-gray-500 hover:text-navy transition-colors"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto relative bg-gray-100 flex items-center justify-center">
          <img 
            src={slide.fullSizeUrl} 
            alt={slide.title}
            className="max-w-full max-h-[70vh] object-contain"
          />
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-700">{slide.description}</p>
          </div>
          
          <button className="flex items-center gap-2 text-teal hover:text-teal-dark transition-colors">
            <Download size={16} />
            <span className="text-sm font-medium">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideModal;