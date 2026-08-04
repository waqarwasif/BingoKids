import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { leadershipTeam, developmentCouncil } from '../../data/aboutUs.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <>
      {/* Vibrant Poppy Orangish Radiant Sunset Hero */}
      <section className="bg-gradient-to-br from-[#FF4500] via-[#FF652F] to-[#FFB300] w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh] pt-[115px] sm:pt-[135px] lg:pt-[155px] pb-8 sm:pb-12 relative overflow-hidden flex flex-col items-center justify-center" ref={revealRef}>
        
        {/* Animated Cute Undersea Sparkles & Floating Stars */}
        <div className="absolute top-16 left-[8%] text-[#FFD600] opacity-90 text-3xl sm:text-4xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
        <div className="absolute bottom-12 right-[10%] text-white opacity-80 text-4xl sm:text-5xl animate-pulse">✺</div>
        <div className="absolute top-32 right-[18%] w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full blur-sm animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-[12%] w-12 h-12 sm:w-16 sm:h-16 bg-[#FFD600]/25 rounded-full blur-md animate-bounce" style={{ animationDuration: '3.5s' }}></div>

        {/* Clean Hero Graphic */}
        <div className="w-full max-w-[1200px] flex justify-center relative z-10 hover:scale-105 transition-transform duration-500 px-4 my-auto">
          <img 
            src="/serious-about-fun.png" 
            alt="We're Serious About Fun" 
            className="w-[94%] sm:w-[85%] md:w-full h-auto max-h-[55vh] lg:max-h-[700px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </section>

      {/* Vibrant Poppy Electric Ocean Blue Section */}
      <section className="w-full bg-gradient-to-b from-[#0066FF] via-[#0055FF] to-[#002B66] py-16 sm:py-20 px-4 lg:px-12 flex flex-col items-center relative overflow-hidden">
        <div className="max-w-4xl text-center mb-12 sm:mb-16 z-10">
          <h2 className="font-superkindly text-4xl sm:text-5xl lg:text-6xl text-white mb-3 sm:mb-4 drop-shadow-md tracking-wide">
            Kids content <span className="text-[#FFD600]">done right</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#00E5FF] font-bold drop-shadow-sm">Created in-house by our award-winning team.</p>
        </div>

        <div className="w-full max-w-[1050px] flex justify-center z-10 bg-white/95 backdrop-blur-md p-4 sm:p-8 rounded-[36px] lg:rounded-[48px] shadow-[0_25px_50px_rgba(0,0,0,0.3)] border-4 border-white">
          <img 
            src="/collage-teams.png" 
            alt="Our teams: Voice Artists, Developers, Animators, Designers, Writers" 
            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>
    </>
  );
};

const MissionSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full relative min-h-[600px] lg:min-h-[70vh] overflow-hidden flex flex-col md:flex-row" ref={revealRef}>
      
      {/* Left side: Text Content */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#FF1493] via-[#FF5252] to-[#FF7043] flex flex-col justify-center px-6 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-32 z-20">
        <h4 className="font-superkindly text-[#FFD600] text-lg sm:text-xl tracking-wider uppercase mb-3 sm:mb-4">
          Our mission
        </h4>
        <h2 className="font-superkindly text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-4 sm:mb-6 tracking-wide">
          Help grown-ups raise <span className="text-[#FFD600]">amazing kids</span>
        </h2>
        <p className="font-body font-bold text-white/95 text-base sm:text-lg lg:text-xl max-w-lg mt-2 leading-relaxed">
          We make play purposeful. Because who they become starts right now.
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/mission-child.png")' }}
        />
      </div>
      
    </section>
  );
};

const LeadershipSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-r from-[#00E5FF] via-[#0066FF] to-[#00E676] w-full py-16 sm:py-20 lg:py-32" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 items-center">
        <h2 className="font-superkindly text-4xl sm:text-5xl lg:text-7xl text-white text-center drop-shadow-md tracking-wide hover:scale-105 transition-transform duration-300">
          Leadership <span className="text-[#FFD600]">team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {leadershipTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-5 group bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_15px_30px_rgba(0,43,102,0.2)] border-4 border-white hover:scale-105 transition-transform duration-300">
               <div className="w-40 h-40 rounded-full overflow-hidden bg-[#F4F9FF] border-[6px] border-[#FFD600] shadow-md transform transition-transform duration-500 group-hover:rotate-3">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <h3 className="font-display font-black text-xl lg:text-2xl text-[#002B66]">{member.name}</h3>
                 <p className="font-body font-bold text-sm lg:text-base text-[#0066FF] mt-1">{member.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CouncilSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#002B66] w-full py-16 sm:py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 items-center relative z-10">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="font-superkindly text-4xl sm:text-5xl lg:text-7xl text-white leading-tight drop-shadow-md tracking-wide hover:scale-105 transition-transform duration-300">
            Bingokids Child Development <span className="text-[#FFD600]">Council</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#00E5FF] font-bold">The good stuff built in from the very beginning.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {developmentCouncil.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 group bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_15px_30px_rgba(0,43,102,0.15)] border-4 border-white hover:scale-105 transition-transform duration-300">
               <div className="w-40 h-40 rounded-full overflow-hidden bg-white/20 border-[4px] border-[#FF1493] group-hover:border-[#FFD600] shadow-lg transform transition-all duration-500 group-hover:rotate-[-3deg]">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <h3 className="font-display font-black text-xl lg:text-2xl text-[#002B66]">{member.name}</h3>
                 <p className="font-body font-bold text-sm leading-snug text-[#FF1493] mt-2 max-w-[200px] mx-auto">{member.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const revealRef = useScrollReveal();
  
  const awards = [
    "Parent Tested Parent Approved",
    "EdTech Awards",
    "Kidscreen Awards",
    "Good Housekeeping Awards",
    "TIME Best Inventions",
    "Fast Company Innovation"
  ];
  
  return (
    <section className="bg-gradient-to-b from-[#00E676] via-[#FFD600] to-[#FF7043] w-full py-20 lg:py-28 relative overflow-hidden" ref={revealRef}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
      
      <div className="flex flex-col items-center text-center gap-8 relative z-10 w-full">
        
        {/* Header & Subtitle */}
        <div className="px-6 lg:px-12 flex flex-col gap-3 relative z-20">
          <h2 className="font-superkindly text-6xl sm:text-7xl lg:text-[96px] text-white text-3d-cartoon leading-[1.05] tracking-wide mb-4">
            Award-winning,<br/>
            <span className="text-[#FF1493] text-3d-cartoon">again & again.</span>
          </h2>
          <p className="font-superkindly text-2xl sm:text-3xl lg:text-[36px] text-white text-3d-cartoon font-bold tracking-wide">
            Recognized globally for safety and innovation.
          </p>
        </div>
        
        {/* Mascot Image with Decor */}
        <div className="relative inline-flex justify-center w-full max-w-4xl mx-auto mt-2 px-6">
          <div className="absolute top-10 left-[10%] text-[#FF1493] text-3xl animate-bounce">★</div>
          <div className="absolute top-24 right-[10%] text-[#00E5FF] text-2xl animate-pulse">✦</div>
          <div className="absolute bottom-16 left-[5%] text-[#FFD600] text-4xl animate-bounce">✿</div>
          <div className="absolute bottom-8 right-[5%] text-[#002B66] text-3xl animate-pulse">★</div>

          <img src="/awards-hero-new.png" alt="Mascot holding trophy" className="w-[90%] max-w-[700px] h-auto object-contain z-10 relative drop-shadow-xl" />
        </div>
        
        {/* Infinite Marquee Slide Show */}
        <div className="w-full overflow-hidden bg-[#FFD600] py-6 border-y-4 border-[#002B66] relative my-4 shadow-lg">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[1, 2].map((set) => (
              <div key={set} className="flex justify-around items-center">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-12 mx-6">
                    <span className="font-display font-black text-3xl text-[#002B66] uppercase tracking-wider whitespace-nowrap">{award}</span>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-[#FF1493] drop-shadow-sm">
                      <path d="M12 22C12 22 5 15 5 8C5 5.5 7 3 9 3C10.5 3 11.5 4 12 5.5C12.5 4 13.5 3 15 3C17 3 19 5.5 19 8C19 15 12 22 12 22Z" fill="currentColor"/>
                      <path d="M4 12C2 10 2 7 3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 12C22 10 22 7 21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M6 17C4 16 3 14 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 17C20 16 21 14 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action button */}
        <div className="mt-2 px-6 pb-8">
          <Button as="a" href="/awards" variant="primary" className="text-xl px-12 py-5 shadow-2xl">
            See what we've won
          </Button>
        </div>
      </div>
    </section>
  );
};

export const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />
      <LeadershipSection />
      <CouncilSection />
      <AwardsSection />
      <Footer showQrCard={false} footerBgColorClass="bg-[#FFD600]" footerTextColorClass="text-[#002B66]" footerHeadingColorClass="bg-[#002B66] text-[#FFD600] px-3 py-1.5 rounded-full w-fit" />
    </div>
  );
};

export default AboutUsPage;
