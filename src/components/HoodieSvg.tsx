export default function HoodieSvg() {
  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Hoodie coming soon"
      className="h-auto w-full max-w-[420px] select-none"
    >
      <defs>
        <linearGradient id="hoodieShade" x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.16" />
        </linearGradient>
        <filter id="hoodieShadow" x="-8%" y="-8%" width="116%" height="116%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1c1917" floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#hoodieShadow)">
        <path
          d="M64 48C64 24 136 24 136 48C136 62 122 74 100 74C78 74 64 62 64 48Z"
          fill="#A8A29E"
        />
        <path
          d="M72 50C72 36 128 36 128 50C128 60 116 68 100 68C84 68 72 60 72 50Z"
          fill="#78716C"
        />
        <path
          d="M48 58C28 64 14 78 10 96C6 112 10 126 22 132C32 137 42 132 48 120V58Z"
          fill="#D6D3D1"
        />
        <path
          d="M152 58C172 64 186 78 190 96C194 112 190 126 178 132C168 137 158 132 152 120V58Z"
          fill="#D6D3D1"
        />
        <path
          d="M48 58L64 48C78 74 122 74 136 48L152 58C155 90 157 140 157 170L155 216C155 228 132 236 100 236C68 236 45 228 45 216L43 170C43 140 45 90 48 58Z"
          fill="#D6D3D1"
        />
        <path
          d="M70 128H130V176C130 184 70 184 70 176V128Z"
          fill="#A8A29E"
        />
        <path d="M88 48V92" stroke="#D6D3D1" strokeWidth="1.4" />
        <path d="M112 48V92" stroke="#D6D3D1" strokeWidth="1.4" />
        <path d="M10 124H24V138H10Z" fill="#A8A29E" />
        <path d="M176 124H190V138H176Z" fill="#A8A29E" />
        <path d="M52 220H148V228C148 234 52 234 52 228V220Z" fill="#A8A29E" />
        <path
          d="M48 58C28 64 14 78 10 96C6 112 10 126 22 132C32 137 42 132 48 120V58Z"
          fill="url(#hoodieShade)"
        />
        <path
          d="M152 58C172 64 186 78 190 96C194 112 190 126 178 132C168 137 158 132 152 120V58Z"
          fill="url(#hoodieShade)"
        />
        <path
          d="M48 58L64 48C78 74 122 74 136 48L152 58C155 90 157 140 157 170L155 216C155 228 132 236 100 236C68 236 45 228 45 216L43 170C43 140 45 90 48 58Z"
          fill="url(#hoodieShade)"
        />
      </g>
    </svg>
  )
}
