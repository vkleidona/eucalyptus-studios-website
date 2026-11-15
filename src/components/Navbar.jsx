import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Studios', to: '/#studios' },
  { label: 'Amenities', to: '/#amenities' },
  { label: 'Location', to: '/#location' },
  { label: 'Contact', to: '/#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-12 py-[18px]">
        <Link to="/" onClick={close} className="font-serif text-[20px] font-normal tracking-wide text-ink">
          olea <span className="text-olive-500">living</span>
        </Link>

        <div className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[13px] text-muted hover:text-ink transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            onClick={close}
            className="text-[13px] bg-olive-700 text-cream px-[18px] py-2 rounded-lg tracking-wide hover:bg-olive-800 transition-colors"
          >
            Book now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-ink hover:bg-paper"
          >
            <i className={`ti ${open ? 'ti-x' : 'ti-menu-2'} text-[20px]`}></i>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-white px-6 py-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              className="block py-3 text-[15px] text-ink border-b border-paper last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
