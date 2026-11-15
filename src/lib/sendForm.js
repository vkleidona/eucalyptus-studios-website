import siteConfig from '../siteConfig';

// Sends a form to the hotel inbox through Web3Forms (https://web3forms.com).
// The access key is public by design: it can only deliver messages to the owner's email.
export async function sendForm({ subject, replyTo, fields }) {
  if (!siteConfig.web3formsKey) {
    throw new Error('Form is not configured: add web3formsKey in src/siteConfig.js');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: siteConfig.web3formsKey,
      subject,
      from_name: `${siteConfig.name} website`,
      replyto: replyTo,
      ...fields,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Sending failed');
  }
}
