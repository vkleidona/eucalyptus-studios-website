
const AMENITIES_DATA = [
  { icon: "ti-wifi", name: "High-speed Wi-Fi", desc: "Fibre throughout — work remotely in peace" },
  { icon: "ti-tools-kitchen-2", name: "Full kitchenette", desc: "Hob, fridge, espresso machine & crockery" },
  { icon: "ti-air-conditioning", name: "A/C & heating", desc: "Climate control for every season" },
  { icon: "ti-car", name: "Free parking", desc: "Private on-site parking space included" },
  { icon: "ti-leaf", name: "Local welcome gift", desc: "Kalamata olive oil, olives & local herbs" },
  { icon: "ti-shirt", name: "Laundry access", desc: "Shared machine for stays of 3+ nights" },
  { icon: "ti-lock-open", name: "Self check-in", desc: "Smart lock — arrive any time you like" },
  { icon: "ti-map-2", name: "Local guide", desc: "Curated tips for Kalamata & the Mani" }
];

function Amenities() {
  return (
    <section id="amenities" className="bg-paper px-6 md:px-12 py-14">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Included in every stay</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Comforts of home, character of place</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {AMENITIES_DATA.map((item) => (
          <div key={item.name} className="text-center p-[20px_12px]">
            <div className="w-11 h-11 rounded-full bg-olive-50 flex items-center justify-center mx-auto mb-3">
              <i className={`ti ${item.icon} text-2xl text-olive-700`}></i>
            </div>
            <p className="text-[13px] font-medium text-ink mb-1">{item.name}</p>
            <p className="text-[12px] text-faint leading-[1.5] font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;