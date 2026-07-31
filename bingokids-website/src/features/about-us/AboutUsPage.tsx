import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { leadershipTeam, developmentCouncil } from '../../data/aboutUs.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <>
      <section className="bg-[#00D4FF] w-full pt-4 lg:pt-8 pb-4 lg:pb-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[40vh] lg:min-h-[50vh]" ref={revealRef}>
        
        <div className="w-full max-w-[1200px] flex justify-center relative z-10 hover:scale-105 transition-transform duration-500">
          <img 
            src="/serious-about-fun.png" 
            alt="We're Serious About Fun" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Kids content done right section */}
      <section className="w-full bg-[#F9F6F0] py-20 px-4 lg:px-12 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#2D1457] mb-4">Kids content done right</h2>
          <p className="text-xl lg:text-2xl text-[#2D1457] font-medium opacity-90">Created in-house by our award-winning team.</p>
        </div>

        <div className="w-full max-w-[1000px] flex justify-center">
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
      <div className="w-full md:w-1/2 bg-[#2D1457] flex flex-col justify-center px-8 lg:px-20 py-24 lg:py-32 z-20">
        <h4 className="font-display font-bold text-[#FF9900] text-lg tracking-wide uppercase mb-4">
          Our mission
        </h4>
        <h2 className="font-display font-black text-white text-4xl lg:text-6xl leading-tight mb-6">
          Help grown-ups raise amazing kids
        </h2>
        <p className="font-body font-medium text-white/90 text-lg lg:text-xl max-w-lg mt-2">
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
    <section className="bg-[#FF9900] w-full py-20 lg:py-32" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-16 items-center">
        <h2 className="font-display font-black text-4xl lg:text-6xl text-[#2D1457] text-center drop-shadow-sm hover:scale-105 transition-transform duration-300">
          Leadership team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {leadershipTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 group">
               <div className="w-48 h-48 rounded-full overflow-hidden bg-[#F9F6F0] border-[6px] border-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               </div>
               <div className="transform transition-transform duration-300 group-hover:translate-y-1">
                 <h3 className="font-display font-black text-2xl text-[#2D1457]">{member.name}</h3>
                 <p className="font-body font-bold text-lg text-[#2D1457]/70 mt-1">{member.role}</p>
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
    <section className="bg-[#2D1457] w-full py-20 lg:py-32" ref={revealRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-16 items-center">
        <div className="text-center space-y-4">
          <h2 className="font-display font-black text-4xl lg:text-6xl text-white leading-tight drop-shadow-sm hover:scale-105 transition-transform duration-300">
            Bingokids Child Development Council
          </h2>
          <p className="font-body text-xl text-white/80 font-medium">The good stuff built in from the very beginning.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {developmentCouncil.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 group">
               <div className="w-48 h-48 rounded-full overflow-hidden bg-white/10 border-[4px] border-transparent group-hover:border-[#00D4FF] shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-[-3deg] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="transform transition-transform duration-300 group-hover:translate-y-1">
                 <h3 className="font-display font-black text-2xl text-white">{member.name}</h3>
                 <p className="font-body font-medium text-[15px] leading-snug text-[#00D4FF] mt-2 max-w-[200px] mx-auto">{member.role}</p>
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
    <section className="bg-[#F9F6F0] w-full py-20 lg:py-28 relative overflow-hidden" ref={revealRef}>
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
          <h2 className="font-display font-black text-5xl lg:text-7xl text-[#2D1457] leading-tight drop-shadow-sm">
            Award-winning,<br/>again & again.
          </h2>
          <p className="font-body text-xl lg:text-2xl text-[#2D1457]/80 font-medium">
            Recognized globally for safety and innovation.
          </p>
        </div>
        
        {/* Mascot Image with Decor */}
        <div className="relative inline-flex justify-center w-full max-w-4xl mx-auto mt-2 px-6">
          <div className="absolute top-10 left-[10%] text-[#FF9900] text-3xl animate-float" style={{ animationDelay: '0s' }}>★</div>
          <div className="absolute top-24 right-[10%] text-[#00D4FF] text-2xl animate-float" style={{ animationDelay: '1s' }}>✦</div>
          <div className="absolute bottom-16 left-[5%] text-[#FF3366] text-4xl animate-float" style={{ animationDelay: '0.5s' }}>✿</div>
          <div className="absolute bottom-8 right-[5%] text-[#2D1457] text-3xl animate-float" style={{ animationDelay: '1.5s' }}>★</div>

          <img src="/awards-hero-new.png" alt="Mascot holding trophy" className="w-[90%] max-w-[700px] h-auto object-contain z-10 relative drop-shadow-lg" />
        </div>
        
        {/* Infinite Marquee Slide Show */}
        <div className="w-full overflow-hidden bg-[#F9F6F0] py-6 relative my-4">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F9F6F0] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F9F6F0] to-transparent z-20 pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* We render the sequence twice to create a seamless loop */}
            {[1, 2].map((set) => (
              <div key={set} className="flex justify-around items-center">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-12 mx-6">
                    <span className="font-display font-medium text-3xl text-[#2D1457] whitespace-nowrap">{award}</span>
                    {/* Laurel SVG icon */}
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-[#FFB800] drop-shadow-sm">
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
        
        {/* 3D Purple CTA Button */}
        <div className="mt-2 px-6 pb-8">
          <Button as="a" href="/awards" variant="primary" className="bg-[#7852FF] text-white font-bold text-xl px-12 py-5 rounded-full border-2 border-[#5433C7] shadow-[0_6px_0_#5433C7] hover:translate-y-[4px] hover:shadow-[0_2px_0_#5433C7] transition-all">
            See what we've won
          </Button>
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <LeadershipSection />
      <CouncilSection />
      <AwardsSection />
      <Footer qrBgColorClass="bg-brand-cream" />
    </>
  );
};

export default AboutUsPage;
