import siteConfig from '../siteConfig';
import usePageMeta from '../lib/usePageMeta';

const LAST_UPDATED = '15 November 2026';

function H2({ children }) {
  return <h2 className="font-serif text-[22px] text-ink mt-10 mb-3">{children}</h2>;
}

function P({ children }) {
  return <p className="text-[15px] text-muted leading-[1.75] font-light mb-3">{children}</p>;
}

function Li({ children }) {
  return <li className="text-[15px] text-muted leading-[1.75] font-light">{children}</li>;
}

function Privacy() {
  usePageMeta({
    title: 'Privacy policy',
    description: `How ${siteConfig.name} handles personal data from booking enquiries and sign-ups.`,
    path: '/privacy',
  });

  const contact = siteConfig.email ? (
    <a href={`mailto:${siteConfig.email}`} className="text-olive-700 underline">{siteConfig.email}</a>
  ) : (
    'the contact details on our website'
  );

  return (
    <main className="px-6 md:px-12 py-12 max-w-3xl mx-auto">
      <p className="text-[11px] tracking-[0.12em] text-olive-600 uppercase mb-2.5 font-semibold">Legal</p>
      <h1 className="font-serif text-[34px] text-ink mb-2">Privacy policy</h1>
      <p className="text-[13px] text-faint mb-8">Last updated: {LAST_UPDATED}</p>

      <P>
        This policy explains what personal data {siteConfig.name} collects through this website, why, and what your
        rights are. We keep it short because we collect very little.
      </P>

      <H2>Who we are</H2>
      <P>
        {siteConfig.name}
        {siteConfig.legalOwner && <>, run by {siteConfig.legalOwner}</>}
        {siteConfig.address ? <>, {siteConfig.address}</> : <>, Kalamata, Greece</>}. We are responsible for your data
        (the &ldquo;controller&rdquo; under the EU General Data Protection Regulation, GDPR). You can reach us at {contact}.
      </P>

      <H2>What we collect and why</H2>
      <ul className="list-disc pl-5 flex flex-col gap-2 mb-3">
        <Li>
          <strong className="font-medium text-ink">Booking enquiries.</strong> When you send an enquiry we receive your
          name, email address, the dates, studio and number of guests you chose, and your message. We use this only to
          answer your enquiry and, if you decide to book, to arrange your stay. Legal basis: steps taken at your request
          before entering into a contract (Art. 6(1)(b) GDPR).
        </Li>
        <Li>
          <strong className="font-medium text-ink">Opening notification.</strong> If you sign up to hear when bookings
          open, we receive your email address and send you that announcement. Legal basis: your consent (Art. 6(1)(a)
          GDPR), which you can withdraw at any time by replying to any of our emails or contacting us.
        </Li>
        <Li>
          <strong className="font-medium text-ink">Technical data.</strong> Like any website, our hosting provider
          automatically processes technical data such as your IP address and browser type to deliver the site and keep
          it secure. Legal basis: our legitimate interest in running a secure website (Art. 6(1)(f) GDPR).
        </Li>
      </ul>
      <P>We never sell your data or use it for advertising.</P>

      <H2>Cookies</H2>
      <P>
        This website does not set its own cookies and does not use analytics or advertising trackers. The map in the
        &ldquo;Where we are&rdquo; section is provided by Google Maps and only loads when you click &ldquo;Show
        map&rdquo;. Once loaded, Google may set cookies and process your data under its own privacy policy
        (policies.google.com/privacy).
      </P>

      <H2>Services we use</H2>
      <ul className="list-disc pl-5 flex flex-col gap-2 mb-3">
        <Li><strong className="font-medium text-ink">Vercel</strong>: hosts this website.</Li>
        <Li><strong className="font-medium text-ink">Web3Forms</strong>: delivers form messages to our email inbox.</Li>
        <Li><strong className="font-medium text-ink">Google Maps</strong>: the optional map, only if you load it.</Li>
      </ul>
      <P>
        Some of these providers may process data outside the European Economic Area. Where they do, they rely on
        safeguards recognised under the GDPR, such as the EU Standard Contractual Clauses.
      </P>

      <H2>How long we keep it</H2>
      <P>
        Enquiries are kept for as long as needed to answer them and for up to two years afterwards, unless they lead to
        a booking, in which case we keep booking records as long as Greek tax and accounting law requires. Opening
        notification sign-ups are deleted once the announcement has been sent, or earlier if you ask.
      </P>

      <H2>Your rights</H2>
      <P>
        You have the right to access, correct or delete your data, to restrict or object to its use, to receive it in a
        portable format, and to withdraw consent at any time. To use any of these rights, contact us at {contact}. You
        also have the right to complain to the Hellenic Data Protection Authority (www.dpa.gr).
      </P>

      <H2>Changes</H2>
      <P>If we change how we handle data, we will update this page and the date at the top.</P>
    </main>
  );
}

export default Privacy;
