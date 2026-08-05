export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  getKidzee: NavLink[];
  contactUs: NavLink[];
  forEducators: NavLink[];
  followUs: NavLink[];
  legal: NavLink[];
}

export interface HeroContent {
  heading: string;
  subheading?: string;
  button?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  image?: string;
  video?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  text?: string;
  author?: string;
  image?: string;
  title?: string;
  type?: 'review' | 'photo';
}

export interface Award {
  name: string;
  logo: string;
}

export interface PressMention {
  title: string;
  outlet: string;
  link: string;
  logo?: string;
}

export interface BlogPost {
  tag: string;
  title: string;
  image: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ResearchCard {
  title: string;
  description: string;
  image: string;
  link?: string;
}
