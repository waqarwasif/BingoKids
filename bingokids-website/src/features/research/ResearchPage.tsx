import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { learningFeatures, proofReports, independentStudies } from '../../data/research.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full relative overflow-hidden bg-[#FF8A00]" ref={revealRef}>
      <h1 className="sr-only">Research</h1>
      <div className="w-full max-w-[1600px] mx-auto flex justify-center items-end">
        <img 
          src="/research-hero.jpg" 
          alt="Research Hero - Smart mouse with magnifying glass"
          className="w-full max-h-[600px] md:max-h-[700px] object-cover lg:object-contain object-center"
        />
      </div>
    </section>
  );
};

const LearningStandardSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-brand-purple text-center">
          Learning as standard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-5xl">
          {learningFeatures.map((feature, i) => (
             <div key={i} className="bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center gap-6 shadow-md border-4 border-transparent hover:border-[#FF8A00] hover:shadow-[0_20px_40px_rgba(255,138,0,0.2)] hover:-translate-y-3 transition-all duration-500 group cursor-pointer h-full min-h-[240px]">
                <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:bg-[#FF8A00]/10">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-body font-bold text-xl lg:text-2xl text-brand-purple group-hover:text-[#FF8A00] transition-colors duration-300">{feature.title}</h3>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProofSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#fbd15f] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-brand-purple px-6 lg:px-0">
          Proof behind the play
        </h2>
        <Carousel 
          items={proofReports}
          showArrow={true}
          renderItem={(report) => (
            <a href={report.link} className="block h-full group">
              <div className="bg-white rounded-[32px] overflow-hidden h-full flex flex-col shadow-sm border border-brand-purple/5 hover:shadow-lg transition-shadow">
                 <div className="w-full h-48 bg-brand-cream relative">
                    <img src={report.image} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity" />
                 </div>
                 <div className="p-8 flex flex-col gap-4 flex-grow">
                   <h3 className="font-body font-bold text-2xl text-brand-purple leading-tight group-hover:text-brand-purpleAccent transition-colors">
                     {report.title}
                   </h3>
                   <p className="font-body text-brand-purple/70">
                     {report.description}
                   </p>
                   <div className="mt-auto pt-4 flex justify-end">
                      <span className="w-10 h-10 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        {'↓'}
                      </span>
                   </div>
                 </div>
              </div>
            </a>
          )}
        />
      </div>
    </section>
  );
};

const IndependentSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#ff6eb8] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-brand-purple px-6 lg:px-0">
          Independent research
        </h2>
        <Carousel 
          items={independentStudies}
          showArrow={true}
          renderItem={(study) => (
            <a href={study.link} className="block h-full group">
              <div className="bg-white rounded-[32px] overflow-hidden h-full flex flex-col shadow-sm border border-brand-purple/5 hover:shadow-lg transition-shadow">
                 <div className="w-full h-48 bg-brand-cream relative">
                    <img src={study.image} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity" />
                 </div>
                 <div className="p-8 flex flex-col gap-4 flex-grow">
                   <h3 className="font-body font-bold text-2xl text-brand-purple leading-tight group-hover:text-brand-purpleAccent transition-colors">
                     {study.title}
                   </h3>
                   <p className="font-body text-brand-purple/70">
                     {study.description}
                   </p>
                   <div className="mt-auto pt-4 flex justify-end">
                      <span className="w-10 h-10 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                      {'→'}
                    </span>
                   </div>
                 </div>
              </div>
            </a>
          )}
        />
      </div>
    </section>
  );
};

const ResearchPage = () => {
  return (
    <>
      <HeroSection />
      <LearningStandardSection />
      <ProofSection />
      <IndependentSection />
      <Footer qrBgColorClass="bg-brand-pink" />
    </>
  );
};

export default ResearchPage;
