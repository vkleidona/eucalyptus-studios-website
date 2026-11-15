import { Link } from 'react-router-dom';
import siteConfig from '../siteConfig';
import Icon from './Icon';


function Hero() {
  return (
    <section id="top" className="bg-leaf-900 px-6 md:px-12 py-20 md:py-[72px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[380px]">
      <div className="hero-content">
        <p className="text-[11px] tracking-[0.12em] text-leaf-300 uppercase mb-4 font-semibold">
          Kalamata, Greece{siteConfig.opening && <> · Opening {siteConfig.opening}</>}
        </p>
        <h1 className="font-serif text-4xl md:text-[42px] font-normal leading-[1.15] text-cream mb-5">
          Still life,<br /><em className="text-leaf-300">slow living.</em>
        </h1>
        <p className="text-[15px] text-sand leading-[1.7] mb-8 max-w-[380px] font-light">
          Three studio apartments in Kalamata, among olive groves, with the Taygetos mountains behind them.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link to="/#studios" className="bg-leaf-300 text-leaf-950 px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-leaf-400 transition-colors">
            Explore studios
          </Link>
          <Link to="/#location" className="bg-transparent text-cream border border-leaf-300 px-6 py-3 rounded-lg text-[14px] hover:bg-white/5 transition-colors">
            Where we are
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 items-center md:items-end w-full">
        <Link to="/studios/elia" className="block w-full max-w-[280px] bg-leaf-800 rounded-xl overflow-hidden border border-leaf-600 hover:border-leaf-300 transition-colors">
          <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-[130px] block">
            <rect width="280" height="130" fill="#3f5a52"/>
            <rect width="280" height="70" fill="#7f9c92"/>
            <polygon points="0,70 60,30 120,70" fill="#2f4740"/>
            <polygon points="80,70 150,20 220,70" fill="#3f5a52"/>
            <polygon points="160,70 230,35 280,70" fill="#2f4740"/>
            <rect y="70" width="280" height="60" fill="#2a3d32"/>
            <rect x="130" y="45" width="4" height="30" fill="#6b5240" rx="2"/>
            <ellipse cx="132" cy="42" rx="16" ry="12" fill="#9fb5ad"/>
            <ellipse cx="120" cy="48" rx="10" ry="8" fill="#b4c6bf"/>
            <ellipse cx="144" cy="46" rx="12" ry="9" fill="#7f9c92"/>
            <rect x="30" y="50" width="70" height="30" fill="#eef0eb" rx="2"/>
            <rect x="35" y="55" width="14" height="18" fill="#3f5a52" rx="1"/>
            <rect x="55" y="55" width="14" height="18" fill="#3f5a52" rx="1"/>
            <rect x="76" y="55" width="14" height="18" fill="#3f5a52" rx="1"/>
            <circle cx="240" cy="22" r="14" fill="#e3c48f" opacity="0.8"/>
          </svg>
          <div className="p-3.5">
            <p className="text-[11px] text-leaf-200 tracking-wider uppercase mb-1">Featured</p>
            <p className="font-serif text-[15px] text-cream">Elia Studio Suite</p>
            <p className="text-[13px] text-sand mt-1.5">from <strong className="text-leaf-200 font-semibold">€85</strong> / night</p>
          </div>
        </Link>
        
        <div className="flex gap-2.5 items-center bg-leaf-800 rounded-lg p-[10px_14px] border border-leaf-600 max-w-[280px] w-full">
          <div className="w-8 h-8 rounded-full bg-leaf-300 flex items-center justify-center flex-shrink-0">
            <Icon name="ti-sparkles" className="text-[14px] text-leaf-900" />
          </div>
          <div className="text-[12px] text-sand">
            <strong className="block text-[13px] text-cream font-medium mb-0.5">Brand-new studios</strong>
            {siteConfig.opening ? `Opening ${siteConfig.opening}` : 'Freshly built and designed'}
          </div>
        </div>

        <div className="flex gap-2.5 items-center bg-leaf-800 rounded-lg p-[10px_14px] border border-leaf-600 max-w-[280px] w-full">
          <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
            <Icon name="ti-leaf" className="text-[14px] text-leaf-900" />
          </div>
          <div className="text-[12px] text-sand">
            <strong className="block text-[13px] text-cream font-medium mb-0.5">Olive country stays</strong>
            2 km from the city centre
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;