
import { Footer } from '../../components/layout/Footer';
import { Carousel } from '../../components/common/Carousel';
import { Button } from '../../components/common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogPosts, deepDivePosts, pressMentions } from '../../data/news.data';

const HeroSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-green w-full pt-16 pb-32 relative overflow-hidden" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <h1 className="font-display font-bold text-6xl lg:text-[150px] text-brand-purple uppercase tracking-tight leading-none">
            NEWS
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-white/20 flex items-center justify-center">
             <span className="text-8xl">📰</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: any }) => (
  <a href={post.link} className="flex flex-col gap-4 group cursor-pointer">
    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-brand-cream relative">
      <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-multiply" />
      <div className="absolute top-4 left-4 bg-white text-brand-purple px-4 py-2 rounded-full font-body font-bold text-sm">
        {post.tag}
      </div>
    </div>
    <h3 className="font-body font-bold text-2xl text-brand-purple group-hover:text-brand-purpleAccent transition-colors line-clamp-2 leading-tight">
      {post.title}
    </h3>
  </a>
);

const BlogSection = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="bg-brand-mint w-full py-16 lg:py-24" ref={revealRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple">Blog</h2>
          <Button as="a" href="#" variant="primary">See More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => <BlogCard key={i} post={post} />)}
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
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col gap-12 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pr-6 lg:pr-12">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-brand-purple">In the media</h2>
          <Button as="a" href="#" variant="purple">Check our latest Press Releases</Button>
        </div>
        <Carousel 
          items={pressMentions}
          showArrow={true}
          renderItem={(mention) => (
            <div className="bg-brand-cream rounded-3xl p-8 flex flex-col justify-between gap-8 h-full min-h-[250px]">
               <h3 className="font-body font-bold text-2xl lg:text-3xl text-brand-purple leading-tight">
                 {mention.title}
               </h3>
               <div className="flex items-center justify-between mt-auto">
                 <span className="font-body font-bold text-brand-purple/60">{mention.outlet}</span>
                 <div className="w-8 h-8 rounded-full border border-brand-purple/20 flex items-center justify-center">{'→'}</div>
               </div>
            </div>
          )}
        />
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
