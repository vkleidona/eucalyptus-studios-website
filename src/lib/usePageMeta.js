import { useEffect } from 'react';
import siteConfig from '../siteConfig';

const SITE_URL = import.meta.env.VITE_SITE_URL || '';

function setTag(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

// Sets the browser tab title, Google description and canonical address for a page.
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    const previous = {
      title: document.title,
      description: document.head.querySelector('meta[name="description"]')?.getAttribute('content'),
      canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    };

    document.title = title ? `${title} | ${siteConfig.name}` : previous.title;
    setTag('meta[name="description"]', 'content', description);
    setTag('link[rel="canonical"]', 'href', path ? `${SITE_URL}${path}` : null);

    return () => {
      document.title = previous.title;
      setTag('meta[name="description"]', 'content', previous.description);
      setTag('link[rel="canonical"]', 'href', previous.canonical);
    };
  }, [title, description, path]);
}
