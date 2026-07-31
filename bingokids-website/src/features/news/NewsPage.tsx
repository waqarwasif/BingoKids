
import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogPosts, deepDivePosts, pressMentions } from '../../data/news.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="w-full relative overflow-hidden bg-[#4ade80]" ref={revealRef}>
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

const BlogCard = ({ post }: { post: any }) => (
  <a href={post.link} className="flex flex-col gap-4 group cursor-pointer">
    <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md group-hover:shadow-[0_20px_40px_rgba(46,26,71,0.2)] transition-all duration-500 transform group-hover:-translate-y-3 relative">
      <img src={post.image} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
      <div className="absolute inset-0 bg-brand-purple/0 group-hover:bg-brand-purple/5 transition-colors duration-500 pointer-events-none"></div>
    </div>
    <div className="flex flex-col gap-2 mt-2 px-1 transform transition-all duration-500 group-hover:translate-x-1">
      <p className="font-body text-sm text-brand-purple/70 leading-snug">
        {post.tag}
      </p>
      <h3 className="font-body font-bold text-2xl lg:text-[28px] text-brand-purple group-hover:text-brand-purpleAccent transition-colors duration-300 line-clamp-3 leading-tight">
        {post.title}
      </h3>
    </div>
  </a>
);

const BlogSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-mint w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-purple">Blog</h2>
          <p className="font-body text-xl lg:text-2xl text-brand-purple/80 mt-2">
            Latest stories from inside Lingokids.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 w-full">
          {blogPosts.map((post, i) => <BlogCard key={i} post={post} />)}
        </div>
        <div className="mt-4">
          <Button as="a" href="#" variant="purple">See More</Button>
        </div>
      </div>
    </section>
  );
};

const DiveDeeperSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-cream w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple">Dive deeper</h2>
          <Button as="a" href="#" variant="secondary">See More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {deepDivePosts.map((post, i) => <BlogCard key={i} post={post} />)}
        </div>
      </div>
    </section>
  );
};

const InTheMediaSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-orange w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple">In the media</h2>
          <Button as="a" href="#" variant="purple">Check our latest Press Releases</Button>
        </div>
        <div className="relative px-2">
          <Carousel 
            items={pressMentions}
            showArrow={true}
            renderItem={(mention) => (
              <div className="bg-brand-cream rounded-[2rem] p-8 flex flex-col justify-between gap-8 h-full min-h-[250px] group cursor-pointer hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(46,26,71,0.2)] transition-all duration-500 border-2 border-transparent hover:border-brand-purple/10">
                 <h3 className="font-body font-bold text-2xl lg:text-3xl text-brand-purple leading-tight group-hover:text-brand-purpleAccent transition-colors duration-300">
                   "{mention.title}"
                 </h3>
                 <div className="flex items-center justify-between mt-auto">
                   <span className="font-body font-bold text-brand-purple/60 group-hover:text-brand-purple transition-colors duration-300">{mention.outlet}</span>
                   <div className="w-10 h-10 rounded-full border-2 border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple group-hover:-rotate-45 transition-all duration-500 shadow-sm">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="bg-brand-cyan w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-16 items-center">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple text-center">Press pack</h2>
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
