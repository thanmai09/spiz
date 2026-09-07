export default function PoloSvg() {
  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Polo T-shirt coming soon"
      className="h-auto w-full max-w-[420px] select-none"
    >
      <defs>
        <linearGradient id="poloShade" x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
        <filter id="poloShadow" x="-8%" y="-8%" width="116%" height="116%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1c1917" floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#poloShadow)" fill="#D6D3D1">
        <path d="M53.8 52C33 56.8 16.5 69 11.6 86.4C7.2 102 10.4 114.4 21.2 119C30.4 123 40.2 119.2 47.4 107.6C51.6 100.4 53.2 86 53.6 72.4C53.8 64.6 53.9 57.6 53.8 52Z" />
        <path d="M146.2 52C167 56.8 183.5 69 188.4 86.4C192.8 102 189.6 114.4 178.8 119C169.6 123 159.8 119.2 152.6 107.6C148.4 100.4 146.8 86 146.4 72.4C146.2 64.6 146.1 57.6 146.2 52Z" />
        <path d="M53.8 52L70 40L78 58H122L130 40L146.2 52C148.4 74 150.6 124 151.4 166L150.2 214C150.2 224.6 129.4 231.6 100 231.6C70.6 231.6 49.8 224.6 49.8 214L48.6 166C49.4 124 51.6 74 53.8 52Z" />
        <path
          d="M70 40L62 28C78 18 122 18 138 28L130 40C120 32 110 30 100 30C90 30 80 32 70 40Z"
          fill="#A8A29E"
        />
        <path d="M96 58V118H104V58H96Z" fill="#A8A29E" />
        <circle cx="100" cy="70" r="2.1" fill="#78716C" />
        <circle cx="100" cy="86" r="2.1" fill="#78716C" />
        <circle cx="100" cy="102" r="2.1" fill="#78716C" />
        <path d="M53.8 52C33 56.8 16.5 69 11.6 86.4C7.2 102 10.4 114.4 21.2 119C30.4 123 40.2 119.2 47.4 107.6C51.6 100.4 53.2 86 53.6 72.4C53.8 64.6 53.9 57.6 53.8 52Z" fill="url(#poloShade)" />
        <path d="M146.2 52C167 56.8 183.5 69 188.4 86.4C192.8 102 189.6 114.4 178.8 119C169.6 123 159.8 119.2 152.6 107.6C148.4 100.4 146.8 86 146.4 72.4C146.2 64.6 146.1 57.6 146.2 52Z" fill="url(#poloShade)" />
        <path d="M53.8 52L70 40L78 58H122L130 40L146.2 52C148.4 74 150.6 124 151.4 166L150.2 214C150.2 224.6 129.4 231.6 100 231.6C70.6 231.6 49.8 224.6 49.8 214L48.6 166C49.4 124 51.6 74 53.8 52Z" fill="url(#poloShade)" />
      </g>
    </svg>
  )
}
