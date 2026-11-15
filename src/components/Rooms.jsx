import { Link } from 'react-router-dom';
import studios from '../data/studios';
import Icon from './Icon';

function Rooms() {
  return (
    <section id="studios" className="px-6 md:px-12 py-14">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-leaf-600 uppercase mb-2.5 font-semibold">Our spaces</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Three kinds of studio</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          Every studio is self-contained, with its own kitchen. Choose the kind that suits your stay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studios.map((studio) => (
          <Link
            key={studio.id}
            to={`/studios/${studio.id}`}
            className="group bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-leaf-300 transition"
          >
            <div className={`h-[120px] flex items-center justify-center relative overflow-hidden ${studio.colorClass}`}>
              {studio.svg}
              <span 
                className="absolute top-2.5 left-2.5 bg-leaf-700 text-cream text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase font-medium"
                style={studio.badgeColor ? { background: studio.badgeColor } : {}}
              >
                {studio.badge}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-[16px] text-ink mb-1 group-hover:text-leaf-700">{studio.name}</h3>
              <p className="text-[12px] text-muted leading-[1.5] mb-3 font-light">{studio.desc}</p>
              <div className="flex gap-3 mb-3">
                <span className="text-[11px] text-faint flex items-center gap-1">
                  <Icon name="ti-users" className="text-[13px] text-leaf-600" /> {studio.guests}
                </span>
                <span className="text-[11px] text-faint flex items-center gap-1">
                  <Icon name="ti-ruler-2" className="text-[13px] text-leaf-600" /> {studio.size}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-paper">
                <div className="text-[13px] text-muted">
                  from <strong className="text-[16px] text-ink font-semibold">{studio.price}</strong>/night
                </div>
                <span className="text-[12px] border border-leaf-600 text-leaf-600 px-3 py-1.5 rounded-lg group-hover:bg-leaf-600 group-hover:text-white transition-colors duration-200">
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