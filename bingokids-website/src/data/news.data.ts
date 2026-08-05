import type { BlogPost, PressMention } from '../types/content.types';

export const blogPosts: BlogPost[] = [
  { tag: 'Parenting', title: 'Top 5 Activities for Kids', image: '/parenting.jpg', link: '#' },
  { tag: 'Education', title: 'How to teach a toddler to read', image: '/education.jpg', link: '#' },
  { tag: 'Screen Time', title: 'Managing screen time effectively', image: '/screen-time.jpg', link: '#' },
];

export const deepDivePosts: BlogPost[] = [
  { tag: 'Learning', title: 'Why Play is Important', image: '/playing-kids.jpg', link: '#' },
  { tag: 'News', title: 'Kidzee wins new award', image: '/bingo-award.jpg', link: '#' },
  { tag: 'Parenting', title: 'Dealing with tantrums', image: '/tantrums.jpg', link: '#' },
  { tag: 'Health', title: 'Healthy snacks for kids', image: '/healthy-snacks.jpg', link: '#' },
  { tag: 'Activities', title: 'Indoor games for rainy days', image: '/indoor-games.jpg', link: '#' },
  { tag: 'Education', title: 'Math games for 5-year-olds', image: '/math-games.jpg', link: '#' },
];

export const pressMentions: PressMention[] = [
  { title: 'Kidzee is a pre-switch treat...', outlet: 'The New York Times', link: '#', logo: '/education.jpg' },
  { title: 'The perfect app for toddlers...', outlet: 'TechCrunch', link: '#', logo: '/playing-kids.jpg' },
  { title: 'Making learning fun and engaging.', outlet: 'Forbes', link: '#', logo: '/indoor-games.jpg' },
  { title: 'A safe space for digital play.', outlet: 'Wired', link: '#', logo: '/math-games.jpg' },
];
