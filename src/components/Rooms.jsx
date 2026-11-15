
const STUDIOS_DATA = [
  {
    id: "karpos",
    name: "Karpos Studio",
    badge: "Standard",
    colorClass: "bg-olive-100",
    desc: "A bright, compact studio with mountain views and a cosy kitchenette. Perfect for solo travellers or couples.",
    guests: "1–2 guests",
    size: "28 m²",
    price: "€75",
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#e8ead8"/>
        <rect y="85" width="200" height="35" fill="#d8cfa8"/>
        <rect width="200" height="85" fill="#f0ece0"/>
        <rect x="20" y="15" width="60" height="45" fill="#b8cfe8" rx="2"/>
        <line x1="50" y1="15" x2="50" y2="60" stroke="#d0d8c0" strokeWidth="1"/>
        <line x1="20" y1="37" x2="80" y2="37" stroke="#d0d8c0" strokeWidth="1"/>
        <polygon points="20,60 50,35 80,60" fill="#8a9e70" opacity="0.6"/>
        <rect x="100" y="60" width="85" height="30" fill="#c8c0a8" rx="3"/>
        <rect x="100" y="58" width="85" height="12" fill="#b0a890" rx="2"/>
        <rect x="108" y="56" width="20" height="10" fill="#e8ece0" rx="2"/>
        <rect x="132" y="56" width="20" height="10" fill="#e8ece0" rx="2"/>
        <rect x="155" y="45" width="3" height="20" fill="#7a6030" rx="1"/>
        <ellipse cx="156" cy="43" rx="10" ry="8" fill="#7a9a50"/>
        <ellipse cx="148" cy="48" rx="6" ry="5" fill="#8aaa60"/>
      </svg>
    )
  },
  {
    id: "elia",
    name: "Elia Studio Suite",
    badge: "Superior",
    badgeColor: "#6a7e50",
    colorClass: "bg-olive-200",
    desc: "Larger living area with a private balcony overlooking the olive groves. Separate sleeping alcove and full kitchen.",
    guests: "2 guests",
    size: "38 m²",
    price: "€85",
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#d8e0c8"/>
        <rect y="80" width="200" height="40" fill="#c8c8a8"/>
        <rect width="200" height="80" fill="#ecf0e4"/>
        <rect x="60" y="10" width="80" height="65" fill="#c8dce8" rx="2"/>
        <line x1="100" y1="10" x2="100" y2="75" stroke="#d0dcc0" strokeWidth="1"/>
        <ellipse cx="88" cy="35" rx="18" ry="14" fill="#7a9a58" opacity="0.7"/>
        <ellipse cx="104" cy="40" rx="12" ry="10" fill="#6a8a48" opacity="0.7"/>
        <rect x="91" y="52" width="3" height="18" fill="#7a6030" opacity="0.6"/>
        <rect x="5" y="68" width="45" height="20" fill="#b8a888" rx="3"/>
        <rect x="5" y="65" width="45" height="8" fill="#c8b898" rx="2"/>
        <rect x="5" y="65" width="6" height="18" fill="#c8b898" rx="2"/>
        <rect x="44" y="65" width="6" height="18" fill="#c8b898" rx="2"/>
        <rect x="145" y="72" width="50" height="8" fill="#a89868" rx="2"/>
        <rect x="148" y="80" width="4" height="10" fill="#987848"/>
        <rect x="188" y="80" width="4" height="10" fill="#987848"/>
      </svg>
    )
  },
  {
    id: "petra",
    name: "Petra Family Studio",
    badge: "Family",
    badgeColor: "#8a7040",
    colorClass: "bg-clay",
    desc: "Spacious open-plan studio with a proper dining area and sofa bed. Suits small families or longer stays.",
    guests: "2–4 guests",
    size: "50 m²",
    price: "€110",
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#e0d8c8"/>
        <rect y="78" width="200" height="42" fill="#d0c8b0"/>
        <rect width="200" height="78" fill="#f0ece4"/>
        <rect x="25" y="18" width="50" height="45" fill="#c0d4e0" rx="25"/>
        <rect x="25" y="43" width="50" height="20" fill="#c0d4e0"/>
        <line x1="50" y1="43" x2="50" y2="63" stroke="#d4ccc0" strokeWidth="1"/>
        <ellipse cx="145" cy="76" rx="30" ry="10" fill="#c8b898"/>
        <rect x="137" y="76" width="4" height="14" fill="#a89878"/>
        <rect x="157" y="76" width="4" height="14" fill="#a89878"/>
        <ellipse cx="145" cy="75" rx="22" ry="7" fill="#d8c8a8"/>
        <rect x="118" y="68" width="12" height="16" fill="#b0a080" rx="2"/>
        <rect x="166" y="68" width="12" height="16" fill="#b0a080" rx="2"/>
        <rect x="5" y="60" width="70" height="22" fill="#d8d0b8" rx="3"/>
        <rect x="5" y="58" width="70" height="5" fill="#c8c0a8" rx="2"/>
        <circle cx="18" cy="63" r="5" fill="#b0a888"/>
        <circle cx="32" cy="63" r="5" fill="#b0a888"/>
      </svg>
    )
  }
];

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
        {STUDIOS_DATA.map((studio) => (
          <div key={studio.id} id={studio.id} className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
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
              <h3 className="font-serif text-[16px] text-ink mb-1">{studio.name}</h3>
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
                <a href="#contact" className="text-[12px] bg-transparent border border-olive-500 text-olive-500 px-3 py-1.5 rounded-lg hover:bg-olive-500 hover:text-white transition-colors duration-200">
                  Enquire
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;