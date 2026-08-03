import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { worldsCharacters } from '../../data/ourContent.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#0055cc] via-[#0077ff] to-[#0099ff] w-full pt-[120px] lg:pt-[140px] flex flex-col items-center relative z-20" ref={revealRef}>
      <div className="flex flex-col items-center text-center px-6 relative z-10 mb-6 lg:mb-10">
        <h2 className="text-white font-display font-black text-xl lg:text-2xl mb-1 opacity-90 tracking-wide">So many ways to</h2>
        
        {/* Play characters image */}
        <div className="flex items-center justify-center mt-2 w-full max-w-sm md:max-w-md lg:max-w-2xl px-4">
           <img src="/play-characters.png" alt="Play Characters" className="w-full h-auto drop-shadow-lg" />
        </div>
      </div>

      {/* iPad mockup overlaps the next section with dynamic color-shifting background */}
      <div className="w-full max-w-[860px] px-6 relative z-20 mb-[-40px] lg:mb-[-60px] group">
        {/* Animated Glow Aura in Yellow, Pink, Green */}
        <div className="absolute inset-2 bg-gradient-to-r from-[#fbd15f] via-[#ff2a85] to-[#32e37b] rounded-[36px] lg:rounded-[52px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>

        {/* Dynamic Color Shifting iPad Outer Border */}
        <div className="relative w-full bg-gradient-to-r from-[#fbd15f] via-[#ff2a85] to-[#32e37b] animate-gradient-shift rounded-[28px] lg:rounded-[44px] p-2.5 lg:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex items-center justify-center">
           {/* Inner Device Frame */}
           <div className="w-full bg-[#002b66] rounded-[20px] lg:rounded-[36px] p-2 lg:p-3 border-2 border-white/40 relative">
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
    <section className="bg-gradient-to-b from-[#ff2a85] via-[#ff3b94] to-[#ff1493] w-full pt-[80px] lg:pt-[120px] pb-16" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="font-display font-black text-[36px] lg:text-[52px] text-white mb-3 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
          Content kids go crazy for
        </h2>
        <p className="font-body font-bold text-xl lg:text-2xl text-white/95 leading-snug drop-shadow-sm">
          Interactive games, songs and<br className="hidden lg:block"/> shows to play on repeat.
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
  floatDelay = '0s'
}: any) => {
  const revealRef = useScrollReveal();
  return (
    <div className="w-full flex flex-col items-center mb-16 sm:mb-28 lg:mb-36 relative px-4" ref={revealRef}>
      {/* Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ animation: `floating 6s ease-in-out infinite ${floatDelay}` }}>
         {decorations}
      </div>
      
      {/* The Card */}
      <div className={`w-full max-w-[950px] min-h-[240px] sm:min-h-[340px] md:min-h-0 md:aspect-[16/9] lg:aspect-[2.2/1] ${cardBg} rounded-[32px] sm:rounded-[48px] shadow-[0_16px_0_rgba(0,0,0,0.08)] sm:shadow-[0_24px_0_rgba(0,0,0,0.08)] relative overflow-hidden flex transform hover:-translate-y-2 transition-transform duration-300`}>
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
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff2a85]"></div>
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#fbd15f]"></div>
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0077ff]"></div>
             </div>
             <div className="w-full h-full overflow-hidden relative bg-black/5">
                <img src={imageSrc} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
             </div>
           </div>
        </div>
      </div>

      {/* Text Content Below */}
      <div className="mt-8 sm:mt-12 text-center px-4 relative z-10">
        <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0055cc] tracking-tight mb-2 sm:mb-3 drop-shadow-sm">{title}</h3>
        {description && (
           <p className="font-body font-bold text-[#0055cc]/80 text-base sm:text-xl lg:text-2xl max-w-md mx-auto leading-tight">{description}</p>
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
    <section className="bg-gradient-to-b from-[#ff1493] via-[#fff0f6] to-[#f0f9ff] w-full py-12 overflow-hidden">
      
      <ContentCard
        title="Game on"
        description="Ridiculously fun adventures to play again and again."
        cardBg="bg-[#0077ff]" // Vibrant Kid Royal Blue
        waveColor="#a3edf8" // Sky Blue
        imageSrc="/content-game.jpg"
        floatDelay="0s"
        decorations={
           <div className="absolute -top-10 right-[15%] text-[#ff2a85] text-5xl sm:text-7xl rotate-12 drop-shadow-md">💕</div>
        }
        leftContent={
           <div className="flex flex-col items-center">
             <div className="font-display font-black text-3xl sm:text-[55px] lg:text-[85px] text-[#0077ff] tracking-tighter flex gap-0.5 -rotate-[8deg] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
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
        cardBg="bg-[#ff2a85]" // Vibrant Hot Pink
        waveColor="#fbd15f" // Sunshine Yellow
        imageSrc="/content-theater.jpg"
        floatDelay="1s"
        decorations={
           <div className="absolute -top-16 left-[12%] text-[#0077ff] text-6xl sm:text-[100px] -rotate-12 drop-shadow-md">✺</div>
        }
        leftContent={
           <div className="flex flex-col items-center">
             <div className="font-display font-black text-3xl sm:text-5xl lg:text-[70px] text-[#ff2a85] tracking-tighter flex flex-wrap justify-center max-w-[140px] sm:max-w-[220px] rotate-[8deg] leading-[0.9] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
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
        cardBg="bg-[#fbd15f]" // Sunshine Yellow
        waveColor="#fffbeb" // Light Yellow
        imageSrc="/content-together.jpg"
        floatDelay="2s"
        decorations={
           <div className="absolute -top-8 left-[15%] text-[#ff2a85] text-5xl sm:text-[90px] rotate-12 drop-shadow-md">✨</div>
        }
        leftContent={
           <div className="flex flex-col items-center text-center">
             <div className="font-display font-black text-2xl sm:text-4xl lg:text-[60px] text-[#fbd15f] tracking-tight leading-[0.9] -rotate-[6deg] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
               <div className="transform hover:scale-110 transition-transform">PLAY</div>
               <div className="transform hover:scale-110 transition-transform">TOGETHER</div>
             </div>
           </div>
        }
      />

      <ContentCard
        title="Level up"
        description="Learn, read, and grow every single day."
        cardBg="bg-[#00b4d8]" // Ocean Blue / Cyan
        waveColor="#ff2a85" // Vibrant Pink
        imageSrc="/content-lessons.jpg"
        floatDelay="3s"
        decorations={
           <div className="absolute -top-4 right-[12%] text-[#fbd15f] text-5xl sm:text-[90px] drop-shadow-md">✺</div>
        }
        leftContent={
           <div className="flex flex-col items-center text-center">
             <div className="font-display font-black text-3xl sm:text-[50px] lg:text-[75px] text-[#00b4d8] tracking-tighter flex flex-wrap justify-center max-w-[140px] sm:max-w-[240px] -rotate-[12deg] leading-[0.9] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">
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
    <section className="bg-[#0055cc] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-12 lg:gap-16">
        <div className="text-center flex flex-col items-center">
           <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white tracking-tight mb-2 lg:mb-4">
             Worlds to explore
           </h2>
           <p className="font-body text-white/90 text-lg sm:text-xl lg:text-2xl font-bold">
             All the characters they love, all in one place.
           </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-20 max-w-[900px] w-full mt-4 lg:mt-8 pb-10">
          {worldsCharacters.map((char, i) => (
             <div key={i} className={`flex flex-col items-center group cursor-pointer relative transition-transform duration-500 ease-bounce ${i % 2 === 1 ? 'lg:translate-y-16' : ''}`}>
                <div className={`w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] rounded-full overflow-hidden shadow-2xl border-[4px] border-white/30 group-hover:border-[#ff2a85] transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10`}>
                   <img src={char.image} alt={char.name} className="w-full h-full object-cover bg-white" />
                </div>
                <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 w-[160%] text-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 z-20 flex flex-col items-center">
                   <span className="bg-[#0077ff] text-[#fbd15f] px-3 py-1 rounded-full font-body text-[8px] lg:text-[10px] font-bold tracking-widest uppercase mb-1 shadow-md border border-[#fbd15f]/30">Bingokids</span>
                   <p className="font-display font-black text-white text-2xl lg:text-4xl leading-none" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.3)', textShadow: '0 6px 12px rgba(0,0,0,0.8)' }}>{char.name}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurContentPage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturesList />
      <WorldsSection />
      <Footer qrBgColorClass="bg-brand-cream" />
    </>
  );
};

export default OurContentPage;
