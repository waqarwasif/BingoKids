import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full border border-brand-purple/10 bg-brand-white text-brand-purple font-body font-bold text-sm ${className}`}>
      {children}
    </div>
  );
};
