import ConsentMap from './ConsentMap';
import Icon from './Icon';

function Location() {
  const points = [
    { icon: "ti-building-store", title: "Kalamata city centre", desc: "5 minutes by car or about 20 minutes on foot to the old town, the market and the castle." },
    { icon: "ti-swimming", title: "Beaches nearby", desc: "Kalamata beach is 10 minutes away by car." },
    { icon: "ti-mountain", title: "Taygetos mountains", desc: "The Taygetos range rises right behind us, with hiking trails close by." },
    { icon: "ti-plane", title: "Kalamata airport", desc: "15 minutes by car from Kalamata airport." },
    { icon: "ti-leaf", title: "Olive groves", desc: "Working olive groves all around the studios." }
  ];

  return (
    <section id="location" className="px-6 md:px-12 py-14 bg-linen">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-leaf-600 uppercase mb-2.5 font-semibold">Where we are</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Kalamata, with the mountains behind us</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          We're not on the beach, but the old town, the sea and the mountains are all close by.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        <ConsentMap />

        <div className="flex flex-col gap-4">
          {points.map((pt) => (
            <div key={pt.title} className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-full bg-leaf-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={pt.icon} className="text-[16px] text-leaf-700" />
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