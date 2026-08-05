import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { learningFeatures, proofReports, independentStudies } from '../../data/research.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh] relative overflow-hidden bg-gradient-to-b from-[#00E5FF] via-[#00B0FF] to-[#0066FF] pt-[115px] sm:pt-[135px] lg:pt-[155px] pb-8 sm:pb-12 flex flex-col justify-center items-center" ref={revealRef}>
      <h1 className="sr-only">Kidzee Research</h1>
      
      {/* Animated Water Bubbles & Floating Sparkles */}
      <div className="absolute top-20 left-[8%] text-[#FFD600] opacity-90 text-3xl sm:text-4xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
      <div className="absolute bottom-8 right-[10%] text-white opacity-90 text-4xl sm:text-5xl animate-pulse">✨</div>
      <div className="absolute top-1/3 right-[8%] w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-[6%] w-28 h-28 sm:w-40 sm:h-40 bg-[#00E676]/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="w-full max-w-[1400px] mx-auto flex justify-center items-center px-4 relative z-10 my-auto">
        <img 
          src="/research-hero.png" 
          alt="Research Hero - Smart mouse with magnifying glass"
          className="w-[92%] sm:w-[82%] md:w-full h-auto max-h-[55vh] lg:max-h-[700px] object-contain object-center drop-shadow-[0_20px_40px_rgba(0,43,102,0.4)] transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
};

const LearningStandardSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#00E676] via-[#00C853] to-[#004D40] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 lg:gap-16">
        <h2 className="font-superkindly text-3xl sm:text-5xl lg:text-7xl text-white text-center drop-shadow-md tracking-wide">
          Learning as <span className="text-[#FFD600]">standard</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-5xl">
          {learningFeatures.map((feature, i) => (
             <div key={i} className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center gap-6 shadow-xl border-4 border-white hover:border-[#FFD600] hover:shadow-[0_20px_40px_rgba(0,43,102,0.3)] hover:-translate-y-3 transition-all duration-500 group cursor-pointer h-full min-h-[240px]">
                <div className="w-20 h-20 bg-[#F4F9FF] rounded-full flex items-center justify-center text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-md border-2 border-[#00E676]">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-display font-black text-xl lg:text-2xl text-[#002B66] group-hover:text-[#00C853] transition-colors duration-300">{feature.title}</h3>
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
    <section className="bg-gradient-to-b from-[#FF1493] via-[#FF4081] to-[#D81B60] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-superkindly text-3xl sm:text-5xl lg:text-7xl text-white px-6 lg:px-0 drop-shadow-md tracking-wide">
          Proof behind the <span className="text-[#FFD600]">play</span>
        </h2>
        <Carousel 
          items={proofReports}
          showArrow={true}
          renderItem={(report) => (
            <a href={report.link} className="block h-full group">
              <div className="bg-white/95 backdrop-blur-md rounded-[32px] overflow-hidden h-full flex flex-col shadow-xl border-4 border-white hover:shadow-2xl transition-all">
                 <div className="w-full h-48 bg-[#F4F9FF] relative overflow-hidden">
                    <img src={report.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="p-8 flex flex-col gap-4 flex-grow">
                   <h3 className="font-display font-black text-2xl text-[#002B66] leading-tight group-hover:text-[#FF1493] transition-colors">
                     {report.title}
                   </h3>
                   <p className="font-body font-bold text-[#002B66]/80">
                     {report.description}
                   </p>
                   <div className="mt-auto pt-4 flex justify-end">
                      <span className="w-12 h-12 rounded-full border-2 border-[#FF1493] flex items-center justify-center text-[#FF1493] font-black group-hover:bg-[#FF1493] group-hover:text-white transition-colors shadow-md">
                        ↓
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
    <section className="bg-gradient-to-b from-[#FFD600] via-[#FF9800] to-[#FF7043] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <h2 className="font-superkindly text-3xl sm:text-5xl lg:text-7xl text-[#002B66] px-6 lg:px-0 drop-shadow-sm tracking-wide">
          Independent <span className="text-white">research</span>
        </h2>
        <Carousel 
          items={independentStudies}
          showArrow={true}
          renderItem={(study) => (
            <a href={study.link} className="block h-full group">
              <div className="bg-white/95 backdrop-blur-md rounded-[32px] overflow-hidden h-full flex flex-col shadow-xl border-4 border-white hover:shadow-2xl transition-all">
                 <div className="w-full h-48 bg-[#F4F9FF] relative overflow-hidden">
                    <img src={study.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="p-8 flex flex-col gap-4 flex-grow">
                   <h3 className="font-display font-black text-2xl text-[#002B66] leading-tight group-hover:text-[#FF7043] transition-colors">
                     {study.title}
                   </h3>
                   <p className="font-body font-bold text-[#002B66]/80">
                     {study.description}
                   </p>
                   <div className="mt-auto pt-4 flex justify-end">
                      <span className="w-12 h-12 rounded-full border-2 border-[#FF7043] flex items-center justify-center text-[#FF7043] font-black group-hover:bg-[#FF7043] group-hover:text-white transition-colors shadow-md">
                        →
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

export const ResearchPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <LearningStandardSection />
      <ProofSection />
      <IndependentSection />
      <Footer showQrCard={false} footerBgColorClass="bg-[#FF1493]" footerHeadingColorClass="bg-white text-[#FF1493] px-3 py-1.5 rounded-full w-fit" />
    </div>
  );
};

export default ResearchPage;
