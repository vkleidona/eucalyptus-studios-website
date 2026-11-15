import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Studios', to: '/#studios' },
  { label: 'Amenities', to: '/#amenities' },
  { label: 'Location', to: '/#location' },
  { label: 'Contact', to: '/#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" onClick={close} aria-label="Eucalyptus Studios, home" className="rounded-md">
          <Logo />
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
            className="text-[13px] bg-leaf-700 text-cream px-[18px] py-2 rounded-lg tracking-wide hover:bg-leaf-800 transition-colors"
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
            <Icon name={open ? 'ti-x' : 'ti-menu-2'} className="text-[20px]" />
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
