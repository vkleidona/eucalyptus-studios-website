import ConsentMap from './ConsentMap';
import Icon from './Icon';

function Location() {
  const points = [
    { icon: "ti-building-store", title: "Kalamata city centre", desc: "5 min drive or a pleasant 20 min walk to the old town, market, and castle." },
    { icon: "ti-swimming", title: "Beaches nearby", desc: "Kalamata beach is 10 min by car. Perfect for a day trip without living in tourist noise." },
    { icon: "ti-mountain", title: "Taygetos mountains", desc: "The Taygetos range rises right behind us — great hiking trails from the doorstep." },
    { icon: "ti-plane", title: "Kalamata airport", desc: "15 min drive from the airport — easy arrival, no stress." },
    { icon: "ti-leaf", title: "Olive grove surroundings", desc: "Surrounded by working olive groves — the scent of the region is part of the experience." }
  ];

  return (
    <section id="location" className="px-6 md:px-12 py-14 bg-linen">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Where we are</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Rooted in the heart of Messinia</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          Not on the beach — but close to everything that makes this region worth visiting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        <ConsentMap />

        <div className="flex flex-col gap-4">
          {points.map((pt) => (
            <div key={pt.title} className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={pt.icon} className="text-[16px] text-olive-700" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-ink mb-0.5">{pt.title}</p>
                <p className="text-[12px] text-muted leading-[1.5] font-light">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Location;