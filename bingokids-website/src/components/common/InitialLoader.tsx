import React, { useState, useEffect } from 'react';

const CRITICAL_MEDIA = [
  '/app-ui-bingo.jpg',
  '/play-characters.png',
  '/serious-about-fun.png',
  '/news-hero.png',
  '/awards-hero-new.png',
  '/research-hero.png'
];

export const InitialLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Preload critical hero images in background
    CRITICAL_MEDIA.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Short playful delay for smooth media initialization
    const timer = setTimeout(() => {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 600); // 600ms fade transition
      return () => clearTimeout(fadeTimer);
    }, 800); // 800ms minimum display

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0066FF] via-[#0055FF] to-[#002B66] flex flex-col items-center justify-center transition-opacity duration-600 ease-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Decorative Sparkles */}
      <div className="absolute top-12 left-12 text-[#FFD600] text-3xl animate-bounce" style={{ animationDuration: '2s' }}>⭐</div>
      <div className="absolute bottom-12 right-12 text-[#FF1493] text-4xl animate-pulse">✨</div>

      {/* Animated Brand Logo */}
      <div className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-white drop-shadow-[0_6px_0_#002B66] flex items-center mb-6">
        <span className="inline-block animate-bounce text-[#FFD600]" style={{ animationDelay: '0ms' }}>K</span>
        <span className="inline-block animate-bounce text-[#00E5FF]" style={{ animationDelay: '100ms' }}>i</span>
        <span className="inline-block animate-bounce text-[#FF1493]" style={{ animationDelay: '200ms' }}>d</span>
        <span className="inline-block animate-bounce text-[#00E676]" style={{ animationDelay: '300ms' }}>z</span>
        <span className="inline-block animate-bounce text-[#FFD600]" style={{ animationDelay: '400ms' }}>e</span>
        <span className="inline-block animate-bounce text-[#FF7043]" style={{ animationDelay: '500ms' }}>e</span>
      </div>

      {/* Playful Loading Spinner & Pulse Bar */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-white/20 border-t-[#FFD600] border-r-[#FF1493] rounded-full animate-spin"></div>
        <span className="font-body font-bold text-sm tracking-widest text-white/90 uppercase animate-pulse">
          Loading Fun...
        </span>
      </div>
    </div>
  );
};
