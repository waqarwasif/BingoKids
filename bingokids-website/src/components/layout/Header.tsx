import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, moreDropdown } from '../../data/navigation.data';

export const Header: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dynamic header themes per page route
  const isOurContent = location.pathname === '/our-content';
  const isAboutUs = location.pathname === '/about-us';
  const isAwards = location.pathname === '/awards';
  const isNews = location.pathname === '/news';
  const isResearch = location.pathname === '/research';

  let headerBgClass = 'bg-[#0066FF] text-white';
  let hoverTextClass = 'hover:bg-white hover:text-[#0066FF]';
  let badgeBgClass = 'bg-[#00E676] text-[#002B66]';

  if (isOurContent) {
    headerBgClass = 'bg-[#00E676] text-[#002B66]';
    hoverTextClass = 'hover:bg-[#002B66] hover:text-white';
    badgeBgClass = 'bg-[#FFD600] text-[#002B66]';
  } else if (isAboutUs) {
    headerBgClass = 'bg-[#FFD600] text-[#002B66]'; // Poppy Sunshine Yellow
    hoverTextClass = 'hover:bg-[#002B66] hover:text-white';
    badgeBgClass = 'bg-[#FF1493] text-white';
  } else if (isAwards) {
    headerBgClass = 'bg-[#FF7043] text-white'; // Poppy Coral Orange
    hoverTextClass = 'hover:bg-white hover:text-[#FF7043]';
    badgeBgClass = 'bg-[#00E676] text-[#002B66]';
  } else if (isNews) {
    headerBgClass = 'bg-[#00A86B] text-white'; // Sea Emerald Teal Header
    hoverTextClass = 'hover:bg-white hover:text-[#00A86B]';
    badgeBgClass = 'bg-[#FFD600] text-[#002B66]';
  } else if (isResearch) {
    headerBgClass = 'bg-[#FF1493] text-white'; // Poppy Hot Pink Header (distinct from all pages and hero)
    hoverTextClass = 'hover:bg-white hover:text-[#FF1493]';
    badgeBgClass = 'bg-[#FFD600] text-[#002B66]';
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1440px] transition-all duration-500">
      <header className={`${headerBgClass} w-full rounded-full shadow-[0_8px_32px_rgba(0,43,102,0.4)] border-[4px] border-[#002B66] relative transition-colors duration-500`}>
        {/* Playful Floating Bubbles (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 rounded-full">
          <div className="absolute top-2 left-[10%] w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-6 left-[20%] w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-3 left-[80%] w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-8 left-[90%] w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '2.5s' }}></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between relative z-10">

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-current transition-colors z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-2 font-body font-bold text-[12px] tracking-wider">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
            <Link 
              key={item.label} 
              to={item.href} 
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 uppercase flex items-center gap-1.5 ${
                isActive 
                  ? `${hoverTextClass.replace(/hover:/g, '')} shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-[1.05]` 
                  : `${hoverTextClass} shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]`
              }`}
            >
              {item.label}
              {isActive && (
                 <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                 </span>
              )}
            </Link>
          )})}
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 uppercase ${
              moreDropdown.some(item => location.pathname === item.href)
                ? `${hoverTextClass.replace(/hover:/g, '')} shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-[1.05]` 
                : `${hoverTextClass} shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]`
            }`}>
              MORE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
              {moreDropdown.some(item => location.pathname === item.href) && (
                 <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                 </span>
              )}
            </button>
            
            {/* Playful Dropdown */}
            {isMoreOpen && (
              <div className="absolute top-full left-0 pt-3 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-white text-[#002B66] rounded-2xl p-3 flex flex-col gap-1 min-w-[200px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] border-4 border-[#002B66]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#00E5FF]/30 rounded-bl-full -z-10"></div>
                  {moreDropdown.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                    <Link 
                      key={item.label} 
                      to={item.href} 
                      className={`font-bold text-[12px] px-4 py-2.5 rounded-xl hover:bg-[#F4F9FF] hover:text-[#0066FF] hover:scale-[1.02] hover:translate-x-1 transition-all duration-200 uppercase flex justify-between items-center ${isActive ? 'bg-[#F4F9FF] text-[#0066FF] translate-x-1' : ''}`}
                    >
                      {item.label}
                      {isActive && <span className="text-[14px]">🌟</span>}
                    </Link>
                  )})}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center group cursor-pointer">
          <Link to="/" className="font-display font-black text-xl sm:text-3xl lg:text-5xl tracking-tighter transition-all duration-300 group-hover:scale-110 drop-shadow-[0_4px_0_#002B66] flex items-center">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[-5deg]">B</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-3 group-hover:rotate-[3deg] delay-75">i</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-2deg] delay-100">n</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[4deg] delay-150">g</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-3deg] delay-200">o</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[5deg] delay-300">k</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-2deg] delay-75">i</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[2deg] delay-150">d</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] delay-100">s</span>
          </Link>
        </div>

        {/* Right Nav / Mobile Rating */}
        <div className="flex items-center gap-2 sm:gap-5">
          <div className={`flex items-center border-2 border-white/30 rounded-lg ${badgeBgClass} px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-[0_3px_0_rgba(0,0,0,0.2)] cursor-pointer gap-1 sm:gap-1.5 group`}>
             <span className="text-[9px] sm:text-[10px] font-black leading-none tracking-tight">kidSAFE</span>
             <span className="text-[6px] sm:text-[7px] font-bold opacity-90 leading-none tracking-widest mt-0.5 hidden sm:inline">COPPA</span>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-black/10 transition-colors cursor-default">
              <svg className="w-4 h-4 text-[#FFD600] animate-[spin_4s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-body font-bold text-[12px] tracking-wide">4.7 by 1M families</span>
            </div>
            <button className={`flex items-center gap-1 px-3 py-2 rounded-full ${hoverTextClass} transition-all duration-300 font-body font-bold text-[12px] uppercase hover:scale-105 active:scale-95`}>
              <span>Global</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-[calc(100%+8px)] left-0 w-full ${headerBgClass} rounded-3xl shadow-[0_8px_32px_rgba(0,43,102,0.4)] border-[4px] border-[#002B66] overflow-y-auto max-h-[80vh] transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 pointer-events-none'}`}>
        <div className="p-6 flex flex-col gap-3 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-2 right-[10%] w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-6 left-[20%] w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
          </div>
          {[...navigation, ...moreDropdown].map((item, i) => {
            const isActive = location.pathname === item.href;
            return (
            <Link 
              key={item.label} 
              to={item.href} 
              className={`font-body font-black text-lg sm:text-xl uppercase rounded-2xl px-5 py-3.5 active:scale-95 z-10 transition-all flex justify-between items-center ${isActive ? 'bg-white text-[#002B66] scale-[1.02] shadow-md' : 'bg-black/10 hover:bg-black/20'}`}
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              {isActive && <span className="animate-bounce">🌟</span>}
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
};

