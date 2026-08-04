import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogPosts, deepDivePosts, pressMentions } from '../../data/news.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh] relative overflow-hidden bg-gradient-to-br from-[#F4A460] via-[#E08D49] to-[#FF7043] pt-[115px] sm:pt-[135px] lg:pt-[155px] pb-8 sm:pb-12 flex flex-col justify-center items-center" ref={revealRef}>
      <h1 className="sr-only">BingoKids News</h1>
      
      {/* Floating sparkles & stars */}
      <div className="absolute top-20 left-[10%] text-[#FFD600] opacity-90 text-3xl sm:text-4xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
      <div className="absolute bottom-8 right-[12%] text-white opacity-90 text-4xl sm:text-5xl animate-pulse">✨</div>
      <div className="absolute top-1/3 right-[8%] w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>

      <div className="w-full max-w-[1400px] mx-auto flex justify-center items-center px-4 relative z-10 my-auto">
        <img 
          src="/news-hero.png" 
          alt="News Hero - Panda reading a newspaper"
          className="w-[92%] sm:w-[82%] md:w-full h-auto max-h-[55vh] lg:max-h-[700px] object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
};

const cardStyles = [
  { border: 'border-[#00A86B]', bg: 'bg-[#00A86B]', shadow: 'shadow-[#00A86B]/20', shift: 'lg:mt-12', text: 'text-white' },
  { border: 'border-[#F4A460]', bg: 'bg-[#F4A460]', shadow: 'shadow-[#F4A460]/20', shift: 'lg:mt-0', text: 'text-[#002B66]' },
  { border: 'border-[#00A86B]', bg: 'bg-[#00A86B]', shadow: 'shadow-[#00A86B]/20', shift: 'lg:mt-12', text: 'text-white' },
];

const BlogCard = ({ post, index = 0 }: { post: any, index?: number }) => {
  const style = cardStyles[index % cardStyles.length];
  
  return (
    <a href={post.link} className={`flex flex-col gap-5 group cursor-pointer pt-4 items-start w-full transition-transform duration-500 hover:-translate-y-2 ${style.shift}`}>
      <div className={`relative w-full pt-[70%] rounded-[2rem] border-[6px] ${style.border} bg-white shadow-xl ${style.shadow} overflow-hidden transition-shadow duration-500 group-hover:shadow-2xl`}>
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-5 py-2 rounded-full border-[3px] border-white ${style.bg} shadow-md z-10`}>
          <span className={`font-display font-bold ${style.text} text-sm md:text-base tracking-wide drop-shadow-sm`}>
            {post.tag}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col px-2 text-left w-full mt-2">
        <h3 className="font-display font-bold text-2xl lg:text-[28px] text-[#002B66] group-hover:text-[#00A86B] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
      </div>
    </a>
  );
};

const BlogSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#F4F9FF] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 lg:gap-20 items-center relative z-10">
        <div className="flex flex-col items-center gap-4 text-center relative w-full max-w-2xl mx-auto mt-8">
          <h2 className="font-superkindly text-5xl sm:text-6xl lg:text-[80px] text-[#002B66] tracking-wide">
            Blog <span className="text-[#00A86B]">★</span>
          </h2>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-[#002B66]/80 font-bold">
            Latest stories from inside Bingokids.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 lg:gap-12 w-full mt-4 items-start">
          {blogPosts.map((post, i) => <BlogCard key={i} post={post} index={i} />)}
        </div>
        
        <div className="mt-12 relative z-20">
          <Button as="a" href="#" variant="primary" className="px-12 py-4 text-xl shadow-xl">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

const diveStyles = [
  { ring: 'ring-[#00A86B]/40', bg: 'bg-[#00A86B]', text: 'text-white' },
  { ring: 'ring-[#F4A460]/40', bg: 'bg-[#F4A460]', text: 'text-[#002B66]' },
  { ring: 'ring-[#00A86B]/40', bg: 'bg-[#00A86B]', text: 'text-white' },
];

const DiveDeeperCard = ({ post, index = 0 }: { post: any, index?: number }) => {
  const style = diveStyles[index % diveStyles.length];
  
  return (
    <a href={post.link} className="flex flex-col gap-4 group cursor-pointer w-full hover:-translate-y-2 transition-transform duration-500">
      <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-md ring-4 ${style.ring} transition-shadow duration-500 group-hover:shadow-xl`}>
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" />
        
        {/* Category Badge */}
        <div className={`absolute bottom-3 left-3 px-4 py-1.5 rounded-full ${style.bg} shadow-sm z-10`}>
          <span className={`font-display font-bold ${style.text} text-xs md:text-sm tracking-wide`}>
            {post.tag}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col px-1 text-left w-full mt-1">
        <h3 className="font-display font-bold text-xl lg:text-2xl text-white group-hover:text-[#FFD600] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
      </div>
    </a>
  );
};

const DiveDeeperSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#01b573] via-[#00897B] to-[#004D40] w-full py-16 lg:py-24 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative">
             <h2 className="font-superkindly text-4xl sm:text-5xl lg:text-7xl text-[#172965] relative z-10 drop-shadow-md tracking-wide">
               Dive deeper <span className="text-[#FFD600]"></span>
             </h2>
          </div>
          
          <Button as="a" href="#" variant="secondary" className="gap-2 px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg">
            See More
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {deepDivePosts.map((post, i) => <DiveDeeperCard key={i} post={post} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const InTheMediaSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-gradient-to-b from-[#F4A460] via-[#E08D49] to-[#FF7043] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="relative text-center md:text-left">
             <h2 className="font-superkindly text-5xl sm:text-6xl lg:text-[80px] text-white relative z-10 drop-shadow-md tracking-wide">
               In the <span className="text-[#21376c]">media</span>
             </h2>
          </div>
          
          <Button as="a" href="#" variant="pink" className="gap-3 whitespace-nowrap px-8 py-4 text-lg shadow-xl">
            Check our press releases
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </div>
        
        <div className="relative px-2 mt-4">
          <Carousel 
            items={pressMentions}
            showArrow={true}
            renderItem={(mention) => (
              <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between gap-10 h-full min-h-[300px] group cursor-pointer hover:-translate-y-4 shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-500 relative overflow-hidden border-[6px] border-white">
                 
                 <div className="absolute -top-6 -left-2 text-[#00A86B] opacity-15 font-display text-[180px] leading-none select-none pointer-events-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    "
                 </div>

                 <h3 className="font-display font-black text-2xl lg:text-[32px] text-[#002B66] leading-tight relative z-10 group-hover:text-[#00A86B] transition-colors duration-300">
                   {mention.title}
                 </h3>
                 
                 <div className="flex items-center justify-between mt-auto relative z-10 pt-6 border-t-2 border-black/5">
                   <div className="flex items-center gap-4">
                     {mention.logo && (
                       <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-[3px] border-white shadow-md flex-shrink-0 bg-white">
                         <img src={mention.logo} alt={mention.outlet} className="w-full h-full object-cover" />
                       </div>
                     )}
                     <span className="font-display font-bold text-lg lg:text-xl text-[#002B66] group-hover:text-[#00A86B] transition-colors duration-300">
                       {mention.outlet}
                     </span>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-white border-2 border-black/5 shadow-sm flex items-center justify-center text-[#002B66] group-hover:bg-[#00A86B] group-hover:text-white group-hover:border-[#00A86B] group-hover:-rotate-45 transition-all duration-500 flex-shrink-0">
                     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                   </div>
                 </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

const PressPackSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#FFFDF0] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 items-center">
        <h2 className="font-superkindly text-4xl sm:text-5xl lg:text-7xl text-[#002B66] text-center drop-shadow-sm tracking-wide">Press pack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            { title: 'Media kit', btn: 'Download kit' },
            { title: 'Get in touch', btn: 'Contact us' },
            { title: 'Research & studies', btn: 'Learn more' }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center gap-6 text-center bg-white p-8 rounded-3xl border-4 border-[#00A86B]/20 shadow-xl hover:scale-105 transition-transform duration-300">
               <div className="w-24 h-24 bg-[#00A86B]/20 rounded-full flex items-center justify-center border-4 border-[#00A86B]">
                 <span className="text-4xl">📁</span>
               </div>
               <h3 className="font-display font-black text-2xl text-[#002B66]">{card.title}</h3>
               <Button as="a" href="#" variant="primary" className="shadow-md">{card.btn}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const NewsPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <BlogSection />
      <DiveDeeperSection />
      <InTheMediaSection />
      <PressPackSection />
      <Footer showQrCard={false} footerBgColorClass="bg-[#00A86B]" footerHeadingColorClass="bg-white text-[#00A86B] px-3 py-1.5 rounded-full w-fit" />
    </div>
  );
};

export default NewsPage;
