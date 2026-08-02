
import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { biggestWins, bestOfTheRest } from '../../data/awards.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full relative overflow-hidden bg-[#ffb3c6] flex justify-center items-center py-12 md:py-20 lg:py-24" ref={revealRef}>
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

  // Custom styling for each major award to replace the ugly placeholder images
  const awardStyles = [
    { bg: 'bg-gradient-to-br from-[#ffb347] to-[#ffcc33]', text: 'text-[#8b4513]', icon: '🏆', accent: 'border-[#e68a00]' },
    { bg: 'bg-gradient-to-br from-[#d08cff] to-[#9b4dff]', text: 'text-white', icon: '✨', accent: 'border-[#7a2be2]' },
    { bg: 'bg-gradient-to-br from-[#33ccff] to-[#0099ff]', text: 'text-white', icon: '🌟', accent: 'border-[#0077cc]' },
    { bg: 'bg-gradient-to-br from-[#ff4d4d] to-[#cc0000]', text: 'text-white', icon: '⭐', accent: 'border-[#990000]' },
    { bg: 'bg-gradient-to-br from-[#ff6699] to-[#ff3366]', text: 'text-white', icon: '⚡', accent: 'border-[#cc0044]' },
  ];

  const renderCard = (award: any, globalIndex: number) => {
    const style = awardStyles[globalIndex];
    return (
      <div 
        key={globalIndex} 
        className={`group relative rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-6 w-full max-w-[320px] aspect-square ${style.bg} border-[5px] ${style.accent} shadow-[12px_12px_0_0_#1f0d40] hover:shadow-[0px_0px_0_0_#1f0d40] transition-all duration-300 hover:translate-x-[12px] hover:translate-y-[12px] cursor-pointer overflow-hidden`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out skew-x-12 z-0"></div>
        
        <div className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 border border-white/30">
          <span className="text-5xl drop-shadow-md">{style.icon}</span>
        </div>
        
        <h3 className={`font-display font-black text-3xl text-center leading-tight ${style.text} z-10 drop-shadow-sm`}>
          {award.name}
        </h3>
        
        {/* Small badge */}
        <div className="absolute top-5 right-5 bg-white/30 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-bold text-white shadow-sm border border-white/40">
          Winner
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#2E1A47] w-full py-24 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Background doodles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
         <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-white border-dashed animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-8 border-white border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16 relative z-10">
        <div className="text-center">
          <h2 className="font-display font-bold text-5xl lg:text-7xl text-white inline-flex items-center gap-4">
            Our biggest wins
          </h2>
          <p className="font-body text-xl lg:text-2xl text-white/80 mt-6 max-w-2xl mx-auto">
            Setting the standard for world-class entertainment and educational play.
          </p>
        </div>
        
        <div className="w-full flex flex-col gap-10 lg:gap-12 mt-4">
          {/* Top row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px] mx-auto justify-items-center">
            {topRow.map((award, i) => renderCard(award, i))}
          </div>
          
          {/* Bottom row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[720px] mx-auto justify-items-center">
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
  const colors = ['bg-[#ff8c00]', 'bg-[#ff6699]', 'bg-[#00c896]', 'bg-[#8b5cf6]'];
  const textColors = ['text-[#ff8c00]', 'text-[#ff6699]', 'text-[#00c896]', 'text-[#8b5cf6]'];

  return (
    <section className="bg-[#fff9f0] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2E1A47" strokeWidth="4">
          <circle cx="50" cy="50" r="40" strokeDasharray="10 10" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2E1A47" strokeWidth="4">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16 relative z-10">
        <div className="text-center relative">
          <h2 className="font-display font-bold text-5xl lg:text-7xl text-[#2E1A47] inline-flex items-center gap-4">
            <span className="text-[#ff8c00] animate-bounce" style={{ animationDuration: '2s' }}>★</span> 
            Best of the rest 
            <span className="text-[#ff6699] animate-bounce" style={{ animationDuration: '2.5s' }}>★</span>
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bestOfTheRest.map((award, i) => {
            const colorClass = colors[i % colors.length];
            const textColorClass = textColors[i % textColors.length];
            return (
              <div 
                key={i} 
                className="group relative bg-white rounded-3xl p-6 lg:p-8 flex items-center gap-6 border-[3px] border-transparent hover:border-[#2E1A47] shadow-[0_10px_30px_rgba(46,26,71,0.05)] hover:shadow-[8px_8px_0_0_#2E1A47] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Colorful Star Icon */}
                <div className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center text-white flex-shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-[15deg] group-hover:rounded-full transition-all duration-500`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                
                {/* Award Name */}
                <span className="font-body font-bold text-xl lg:text-2xl leading-tight text-[#2E1A47] pr-8">
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
