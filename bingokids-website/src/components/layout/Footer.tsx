import React from 'react';
import { Link } from 'react-router-dom';
import { QrDownloadCard } from '../common/QrDownloadCard';
import { footerData } from '../../data/footer.data';

interface FooterProps {
  qrBgColorClass?: string;
  showQrCard?: boolean;
  footerBgColorClass?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  qrBgColorClass = 'bg-brand-cream', 
  showQrCard = false,
  footerBgColorClass = 'bg-[#0066FF]'
}) => {
  return (
    <footer className={`w-full ${footerBgColorClass} text-white transition-colors duration-500`}>
      {showQrCard && <QrDownloadCard bgColorClass={qrBgColorClass} />}
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-24">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body font-black text-sm tracking-widest text-[#FFD600] uppercase drop-shadow-sm">GET BINGOKIDS</h4>
            <ul className="flex flex-col gap-4">
              {footerData.getBingokids.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-white hover:text-[#FFD600] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body font-black text-sm tracking-widest text-[#FFD600] uppercase drop-shadow-sm">CONTACT US</h4>
            <ul className="flex flex-col gap-4">
              {footerData.contactUs.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body font-bold text-lg text-white hover:text-[#FFD600] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body font-black text-sm tracking-widest text-[#FFD600] uppercase drop-shadow-sm">FOR EDUCATORS</h4>
            <ul className="flex flex-col gap-4">
              {footerData.forEducators.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-white hover:text-[#FFD600] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body font-black text-sm tracking-widest text-[#FFD600] uppercase drop-shadow-sm">FOLLOW US</h4>
            <ul className="flex flex-col gap-4">
              {footerData.followUs.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-body font-bold text-lg text-white hover:text-[#FFD600] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <Link to="/" className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-white hover:opacity-90 transition-opacity">
            Bingokids
          </Link>
        </div>
        
        {/* Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {footerData.legal.map(link => (
            <a key={link.label} href={link.href} className="font-body font-bold text-sm text-white/60 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
