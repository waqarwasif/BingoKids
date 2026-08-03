import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation, moreDropdown } from '../../data/navigation.data';

export const Header: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1440px] transition-all duration-500">
      <header className="bg-brand-purple text-white w-full rounded-full shadow-[0_8px_32px_rgba(34,16,69,0.5)] border-[4px] border-[#221045] relative">
        {/* Playful Floating Bubbles (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 rounded-full">
          <div className="absolute top-2 left-[10%] w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-6 left-[20%] w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-3 left-[80%] w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-8 left-[90%] w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '2.5s' }}></div>
        </div>

        <div className="mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between relative z-10">

        
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-2 font-body font-bold text-[12px] tracking-wider">
          {navigation.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="text-white px-4 py-2 rounded-full hover:bg-white hover:text-brand-purpleAccent transition-all duration-300 hover:scale-105 active:scale-95 uppercase flex items-center gap-1 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
            >
              {item.label}
            </Link>
          ))}
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-white hover:text-brand-purpleAccent transition-all duration-300 hover:scale-105 active:scale-95 uppercase text-white">
              MORE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            
            {/* Playful Dropdown */}
            {isMoreOpen && (
              <div className="absolute top-full left-0 pt-3 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-white text-brand-purple rounded-2xl p-3 flex flex-col gap-1 min-w-[200px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] border-4 border-brand-purple/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan/20 rounded-bl-full -z-10"></div>
                  {moreDropdown.map((item) => (
                    <Link 
                      key={item.label} 
                      to={item.href} 
                      className="font-bold text-[12px] px-4 py-2.5 rounded-xl hover:bg-brand-cream hover:text-brand-purpleAccent hover:scale-[1.02] hover:translate-x-1 transition-all duration-200 uppercase"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center group cursor-pointer">
          <Link to="/" className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white transition-all duration-300 group-hover:scale-110 drop-shadow-[0_4px_0_#221045] flex items-center">
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

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-default">
            <svg className="w-4 h-4 text-brand-yellow animate-[spin_4s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-body font-bold text-[12px] text-white tracking-wide">4.7 by 1M families</span>
          </div>
          <div className="flex items-center border-2 border-white/30 rounded-lg bg-[#0284c7] px-2.5 py-1.5 shadow-[0_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all cursor-pointer gap-1.5 group">
             <span className="text-[10px] font-black text-[#fbd15f] leading-none tracking-tight group-hover:animate-pulse">kidSAFE</span>
             <span className="text-[7px] font-bold text-white leading-none tracking-widest mt-0.5">COPPA CERTIFIED</span>
          </div>
          <button className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white/20 transition-all duration-300 font-body font-bold text-[12px] uppercase text-white hover:scale-105 active:scale-95">
            EN
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 rounded-full hover:bg-white/20 transition-colors active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-2 w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>

      </div>

      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-[calc(100%+8px)] left-0 w-full bg-brand-purple rounded-3xl shadow-[0_8px_32px_rgba(34,16,69,0.5)] border-[4px] border-[#221045] overflow-hidden transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 pointer-events-none'}`}>
        <div className="p-6 flex flex-col gap-4 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-2 right-[10%] w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-6 left-[20%] w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
          </div>
          {[...navigation, ...moreDropdown].map((item, i) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="font-body font-black text-xl hover:text-brand-yellow transition-colors uppercase bg-white/5 rounded-xl px-4 py-3 active:scale-95 z-10"
              style={{ transitionDelay: `${i * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

