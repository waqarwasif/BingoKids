import type { HeroContent, FeatureCard, Testimonial } from '../types/content.types';

export const homeHero: HeroContent = {
  heading: 'Ultimate kids entertainment',
  subheading: 'The home of outstanding content without compromise.',
  button: { label: 'Download free', href: '#' },
  secondaryButton: { label: 'FUN THIS WAY', href: '#' },
  video: 'https://lingokids.com/wp-content/uploads/2025/04/lk_AppPreview_ENG_1920x1080_v2-1.mp4',
};

export const homeFeatures: FeatureCard[] = [
  {
    title: 'Game on',
    description: 'Action-packed games for thrill seekers (and skill seekers).',
    image: 'https://lingokids.com/wp-content/uploads/2026/04/play-1.svg',
  },
  {
    title: 'Tune in',
    description: 'Award-winning shows with your kid’s favorite characters.',
    image: 'https://lingokids.com/wp-content/uploads/2026/04/stream-1.svg',
  },
  {
    title: 'Turn it up',
    description: 'Can’t stop sing-alongs and podcasts to inspire.',
    image: 'https://lingokids.com/wp-content/uploads/2026/04/listen-1.svg',
  }
];

export const homeTestimonials: Testimonial[] = [
  {
    type: 'review',
    title: "My 2yo can't get enough!",
    text: "It helps my guilt about screen time because I feel she's actually learning unlike other apps.",
    author: "Emily",
  },
  {
    type: 'photo',
    image: "https://lingokids.com/wp-content/uploads/2026/03/dad-girl.jpg",
  },
  {
    type: 'review',
    title: "My daughters love this app!",
    text: "My 2nd grader and kindergartner are getting such good grades because of this app!",
    author: "Layla",
  },
  {
    type: 'review',
    title: "A lifesaver for long trips!",
    text: "This app has been amazing for keeping my kids entertained and learning during our travels.",
    author: "Sarah",
  },
  {
    type: 'photo',
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];
