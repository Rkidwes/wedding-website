
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      // Prevent the page from jumping when scrollbar disappears
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [selectedIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  const Lightbox = () => {
    if (selectedIndex === null) return null;

    // The Lightbox is portaled to the end of the body to escape the 'reveal' transform container
    return createPortal(
      <div 
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
        onClick={handleClose}
        style={{ height: '100vh', width: '100vw', top: 0, left: 0 }}
      >
        {/* UI Layer */}
        <div className="absolute inset-0 pointer-events-none z-[100]">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors pointer-events-auto p-4"
            onClick={handleClose}
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Arrow */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all pointer-events-auto p-4 hover:scale-110"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all pointer-events-auto p-4 hover:scale-110"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>

        {/* Image Display */}
        <div className="relative max-w-full max-h-full p-6 md:p-20 flex items-center justify-center">
          <img 
            key={selectedIndex} // Key triggers animation on change
            src={GALLERY_IMAGES[selectedIndex]} 
            alt="Gallery view" 
            className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-sm shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>,
      document.body
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Our memories</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 "></div>
          <p className="sans-serif-text text-secondary text-lg max-w-[80ch] mx-auto">Here are just a few of the amazing moments that have led us here... it may seem like we're always on holiday but really we often just forget to get the camera out!</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden group aspect-square rounded-sm cursor-zoom-in reveal-item ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-3xl font-light">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox />
    </section>
  );
};

export default Gallery;
