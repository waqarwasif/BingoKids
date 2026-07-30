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
  return (
    <section className="bg-[#F9F6F0] w-full py-24 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Animated floating background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] text-[#FF9900] text-4xl animate-float" style={{ animationDelay: '0s' }}>★</div>
        <div className="absolute top-[15%] right-[15%] text-[#00D4FF] text-3xl animate-float" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute bottom-[20%] left-[20%] text-[#FF3366] text-5xl animate-float" style={{ animationDelay: '0.5s' }}>✿</div>
        <div className="absolute bottom-[30%] right-[10%] text-[#2D1457] text-4xl animate-float" style={{ animationDelay: '1.5s' }}>★</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-12 relative z-10">
        <div className="relative group cursor-pointer">
           <div className="w-40 h-40 bg-[#FFD700]/20 rounded-full flex items-center justify-center text-7xl absolute inset-0 animate-ping opacity-50"></div>
           <div className="w-40 h-40 bg-[#FFD700] rounded-full flex items-center justify-center text-7xl shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 animate-float relative z-10">
             🏆
           </div>
        </div>
        
        <h2 className="font-display font-black text-5xl lg:text-7xl text-[#2D1457] max-w-3xl leading-tight">
          Award-winning,<br/>again & again.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mt-4">
           <div className="px-6 py-3 bg-[#FF3366] text-white font-display font-bold text-xl rounded-full border-[3px] border-white shadow-lg transform rotate-[-3deg] hover:scale-110 hover:rotate-0 transition-all cursor-default">Mom's Choice</div>
           <div className="px-6 py-3 bg-[#00D4FF] text-[#2D1457] font-display font-bold text-xl rounded-full border-[3px] border-white shadow-lg transform rotate-[2deg] hover:scale-110 hover:rotate-0 transition-all cursor-default">PTPA Top Product</div>
           <div className="px-6 py-3 bg-[#FF9900] text-[#2D1457] font-display font-bold text-xl rounded-full border-[3px] border-white shadow-lg transform rotate-[-1deg] hover:scale-110 hover:rotate-0 transition-all cursor-default">Good Housekeeping</div>
           <div className="px-6 py-3 bg-[#2D1457] text-white font-display font-bold text-xl rounded-full border-[3px] border-white shadow-lg transform rotate-[4deg] hover:scale-110 hover:rotate-0 transition-all cursor-default">TIME</div>
           <div className="px-6 py-3 bg-[#00C2A8] text-white font-display font-bold text-xl rounded-full border-[3px] border-white shadow-lg transform rotate-[-2deg] hover:scale-110 hover:rotate-0 transition-all cursor-default">Fast Company</div>
        </div>
        
        <div className="mt-8">
          <Button as="a" href="/awards" variant="primary" className="bg-[#FF3366] text-white hover:bg-[#E62E5C] text-xl px-10 py-5 rounded-full shadow-[0_8px_0_#C21B47] hover:translate-y-1 hover:shadow-[0_4px_0_#C21B47] transition-all">
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
