
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

  return (
    <section className="bg-brand-yellowPale w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16">
        <div className="text-center">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple">
            Our biggest wins
          </h2>
          <p className="font-body text-xl lg:text-2xl text-brand-purple/80 mt-4">
            Setting the standard for world-class entertainment.
          </p>
        </div>
        
        <div className="w-full flex flex-col gap-6">
          {/* Top row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto justify-items-center">
            {topRow.map((award, i) => (
               <div key={i} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-brand-purple/20 border-2 border-transparent hover:border-brand-purple/10 transform transition-all duration-500 hover:-translate-y-3 w-full max-w-[280px] aspect-square flex items-center justify-center group cursor-pointer">
                  <img 
                    src={award.logo} 
                    alt={award.name} 
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" 
                  />
               </div>
            ))}
          </div>
          
          {/* Bottom row: 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[660px] mx-auto justify-items-center">
            {bottomRow.map((award, i) => (
               <div key={`bottom-${i}`} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-brand-purple/20 border-2 border-transparent hover:border-brand-purple/10 transform transition-all duration-500 hover:-translate-y-3 w-full max-w-[280px] aspect-square flex items-center justify-center group cursor-pointer">
                  <img 
                    src={award.logo} 
                    alt={award.name} 
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2" 
                  />
               </div>
            ))}
          </div>
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
