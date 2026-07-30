import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';

export function useScrollReveal(options = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(ref.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
          ...options
        }
      }
    );
  }, { scope: ref });

  return ref;
}
