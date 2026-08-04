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
  const baseClasses = 'inline-flex items-center justify-center font-display font-bold text-base sm:text-lg rounded-full px-6 py-3.5 sm:px-8 sm:py-4 transition-all duration-300 ease-out select-none text-center';
  
  const variants = {
    primary: 'bg-[#FFD600] text-[#002B66] border-[3.5px] border-[#002B66] shadow-[6px_6px_0_0_#002B66] hover:shadow-[0px_0px_0_0_#002B66] hover:translate-x-[6px] hover:translate-y-[6px]', // Poppy Yellow UI
    secondary: 'bg-gradient-to-b from-[#0066FF] to-[#0044CC] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,102,255,0.4)] hover:shadow-[inset_0_4px_8px_rgba(255,255,255,0.7),0_12px_24px_rgba(0,102,255,0.6)] hover:-translate-y-1 border border-[#00E5FF]', // Ocean Blue UI
    purple: 'bg-[#002B66] text-white shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.9)] border-2 border-[#00E5FF]/50 hover:border-[#00E5FF] hover:-translate-y-1', // Glow Navy UI
    pink: 'bg-[#FF1493] text-white border-[2px] border-white/60 shadow-[0_8px_32px_rgba(255,20,147,0.4)] hover:bg-[#D80073] hover:-translate-y-1', // Poppy Hot Pink UI
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
