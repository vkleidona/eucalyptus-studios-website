import { Link } from 'react-router-dom';
import siteConfig from '../siteConfig';

const COLUMNS = [
  {
    title: 'Studios',
    links: [
      { label: 'Karpos Studio', href: '/studios/karpos' },
      { label: 'Elia Suite', href: '/studios/elia' },
      { label: 'Petra Family', href: '/studios/petra' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Amenities', href: '/#amenities' },
      { label: 'Location', href: '/#location' },
    ],
  },
  {
    title: 'Info',
    links: [
      { label: 'Book direct', href: '/#contact' },
      { label: 'Contact us', href: '/#contact' },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-paper border-t border-line px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-8">
        <div>
          <p className="font-serif text-[18px] text-ink mb-2.5">
            olea <span className="text-olive-500">living</span>
          </p>
          <p className="text-[13px] text-muted leading-[1.6] max-w-[220px] font-light">
            Slow stays in the heart of Messinia. Studios designed for those who travel with intention.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] font-medium text-ink tracking-wider uppercase mb-3.5">{col.title}</h4>
            {col.links.map((link) => (
              <Link key={link.label} to={link.href} className="block text-[13px] text-muted hover:text-ink mb-2 font-light transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-line pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-faint">
          © {new Date().getFullYear()} {siteConfig.name}, Kalamata. All rights reserved.
        </p>
        <p className="text-[12px] text-faint font-light">Made with care in Messinia</p>
      </div>
    </footer>
  );
}

export default Footer;
