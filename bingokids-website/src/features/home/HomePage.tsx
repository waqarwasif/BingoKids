import { homeHero, homeFeatures, homeTestimonials } from '../../data/home.data';
import { Button } from '../../components/common/Button';
import { Carousel } from '../../components/common/Carousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Footer } from '../../components/layout/Footer';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-br from-[#FF1493] via-[#FF2A75] to-[#00E5FF] w-full min-h-[85vh] sm:min-h-[90vh] relative overflow-hidden flex flex-col justify-center" ref={revealRef}>
      
      {/* Animated Floating Background Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#FFD600]/25 rounded-full blur-[80px] animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-40 left-[5%] w-72 h-72 bg-[#00E5FF]/25 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 left-[20%] text-[#FFD600] animate-[spin_10s_linear_infinite] opacity-80">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <div className="absolute bottom-60 right-[25%] text-[#00E5FF] animate-[spin_15s_linear_infinite_reverse] opacity-80">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-24 sm:pb-36 lg:pb-48 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:mt-[-50px]">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[76px] tracking-[-0.02em] leading-[1.05] max-w-[500px] drop-shadow-lg">
            <span className="text-white">Ultimate kids</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#00E5FF] to-[#00E676]">
              entertainment
            </span>
          </h1>
          <p className="font-body font-bold text-lg sm:text-xl lg:text-[24px] text-white/95 max-w-[400px] leading-[1.4] mb-2 drop-shadow-md">
            The home of outstanding content<br/>without compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            {homeHero.button && (
              <Button as="a" href={homeHero.button.href} variant="primary" className="w-full sm:w-auto px-12 py-5 text-xl font-bold shadow-[8px_8px_0_0_#002B66]">
                {homeHero.button.label}
              </Button>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative group perspective-[1000px]">
          
          {/* Animated Glow Aura in Sunshine Yellow, Hot Pink, Electric Cyan */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD600] via-[#FF1493] to-[#00E5FF] rounded-[36px] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 w-full max-w-[760px] ml-auto animate-gradient-shift"></div>

          <div className="relative w-full max-w-[760px] aspect-[16/11] bg-gradient-to-r from-[#FFD600] via-[#FF1493] to-[#00E5FF] animate-gradient-shift p-1.5 rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform rotate-2 transition-all duration-700 group-hover:-rotate-1 group-hover:scale-[1.02]">
             <div className="w-full h-full rounded-[28px] overflow-hidden border-[4px] border-white relative bg-[#F4F9FF]">
               {homeHero.video ? (
                 <video 
                   src={homeHero.video} 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="w-full h-full object-cover"
                 />
               ) : (
                 <img src="/app-ui-bingo.jpg" alt="Game Screenshot" className="w-full h-full object-cover" />
               )}
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col pointer-events-none">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 relative h-20">
          
          {/* Snail */}
          <div className="absolute bottom-0 left-[35%] w-32 h-32 hidden lg:block z-30 transition-transform duration-700 hover:scale-110 pointer-events-auto cursor-pointer">
            <svg viewBox="0 0 100 85" className="w-full h-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] overflow-visible">
              <path d="M 25 80 C 20 80, 10 70, 15 55 C 18 45, 25 45, 30 55 C 35 65, 45 70, 55 70 C 70 70, 85 75, 90 80 C 95 85, 80 85, 60 85 C 40 85, 30 80, 25 80 Z" fill="#FFD600" />
              <circle cx="55" cy="50" r="30" fill="#FF1493" />
              <circle cx="55" cy="50" r="30" fill="none" stroke="#002B66" strokeWidth="2" />
              <path d="M 55 20 C 80 20, 90 50, 75 70 C 60 85, 30 75, 35 55 C 40 35, 65 35, 70 50 C 75 60, 60 70, 55 60 C 50 55, 55 45, 60 50" fill="none" stroke="#002B66" strokeWidth="3" strokeLinecap="round" />
              <path d="M 20 50 Q 15 35, 12 25" fill="none" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
              <path d="M 26 50 Q 30 35, 35 25" fill="none" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
              <circle cx="12" cy="25" r="5" fill="#002B66" />
              <circle cx="35" cy="25" r="5" fill="#002B66" />
              <circle cx="17" cy="58" r="2.5" fill="#002B66" />
              <circle cx="26" cy="58" r="2.5" fill="#002B66" />
              <path d="M 19 63 Q 21.5 66, 24 63" fill="none" stroke="#002B66" strokeWidth="2" strokeLinecap="round" />
              <circle cx="13" cy="61" r="3" fill="#FF1493" opacity="0.8" />
              <circle cx="30" cy="61" r="3" fill="#FF1493" opacity="0.8" />
            </svg>
          </div>
          
          {/* Arrow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
             <span className="font-display font-black text-xs text-white tracking-[0.2em] uppercase drop-shadow-md">Fun this way</span>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
                <path d="M6 9l6 6 6-6"/>
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardsRow1 = [
  { bg: 'bg-[#00E5FF]', content: '🐼' },
  { bg: 'bg-[#FF1493]', content: '🦊' },
  { bg: 'bg-[#FFD600]', content: '👧🏽' },
  { bg: 'bg-[#FF7043]', content: '🐷' },
  { bg: 'bg-[#0066FF]', content: '🐼' },
  { bg: 'bg-[#00E676]', content: '❄️' },
  { bg: 'bg-[#00E5FF]', content: '🐱' },
];

const cardsRow2 = [
  { bg: 'bg-[#00E676]', content: '🐼' },
  { bg: 'bg-[#FFD600]', content: '🚗' },
  { bg: 'bg-[#0066FF]', content: '🕷️' },
  { bg: 'bg-[#FF1493]', content: '📱' },
  { bg: 'bg-[#FF7043]', content: '🎈' },
  { bg: 'bg-[#00E5FF]', content: '🚙' },
  { bg: 'bg-[#FFD600]', content: '🚗' },
];

const OnDemandSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#0066FF] w-full py-20 lg:py-32 overflow-hidden relative" ref={revealRef}>
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10 animate-[pulse_10s_linear_infinite]" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 4px, transparent 4px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-8 mb-16 relative z-10">
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[72px] text-white text-center leading-tight drop-shadow-[4px_4px_0_rgba(0,43,102,0.3)]">
          Incredible content. <br className="hidden md:block" />
          <span className="text-[#FFD600]">On demand.</span>
        </h2>
      </div>

      <div className="w-full flex flex-col gap-8 mb-20 pause-on-hover relative z-10">
        {/* Top Row (Scrolls Left) */}
        <div className="flex w-[200%] md:w-[200%] lg:w-[200%]">
          <div className="flex w-full animate-marquee">
            {[...cardsRow1, ...cardsRow1].map((card, idx) => (
              <div key={idx} className="w-[200px] md:w-[260px] lg:w-[300px] aspect-square flex-shrink-0 mx-4 bg-white p-4 pb-12 rounded-[2rem] shadow-[0_15px_30px_rgba(0,43,102,0.2)] flex flex-col items-center justify-center overflow-hidden transform hover:-translate-y-4 hover:rotate-2 hover:scale-105 transition-all duration-500 cursor-crosshair group">
                <div className={`w-full h-full rounded-[1.5rem] ${card.bg} flex items-center justify-center shadow-inner relative overflow-hidden`}>
                  {/* Inner shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-6xl md:text-[100px] relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{card.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row (Scrolls Right) */}
        <div className="flex w-[200%] md:w-[200%] lg:w-[200%]">
          <div className="flex w-full animate-marquee-reverse">
            {[...cardsRow2, ...cardsRow2].map((card, idx) => (
              <div key={idx} className="w-[200px] md:w-[260px] lg:w-[300px] aspect-square flex-shrink-0 mx-4 bg-white p-4 pb-12 rounded-[2rem] shadow-[0_15px_30px_rgba(0,43,102,0.2)] flex flex-col items-center justify-center overflow-hidden transform hover:-translate-y-4 hover:-rotate-2 hover:scale-105 transition-all duration-500 cursor-crosshair group">
                <div className={`w-full h-full rounded-[1.5rem] ${card.bg} flex items-center justify-center shadow-inner relative overflow-hidden`}>
                  {/* Inner shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-6xl md:text-[100px] relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{card.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center relative z-10">
        <Button as="a" href="#" variant="purple" className="px-12 py-5 text-2xl shadow-2xl">
          Start exploring
        </Button>
      </div>
    </section>
  );
};

const FiveMoreMinutesSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#F4F9FF] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF1493]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left: Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start group">
          <div className="relative w-full max-w-[500px] aspect-square transition-transform duration-700 group-hover:scale-[1.02]">
            {/* Shadow backdrop */}
            <div className="absolute inset-0 bg-[#002B66] rounded-[40px] translate-x-6 translate-y-6 opacity-20 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
            
            <img src="/playing-kids.jpg" alt="Child having fun" className="relative w-full h-full object-cover rounded-[40px] border-8 border-white shadow-2xl transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 z-10" />
            
            {/* Floating Sparkle Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFD600] rounded-full p-6 shadow-[4px_4px_0_0_#002B66] border-4 border-[#002B66] animate-[bounce_4s_infinite] z-20 hover:scale-110 transition-transform cursor-pointer">
              <span className="text-5xl">✨</span>
            </div>
            
            {/* Secondary Floating Element */}
            <div className="absolute -top-6 -left-6 bg-[#00E676] text-[#002B66] font-display font-black text-xl py-3 px-6 rounded-[20px] shadow-[4px_4px_0_0_#002B66] border-4 border-[#002B66] rotate-[15deg] z-20 hover:-rotate-[5deg] transition-transform duration-500">
              100% Safe
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-[#002B66] leading-[1.1] drop-shadow-sm">
            "Just five more<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FFD600]">
              minutes!"
            </span>
          </h2>
          <p className="font-body font-bold text-lg sm:text-2xl text-[#002B66]/85 max-w-[480px]">
            We've heard it a million times. When screen time is this good, you might actually say yes.
          </p>
          
          <div className="flex flex-col gap-5 w-full mt-4 group/list">
            {homeFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-[24px] bg-white shadow-[0_8px_30px_rgba(0,43,102,0.08)] border-2 border-transparent hover:border-[#0066FF] hover:shadow-[8px_8px_0_0_#002B66] hover:bg-[#FFFDF0] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] shrink-0 p-2 bg-[#FFFDF0]`}>
                  <img src={feature.image} alt="" className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col items-start text-left mt-1">
                  <h3 className="font-display font-black text-xl sm:text-[28px] text-[#002B66] mb-1 sm:mb-2 leading-none">{feature.title}</h3>
                  <p className="font-body text-base sm:text-lg text-[#002B66]/80 leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const SeriousAboutFunSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section 
      className="bg-gradient-to-b from-[#0066FF] via-[#00E676] to-[#002B66] w-full relative overflow-hidden flex flex-col items-center pt-24 lg:pt-40 pb-24" 
      ref={revealRef}
    >
      {/* Bright Space Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[120px] opacity-40 animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#FF1493] rounded-full blur-[150px] opacity-35 animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#FFD600] rounded-full blur-[100px] opacity-30 animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Starfield overlay (subtle static texture) */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center relative z-20">
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-[80px] text-white text-center mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          Serious about <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#FF1493] to-[#00E5FF]">fun</span>
        </h2>
        
        <p className="font-body font-bold text-lg sm:text-2xl lg:text-[32px] text-white text-center max-w-[700px] mb-12 sm:mb-20 drop-shadow-lg leading-snug">
          The best educational experts in the world agree: <span className="text-[#FFD600] animate-pulse">fun works.</span>
        </p>
        <div className="w-[150%] sm:w-[120%] lg:w-full max-w-none flex flex-col items-center relative mt-4 lg:mt-6 z-10">
          <img 
            src="/serious-about-fun-bg.png" 
            alt="Space illustration" 
            className="w-full h-auto object-contain transform -translate-y-4 lg:-translate-y-12"
          />
        </div>

        <div className="mt-8 relative z-20">
           <Button as="a" href="#" variant="purple" className="px-14 py-6 text-2xl font-black">
             Start exploring
           </Button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const revealRef = useScrollReveal();
  
  // Custom star component for reuse
  const StarIcon = () => (
    <svg className="w-5 h-5 fill-[#FFD600] drop-shadow-sm" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  return (
    <section className="bg-gradient-to-b from-[#FF1493] via-[#FF7043] to-[#F4F9FF] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#00E5FF]/20 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-24 flex flex-col items-center gap-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[64px] leading-tight text-white mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
            Loved by <span className="text-[#FFD600]">200M</span> families
          </h2>
          <p className="font-body font-bold text-lg sm:text-2xl lg:text-3xl text-white/95 drop-shadow-sm">Adored by kids and grown-ups alike.</p>
        </div>
        
        <Carousel 
          items={homeTestimonials}
          showArrow={true}
          className="w-full"
          renderItem={(testimonial) => {
            if (testimonial.type === 'photo') {
              return (
                <div className="rounded-[40px] overflow-hidden h-[440px] sm:h-[480px] w-full shadow-[0_20px_40px_rgba(0,43,102,0.25)] border-8 border-white transform transition-transform duration-500 hover:scale-[1.02]">
                  <img src={testimonial.image} alt="Kid with device" className="w-full h-full object-cover" />
                </div>
              );
            }
            
            return (
              <div className="relative h-auto min-h-[440px] sm:h-[480px] w-full group">
                {/* Animated Gradient Border Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493] via-[#FFD600] to-[#00E676] rounded-[40px] rounded-br-none opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-[spin_4s_linear_infinite]"></div>
                
                {/* Actual Card (Speech Bubble) */}
                <div className="absolute inset-1 bg-white rounded-[40px] rounded-br-none p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-[inset_0_-8px_0_rgba(0,0,0,0.05),_0_20px_40px_rgba(0,43,102,0.12)] z-10">
                   
                   {/* Tail of the speech bubble */}
                   <div className="absolute -bottom-[28px] right-0 w-[40px] h-[40px] bg-white transform rotate-45 shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.05)] origin-top-left -z-10"></div>

                   <div>
                     <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                       <span className="bg-gradient-to-r from-[#0066FF] to-[#00E676] text-white text-[11px] sm:text-[12px] font-black px-3.5 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-widest shadow-md">
                         <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.7 20.3L16 17.5h-1.6l-3.2 5.5H8.7l2.8-4.8H5.8L4.1 21H1.5L6.6 12 1.5 3h2.6l1.7 2.8h1.6L10.6.3h2.5l-2.8 4.8h5.7l1.7-2.8h2.6l-5.1 9 5.1 9h-2.6zM15 16l-2.3-4-2.3 4H15zM11.6 10l-1.7-3-1.7 3h3.4z"/></svg>
                         App Store
                       </span>
                       <div className="flex gap-1">
                         <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                       </div>
                     </div>
                     <h3 className="font-display font-black text-xl sm:text-2xl lg:text-[32px] text-[#002B66] mb-3 sm:mb-5 leading-tight">{testimonial.title}</h3>
                     <p className="font-body text-base sm:text-[18px] lg:text-[20px] font-bold text-[#002B66]/80 leading-relaxed">"{testimonial.text}"</p>
                   </div>
                   <div className="flex items-center gap-3 mt-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFFDF0] border border-[#002B66]/20 flex items-center justify-center text-xl shadow-inner">
                        👤
                      </div>
                      <p className="font-display font-bold text-base sm:text-[18px] text-[#002B66]">{testimonial.author}</p>
                   </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const revealRef = useScrollReveal();
  
  const awardsList = [
    "Mom's Choice Awards",
    "Parent Tested Parent Approved",
    "EdTech Awards",
    "Kidscreen Awards",
    "National Parenting Product Awards",
    "Academics' Choice Award",
    "Good Housekeeping",
    "TIME Best Inventions",
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#F4F9FF]" ref={revealRef}>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block animate-pulse">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="2" strokeDasharray="4 4">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center max-w-4xl mb-16 relative z-10">
          <div className="absolute -top-12 -left-12 text-[#FFD600] animate-[spin_8s_linear_infinite] hidden md:block">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-[#002B66] leading-[1.1] drop-shadow-sm">
            Award-winning, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] via-[#0066FF] to-[#00E676]">again & again.</span>
          </h2>
          <p className="font-body text-xl lg:text-2xl font-bold text-[#002B66]/85 mt-6">
            Recognized globally for safety, playfulness, and innovation.
          </p>
        </div>

        {/* Playful Framed Image */}
        <div className="relative z-10 w-full max-w-[800px] mb-24 group px-4">
          {/* Decorative backdrop rotated cards */}
          <div className="absolute inset-0 bg-[#00E676] rounded-[3rem] rotate-3 transition-transform duration-500 group-hover:rotate-[6deg] shadow-lg"></div>
          <div className="absolute inset-0 bg-[#0066FF] rounded-[3rem] -rotate-3 transition-transform duration-500 group-hover:-rotate-[6deg] shadow-lg"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white p-3 lg:p-5 rounded-[3rem] shadow-[0_20px_40px_rgba(0,43,102,0.25)] transition-transform duration-500 group-hover:-translate-y-4 border-4 border-white">
            <img 
              src="/awards-hero-new.png" 
              alt="Bingokids characters with trophy" 
              className="w-full h-auto object-cover rounded-[2.5rem]"
              onError={(e) => { e.currentTarget.src = "/awards-hero-new.png"; }}
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-[#FF1493] text-white font-display font-bold text-xl py-3 px-8 rounded-full shadow-[6px_6px_0_0_#002B66] rotate-[-12deg] group-hover:scale-110 transition-transform duration-300 border-2 border-[#002B66]">
              #1 Rated!
            </div>
          </div>
        </div>
      </div>

      {/* Vibrant Marquee Ticker Tape */}
      <div className="w-full bg-[#00E676] py-5 border-y-4 border-[#002B66] transform rotate-1 relative z-20 shadow-[0_10px_30px_rgba(0,43,102,0.2)] overflow-hidden">
        <div className="flex w-max animate-marquee">
          {/* First Set */}
          <div className="flex w-max gap-10 items-center px-5">
            {awardsList.map((award, i) => (
              <div key={i} className="flex items-center gap-10 shrink-0">
                <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-wider text-[#002B66]">{award}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#002B66">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
            ))}
          </div>
          {/* Duplicated Set for infinite scroll */}
          <div className="flex w-max gap-10 items-center px-5">
            {awardsList.map((award, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-10 shrink-0">
                <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-wider text-[#002B66]">{award}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#002B66">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="w-full flex justify-center mt-20 relative z-30 pb-10">
        <Button as="a" href="/awards" variant="purple" className="text-xl">
          Discover all our awards
        </Button>
      </div>
      
    </section>
  );
};

const NoAdsSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#00E676] via-[#0066FF] to-[#002B66] w-full py-24 lg:py-32 relative overflow-hidden" ref={revealRef}>
      
      {/* Animated floating background elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-white/30 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#FFD600]/25 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        
        {/* Top Centered Content */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 sm:mb-24">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FF1493] to-[#FFD600] rounded-3xl flex items-center justify-center p-4 shadow-[0_10px_20px_rgba(255,20,147,0.4)] animate-bounce" style={{ animationDuration: '3s' }}>
            <svg className="w-full h-full text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
              <path d="M12 2L2 22h20L12 2zm0 6l4 10H8l4-10z"/>
            </svg>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-[80px] text-white uppercase tracking-tight mt-2 drop-shadow-md leading-[1.1]">
            NO ADS. <span className="text-[#FFD600]">EVER.</span>
          </h2>
          
          <p className="font-body font-bold text-lg sm:text-2xl lg:text-3xl text-white/95 max-w-2xl leading-snug mt-2 drop-shadow-sm">
            Designed for safe entertainment, without interruption.
          </p>
          
          <div className="mt-6 sm:mt-8">
            <Button as="a" href="#" variant="primary" className="px-8 sm:px-12 py-4 sm:py-5 text-xl sm:text-2xl shadow-2xl">
              Download free
            </Button>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-4">
          
          {/* Left: Interactive Framed Image */}
          <div className="relative group w-full">
            {/* Soft decorative glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1493] to-[#00E676] rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <div className="relative w-full rounded-[3rem] overflow-hidden aspect-[4/3] bg-white p-3 lg:p-4 shadow-[0_20px_50px_rgba(0,43,102,0.3)] transform transition-transform duration-700 group-hover:rotate-2 group-hover:scale-[1.02] border-4 border-white">
              <img 
                src="/dad-drawing.jpg" 
                alt="Parent and child drawing together" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              
              {/* Floating safe badge */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm sm:text-base text-[#00E676] shadow-xl flex items-center gap-2 border-2 border-white group-hover:-translate-y-2 transition-transform duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                100% Kid Safe
              </div>
            </div>
          </div>

          {/* Right: Download Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:pl-8">
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight drop-shadow-sm">
              Scan to download <br className="hidden lg:block"/>for free
            </h3>
            
            <div className="flex flex-wrap items-center gap-8 mt-2">
              {/* Interactive QR Code Container */}
              <div className="group/qr relative w-[150px] h-[150px] bg-white/90 backdrop-blur-xl rounded-[2rem] flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(0,43,102,0.2)] border-[3px] border-white hover:border-[#FFD600] transition-all duration-300 hover:-translate-y-2 cursor-pointer shrink-0">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#002B66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 group-hover/qr:scale-110 group-hover/qr:stroke-[#FF1493] transition-all duration-300">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                   <rect x="7" y="7" width="3" height="3"></rect>
                   <rect x="14" y="7" width="3" height="3"></rect>
                   <rect x="7" y="14" width="3" height="3"></rect>
                   <path d="M14 14h3v3h-3z"></path>
                 </svg>
                 <span className="font-display font-black text-xs uppercase tracking-wider text-[#002B66]">BINGOKIDS APP</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="#" className="transform hover:scale-105 transition-transform duration-300 inline-block shadow-lg rounded-xl overflow-hidden border-2 border-white/40">
                  <img src="/app-store-badge.svg" alt="Download on App Store" className="h-12 w-auto" />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform duration-300 inline-block shadow-lg rounded-xl overflow-hidden border-2 border-white/40">
                  <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-12 w-auto" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <OnDemandSection />
      <FiveMoreMinutesSection />
      <SeriousAboutFunSection />
      <TestimonialsSection />
      <AwardsSection />
      <NoAdsSection />
      <Footer showQrCard={false} />
    </div>
  );
};

export default HomePage;
