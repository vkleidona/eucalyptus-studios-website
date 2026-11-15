import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../siteConfig';
import Icon from './Icon';

// Google Maps sets cookies, so the map only loads after the visitor asks for it.
function ConsentMap() {
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(siteConfig.mapQuery);

  if (loaded) {
    return (
      <div className="rounded-xl border border-line overflow-hidden h-[300px] shadow-sm bg-olive-100">
        <iframe
          title="Map of our location"
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line h-[300px] shadow-sm bg-olive-100 flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
        <Icon name="ti-map-pin" className="text-[22px] text-olive-700" />
      </div>
      <p className="font-serif text-[17px] text-ink">{siteConfig.mapQuery}</p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="bg-olive-700 text-cream px-5 py-2.5 rounded-lg text-[13px] font-medium hover:bg-olive-800 transition-colors"
      >
        Show map
      </button>
      <p className="text-[11px] text-muted max-w-[300px] leading-[1.5]">
        Loads Google Maps, which may set cookies. See our{' '}
        <Link to="/privacy" className="underline hover:text-ink">privacy policy</Link>. Or{' '}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink"
        >
          open in Google Maps
        </a>
        .
      </p>
    </div>
  );
}

export default ConsentMap;
