// The Eucalyptus Studios logo: sprig of round leaves, wordmark, and "STUDIOS · KALAMATA".
// variant "light" is for chalk backgrounds, "dark" for gum-leaf backgrounds.
function Sprig({ dark, height }) {
  const stem = dark ? '#c9d4cf' : '#3f5a52';
  const leafA = dark ? '#9fb5ad' : '#7f9c92';
  const leafB = dark ? '#c9d4cf' : '#9fb5ad';
  return (
    <svg width={(height * 26) / 34} height={height} viewBox="0 0 26 34" aria-hidden="true" className="shrink-0">
      <path d="M13 33 C 12.5 24, 13.5 12, 13 2" stroke={stem} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="8" cy="25" rx="5" ry="4" fill={leafA} transform="rotate(-20 8 25)" />
      <ellipse cx="18.5" cy="19" rx="4.6" ry="3.7" fill={leafB} transform="rotate(20 18.5 19)" />
      <ellipse cx="8.5" cy="12" rx="3.8" ry="3" fill={leafA} transform="rotate(-20 8.5 12)" />
      <ellipse cx="17" cy="6" rx="2.8" ry="2.2" fill={leafB} transform="rotate(20 17 6)" />
    </svg>
  );
}

function Logo({ variant = 'light', size = 'md' }) {
  const dark = variant === 'dark';
  const sizes = {
    md: { sprig: 34, word: 'text-[27px]', tag: 'text-[9.5px]', gap: 'gap-3' },
    lg: { sprig: 44, word: 'text-[34px]', tag: 'text-[11px]', gap: 'gap-3.5' },
  }[size];

  return (
    <span className={`flex items-center ${sizes.gap}`}>
      <Sprig dark={dark} height={sizes.sprig} />
      <span className="flex flex-col gap-[3px]">
        <span className={`font-logo font-medium leading-none ${sizes.word} ${dark ? 'text-cream' : 'text-ink'}`}>
          Eucalyptus
        </span>
        <span className={`font-sans font-semibold tracking-[0.28em] ${sizes.tag} ${dark ? 'text-sand' : 'text-leaf-600'}`}>
          STUDIOS · KALAMATA
        </span>
      </span>
    </span>
  );
}

export default Logo;
