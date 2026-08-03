
import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogPosts, deepDivePosts, pressMentions } from '../../data/news.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full relative overflow-hidden bg-[#bde22a] pt-[120px] lg:pt-[140px]" ref={revealRef}>
      <h1 className="sr-only">News</h1>
      <div className="w-full max-w-[1600px] mx-auto flex justify-center items-end">
        <img 
          src="/news-hero.png" 
          alt="News Hero - Panda reading a newspaper"
          className="w-full max-h-[600px] md:max-h-[700px] object-cover lg:object-contain object-center"
        />
      </div>
    </section>
  );
};

const cardStyles = [
  { border: 'border-[#ff8a00]', bg: 'bg-[#ff8a00]', shadow: 'shadow-[#ff8a00]/25', shift: 'lg:mt-12' },
  { border: 'border-[#0284c7]', bg: 'bg-[#0284c7]', shadow: 'shadow-[#0284c7]/25', shift: 'lg:mt-0' },
  { border: 'border-[#ff6eb8]', bg: 'bg-[#ff6eb8]', shadow: 'shadow-[#ff6eb8]/25', shift: 'lg:mt-12' },
];

const BlogCard = ({ post, index = 0 }: { post: any, index?: number }) => {
  const style = cardStyles[index % cardStyles.length];
  
  return (
    <a href={post.link} className={`flex flex-col gap-5 group cursor-pointer pt-4 items-start w-full transition-transform duration-500 hover:-translate-y-2 ${style.shift}`}>
      <div className={`relative w-full pt-[70%] rounded-[2rem] border-[6px] ${style.border} bg-white shadow-xl ${style.shadow} overflow-hidden transition-shadow duration-500 group-hover:shadow-2xl`}>
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-5 py-2 rounded-full border-[3px] border-white ${style.bg} shadow-md z-10`}>
          <span className="font-display font-bold text-white text-sm md:text-base tracking-wide shadow-sm drop-shadow-sm">
            {post.tag}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col px-2 text-left w-full mt-2">
        <h3 className="font-display font-bold text-2xl lg:text-[28px] text-[#162a45] group-hover:text-[#0284c7] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
      </div>
    </a>
  );
};

const BlogSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-[#a3edf8] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-80 text-[#162a45]">
        {/* Bottom left flower */}
        <div className="absolute bottom-32 left-8 md:left-24 transform -rotate-12">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path><path d="M12 22c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"></path><path d="M22 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"></path><path d="M2 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path></svg>
        </div>
        
        {/* Bottom right speech bubble */}
        <div className="absolute bottom-20 right-8 md:right-24 transform -rotate-6">
          <svg width="100" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M10 14c1.5 1.5 3.5 1.5 5 0"></path></svg>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 lg:gap-20 items-center relative z-10">
        <div className="flex flex-col items-center gap-4 text-center relative w-full max-w-2xl mx-auto mt-8">
          {/* Top Right Doodles relative to the header */}
          <div className="absolute -top-12 -right-8 md:-right-16 transform rotate-[15deg] text-[#162a45] opacity-80">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div className="absolute top-0 -right-24 md:-right-36 transform rotate-45 text-[#162a45] opacity-80">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-brand-purple tracking-tight drop-shadow-sm">Blog</h2>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-brand-purple/80">
            Latest stories from inside Bingokids.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 lg:gap-12 w-full mt-4 items-start">
          {blogPosts.map((post, i) => <BlogCard key={i} post={post} index={i} />)}
        </div>
        
        <div className="mt-12 relative z-20">
          <Button as="a" href="#" variant="purple" className="px-12 py-4 text-xl">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

const diveStyles = [
  { ring: 'ring-[#ff8a00]/40', bg: 'bg-[#ff8a00]' },
  { ring: 'ring-[#0284c7]/40', bg: 'bg-[#0284c7]' },
  { ring: 'ring-[#ff6eb8]/40', bg: 'bg-[#ff6eb8]' },
];

const DiveDeeperCard = ({ post, index = 0 }: { post: any, index?: number }) => {
  const style = diveStyles[index % diveStyles.length];
  
  return (
    <a href={post.link} className="flex flex-col gap-4 group cursor-pointer w-full hover:-translate-y-2 transition-transform duration-500">
      <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-md ring-4 ${style.ring} transition-shadow duration-500 group-hover:shadow-xl`}>
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" />
        
        {/* Category Badge - Bottom Left Overlapping */}
        <div className={`absolute bottom-3 left-3 px-4 py-1.5 rounded-full ${style.bg} shadow-sm z-10`}>
          <span className="font-display font-bold text-white text-xs md:text-sm tracking-wide">
            {post.tag}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col px-1 text-left w-full mt-1">
        <h3 className="font-display font-bold text-xl lg:text-2xl text-[#162a45] group-hover:text-[#0284c7] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
      </div>
    </a>
  );
};

const DiveDeeperSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-16 lg:py-24 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative">
             {/* Small doodle accent next to heading */}
             <div className="absolute -top-6 -right-10 transform rotate-[15deg] text-[#ff8a00] opacity-80">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
             </div>
             <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-brand-purple relative z-10">Dive deeper</h2>
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
    <section className="bg-[#ff8a00] w-full py-20 lg:py-32 relative overflow-hidden" ref={revealRef}>
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-black">
        <svg className="absolute top-10 left-10 w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        <svg className="absolute bottom-10 right-20 w-32 h-32" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="relative text-center md:text-left">
             {/* Megaphone doodle accent next to heading */}
             <div className="absolute -top-8 -right-12 md:-right-16 transform rotate-[15deg] text-[#162a45] opacity-80 hidden sm:block">
               <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 10.5V14"></path><path d="M11 7h4l6 3-6 3h-4v-6z"></path><path d="M3 10h4v4H3v-4z"></path><path d="M7 14v4l4-2"></path></svg>
             </div>
             <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-[#162a45] relative z-10 drop-shadow-sm">In the media</h2>
          </div>
          
          <Button as="a" href="#" variant="pink" className="gap-3 whitespace-nowrap px-8 py-4 text-lg">
            Check our latest Press Releases
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
              <div className="bg-[#f0f9ff] rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between gap-10 h-full min-h-[300px] group cursor-pointer hover:-translate-y-4 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(22,42,69,0.2)] transition-all duration-500 relative overflow-hidden border-[6px] border-white">
                 
                 {/* Giant Quote Watermark */}
                 <div className="absolute -top-6 -left-2 text-[#0284c7] opacity-10 font-display text-[180px] leading-none select-none pointer-events-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    "
                 </div>

                 <h3 className="font-display font-bold text-2xl lg:text-[32px] text-[#162a45] leading-tight relative z-10 group-hover:text-[#0284c7] transition-colors duration-300">
                   {mention.title}
                 </h3>
                 
                 <div className="flex items-center justify-between mt-auto relative z-10 pt-6 border-t-2 border-black/5">
                   <div className="flex items-center gap-4">
                     {mention.logo && (
                       <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-[3px] border-white shadow-md flex-shrink-0 bg-white">
                         <img src={mention.logo} alt={mention.outlet} className="w-full h-full object-cover" />
                       </div>
                     )}
                     <span className="font-display font-bold text-lg lg:text-xl text-brand-purple/80 group-hover:text-[#ff8a00] transition-colors duration-300">
                       {mention.outlet}
                     </span>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-white border-2 border-black/5 shadow-sm flex items-center justify-center text-[#162a45] group-hover:bg-[#ff8a00] group-hover:text-white group-hover:border-[#ff8a00] group-hover:-rotate-45 transition-all duration-500 flex-shrink-0">
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
    <section className="bg-[#fbd15f] w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 items-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-brand-purple text-center">Press pack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            { title: 'Media kit', btn: 'Download kit' },
            { title: 'Get in touch', btn: 'Contact us' },
            { title: 'Research & studies', btn: 'Learn more' }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center gap-6 text-center">
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-brand-purple/10">
                 <span className="text-4xl">📁</span>
               </div>
               <h3 className="font-body font-bold text-2xl text-brand-purple">{card.title}</h3>
               <Button as="a" href="#" variant="primary">{card.btn}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsPage = () => {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <DiveDeeperSection />
      <InTheMediaSection />
      <PressPackSection />
      <Footer qrBgColorClass="bg-brand-cyan" />
    </>
  );
};

export default NewsPage;
