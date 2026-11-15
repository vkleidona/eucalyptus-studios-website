import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="px-6 md:px-12 py-24 text-center">
      <p className="text-[11px] tracking-[0.12em] text-olive-500 uppercase mb-2.5 font-semibold">Page not found</p>
      <h1 className="font-serif text-[32px] text-ink mb-4">This path leads nowhere</h1>
      <p className="text-[15px] text-muted mb-8 font-light">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="bg-olive-700 text-cream px-6 py-3 rounded-lg text-[14px] hover:bg-olive-800 transition-colors">
        Back to home
      </Link>
    </main>
  );
}

export default NotFound;
