import { Link } from 'react-router-dom';
import studios from '../data/studios';

function Rooms() {
  return (
    <section id="studios" className="px-6 md:px-12 py-14">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Our spaces</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Thoughtfully designed studios</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          Each studio is a self-contained sanctuary — clean lines, local materials, and enough space to feel at home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studios.map((studio) => (
          <Link
            key={studio.id}
            to={`/studios/${studio.id}`}
            className="group bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-olive-300 transition"
          >
            <div className={`h-[120px] flex items-center justify-center relative overflow-hidden ${studio.colorClass}`}>
              {studio.svg}
              <span 
                className="absolute top-2.5 left-2.5 bg-olive-700 text-cream text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase font-medium"
                style={studio.badgeColor ? { background: studio.badgeColor } : {}}
              >
                {studio.badge}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-[16px] text-ink mb-1 group-hover:text-olive-700">{studio.name}</h3>
              <p className="text-[12px] text-muted leading-[1.5] mb-3 font-light">{studio.desc}</p>
              <div className="flex gap-3 mb-3">
                <span className="text-[11px] text-faint flex items-center gap-1">
                  <i className="ti ti-users text-[13px] text-olive-500"></i> {studio.guests}
                </span>
                <span className="text-[11px] text-faint flex items-center gap-1">
                  <i className="ti ti-ruler-2 text-[13px] text-olive-500"></i> {studio.size}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-paper">
                <div className="text-[13px] text-muted">
                  from <strong className="text-[16px] text-ink font-semibold">{studio.price}</strong>/night
                </div>
                <span className="text-[12px] border border-olive-500 text-olive-500 px-3 py-1.5 rounded-lg group-hover:bg-olive-500 group-hover:text-white transition-colors duration-200">
                  View studio
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Rooms;