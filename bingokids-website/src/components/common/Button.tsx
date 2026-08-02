import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'purple' | 'pink';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  as = 'button', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-display font-bold text-lg rounded-full px-8 py-4 transition-all duration-300 ease-out select-none';
  
  const variants = {
    primary: 'bg-brand-orange text-brand-purple border-[3.5px] border-brand-purple shadow-[6px_6px_0_0_#211242] hover:shadow-[0px_0px_0_0_#211242] hover:translate-x-[6px] hover:translate-y-[6px]', // Neo-brut UI
    secondary: 'bg-gradient-to-b from-[#a770ff] to-[#7a35ff] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(122,53,255,0.4)] hover:shadow-[inset_0_4px_8px_rgba(255,255,255,0.7),0_12px_24px_rgba(122,53,255,0.6)] hover:-translate-y-1 border border-[#b388ff]', // Skeuomo/Chrome UI
    purple: 'bg-[#2E1A47] text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_rgba(139,92,246,1),inset_0_0_15px_rgba(139,92,246,0.4)] border-2 border-[#8b5cf6]/50 hover:border-[#8b5cf6] hover:-translate-y-1', // Glow/Neon UI
    pink: 'bg-white/40 backdrop-blur-md text-brand-purple border-[2px] border-white/60 shadow-[0_8px_32px_rgba(255,102,153,0.25)] hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(255,102,153,0.4)] hover:-translate-y-1', // Glass UI
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
