import { useState } from 'react';
import siteConfig from '../siteConfig';

const STUDIOS = ['Karpos Studio', 'Elia Studio Suite', 'Petra Family Studio', 'Not sure yet'];

const inputClass =
  'w-full bg-white border border-line rounded-lg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-faint focus:outline-none focus:border-olive-500';
const labelClass = 'block text-[12px] text-muted mb-1.5';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    studio: STUDIOS[0],
    message: '',
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Booking enquiry: ${form.studio}, ${form.checkIn} to ${form.checkOut}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Studio: ${form.studio}`,
      `Dates: ${form.checkIn} to ${form.checkOut}`,
      `Guests: ${form.guests}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    siteConfig.email && { icon: 'ti-mail', label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.phone && { icon: 'ti-phone', label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
    siteConfig.address && { icon: 'ti-map-pin', label: siteConfig.address },
    siteConfig.instagram && { icon: 'ti-brand-instagram', label: 'Instagram', href: siteConfig.instagram },
  ].filter(Boolean);

  return (
    <section id="contact" className="bg-paper px-6 md:px-12 py-14">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Book direct</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Plan your stay</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          {siteConfig.opening
            ? `We open in ${siteConfig.opening.toLowerCase()}. Send us your dates and we'll be in touch as soon as bookings open.`
            : "Send us your dates and we'll get back to you with availability and the best rate."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-linen border border-line rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input id="name" required value={form.name} onChange={update('name')} className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" required value={form.email} onChange={update('email')} className={inputClass} />
          </div>
          <div>
            <label htmlFor="checkIn" className={labelClass}>Check-in</label>
            <input id="checkIn" type="date" required value={form.checkIn} onChange={update('checkIn')} className={inputClass} />
          </div>
          <div>
            <label htmlFor="checkOut" className={labelClass}>Check-out</label>
            <input id="checkOut" type="date" required min={form.checkIn} value={form.checkOut} onChange={update('checkOut')} className={inputClass} />
          </div>
          <div>
            <label htmlFor="studio" className={labelClass}>Studio</label>
            <select id="studio" value={form.studio} onChange={update('studio')} className={inputClass}>
              {STUDIOS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="guests" className={labelClass}>Guests</label>
            <select id="guests" value={form.guests} onChange={update('guests')} className={inputClass}>
              {['1', '2', '3', '4'].map((n) => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>Message (optional)</label>
            <textarea id="message" rows="3" value={form.message} onChange={update('message')} className={inputClass} />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 bg-olive-700 text-cream px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-olive-800 transition-colors"
          >
            Send enquiry
          </button>
        </form>

        <div className="flex flex-col gap-4">
          <p className="font-serif text-[18px] text-ink">Get in touch</p>
          <p className="text-[13px] text-muted leading-[1.6] font-light">
            Questions about the studios, arrival or the area? We're happy to help.
          </p>
          {details.map((d) => (
            <div key={d.icon} className="flex gap-3 items-center">
              <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center flex-shrink-0">
                <i className={`ti ${d.icon} text-[16px] text-olive-700`}></i>
              </div>
              {d.href ? (
                <a href={d.href} className="text-[14px] text-ink hover:text-olive-700">{d.label}</a>
              ) : (
                <span className="text-[14px] text-ink">{d.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
