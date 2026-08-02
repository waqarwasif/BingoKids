import type { HeroContent, FeatureCard, Testimonial } from '../types/content.types';

export const homeHero: HeroContent = {
  heading: 'Ultimate kids entertainment',
  subheading: 'The home of outstanding content without compromise.',
  button: { label: 'Download free', href: '#' },
  secondaryButton: { label: 'FUN THIS WAY', href: '#' },
  video: '/home-video.mp4',
};

export const homeFeatures: FeatureCard[] = [
  {
    title: 'Game on',
    description: 'Action-packed games for thrill seekers (and skill seekers).',
    image: '/game-on.jpg',
  },
  {
    title: 'Tune in',
    description: 'Award-winning shows with your kid’s favorite characters.',
    image: '/tune-in.jpg',
  },
  {
    title: 'Turn it up',
    description: 'Can’t stop sing-alongs and podcasts to inspire.',
    image: '/turn-it-up.jpg',
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
    image: "/dad-girl-study.jpg",
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
    image: "/child-bubble.jpg",
  }
];
