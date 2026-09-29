export function GoldFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 28"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 14h62"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M150 14h62"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M110 6c8 4 12 8 0 16-12-8-8-12 0-16Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="110" cy="14" r="2.2" fill="currentColor" />
      <path
        d="M92 14c6-8 12-8 18 0M110 14c6 8 12 8 18 0"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.8"
      />
    </svg>
  );
}

export function AlwaysOpenSeal() {
  return (
    <div
      className="relative size-20 rounded-full bg-wine-deep/85 shadow-[0_0_0_1px_rgb(201_164_108_/_45%),0_0_24px_rgb(201_164_108_/_18%)] md:size-24"
      aria-label="مفتوح 24/7"
    >
      <svg viewBox="0 0 120 120" className="seal-spin size-full text-gold">
        <defs>
          <path id="seal-circle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <text fill="currentColor" fontSize="9" letterSpacing="3" fontFamily="Cairo, sans-serif">
          <textPath href="#seal-circle">OPEN · 24 HOURS · مفتوح دائماً ·</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center leading-none">
          <div className="font-display text-lg text-gold-bright md:text-xl">24/7</div>
        </div>
      </div>
    </div>
  );
}
