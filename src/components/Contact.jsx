import siteConfig from '../siteConfig';
import EnquiryForm from './EnquiryForm';
import NotifySignup from './NotifySignup';
import Icon from './Icon';

function ContactDetails() {
  const details = [
    siteConfig.email && { icon: 'ti-mail', label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.phone && { icon: 'ti-phone', label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
    siteConfig.address && { icon: 'ti-map-pin', label: siteConfig.address },
    siteConfig.instagram && { icon: 'ti-brand-instagram', label: 'Instagram', href: siteConfig.instagram },
  ].filter(Boolean);

  if (details.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <p className="font-serif text-[18px] text-ink">Get in touch</p>
      {details.map((d) => (
        <div key={d.icon} className="flex gap-3 items-center">
          <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center flex-shrink-0">
            <Icon name={d.icon} className="text-[16px] text-olive-700" />
          </div>
          {d.href ? (
            <a href={d.href} className="text-[14px] text-ink hover:text-olive-700">{d.label}</a>
          ) : (
            <span className="text-[14px] text-ink">{d.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Contact() {
  const hasContactDetails = Boolean(siteConfig.email || siteConfig.phone || siteConfig.address || siteConfig.instagram);
  const hasSignup = Boolean(siteConfig.opening && siteConfig.web3formsKey);
  const hasSidebar = hasContactDetails || hasSignup;

  return (
    <section id="contact" className="bg-paper px-6 md:px-12 py-14">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Book direct</p>
        <h2 className="font-serif text-[28px] font-normal text-ink">Plan your stay</h2>
        <p className="text-[15px] text-muted mt-2.5 max-w-[480px] mx-auto leading-[1.7] font-light">
          {siteConfig.opening && !siteConfig.web3formsKey
            ? `We open in ${siteConfig.opening.toLowerCase()}.`
            : siteConfig.opening
            ? `We open in ${siteConfig.opening.toLowerCase()}. Send us your dates and we'll be in touch as soon as bookings open.`
            : "Send us your dates and we'll get back to you with availability and the best rate."}
        </p>
      </div>

      <div
        className={
          hasSidebar
            ? 'grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 max-w-5xl mx-auto items-start'
            : 'max-w-2xl mx-auto'
        }
      >
        <EnquiryForm />
        {hasSidebar && (
          <div className="flex flex-col gap-6">
            <NotifySignup />
            <ContactDetails />
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
