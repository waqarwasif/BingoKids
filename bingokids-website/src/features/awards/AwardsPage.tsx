import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { biggestWins, bestOfTheRest } from '../../data/awards.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#101F3B] via-[#1E3A68] to-[#0D1829] w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh] pt-[115px] sm:pt-[135px] lg:pt-[155px] pb-8 sm:pb-12 flex flex-col items-center justify-center relative overflow-hidden" ref={revealRef}>
      <h1 className="sr-only">BingoKids Awards</h1>
      
      {/* Floating stars & orange/green ambient glows */}
      <div className="absolute top-20 left-[10%] text-[#FF7043] opacity-80 text-3xl sm:text-4xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
      <div className="absolute bottom-8 right-[12%] text-[#00E676] opacity-90 text-4xl sm:text-5xl animate-pulse">✨</div>
      <div className="absolute top-1/3 right-[8%] w-24 h-24 sm:w-32 sm:h-32 bg-[#FF7043]/20 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-[8%] w-28 h-28 sm:w-40 sm:h-40 bg-[#00E676]/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="w-full max-w-[1300px] flex flex-col items-center relative z-10 px-4 my-auto">
        <img 
          src="/awards-hero-new.png" 
          alt="BingoKids Awards - 3D Characters Celebrating"
          className="w-[94%] sm:w-[85%] md:w-full h-auto max-h-[55vh] lg:max-h-[700px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </section>
  );
};

const BiggestWinsSection = () => {
  const revealRef = useScrollReveal();
  
  // Split into rows for the deliberate 3-2 grid layout
  const topRow = biggestWins.slice(0, 3);
  const bottomRow = biggestWins.slice(3, 5);

  // Kinder Kind award styles paired with Orange, Green, Pink, Cyan, Yellow
  const awardStyles = [
    { bg: 'bg-gradient-to-br from-[#FF9800] to-[#FF7043]', text: 'text-white', icon: '🏆', accent: 'border-white' },
    { bg: 'bg-gradient-to-br from-[#FF1493] to-[#FF4081]', text: 'text-white', icon: '✨', accent: 'border-white' },
    { bg: 'bg-gradient-to-br from-[#00E5FF] to-[#0066FF]', text: 'text-white', icon: '🌟', accent: 'border-white' },
    { bg: 'bg-gradient-to-br from-[#00E676] to-[#00B0FF]', text: 'text-[#002B66]', icon: '⭐', accent: 'border-[#002B66]' },
    { bg: 'bg-gradient-to-br from-[#FFD600] to-[#FF9800]', text: 'text-[#002B66]', icon: '⚡', accent: 'border-[#002B66]' },
  ];

  const renderCard = (award: any, globalIndex: number) => {
    const style = awardStyles[globalIndex];
    return (
      <div 
        key={globalIndex} 
        className={`group relative rounded-[2.5rem] p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-[320px] aspect-square ${style.bg} border-[4px] sm:border-[5px] ${style.accent} shadow-[8px_8px_0_0_#0a1120] sm:shadow-[12px_12px_0_0_#0a1120] hover:shadow-[0px_0px_0_0_#0a1120] transition-all duration-300 hover:translate-x-[8px] sm:hover:translate-x-[12px] hover:translate-y-[8px] sm:hover:translate-y-[12px] cursor-pointer overflow-hidden`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out skew-x-12 z-0"></div>
        
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 border border-white/30">
          <span className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">{style.icon}</span>
        </div>
        
        <h3 className={`font-display font-black text-xl sm:text-2xl lg:text-3xl text-center leading-tight ${style.text} z-10 drop-shadow-sm`}>
          {award.name}
        </h3>
        
        {/* Winner badge */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/30 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm border border-white/40">
          Winner
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-[#0055FF] via-[#003B99] to-[#002666] w-full py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Background doodles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
         <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-[#00E676] border-dashed animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-8 border-[#FF7043] border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16 relative z-10">
        <div className="text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white inline-flex items-center gap-3">
            Our biggest <span className="text-[#FFD600]">wins</span> <span className="text-[#00E676]">★</span>
          </h2>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/90 font-bold mt-4 sm:mt-6 max-w-2xl mx-auto">
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
  // Paired Green & Orange theme palette
  const colors = ['bg-[#FF7043]', 'bg-[#00E676]', 'bg-[#FFD600]', 'bg-[#0066FF]'];
  const textColors = ['text-[#FF7043]', 'text-[#00E676]', 'text-[#FFD600]', 'text-[#0066FF]'];

  return (
    <section className="bg-gradient-to-b from-[#FF7043] via-[#00E676] to-[#002B66] w-full py-16 sm:py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16 relative z-10">
        <div className="text-center relative">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white inline-flex items-center gap-4 drop-shadow-md">
            <span className="text-[#FFD600] animate-bounce" style={{ animationDuration: '2s' }}>★</span> 
            Best of the rest 
            <span className="text-[#FFD600] animate-bounce" style={{ animationDuration: '2.5s' }}>★</span>
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bestOfTheRest.map((award, i) => {
            const colorClass = colors[i % colors.length];
            const textColorClass = textColors[i % textColors.length];
            return (
              <div 
                key={i} 
                className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 border-[4px] border-white shadow-[0_15px_30px_rgba(0,43,102,0.2)] hover:shadow-[8px_8px_0_0_#002B66] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Colorful Star Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${colorClass} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-[15deg] group-hover:rounded-full transition-all duration-500`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                
                {/* Award Name */}
                <span className="font-body font-black text-lg sm:text-xl lg:text-2xl leading-tight text-[#002B66] pr-4 sm:pr-8">
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

export const AwardsPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <BiggestWinsSection />
      <BestOfRestSection />
      <Footer showQrCard={false} footerBgColorClass="bg-[#FF7043]" />
    </div>
  );
};

export default AwardsPage;
