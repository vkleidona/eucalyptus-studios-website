import { useState } from 'react';
import { Link } from 'react-router-dom';
import studios from '../data/studios';
import siteConfig from '../siteConfig';
import { sendForm } from '../lib/sendForm';
import Icon from './Icon';

const NOT_SURE = 'Not sure yet';

export const inputClass =
  'w-full bg-white border border-line rounded-lg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-faint focus:outline-none focus:border-leaf-500';
const labelClass = 'block text-[12px] text-muted mb-1.5';

function EnquiryForm({ defaultStudio }) {
  const initial = {
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    studio: defaultStudio || studios[0].name,
    message: '',
    botcheck: false,
  };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (field) => (e) => {
    const next = { ...form, [field]: e.target.value };
    // Keep the guest count within the chosen studio's capacity.
    const studio = studios.find((s) => s.name === next.studio);
    if (studio && Number(next.guests) > studio.maxGuests) next.guests = String(studio.maxGuests);
    setForm(next);
  };

  const selected = studios.find((s) => s.name === form.studio);
  const guestOptions = Array.from({ length: selected ? selected.maxGuests : 4 }, (_, i) => String(i + 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.botcheck) return;
    setStatus('sending');
    try {
      await sendForm({
        subject: `Booking enquiry: ${form.studio}, ${form.checkIn} to ${form.checkOut}`,
        replyTo: form.email,
        fields: {
          name: form.name,
          email: form.email,
          studio: form.studio,
          check_in: form.checkIn,
          check_out: form.checkOut,
          guests: form.guests,
          message: form.message,
        },
      });
      setStatus('sent');
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // Until a Web3Forms key is added in siteConfig, show a notice instead of a form that can't send.
  if (!siteConfig.web3formsKey) {
    return (
      <div className="bg-linen border border-line rounded-xl p-8 text-center flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-leaf-50 flex items-center justify-center">
          <Icon name="ti-calendar" className="text-[22px] text-leaf-700" />
        </div>
        <p className="font-serif text-[20px] text-ink">Enquiries open soon</p>
        <p className="text-[14px] text-muted font-light max-w-[380px]">
          We're putting the finishing touches on the studios. Check back soon to send us your dates.
        </p>
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <div className="bg-linen border border-line rounded-xl p-8 text-center flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-leaf-50 flex items-center justify-center">
          <Icon name="ti-mail-check" className="text-[22px] text-leaf-700" />
        </div>
        <p className="font-serif text-[20px] text-ink">Thank you, your enquiry is on its way</p>
        <p className="text-[14px] text-muted font-light max-w-[360px]">
          We'll reply to your email as soon as possible. Keep an eye on your spam folder just in case.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="text-[13px] text-leaf-700 underline mt-2">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-linen border border-line rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Spam trap: hidden from people, bots fill it in */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        checked={form.botcheck}
        onChange={(e) => setForm({ ...form, botcheck: e.target.checked })}
      />
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input id="name" required autoComplete="name" value={form.name} onChange={update('name')} className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" type="email" required autoComplete="email" value={form.email} onChange={update('email')} className={inputClass} />
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
          {studios.map((s) => <option key={s.id}>{s.name}</option>)}
          <option>{NOT_SURE}</option>
        </select>
      </div>
      <div>
        <label htmlFor="guests" className={labelClass}>Guests</label>
        <select id="guests" value={form.guests} onChange={update('guests')} className={inputClass}>
          {guestOptions.map((n) => <option key={n}>{n}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>Message (optional)</label>
        <textarea id="message" rows="3" value={form.message} onChange={update('message')} className={inputClass} />
      </div>

      {status === 'error' && (
        <p className="sm:col-span-2 text-[13px] text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5">
          Sorry, something went wrong and your enquiry wasn't sent. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="sm:col-span-2 bg-leaf-700 text-cream px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-leaf-800 transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
      <p className="sm:col-span-2 text-[11px] text-faint text-center -mt-1">
        We only use your details to reply to your enquiry. See our{' '}
        <Link to="/privacy" className="underline hover:text-muted">privacy policy</Link>.
      </p>
    </form>
  );
}

export default EnquiryForm;
