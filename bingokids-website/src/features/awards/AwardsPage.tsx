
import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { biggestWins, bestOfTheRest } from '../../data/awards.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#ff6eb8] w-full pt-16 sm:pt-24 lg:pt-32 pb-12 flex flex-col items-center justify-center relative overflow-hidden" ref={revealRef}>
      <h1 className="sr-only">Awards</h1>
      <img 
        src="/awards-hero-new.png" 
        alt="BingoKids Awards - 3D Characters Celebrating"
        className="w-full max-w-[1400px] h-auto object-contain px-4 md:px-8 relative z-10"
      />
                                       </section>
  );
};

const BiggestWinsSection = () => {
  const revealRef = useScrollReveal();
  
  // Split into rows for the deliberate 3-2 grid layout
  const topRow = biggestWins.slice(0, 3);
  const bottomRow = biggestWins.slice(3, 5);

  // Kinder Kind award styles
  const awardStyles = [
    { bg: 'bg-gradient-to-br from-[#fbd15f] to-[#ff8a00]', text: 'text-[#162a45]', icon: '🏆', accent: 'border-[#162a45]' },
    { bg: 'bg-gradient-to-br from-[#e0bdff] to-[#ff6eb8]', text: 'text-white', icon: '✨', accent: 'border-white' },
    { bg: 'bg-gradient-to-br from-[#a3edf8] to-[#0284c7]', text: 'text-white', icon: '🌟', accent: 'border-white' },
    { bg: 'bg-gradient-to-br from-[#bde22a] to-[#0284c7]', text: 'text-[#162a45]', icon: '⭐', accent: 'border-[#162a45]' },
    { bg: 'bg-gradient-to-br from-[#ff6eb8] to-[#fbd15f]', text: 'text-white', icon: '⚡', accent: 'border-white' },
  ];

  const renderCard = (award: any, globalIndex: number) => {
    const style = awardStyles[globalIndex];
    return (
      <div 
        key={globalIndex} 
        className={`group relative rounded-[2.5rem] p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-[320px] aspect-square ${style.bg} border-[4px] sm:border-[5px] ${style.accent} shadow-[8px_8px_0_0_#0f172a] sm:shadow-[12px_12px_0_0_#0f172a] hover:shadow-[0px_0px_0_0_#0f172a] transition-all duration-300 hover:translate-x-[8px] sm:hover:translate-x-[12px] hover:translate-y-[8px] sm:hover:translate-y-[12px] cursor-pointer overflow-hidden`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out skew-x-12 z-0"></div>
        
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 border border-white/30">
          <span className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">{style.icon}</span>
        </div>
        
        <h3 className={`font-display font-black text-xl sm:text-2xl lg:text-3xl text-center leading-tight ${style.text} z-10 drop-shadow-sm`}>
          {award.name}
        </h3>
        
        {/* Small badge */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/30 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm border border-white/40">
          Winner
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#162a45] w-full py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Background doodles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
         <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-white border-dashed animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-8 border-white border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16 relative z-10">
        <div className="text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white inline-flex items-center gap-4">
            Our biggest wins
          </h2>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/80 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Setting the standard for world-class entertainment and educational play.
          </p>
        </div>
        
        <div className="w-full flex flex-col gap-8 lg:gap-12 mt-4">
          {/* Top row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1100px] mx-auto justify-items-center">
            {topRow.map((award, i) => renderCard(award, i))}
          </div>
          
          {/* Bottom row: 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[720px] mx-auto justify-items-center">
            {bottomRow.map((award, i) => renderCard(award, i + 3))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BestOfRestSection = () => {
  const revealRef = useScrollReveal();
  // Vibrant brand colors for the icons
  const colors = ['bg-[#ff8a00]', 'bg-[#ff6eb8]', 'bg-[#bde22a]', 'bg-[#0284c7]'];
  const textColors = ['text-[#ff8a00]', 'text-[#ff6eb8]', 'text-[#bde22a]', 'text-[#0284c7]'];

  return (
    <section className="bg-[#f0f9ff] w-full py-16 sm:py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#162a45" strokeWidth="4">
          <circle cx="50" cy="50" r="40" strokeDasharray="10 10" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#162a45" strokeWidth="4">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16 relative z-10">
        <div className="text-center relative">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-[#162a45] inline-flex items-center gap-4">
            <span className="text-[#ff8a00] animate-bounce" style={{ animationDuration: '2s' }}>★</span> 
            Best of the rest 
            <span className="text-[#ff6eb8] animate-bounce" style={{ animationDuration: '2.5s' }}>★</span>
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bestOfTheRest.map((award, i) => {
            const colorClass = colors[i % colors.length];
            const textColorClass = textColors[i % textColors.length];
            return (
              <div 
                key={i} 
                className="group relative bg-white rounded-3xl p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 border-[3px] border-transparent hover:border-[#2E1A47] shadow-[0_10px_30px_rgba(46,26,71,0.05)] hover:shadow-[8px_8px_0_0_#2E1A47] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Colorful Star Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${colorClass} flex items-center justify-center text-white flex-shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-[15deg] group-hover:rounded-full transition-all duration-500`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                
                {/* Award Name */}
                <span className="font-body font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-[#2E1A47] pr-4 sm:pr-8">
                  {award}
                </span>
                
                {/* Hover decorative spark */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-90">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={textColorClass} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                   </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AwardsPage = () => {
  return (
    <>
      <HeroSection />
      <BiggestWinsSection />
      <BestOfRestSection />
      <Footer qrBgColorClass="bg-brand-cream" />
    </>
  );
};

export default AwardsPage;
