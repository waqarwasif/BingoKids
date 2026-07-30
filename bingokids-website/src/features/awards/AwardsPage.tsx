
import { Footer } from '../../components/layout/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { biggestWins, bestOfTheRest } from '../../data/awards.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-pink w-full py-16 lg:py-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <h1 className="font-display font-bold text-6xl lg:text-[150px] text-brand-purple uppercase tracking-tight leading-none relative">
            <span className="relative z-10">AWARDS</span>
            <div className="absolute -inset-8 bg-brand-yellowPale/40 rounded-[100px] z-0 blur-xl"></div>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-white/20 flex items-center justify-center relative shadow-xl border-4 border-brand-purple/5">
             <span className="text-8xl">🏆</span>
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center text-4xl transform rotate-12 shadow-lg">
               ⭐
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BiggestWinsSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-yellowPale w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple text-center">
          Our biggest wins
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {biggestWins.map((award, i) => (
             <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center p-4">
                  <img src={award.logo} alt={award.name} className="w-full h-full object-contain mix-blend-multiply opacity-50" />
                </div>
                <span className="font-body font-bold text-brand-purple text-lg text-center max-w-[150px]">{award.name}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestOfRestSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-16 lg:py-32" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple text-center">
          Best of the rest
        </h2>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {bestOfTheRest.map((award, i) => (
            <div key={i} className="flex items-center gap-4 border-b border-brand-purple/10 pb-4">
              <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className="font-body font-bold text-xl text-brand-purple">{award}</span>
            </div>
          ))}
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
