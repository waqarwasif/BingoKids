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
  const baseClasses = 'inline-flex items-center justify-center font-body font-bold text-lg rounded-full px-8 py-4 transition-transform hover:scale-[1.02] active:scale-95';
  
  const variants = {
    primary: 'bg-brand-orangeCta text-brand-purple shadow-[0_4px_0_0_#d69e12]',
    purple: 'bg-brand-purpleAccent text-brand-white shadow-[0_4px_0_0_#4a37bd]',
    secondary: 'bg-brand-purple text-brand-white shadow-[0_4px_0_0_#211242]',
    pink: 'bg-[#ffbdf4] text-brand-purple shadow-[0_4px_0_0_#d390c7] hover:bg-[#ffcbf7]',
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
