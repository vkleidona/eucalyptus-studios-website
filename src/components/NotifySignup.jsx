import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../siteConfig';
import { sendForm } from '../lib/sendForm';
import { inputClass } from './EnquiryForm';
import Icon from './Icon';

function NotifySignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  if (!siteConfig.opening || !siteConfig.web3formsKey) return null;

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
    <div className="bg-leaf-900 rounded-xl p-5 text-cream">
      <p className="font-serif text-[17px] mb-1">Be the first to know</p>
      <p className="text-[13px] text-sand font-light leading-[1.6] mb-4">
        We open in {siteConfig.opening.toLowerCase()}. Leave your email and we'll let you know when bookings open.
      </p>
      {status === 'sent' ? (
        <p className="text-[13px] text-leaf-300 flex items-center gap-2">
          <Icon name="ti-check" /> You're on the list. See you soon!
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
            className="bg-leaf-300 text-leaf-950 px-4 py-2.5 rounded-lg text-[14px] font-medium hover:bg-leaf-400 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Signing up…' : 'Notify me'}
          </button>
          <p className="text-[11px] text-sand/80 leading-[1.5]">
            One email when bookings open, nothing else. Unsubscribe any time.{' '}
            <Link to="/privacy" className="underline hover:text-cream">Privacy policy</Link>
          </p>
          {status === 'error' && (
            <p className="text-[12px] text-red-300">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}

export default NotifySignup;
