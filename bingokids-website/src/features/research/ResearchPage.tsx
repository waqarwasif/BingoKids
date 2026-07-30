import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { learningFeatures, proofReports, independentStudies } from '../../data/research.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-orange w-full pt-16 pb-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <h1 className="font-display font-bold text-6xl lg:text-[120px] text-brand-purple uppercase tracking-tight leading-none">
            RESEARCH
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-white/20 flex items-center justify-center border-4 border-brand-purple/10">
             <span className="text-8xl">🕵️‍♀️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LearningStandardSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple text-center">
          Learning as standard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-5xl">
          {learningFeatures.map((feature, i) => (
             <div key={i} className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-6 shadow-sm border border-brand-purple/5 hover:-translate-y-2 transition-transform">
                <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center text-4xl">
                  {feature.icon}
                </div>
                <h3 className="font-body font-bold text-xl text-brand-purple">{feature.title}</h3>
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
    <section className="bg-brand-yellowPale w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple px-6 lg:px-0">
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
    <section className="bg-brand-pink w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple px-6 lg:px-0">
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
