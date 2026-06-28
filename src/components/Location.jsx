import React from 'react';

function Location() {
  const points = [
    { icon: "ti-building-store", title: "Kalamata city centre", desc: "5 min drive or a pleasant 20 min walk to the old town, market, and castle." },
    { icon: "ti-swimming", title: "Beaches nearby", desc: "Kalamata beach is 10 min by car. Perfect for a day trip without living in tourist noise." },
    { icon: "ti-mountain", title: "Taygetos mountains", desc: "The Taygetos range rises right behind us — great hiking trails from the doorstep." },
    { icon: "ti-plane", title: "Kalamata airport", desc: "15 min drive from the airport — easy arrival, no stress." },
    { icon: "ti-leaf", title: "Olive grove surroundings", desc: "Surrounded by working olive groves — the scent of the region is part of the experience." }
  ];

  return (
    <section className="px-6 md:px-12 py-14 bg-[#faf9f6]">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-[#7a8c5e] uppercase mb-2.5 font-semibold">Where we are</p>
        <h2 className="font-serif text-[28px] font-normal text-[#1a1a18]">Rooted in the heart of Messinia</h2>
        <p className="text-[15px] text-[#6b6b64] mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          Not on the beach — but close to everything that makes this region worth visiting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Minimalist Map Vector SVG */}
        <div className="bg-[#e8ead8] rounded-xl border border-[#e0ddd6] h-[260px] flex flex-col items-center justify-center gap-3 p-4 shadow-sm">
          <svg viewBox="0 0 260 220" className="w-[80%] h-auto max-h-[180px]">
            <rect width="260" height="220" fill="#d8e0c8" rx="8"/>
            <line x1="0" y1="110" x2="260" y2="110" stroke="#f0ece0" strokeWidth="6"/>
            <line x1="130" y1="0" x2="130" y2="220" stroke="#f0ece0" strokeWidth="6"/>
            <line x1="0" y1="60" x2="260" y2="160" stroke="#e8e4d4" strokeWidth="3"/>
            <rect x="40" y="30" width="50" height="35" fill="#c8d0b0" rx="3" opacity="0.7"/>
            <rect x="100" y="50" width="25" height="40" fill="#c8d0b0" rx="3" opacity="0.7"/>
            <rect x="150" y="25" width="60" height="45" fill="#c8d0b0" rx="3" opacity="0.7"/>
            <circle cx="130" cy="110" r="10" fill="#4a5e35"/>
            <circle cx="130" cy="110" r="5" fill="#f0ebe0"/>
            <rect x="84" y="128" width="92" height="22" fill="#2c3820" rx="4"/>
            <text x="130" y="143" textAnchor="middle" fill="#f0ebe0" fontSize="10" fontFamily="sans-serif">Olea Living</text>
          </svg>
          <p className="text-[13px] text-[#7a8c5e] font-medium font-serif">Kalamata, Messinia</p>
        </div>

        {/* Location Descriptions */}
        <div className="flex flex-col gap-4">
          {points.map((pt, i) => (
            <div key={i} className="flex gap-3.5 items-flex-start">
              <div className="w-9 h-9 rounded-full bg-[#eef1e8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className={`ti ${pt.icon} text-[16px] text-[#4a5e35]`}></i>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#1a1a18] mb-0.5">{pt.title}</p>
                <p className="text-[12px] text-[#6b6b64] leading-[1.5] font-light">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Location;