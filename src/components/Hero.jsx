
function Hero() {
  return (
    <section id="top" className="bg-olive-900 px-6 md:px-12 py-20 md:py-[72px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[380px]">
      <div className="hero-content">
        <p className="text-[11px] tracking-[0.12em] text-olive-300 uppercase mb-4 font-semibold">Kalamata, Greece</p>
        <h1 className="font-serif text-4xl md:text-[42px] font-normal leading-[1.15] text-cream mb-5">
          Still life,<br /><em className="text-olive-300 not-italic">slow living.</em>
        </h1>
        <p className="text-[15px] text-sand leading-[1.7] mb-8 max-w-[380px] font-light">
          A collection of studio apartments in the heart of Kalamata — surrounded by olive groves, mountain air, and the unhurried pace of Messinian life.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="#studios" className="bg-olive-300 text-olive-950 px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-olive-400 transition-colors">
            Explore studios
          </a>
          <a href="#location" className="bg-transparent text-cream border border-olive-300 px-6 py-3 rounded-lg text-[14px] hover:bg-white/5 transition-colors">
            Where we are
          </a>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 items-center md:items-end w-full">
        <div className="w-full max-w-[280px] bg-olive-800 rounded-xl overflow-hidden border border-olive-600">
          <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-[130px] block">
            <rect width="280" height="130" fill="#4a5e35"/>
            <rect width="280" height="70" fill="#6a7e50"/>
            <polygon points="0,70 60,30 120,70" fill="#3a4e25"/>
            <polygon points="80,70 150,20 220,70" fill="#4a5e35"/>
            <polygon points="160,70 230,35 280,70" fill="#3a4e25"/>
            <rect y="70" width="280" height="60" fill="#2c3820"/>
            <rect x="130" y="45" width="4" height="30" fill="#5a4020" rx="2"/>
            <ellipse cx="132" cy="42" rx="16" ry="12" fill="#7a8c5e"/>
            <ellipse cx="120" cy="48" rx="10" ry="8" fill="#8a9e6e"/>
            <ellipse cx="144" cy="46" rx="12" ry="9" fill="#6a7e50"/>
            <rect x="30" y="50" width="70" height="30" fill="#e8e0d0" rx="2"/>
            <rect x="35" y="55" width="14" height="18" fill="#4a5e35" rx="1"/>
            <rect x="55" y="55" width="14" height="18" fill="#4a5e35" rx="1"/>
            <rect x="76" y="55" width="14" height="18" fill="#4a5e35" rx="1"/>
            <circle cx="240" cy="22" r="14" fill="#f0d080" opacity="0.8"/>
          </svg>
          <div className="p-3.5">
            <p className="text-[11px] text-olive-300 tracking-wider uppercase mb-1">Featured</p>
            <p className="font-serif text-[15px] text-cream">Elia Studio Suite</p>
            <p className="text-[13px] text-sand mt-1.5">from <strong className="text-olive-300 font-semibold">€85</strong> / night</p>
          </div>
        </div>
        
        <div className="flex gap-2.5 items-center bg-olive-800 rounded-lg p-[10px_14px] border border-olive-600 max-w-[280px] w-full">
          <div className="w-8 h-8 rounded-full bg-olive-300 flex items-center justify-center flex-shrink-0">
            <i className="ti ti-star text-[14px] text-olive-900"></i>
          </div>
          <div className="text-[12px] text-sand">
            <strong className="block text-[13px] text-cream font-medium mb-0.5">4.9 on Booking.com</strong>
            Loved for calm, cleanliness & location
          </div>
        </div>

        <div className="flex gap-2.5 items-center bg-olive-800 rounded-lg p-[10px_14px] border border-olive-600 max-w-[280px] w-full">
          <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
            <i className="ti ti-leaf text-[14px] text-olive-900"></i>
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