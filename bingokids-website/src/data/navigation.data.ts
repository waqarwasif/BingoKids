import type { NavLink } from '../types/content.types';

export const navigation: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'OUR CONTENT', href: '/our-content' },
];

export const moreDropdown: NavLink[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Awards', href: '/awards' },
  { label: 'News', href: '/news' },
  { label: 'Research', href: '/research' },
];
