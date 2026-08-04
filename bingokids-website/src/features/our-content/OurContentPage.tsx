import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { worldsCharacters } from '../../data/ourContent.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] pt-[130px] sm:pt-[150px] lg:pt-[170px] pb-12 sm:pb-16 flex flex-col items-center justify-center z-20 overflow-hidden" ref={revealRef}>
      {/* Blurred background effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00E676] via-[#00E5FF] to-[#0066FF]"></div>
      <div className="absolute inset-0 z-0 bg-white/10 backdrop-blur-2xl"></div>
      
      {/* Blurred Orbs for extra depth */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col items-center text-center px-6 relative z-10 mb-8 lg:mb-14 w-full">
        {/* Dark smoke effect behind image for text readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[60%] lg:h-[80%] bg-[#002B66]/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Play characters image */}
        <div className="flex items-center justify-center mt-2 w-full max-w-lg md:max-w-xl lg:max-w-4xl px-4 relative z-10">
           <img src="/play-characters.png" alt="Play Characters" className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* iPad mockup overlaps the next section with dynamic color-shifting background */}
      <div className="w-full max-w-[860px] px-6 relative z-20 mb-[-40px] lg:mb-[-60px] group">
        {/* Animated Glow Aura in Yellow, Hot Pink, Sea Green */}
        <div className="absolute inset-2 bg-gradient-to-r from-[#FFD600] via-[#FF1493] to-[#00E676] rounded-[36px] lg:rounded-[52px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>

        {/* Dynamic Color Shifting iPad Outer Border */}
        <div className="relative w-full bg-gradient-to-r from-[#FFD600] via-[#FF1493] to-[#00E676] animate-gradient-shift rounded-[28px] lg:rounded-[44px] p-2.5 lg:p-4 shadow-[0_25px_60px_rgba(0,43,102,0.4)] flex items-center justify-center">
           {/* Inner Device Frame */}
           <div className="w-full bg-[#002B66] rounded-[20px] lg:rounded-[36px] p-2 lg:p-3 border-2 border-white/40 relative">
             {/* Camera Dot (left side) */}
             <div className="hidden lg:block absolute left-[12px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0a0a0a] shadow-inner border border-white/20"></div>
             
             {/* Inner bezel */}
             <div className="w-full bg-black rounded-[14px] lg:rounded-[28px] overflow-hidden relative shadow-inner">
                <img src="/app-ui-bingo.jpg" alt="BingoKids App UI Mockup" className="w-full h-auto block transform group-hover:scale-[1.01] transition-transform duration-700" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#FF1493] via-[#FF7043] to-[#0066FF] w-full pt-[80px] lg:pt-[120px] pb-16" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="font-superkindly text-5xl sm:text-7xl lg:text-[88px] text-white mb-6 tracking-wide text-3d-cartoon leading-tight">
          Content kids <span className="text-[#FFD600]">go crazy for</span>
        </h2>
        <p className="font-superkindly text-2xl sm:text-3xl lg:text-[38px] text-white leading-tight tracking-wide text-3d-cartoon max-w-4xl">
          Interactive games, songs and<br className="hidden lg:block"/> shows to <span className="text-[#00E5FF]">play on repeat.</span>
        </p>
      </div>
    </section>
  );
};

const ContentCard = ({
  title,
  description,
  cardBg,
  waveColor,
  decorations,
  leftContent,
  imageSrc,
  floatDelay = '0s',
  titleClassName = '',
  descriptionClassName = ''
}: any) => {
  const revealRef = useScrollReveal();
  return (
    <div className="w-full flex flex-col items-center mb-16 sm:mb-28 lg:mb-36 relative px-4" ref={revealRef}>
      {/* Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ animation: `floating 6s ease-in-out infinite ${floatDelay}` }}>
         {decorations}
      </div>
      
      {/* The Card */}
      <div className={`w-full max-w-[950px] min-h-[240px] sm:min-h-[340px] md:min-h-0 md:aspect-[16/9] lg:aspect-[2.2/1] ${cardBg} rounded-[32px] sm:rounded-[48px] shadow-[0_16px_0_rgba(0,43,102,0.15)] sm:shadow-[0_24px_0_rgba(0,43,102,0.2)] relative overflow-hidden flex transform hover:-translate-y-2 transition-transform duration-300`}>
        {/* Bubbly Wavy background */}
        <svg className="absolute left-0 top-0 bottom-0 h-full w-[70%] z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
           <path d="M0,0 L65,0 C95,20 50,45 75,70 C90,85 65,95 70,100 L0,100 Z" fill={waveColor} />
        </svg>

        {/* Left Side Content */}
        <div className="w-[50%] h-full relative z-10 flex items-center justify-center p-2 sm:p-4 lg:p-8">
           <div className="transform hover:scale-110 transition-transform duration-300 cursor-default">
             {leftContent}
           </div>
        </div>
        
        {/* Right Side Content */}
        <div className="w-[50%] h-full relative z-10 flex items-center justify-center p-2 sm:p-4 lg:p-10">
           {/* Device Frame / Jar Mockup */}
           <div className="w-full h-[90%] bg-white rounded-[20px] sm:rounded-[32px] border-[4px] sm:border-[8px] border-white/60 shadow-[0_16px_32px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative transform hover:scale-105 hover:rotate-3 transition-transform duration-500 group">
             {/* Glossy top bar */}
             <div className="h-5 sm:h-6 lg:h-8 bg-gradient-to-b from-white/90 to-white/40 w-full flex-shrink-0 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 border-b border-white/20">
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF1493]"></div>
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFD600]"></div>
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0066FF]"></div>
             </div>
             <div className="w-full h-full overflow-hidden relative bg-black/5">
                <img src={imageSrc} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
             </div>
           </div>
        </div>
      </div>

      {/* Text Content Below */}
      <div className="mt-8 sm:mt-12 text-center px-4 relative z-10">
        <h3 className={`font-superkindly text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-2 sm:mb-3 drop-shadow-sm ${titleClassName || 'text-[#002B66]'}`}>{title}</h3>
        {description && (
           <p className={`font-superkindly text-xl sm:text-2xl lg:text-3xl max-w-xl mx-auto leading-tight tracking-wide ${descriptionClassName || 'text-[#002B66]/85'}`}>{description}</p>
        )}
      </div>
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

const FeaturesList = () => {
  return (
    <section className="bg-gradient-to-b from-[#0066FF] via-[#F4F9FF] to-[#F4F9FF] w-full py-16 overflow-hidden">
      
      <ContentCard
        title="Game on"
        description="Ridiculously fun adventures to play again and again."
        titleClassName="text-[#FFD600] text-3d-cartoon"
        descriptionClassName="text-[#FFD600] text-3d-cartoon"
        cardBg="bg-[#0066FF]" // Poppy Electric Ocean Blue
        waveColor="#00E5FF" // Poppy Electric Cyan
        imageSrc="/content-game.jpg"
        floatDelay="0s"
        decorations={
           <div className="absolute -top-10 right-[15%] text-[#FF1493] text-5xl sm:text-7xl rotate-12 drop-shadow-md">💕</div>
        }
        leftContent={
           <div className="flex flex-col items-center">
             <div className="font-display font-black text-3xl sm:text-[55px] lg:text-[85px] text-[#0066FF] tracking-tighter flex gap-0.5 -rotate-[8deg] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
               <span className="translate-y-3 inline-block transform hover:-translate-y-2 transition-transform">P</span>
               <span className="-translate-y-2 inline-block transform hover:-translate-y-6 transition-transform">L</span>
               <span className="-translate-y-5 inline-block transform hover:-translate-y-9 transition-transform">A</span>
               <span className="-translate-y-2 inline-block transform hover:-translate-y-6 transition-transform">A</span>
               <span className="translate-y-2 inline-block transform hover:-translate-y-2 transition-transform">A</span>
               <span className="translate-y-6 inline-block transform hover:translate-y-2 transition-transform">Y</span>
             </div>
           </div>
        }
      />

      <ContentCard
        title="Tune in"
        description="Cartoons and original shows they'll obsess over."
        cardBg="bg-[#FF1493]" // Poppy Hot Pink
        waveColor="#FFD600" // Poppy Sunshine Yellow
        imageSrc="/content-theater.jpg"
        floatDelay="1s"
        decorations={
           <div className="absolute -top-16 left-[12%] text-[#0066FF] text-6xl sm:text-[100px] -rotate-12 drop-shadow-md">✺</div>
        }
        leftContent={
           <div className="flex flex-col items-center">
             <div className="font-display font-black text-3xl sm:text-5xl lg:text-[70px] text-[#FF1493] tracking-tighter flex flex-wrap justify-center max-w-[140px] sm:max-w-[220px] rotate-[8deg] leading-[0.9] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
               <span className="-rotate-12 transform hover:rotate-0 transition-transform">T</span>
               <span className="translate-y-3 rotate-6 transform hover:rotate-12 transition-transform">H</span>
               <span className="-translate-y-2 -rotate-6 transform hover:rotate-0 transition-transform">E</span>
               <span className="-rotate-12 translate-y-4 transform hover:-rotate-24 transition-transform">A</span>
               <span className="rotate-12 transform hover:rotate-24 transition-transform">T</span>
               <span className="-translate-y-3 -rotate-12 transform hover:-rotate-24 transition-transform">E</span>
               <span className="translate-y-3 rotate-12 transform hover:rotate-24 transition-transform">R</span>
             </div>
           </div>
        }
      />

      <ContentCard
        title="Double the fun"
        description="Multiplayer games for big family moments."
        cardBg="bg-[#FFD600]" // Poppy Sunshine Yellow
        waveColor="#FFFDF0" // Light Warm Yellow
        imageSrc="/content-together.jpg"
        floatDelay="2s"
        decorations={
           <div className="absolute -top-8 left-[15%] text-[#FF1493] text-5xl sm:text-[90px] rotate-12 drop-shadow-md">✨</div>
        }
        leftContent={
           <div className="flex flex-col items-center text-center">
             <div className="font-display font-black text-2xl sm:text-4xl lg:text-[60px] text-[#FFD600] tracking-tight leading-[0.9] -rotate-[6deg] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
               <div className="transform hover:scale-110 transition-transform">PLAY</div>
               <div className="transform hover:scale-110 transition-transform">TOGETHER</div>
             </div>
           </div>
        }
      />

      <ContentCard
        title="Level up"
        description="Learn, read, and grow every single day."
        cardBg="bg-[#00E676]" // Poppy Electric Sea Green
        waveColor="#FF1493" // Poppy Hot Pink
        imageSrc="/content-lessons.jpg"
        floatDelay="3s"
        decorations={
           <div className="absolute -top-4 right-[12%] text-[#FFD600] text-5xl sm:text-[90px] drop-shadow-md">✺</div>
        }
        leftContent={
           <div className="flex flex-col items-center text-center">
             <div className="font-display font-black text-3xl sm:text-[50px] lg:text-[75px] text-[#00E676] tracking-tighter flex flex-wrap justify-center max-w-[140px] sm:max-w-[240px] -rotate-[12deg] leading-[0.9] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
               <span className="translate-y-5 inline-block transform hover:-translate-y-0 transition-transform">L</span>
               <span className="-rotate-12 inline-block transform hover:rotate-0 transition-transform">E</span>
               <span className="-translate-y-3 rotate-12 inline-block transform hover:rotate-0 transition-transform">S</span>
               <span className="translate-y-3 inline-block transform hover:-translate-y-2 transition-transform">S</span>
               <span className="-translate-y-5 -rotate-12 inline-block transform hover:rotate-0 transition-transform">O</span>
               <span className="-rotate-6 translate-y-3 inline-block transform hover:rotate-0 transition-transform">N</span>
               <span className="translate-y-8 rotate-12 inline-block transform hover:translate-y-4 transition-transform">S</span>
             </div>
           </div>
        }
      />
    </section>
  );
};

const WorldsSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#002B66] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-12 lg:gap-16">
        <div className="text-center flex flex-col items-center">
           <h2 className="font-superkindly text-4xl sm:text-6xl lg:text-[80px] text-white tracking-wide mb-3 lg:mb-5 leading-tight">
             Worlds to <span className="text-[#FFD600]">explore</span>
           </h2>
           <p className="font-superkindly text-xl sm:text-2xl lg:text-[32px] text-white/95 tracking-wide">
             All the characters they love, all in one place.
           </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-20 max-w-[900px] w-full mt-4 lg:mt-8 pb-10">
          {worldsCharacters.map((char, i) => (
             <div key={i} className={`flex flex-col items-center group cursor-pointer relative transition-transform duration-500 ease-bounce ${i % 2 === 1 ? 'lg:translate-y-16' : ''}`}>
                <div className={`w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] rounded-full overflow-hidden shadow-2xl border-[4px] border-white/30 group-hover:border-[#FF1493] transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10`}>
                   <img src={char.image} alt={char.name} className="w-full h-full object-cover bg-white" />
                </div>
                <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 w-[160%] text-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 z-20 flex flex-col items-center">
                   <span className="bg-[#0066FF] text-[#FFD600] px-3 py-1 rounded-full font-body text-[8px] lg:text-[10px] font-bold tracking-widest uppercase mb-1 shadow-md border border-[#FFD600]/40">Bingokids</span>
                   <p className="font-display font-black text-white text-2xl lg:text-4xl leading-none" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.3)', textShadow: '0 6px 12px rgba(0,0,0,0.8)' }}>{char.name}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurContentPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturesList />
      <WorldsSection />
      <Footer showQrCard={false} footerBgColorClass="bg-[#00E676]" footerTextColorClass="text-[#002B66]" footerHeadingColorClass="bg-[#002B66] text-[#00E676] px-3 py-1.5 rounded-full w-fit" />
    </div>
  );
};

export default OurContentPage;
