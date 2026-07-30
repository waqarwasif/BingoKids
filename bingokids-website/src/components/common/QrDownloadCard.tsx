import React from 'react';

interface QrDownloadCardProps {
  bgColorClass: string;
}

export const QrDownloadCard: React.FC<QrDownloadCardProps> = ({ bgColorClass }) => {
  return (
    <div className={`w-full py-16 lg:py-24 ${bgColorClass}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
           {/* Placeholder for parent-and-child photo */}
           <div className="w-full max-w-md aspect-[4/3] bg-brand-purple/10 rounded-[40px] overflow-hidden flex items-center justify-center">
             <span className="text-brand-purple/40 font-body font-bold text-lg">Parent & Child Photo</span>
           </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-purple">
            Scan to download for free
          </h2>
          <div className="flex items-center gap-8">
            {/* QR Code Placeholder */}
            <div className="w-32 h-32 bg-white p-4 rounded-xl shadow-sm border border-brand-purple/5 flex items-center justify-center">
              <span className="text-brand-purple font-body font-bold text-sm">QR Code</span>
            </div>
            {/* App Badges */}
            <div className="flex flex-col gap-3">
               <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                 <span className="text-xs">Download on the<br/><strong className="text-sm">App Store</strong></span>
               </button>
               <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                 <span className="text-xs">GET IT ON<br/><strong className="text-sm">Google Play</strong></span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
