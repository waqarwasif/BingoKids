import React from 'react';
import { Link } from 'react-router-dom';
import { QrDownloadCard } from '../common/QrDownloadCard';
import { footerData } from '../../data/footer.data';

interface FooterProps {
  qrBgColorClass?: string;
  showQrCard?: boolean;
  footerBgColorClass?: string;
  footerTextColorClass?: string;
  footerHeadingColorClass?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  qrBgColorClass = 'bg-brand-cream', 
  showQrCard = false,
  footerBgColorClass = 'bg-[#0066FF]',
  footerTextColorClass = 'text-white',
  footerHeadingColorClass = 'text-[#FFD600]'
}) => {
  return (
    <footer className={`w-full ${footerBgColorClass} ${footerTextColorClass} transition-colors duration-500`}>
      {showQrCard && <QrDownloadCard bgColorClass={qrBgColorClass} />}
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-24">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <h4 className={`font-body font-black text-sm tracking-widest ${footerHeadingColorClass} uppercase drop-shadow-sm`}>GET KIDZEE</h4>
            <ul className="flex flex-col gap-4">
              {footerData.getKidzee.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-current hover:opacity-70 transition-opacity">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className={`font-body font-black text-sm tracking-widest ${footerHeadingColorClass} uppercase drop-shadow-sm`}>CONTACT US</h4>
            <ul className="flex flex-col gap-4">
              {footerData.contactUs.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body font-bold text-lg text-current hover:opacity-70 transition-opacity">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className={`font-body font-black text-sm tracking-widest ${footerHeadingColorClass} uppercase drop-shadow-sm`}>FOR EDUCATORS</h4>
            <ul className="flex flex-col gap-4">
              {footerData.forEducators.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-current hover:opacity-70 transition-opacity">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <h4 className={`font-body font-black text-sm tracking-widest ${footerHeadingColorClass} uppercase drop-shadow-sm`}>FOLLOW US</h4>
            <ul className="flex flex-col gap-4">
              {footerData.followUs.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-current hover:opacity-70 transition-opacity">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <Link to="/" className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-current hover:opacity-90 transition-opacity">
            Kidzee
          </Link>
        </div>
        
        {/* Legal */}
        <div className="border-t border-current/20 pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {footerData.legal.map(link => (
            <a key={link.label} href={link.href} className="font-body font-bold text-sm text-current opacity-70 hover:opacity-100 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
