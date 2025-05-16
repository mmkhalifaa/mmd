import React from 'react';
import { Download, Mail, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-3">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors">
              <Download size={16} />
              <span>Download PDF</span>
            </button>
            
            <button className="flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors">
              <Mail size={16} />
              <span>Email Draft</span>
            </button>
            
            <button className="flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors">
              <Share2 size={16} />
              <span>Share to Teams</span>
            </button>
          </div>
          
          <div className="text-xs text-gray-500">
            <span>© 2025 JPMorgan Chase & Co. All rights reserved. AI-generated content for informational purposes only.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;