import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function Carousel<T>({ items, renderItem, showArrow = true, className = '' }: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(items.length - 1);
    }
  };

  useGSAP(() => {
    if (trackRef.current && isDesktop) {
      const itemWidth = trackRef.current.children[0]?.clientWidth || 300;
      const gap = 32; 
      const maxVisible = 3;
      // Prevent scrolling past the end if not enough items
      const maxIndex = Math.max(0, items.length - maxVisible);
      const safeIndex = Math.min(currentIndex, maxIndex);
      
      const xPercent = -(safeIndex * (itemWidth + gap));
      
      gsap.to(trackRef.current, {
        x: xPercent,
        duration: 0.5,
        ease: 'power2.inOut'
      });
    }
  }, [currentIndex, isDesktop, items.length]);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="overflow-hidden relative pb-8 px-4 lg:px-0">
        <div 
          ref={trackRef}
          className={`flex gap-6 lg:gap-8 ${
            !isDesktop ? 'overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar w-full' : 'w-max'
          }`}
          style={{ paddingRight: !isDesktop ? '20vw' : '0' }}
        >
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`shrink-0 ${!isDesktop ? 'snap-center snap-always w-[85vw] sm:w-[340px] md:w-[360px] max-w-[420px]' : 'w-[320px] xl:w-[380px]'}`}
            >
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      </div>
      
      {showArrow && isDesktop && items.length > 3 && (
        <>
          <button 
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute -left-12 xl:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full text-brand-purple flex items-center justify-center hover:scale-105 transition-transform z-10 shadow-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#211242" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute -right-12 xl:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full text-brand-purple flex items-center justify-center hover:scale-105 transition-transform z-10 shadow-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#211242" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
