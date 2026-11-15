import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import studios, { getStudio } from '../data/studios';
import amenities from '../data/amenities';
import siteConfig from '../siteConfig';
import EnquiryForm from '../components/EnquiryForm';
import NotFound from './NotFound';
import usePageMeta from '../lib/usePageMeta';
import Icon from '../components/Icon';

const PLACEHOLDER_TILES = 4;

function Gallery({ studio }) {
  const photos = studio.photos || [];
  const [active, setActive] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[260px] md:h-[420px]">
        <div className={`col-span-4 md:col-span-2 row-span-2 rounded-xl overflow-hidden ${studio.colorClass}`}>
          {studio.svg}
        </div>
        {Array.from({ length: PLACEHOLDER_TILES }).map((_, i) => (
          <div
            key={i}
            className="hidden md:flex rounded-xl bg-paper border border-dashed border-line items-center justify-center flex-col gap-1.5 text-faint"
          >
            <Icon name="ti-photo" className="text-[22px]" />
            <span className="text-[11px] tracking-wider uppercase">Photos coming soon</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <img
        src={photos[active].src}
        alt={photos[active].alt}
        className="w-full h-[260px] md:h-[460px] object-cover rounded-xl"
      />
      {photos.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 ${i === active ? 'border-leaf-500' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <img src={photo.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StudioPage() {
  const { id } = useParams();
  const studio = getStudio(id);

  usePageMeta({
    title: studio ? `${studio.name}, Kalamata` : null,
    description: studio ? `${studio.name}: ${studio.desc} ${studio.guests}, ${studio.size}, from ${studio.price} per night.` : null,
    path: studio ? `/studios/${studio.id}` : null,
  });

  if (!studio) return <NotFound />;

  const others = studios.filter((s) => s.id !== studio.id);

  return (
    <main className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <Link to="/#studios" className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-ink mb-6">
        <Icon name="ti-arrow-left" /> All studios
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <span
            className="inline-block bg-leaf-700 text-cream text-[10px] px-2 py-0.5 rounded-md tracking-wider uppercase font-medium mb-3"
            style={studio.badgeColor ? { background: studio.badgeColor } : {}}
          >
            {studio.badge}
          </span>
          <h1 className="font-serif text-[32px] md:text-[40px] font-normal text-ink leading-tight">{studio.name}</h1>
        </div>
        <div className="flex gap-5 text-[14px] text-muted">
          <span className="flex items-center gap-1.5"><Icon name="ti-users" className="text-leaf-600" /> {studio.guests}</span>
          <span className="flex items-center gap-1.5"><Icon name="ti-ruler-2" className="text-leaf-600" /> {studio.size}</span>
        </div>
      </div>

      <Gallery studio={studio} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 mt-10">
        <div>
          <h2 className="font-serif text-[22px] text-ink mb-3">About this studio</h2>
          {studio.about.map((p) => (
            <p key={p} className="text-[15px] text-muted leading-[1.7] font-light mb-3">{p}</p>
          ))}

          <div className="flex flex-wrap gap-2 mt-5 mb-10">
            {studio.highlights.map((h) => (
              <span key={h} className="text-[13px] bg-leaf-50 text-leaf-800 px-3 py-1.5 rounded-full">{h}</span>
            ))}
          </div>

          <h2 className="font-serif text-[22px] text-ink mb-4">Included in every stay</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((a) => (
              <div key={a.name} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-leaf-50 flex items-center justify-center flex-shrink-0">
                  <Icon name={a.icon} className="text-[16px] text-leaf-700" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-ink">{a.name}</p>
                  <p className="text-[12px] text-faint font-light">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="order-first md:order-none md:sticky md:top-24 self-start bg-white border border-line rounded-xl p-5 shadow-sm">
          <p className="text-[13px] text-muted">
            from <strong className="text-[24px] text-ink font-semibold">{studio.price}</strong> / night
          </p>
          {siteConfig.opening && (
            <p className="text-[12px] text-leaf-700 bg-leaf-50 rounded-lg px-3 py-2 mt-3 flex items-center gap-2">
              <Icon name="ti-calendar" /> Opening {siteConfig.opening}
            </p>
          )}
          {siteConfig.web3formsKey ? (
            <a
              href="#enquire"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-center bg-leaf-700 text-cream px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-leaf-800 transition-colors mt-4"
            >
              Enquire about this studio
            </a>
          ) : (
            <p className="text-[13px] text-muted text-center mt-4">Enquiries open soon</p>
          )}
          {siteConfig.web3formsKey && (
            <p className="text-[12px] text-faint text-center mt-3">No payment needed to enquire</p>
          )}
        </aside>
      </div>

      {siteConfig.web3formsKey && (
        <section id="enquire" className="mt-14">
          <h2 className="font-serif text-[24px] text-ink mb-1.5">Enquire about {studio.name}</h2>
          <p className="text-[14px] text-muted font-light mb-5">
            {siteConfig.opening
              ? `Send us your dates and we'll be in touch as soon as bookings open for ${siteConfig.opening.toLowerCase()}.`
              : "Send us your dates and we'll reply with availability and the best rate."}
          </p>
          <div className="max-w-3xl">
            <EnquiryForm key={studio.id} defaultStudio={studio.name} />
          </div>
        </section>
      )}

      <section className="mt-16 mb-6">
        <h2 className="font-serif text-[22px] text-ink mb-4">Other studios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((s) => (
            <Link
              key={s.id}
              to={`/studios/${s.id}`}
              className="group flex gap-4 items-center bg-white border border-line rounded-xl overflow-hidden hover:shadow-md hover:border-leaf-300 transition"
            >
              <div className={`w-32 h-24 flex-shrink-0 ${s.colorClass}`}>{s.svg}</div>
              <div className="py-3 pr-4">
                <p className="font-serif text-[16px] text-ink group-hover:text-leaf-700">{s.name}</p>
                <p className="text-[12px] text-muted">{s.guests} · {s.size} · from {s.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default StudioPage;
