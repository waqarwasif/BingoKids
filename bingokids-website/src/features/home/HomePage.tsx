import { homeHero, homeFeatures, homeTestimonials } from '../../data/home.data';
import { Button } from '../../components/common/Button';
import { Carousel } from '../../components/common/Carousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Footer } from '../../components/layout/Footer';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-purple w-full relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-28 pb-48 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:mt-[-50px]">
          <h1 className="font-display font-black text-[40px] lg:text-[68px] text-white tracking-[-0.02em] leading-[1.05] max-w-[500px]">
            Ultimate kids<br/>entertainment
          </h1>
          <p className="font-body font-normal text-lg lg:text-[22px] text-white max-w-[380px] leading-[1.3] mb-2 tracking-wide">
            The home of outstanding content<br/>without compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            {homeHero.button && (
              <Button as="a" href={homeHero.button.href} variant="primary" className="w-full sm:w-auto px-10 py-5 text-lg font-bold tracking-normal text-[#1f0d40]">
                {homeHero.button.label}
              </Button>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[760px] aspect-[16/11] bg-[#eef1f6] rounded-[32px] overflow-hidden border-[8px] border-[#180a2b] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{ transform: 'rotate(4deg)' }}>
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
               <img src="https://lingokids.com/wp-content/uploads/2026/03/Cover-01.png" alt="Game Screenshot" className="w-full h-full object-cover" />
             )}
             {/* Fake UI if image/video fails */}
             <div className="absolute inset-0 bg-[#eef1f6] flex flex-col -z-10">
               <div className="flex-1 bg-gradient-to-b from-blue-400 to-blue-500 relative flex items-center justify-center">
                  <span className="text-8xl">🐼</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Elements (sit precisely on the edge of the next section) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col">
        {/* Container for floating elements (snail & arrow) */}
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 relative h-20">
          
          {/* Snail */}
          <div className="absolute bottom-0 left-[35%] w-28 h-28 hidden lg:block z-30">
            <svg viewBox="0222 0 100 68" className="w-full h-full drop-shadow-xl overflow-visible">
              {/* Body */}
              <path d="M 25 80 C 20 80, 10 70, 15 55 C 18 45, 25 45, 30 55 C 35 65, 45 70, 55 70 C 70 70, 85 75, 90 80 C 95 85, 80 85, 60 85 C 40 85, 30 80, 25 80 Z" fill="#F4D39A" />
              
              {/* Shell */}
              <circle cx="55" cy="50" r="30" fill="#c98250ff" />
              <circle cx="55" cy="50" r="30" fill="none" stroke="#7A3B12" strokeWidth="2" />
              
              {/* Shell Spiral */}
              <path d="M 55 20 C 80 20, 90 50, 75 70 C 60 85, 30 75, 35 55 C 40 35, 65 35, 70 50 C 75 60, 60 70, 55 60 C 50 55, 55 45, 60 50" fill="none" stroke="#7A3B12" strokeWidth="3" strokeLinecap="round" />
              
              {/* Antennae */}
              <path d="M 20 50 Q 15 35, 12 25" fill="none" stroke="#F4D39A" strokeWidth="4" strokeLinecap="round" />
              <path d="M 26 50 Q 30 35, 35 25" fill="none" stroke="#F4D39A" strokeWidth="4" strokeLinecap="round" />
              
              {/* Eyestalk tips (Big Eyes) */}
              <circle cx="12" cy="25" r="5" fill="#3D2314" />
              <circle cx="35" cy="25" r="5" fill="#3D2314" />
              
              {/* Cute Face (Little Eyes & Smile) */}
              <circle cx="17" cy="58" r="2.5" fill="#3D2314" />
              <circle cx="26" cy="58" r="2.5" fill="#3D2314" />
              <path d="M 19 63 Q 21.5 66, 24 63" fill="none" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />
              
              {/* Blush */}
              <circle cx="13" cy="61" r="3" fill="#FF8A8A" opacity="0.8" />
              <circle cx="30" cy="61" r="3" fill="#FF8A8A" opacity="0.8" />
            </svg>
          </div>
          
          {/* Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
             <span className="font-display font-bold text-[10px] text-white tracking-widest uppercase">Fun this way</span>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M6 9l6 6 6-6"/>
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardsRow1 = [
  { bg: 'bg-[#b6e445]', content: '🐼' },
  { bg: 'bg-[#ff9e9e]', content: '🦊' },
  { bg: 'bg-[#29e3ff]', content: '👧🏽' },
  { bg: 'bg-[#ffbdf4]', content: '🐷' },
  { bg: 'bg-[#7ae2ff]', content: '🐼' },
  { bg: 'bg-[#aa80ff]', content: '❄️' },
  { bg: 'bg-[#aef5e3]', content: '🐱' },
];

const cardsRow2 = [
  { bg: 'bg-[#3cebf2]', content: '🐼' },
  { bg: 'bg-[#fcd0a2]', content: '🚗' },
  { bg: 'bg-[#73a2ff]', content: '🕷️' },
  { bg: 'bg-[#ffe46b]', content: '📱' },
  { bg: 'bg-[#4ffae3]', content: '🎈' },
  { bg: 'bg-[#cbf7f3]', content: '🚙' },
  { bg: 'bg-[#fcd0a2]', content: '🚗' },
];

const OnDemandSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#ff9500] w-full py-16 lg:py-24 overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 mb-12">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-white text-center">Incredible content. On demand.</h2>
      </div>

      <div className="w-full flex flex-col gap-6 mb-16 pause-on-hover">
        {/* Top Row (Scrolls Left) */}
        <div className="flex w-[200%] md:w-[200%] lg:w-[200%]">
          <div className="flex w-full animate-marquee">
            {[...cardsRow1, ...cardsRow1].map((card, idx) => (
              <div key={idx} className="w-[200px] md:w-[260px] lg:w-[320px] aspect-[4/3] flex-shrink-0 mx-3 rounded-[32px] shadow-sm flex items-center justify-center overflow-hidden border-4 border-white/20 hover:scale-[1.02] transition-transform cursor-pointer relative">
                <div className={`absolute inset-0 ${card.bg} opacity-90`}></div>
                {/* Fallback pattern to mimic busy graphics */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 4px, transparent 4px)', backgroundSize: '40px 40px' }}></div>
                <span className="text-6xl md:text-8xl relative z-10 drop-shadow-md">{card.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row (Scrolls Right) */}
        <div className="flex w-[200%] md:w-[200%] lg:w-[200%]">
          <div className="flex w-full animate-marquee-reverse">
            {[...cardsRow2, ...cardsRow2].map((card, idx) => (
              <div key={idx} className="w-[200px] md:w-[260px] lg:w-[320px] aspect-[4/3] flex-shrink-0 mx-3 rounded-[32px] shadow-sm flex items-center justify-center overflow-hidden border-4 border-white/20 hover:scale-[1.02] transition-transform cursor-pointer relative">
                <div className={`absolute inset-0 ${card.bg} opacity-90`}></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 4px, transparent 4px)', backgroundSize: '40px 40px' }}></div>
                <span className="text-6xl md:text-8xl relative z-10 drop-shadow-md">{card.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button as="a" href="#" variant="purple" className="px-10 py-5 text-xl font-bold">Start exploring</Button>
      </div>
    </section>
  );
};

const FiveMoreMinutesSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-20 lg:py-32" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16 lg:gap-20">
        <h2 className="font-display font-black text-4xl lg:text-6xl text-brand-purple text-center tracking-tight">
          Made for "5 more minutes"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full px-4">
          {homeFeatures.map(feature => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center mb-8">
                 <img src={feature.image} alt="" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-[28px] text-brand-purple mb-4 tracking-tight">{feature.title}</h3>
              <p className="font-body text-base lg:text-lg text-brand-purple/80 leading-snug max-w-[260px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Button as="a" href="#" variant="purple" className="px-10 py-4 text-xl">Dive in</Button>
        </div>
      </div>
    </section>
  );
};

const SeriousAboutFunSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section 
      className="bg-brand-purple w-full relative overflow-hidden flex flex-col items-center pt-20 lg:pt-32 pb-16" 
      ref={revealRef}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center relative z-20">
        <h2 className="font-display font-bold text-4xl lg:text-5xl text-white text-center mb-4 tracking-tight drop-shadow-md">
          Serious about fun
        </h2>
        
        <p className="font-body text-lg lg:text-xl text-white/90 text-center max-w-md leading-snug drop-shadow-md">
          Designed by parents and educators<br />to make play purposeful.
        </p>
      </div>

      {/* Full width image placed in flow so it doesn't overlap text */}
      <div className="w-[150%] sm:w-[120%] lg:w-full max-w-none flex justify-center relative mt-8 lg:mt-12 z-10">
        <img 
          src="https://lingokids.com/wp-content/uploads/2026/04/space2-bg.png" 
          alt="Space illustration" 
          className="w-full h-auto object-contain"
        />
        
        {/* Button positioned over the image bottom center */}
        <div className="absolute bottom-[10%] lg:bottom-[15%] left-1/2 -translate-x-1/2">
          <Button as="a" href="#" variant="pink" className="px-8 py-3 lg:px-10 lg:py-4 text-lg lg:text-xl font-bold transition-transform hover:scale-[1.02]">
            Discover more
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
    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  return (
    <section className="bg-[#ffbdf4] w-full py-20 lg:py-32" ref={revealRef}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-24 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-4xl lg:text-[52px] leading-tight text-brand-purple mb-4">Loved by 200M families</h2>
          <p className="font-body text-xl lg:text-2xl text-brand-purple/80">Adored by kids and grown-ups alike.</p>
        </div>
        
        <Carousel 
          items={homeTestimonials}
          showArrow={true}
          className="w-full"
          renderItem={(testimonial) => {
            if (testimonial.type === 'photo') {
              return (
                <div className="rounded-[32px] overflow-hidden h-[480px] w-full shadow-sm">
                  <img src={testimonial.image} alt="Kid with device" className="w-full h-full object-cover" />
                </div>
              );
            }
            
            return (
              <div className="bg-[#fcf7f1] rounded-[32px] p-10 lg:p-12 h-[480px] flex flex-col justify-between shadow-sm">
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <span className="bg-[#007aff] text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 uppercase tracking-wide">
                       <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M17.7 20.3L16 17.5h-1.6l-3.2 5.5H8.7l2.8-4.8H5.8L4.1 21H1.5L6.6 12 1.5 3h2.6l1.7 2.8h1.6L10.6.3h2.5l-2.8 4.8h5.7l1.7-2.8h2.6l-5.1 9 5.1 9h-2.6zM15 16l-2.3-4-2.3 4H15zM11.6 10l-1.7-3-1.7 3h3.4z"/></svg>
                       App Store
                     </span>
                     <div className="flex gap-0.5 text-[#ffc42e]">
                       <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                     </div>
                   </div>
                   <h3 className="font-display font-bold text-3xl text-brand-purple mb-5 leading-tight">{testimonial.title}</h3>
                   <p className="font-body text-[17px] text-brand-purple/80 leading-relaxed">"{testimonial.text}"</p>
                 </div>
                 <p className="font-body font-bold text-[15px] text-brand-purple">{testimonial.author}</p>
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

  // A simple laurel SVG component
  const Laurel = ({ flip = false }) => (
    <svg 
      className={`w-8 h-12 text-[#ffc42e] flex-shrink-0 ${flip ? 'scale-x-[-1]' : ''}`} 
      viewBox="0 0 32 48" 
      fill="currentColor"
    >
      {/* Stem */}
      <path d="M18 48 C18 48 10 30 16 0 L14 0 C8 30 16 48 16 48 Z"/>
      {/* Leaves left */}
      <path d="M14 36 C8 38 4 34 6 28 C8 32 14 32 14 36 Z"/>
      <path d="M13 24 C7 26 3 22 5 16 C7 20 13 20 13 24 Z"/>
      <path d="M14 12 C8 14 4 10 6 4 C8 8 14 8 14 12 Z"/>
      {/* Leaves right */}
      <path d="M15 30 C21 32 25 28 23 22 C21 26 15 26 15 30 Z"/>
      <path d="M14 18 C20 20 24 16 22 10 C20 14 14 14 14 18 Z"/>
    </svg>
  );

  return (
    <section className="bg-brand-cream w-full py-16 lg:py-24 border-b-[16px] border-brand-cyan" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Header Text */}
        <div className="px-6">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-purple mb-3">Award-winning, again & again.</h2>
          <p className="font-body text-xl lg:text-2xl text-brand-purple/80">Recognized globally for safety and innovation.</p>
        </div>

        {/* Character Illustration */}
        <div className="w-full max-w-[700px] px-6 flex justify-center">
          <img 
            src="https://lingokids.com/wp-content/uploads/2026/02/characters-1024x436.png" 
            alt="Lingokids characters with trophy" 
            className="w-full h-auto object-contain drop-shadow-sm"
            onError={(e) => {
              // Fallback if the specific path fails
              e.currentTarget.src = "https://lingokids.com/wp-content/uploads/2026/02/characters.png";
            }}
          />
        </div>

        {/* Automatic Sliding Marquee */}
        <div className="w-full relative mt-4 overflow-hidden pause-on-hover">
          <div className="flex w-max animate-marquee">
            {/* First Set */}
            <div className="flex w-max gap-8 lg:gap-16 items-center px-4 lg:px-8">
              {awardsList.map((award, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <Laurel />
                  <span className="font-display font-bold text-xl lg:text-2xl text-brand-purple whitespace-nowrap shrink-0">{award}</span>
                  <Laurel flip />
                </div>
              ))}
            </div>
            {/* Duplicated Set for infinite scroll */}
            <div className="flex w-max gap-8 lg:gap-16 items-center px-4 lg:px-8">
              {awardsList.map((award, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 shrink-0">
                  <Laurel />
                  <span className="font-display font-bold text-xl lg:text-2xl text-brand-purple whitespace-nowrap shrink-0">{award}</span>
                  <Laurel flip />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 pb-4">
          <Button as="a" href="/awards" variant="purple" className="px-10 py-4 text-xl font-bold transition-transform hover:scale-[1.02]">
            See what we've won
          </Button>
        </div>
        
      </div>
    </section>
  );
};

const NoAdsSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#b7f0ff] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Top Centered Content */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center p-3">
            <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
              <path d="M12 2L2 22h20L12 2zm0 6l4 10H8l4-10z"/>
            </svg>
          </div>
          <h2 className="font-display font-bold text-5xl lg:text-[64px] text-brand-purple uppercase tracking-tight mt-2">NO ADS. EVER.</h2>
          <p className="font-body font-bold text-lg lg:text-xl text-brand-purple max-w-sm leading-snug">
            Designed for safe entertainment, without interruption.
          </p>
          <Button as="a" href="#" variant="primary" className="mt-4 px-10 py-3 text-lg">
            Download free
          </Button>
        </div>

        {/* Bottom Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-4">
          {/* Left: Image */}
          <div className="w-full rounded-[32px] overflow-hidden aspect-[4/3] bg-brand-cyan shadow-sm">
            <img 
              src="/dad-drawing.jpg" 
              alt="Parent and child drawing together" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Download Info */}
          <div className="flex flex-col items-start gap-6 lg:pl-4">
            <h3 className="font-display font-bold text-3xl lg:text-[40px] text-brand-purple">
              Scan to download for free
            </h3>
            
            <div className="flex items-center gap-6 mt-2">
              {/* Fake QR Code */}
              <div className="w-[120px] h-[120px] bg-white rounded-[20px] flex items-center justify-center shadow-sm shrink-0">
                <span className="font-body font-bold text-[10px] text-brand-purple">QR Code</span>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3">
                <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity min-w-[160px]">
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.65-.72 1.58.15 2.95.84 3.76 2.05-3.13 1.84-2.58 5.76.48 6.94-.78 1.96-1.74 3.42-2.97 3.9zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[10px] leading-[1]">Download on the</span>
                    <span className="text-[15px] font-semibold leading-[1.2] mt-0.5">App Store</span>
                  </div>
                </a>
                
                <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity min-w-[160px]">
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M3.6 20.94c-.2.2-.3.1-.3-.26V3.32c0-.36.1-.46.3-.26l11.41 11.4-11.41 6.48zM15.82 14.04l2.42-2.42-2.42-2.42L4.54 2.87c-.45-.25-.82-.04-.82.47v17.32c0 .51.37.72.82.47l11.28-6.33zM18.8 12.3l2.84-1.6c.45-.25.45-.66 0-.91l-2.84-1.6-2.6 2.6 2.6 1.51z"/>
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[10px] leading-[1]">GET IT ON</span>
                    <span className="text-[15px] font-semibold leading-[1.2] mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OnDemandSection />
      <FiveMoreMinutesSection />
      <SeriousAboutFunSection />
      <TestimonialsSection />
      <AwardsSection />
      <NoAdsSection />
      <Footer qrBgColorClass="bg-brand-cyan" />
    </>
  );
};

export default HomePage;
