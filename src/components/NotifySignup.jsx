import { useState } from 'react';
import siteConfig from '../siteConfig';
import { sendForm } from '../lib/sendForm';
import { inputClass } from './EnquiryForm';

function NotifySignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  if (!siteConfig.opening) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendForm({
        subject: 'New sign-up: notify me when bookings open',
        replyTo: email,
        fields: { email, type: 'Opening notification sign-up' },
      });
      setStatus('sent');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-olive-900 rounded-xl p-5 text-cream">
      <p className="font-serif text-[17px] mb-1">Be the first to know</p>
      <p className="text-[13px] text-sand font-light leading-[1.6] mb-4">
        We open in {siteConfig.opening.toLowerCase()}. Leave your email and we'll let you know when bookings open.
      </p>
      {status === 'sent' ? (
        <p className="text-[13px] text-olive-300 flex items-center gap-2">
          <i className="ti ti-check"></i> You're on the list. See you soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="notify-email" className="sr-only">Email</label>
          <input
            id="notify-email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-olive-300 text-olive-950 px-4 py-2.5 rounded-lg text-[14px] font-medium hover:bg-olive-400 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Signing up…' : 'Notify me'}
          </button>
          {status === 'error' && (
            <p className="text-[12px] text-red-300">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}

export default NotifySignup;
