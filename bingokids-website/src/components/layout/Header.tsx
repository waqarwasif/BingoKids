import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation, moreDropdown } from '../../data/navigation.data';

export const Header: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-purple text-white sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-body font-bold text-[11px] tracking-wider">
          {navigation.map((item) => (
            <Link key={item.label} to={item.href} className="text-white hover:text-brand-yellowPale transition-colors uppercase">
              {item.label}
            </Link>
          ))}
          
          <div 
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-yellowPale transition-colors uppercase text-white">
              MORE
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {isMoreOpen && (
              <div className="absolute top-full left-0 pt-4">
                <div className="bg-white text-brand-purple rounded-xl p-4 flex flex-col gap-3 min-w-[200px] shadow-lg border border-brand-purple/10">
                  {moreDropdown.map((item) => (
                    <Link key={item.label} to={item.href} className="font-bold text-[11px] hover:text-brand-purpleAccent transition-colors uppercase">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
          <Link to="/" className="font-display font-bold text-4xl tracking-tighter text-white hover:opacity-90 transition-opacity">
            Bingokids
          </Link>
        </div>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#ff9500]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-body font-normal text-[11px] text-white">4.7 by 1M families</span>
          </div>
          <div className="flex items-center border border-white/20 rounded bg-[#0a52b8] px-2 py-1 shadow-sm gap-1">
             <span className="text-[9px] font-black text-[#ffc42e] leading-none tracking-tight">kidSAFE</span>
             <span className="text-[6px] font-bold text-white leading-none tracking-widest mt-0.5">COPPA CERTIFIED</span>
          </div>
          <button className="flex items-center gap-1 font-body font-normal text-[11px] uppercase text-white hover:text-brand-yellowPale transition-colors">
            EN
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-purple border-t border-white/10 p-6 flex flex-col gap-6">
          {[...navigation, ...moreDropdown].map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="font-body font-bold text-lg hover:text-brand-yellowPale transition-colors uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
