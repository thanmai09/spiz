import type { ReactNode } from 'react'
import type { ClothingPart, Design, ShirtView } from '../types/design'
import { PART_LABELS } from '../types/design'

interface ClientJerseySvgProps {
  design: Design
  view: ShirtView
  selectedPart: ClothingPart
  onSelectPart: (part: ClothingPart) => void
}

function partClass(isSelected: boolean): string {
  return [
    'cursor-pointer transition-[fill,filter] duration-200 ease-out outline-none',
    isSelected ? 'drop-shadow-[0_0_8px_rgba(14,165,233,0.55)]' : 'hover:brightness-[1.05]',
  ].join(' ')
}

function PartHit({
  part,
  selectedPart,
  onSelectPart,
  children,
}: {
  part: ClothingPart
  selectedPart: ClothingPart
  onSelectPart: (part: ClothingPart) => void
  children: ReactNode
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={PART_LABELS[part]}
      aria-pressed={selectedPart === part}
      className={partClass(selectedPart === part)}
      onClick={() => onSelectPart(part)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelectPart(part)
        }
      }}
    >
      {children}
    </g>
  )
}

export default function ClientJerseySvg({
  design,
  view,
  selectedPart,
  onSelectPart,
}: ClientJerseySvgProps) {
  const strokeFor = (part: ClothingPart) =>
    selectedPart === part ? '#0EA5E9' : 'rgba(0,0,0,0.22)'
  const widthFor = (part: ClothingPart) => (selectedPart === part ? 1.9 : 0.5)

  const sleeveLeftColor = view === 'front' ? design.leftSleeve : design.rightSleeve
  const sleeveRightColor = view === 'front' ? design.rightSleeve : design.leftSleeve
  const sleeveLeftPart: ClothingPart = view === 'front' ? 'leftSleeve' : 'rightSleeve'
  const sleeveRightPart: ClothingPart = view === 'front' ? 'rightSleeve' : 'leftSleeve'

  const uid = view
  const leftSleevePath =
    'M52 54C24 58 8 76 5 98C2 116 12 134 32 136C44 138 51 124 53 106C54 86 54 68 52 54Z'
  const rightSleevePath =
    'M148 54C176 58 192 76 195 98C198 116 188 134 168 136C156 138 149 124 147 106C146 86 146 68 148 54Z'
  const bodyPath =
    'M51.5 56L72 40L84 58C90 72 95 80 100 80C105 80 110 72 116 58L128 40L148.5 56C151 88 153 138 153.5 176L151.5 230C151.5 242 129 250 100 250C71 250 48.5 242 48.5 230L46.5 176C47 138 49 88 51.5 56Z'

  return (
    <svg
      viewBox="0 0 200 268"
      role="img"
      aria-label={view === 'front' ? 'MMA HYD jersey front' : 'MMA HYD jersey back'}
      className="h-auto w-full max-w-[440px] select-none"
    >
      <defs>
        <linearGradient id={`${uid}-fabric`} x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="48%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`${uid}-collarShade`} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="35%" stopColor="#c0c4cc" />
          <stop offset="70%" stopColor="#9aa1ab" />
          <stop offset="100%" stopColor="#e8eaee" />
        </linearGradient>
        <linearGradient id="back-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="40%" stopColor="#c0c4cc" />
          <stop offset="100%" stopColor="#9aa1ab" />
        </linearGradient>
        <pattern
          id={`${uid}-mesh`}
          width="14"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M7 1.4 L13.2 5.2 V12.8 L7 16.6 L0.8 12.8 V5.2 Z"
            fill="none"
            stroke={design.pattern}
            strokeWidth="0.75"
          />
          <path
            d="M7 16.6 L13.2 20.4 M7 16.6 L0.8 20.4"
            fill="none"
            stroke={design.pattern}
            strokeWidth="0.75"
            opacity="0.7"
          />
          <path
            d="M4 3 L7 6 L4 9 M10 11 L7 14 L10 17"
            fill="none"
            stroke={design.pattern}
            strokeWidth="0.45"
            opacity="0.55"
          />
        </pattern>
        <clipPath id={`${uid}-bodyClip`}>
          <path d={bodyPath} />
        </clipPath>
        <clipPath id={`${uid}-leftClip`}>
          <path d={leftSleevePath} />
        </clipPath>
        <clipPath id={`${uid}-rightClip`}>
          <path d={rightSleevePath} />
        </clipPath>
        <filter id={`${uid}-soft`} x="-10%" y="-8%" width="120%" height="120%">
          <feDropShadow dx="0" dy="11" stdDeviation="8" floodColor="#111" floodOpacity="0.22" />
        </filter>
      </defs>

      <g filter={`url(#${uid}-soft)`}>
        <PartHit part={sleeveLeftPart} selectedPart={selectedPart} onSelectPart={onSelectPart}>
          <path
            d={leftSleevePath}
            fill={sleeveLeftColor}
            stroke={strokeFor(sleeveLeftPart)}
            strokeWidth={widthFor(sleeveLeftPart)}
            style={{ transition: 'fill 180ms ease' }}
          />
          <g clipPath={`url(#${uid}-leftClip)`} pointerEvents="none">
            <rect x="0" y="40" width="70" height="110" fill={`url(#${uid}-mesh)`} opacity="0.85" />
            <path d={leftSleevePath} fill={`url(#${uid}-fabric)`} />
          </g>
        </PartHit>

        <PartHit part={sleeveRightPart} selectedPart={selectedPart} onSelectPart={onSelectPart}>
          <path
            d={rightSleevePath}
            fill={sleeveRightColor}
            stroke={strokeFor(sleeveRightPart)}
            strokeWidth={widthFor(sleeveRightPart)}
            style={{ transition: 'fill 180ms ease' }}
          />
          <g clipPath={`url(#${uid}-rightClip)`} pointerEvents="none">
            <rect x="130" y="40" width="70" height="110" fill={`url(#${uid}-mesh)`} opacity="0.85" />
            <path d={rightSleevePath} fill={`url(#${uid}-fabric)`} />
          </g>
        </PartHit>

        <PartHit part="body" selectedPart={selectedPart} onSelectPart={onSelectPart}>
          <path
            d={bodyPath}
            fill={design.body}
            stroke={strokeFor('body')}
            strokeWidth={widthFor('body')}
            style={{ transition: 'fill 180ms ease' }}
          />
          <path d={bodyPath} fill={`url(#${uid}-fabric)`} pointerEvents="none" />
        </PartHit>

        <PartHit part="pattern" selectedPart={selectedPart} onSelectPart={onSelectPart}>
          <g clipPath={`url(#${uid}-bodyClip)`}>
            <path
              d="M84 58C90 72 95 80 100 80C105 80 110 72 116 58L138 92L128 40L116 58L100 80L84 58L72 40L62 92Z"
              fill={design.pattern}
              opacity="0.92"
              style={{ transition: 'fill 180ms ease' }}
            />
            <path
              d="M62 92L84 128L72 250H48.5L46.5 176L51.5 56L62 92Z"
              fill={design.pattern}
              opacity="0.55"
              style={{ transition: 'fill 180ms ease' }}
            />
            <path
              d="M138 92L116 128L128 250H151.5L153.5 176L148.5 56L138 92Z"
              fill={design.pattern}
              opacity="0.55"
              style={{ transition: 'fill 180ms ease' }}
            />
            <path
              d="M86 86C92 96 96 108 100 108C104 108 108 96 114 86C118 102 122 150 122 186C122 214 112 236 100 236C88 236 78 214 78 186C78 150 82 102 86 86Z"
              fill={design.pattern}
              stroke={strokeFor('pattern')}
              strokeWidth={widthFor('pattern')}
              style={{ transition: 'fill 180ms ease' }}
            />
            <path
              d="M86 86C92 96 96 108 100 108C104 108 108 96 114 86C118 102 122 150 122 186C122 214 112 236 100 236C88 236 78 214 78 186C78 150 82 102 86 86Z"
              fill={`url(#${uid}-mesh)`}
              pointerEvents="none"
            />
            <path
              d="M72 40L100 80L128 40"
              fill="none"
              stroke={design.pattern}
              strokeWidth="1.1"
              opacity="0.9"
              pointerEvents="none"
            />
            <path
              d="M60 70L84 128M140 70L116 128M78 150L52 230M122 150L148 230"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.6"
              pointerEvents="none"
            />
          </g>
        </PartHit>

        <PartHit part="collar" selectedPart={selectedPart} onSelectPart={onSelectPart}>
          <path
            d="M72 40C78 28 122 28 128 40L118 52C114 44 106 40 100 40C94 40 86 44 82 52Z"
            fill={design.collar}
            stroke={strokeFor('collar')}
            strokeWidth={widthFor('collar')}
            style={{ transition: 'fill 180ms ease' }}
          />
          <path
            d="M82 52C88 66 94 80 100 80C106 80 112 66 118 52C112 58 106 62 100 62C94 62 88 58 82 52Z"
            fill={design.collar}
            stroke={strokeFor('collar')}
            strokeWidth={widthFor('collar')}
            style={{ transition: 'fill 180ms ease' }}
          />
          <path
            d="M72 40C78 28 122 28 128 40L118 52C114 44 106 40 100 40C94 40 86 44 82 52Z"
            fill={`url(#${uid}-collarShade)`}
            pointerEvents="none"
          />
          <path
            d="M86 54C92 66 96 74 100 74C104 74 108 66 114 54C108 50 104 48 100 48C96 48 92 50 86 54Z"
            fill="rgba(0,0,0,0.22)"
            pointerEvents="none"
          />
        </PartHit>
      </g>

      {view === 'front' ? <FrontGraphics /> : <BackGraphics />}
    </svg>
  )
}

function FrontGraphics() {
  return (
    <g pointerEvents="none" aria-hidden="true">
      <g transform="translate(100 96)">
        <path
          d="M0 -15 L13 -11 L11 5C11 12 0 18 0 18C0 18 -11 12 -11 5L-13 -11Z"
          fill="#1c1c1c"
          stroke="#d4d4d8"
          strokeWidth="1.15"
        />
        <path
          d="M-5 -2C-12 -10 -16 -5 -13 1"
          fill="none"
          stroke="#e4e4e7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 -2C12 -10 16 -5 13 1"
          fill="none"
          stroke="#e4e4e7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="1" rx="4.6" ry="5.4" fill="#2f2f32" stroke="#bbb" strokeWidth="0.55" />
        <path d="M-1.6 3.2C-0.4 5 0.4 5 1.6 3.2" fill="none" stroke="#aaa" strokeWidth="0.5" />
      </g>
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Arial Black, Impact, Segoe UI, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="1.6"
      >
        HYDERABAD
      </text>
      <text
        x="64"
        y="232"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="1.1"
      >
        APFC
      </text>
      <text
        x="136"
        y="230"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="8"
        fontStyle="italic"
        fontWeight="700"
      >
        iFL
      </text>
      <text
        x="136"
        y="237"
        textAnchor="middle"
        fill="#d4d4d8"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="3.2"
        letterSpacing="0.4"
      >
        INDIAN FIGHT LEAGUE
      </text>
    </g>
  )
}

function BackGraphics() {
  return (
    <g pointerEvents="none" aria-hidden="true">
      <text
        x="100"
        y="92"
        textAnchor="middle"
        fill="#E23B2B"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="13"
        fontStyle="italic"
        fontWeight="800"
        letterSpacing="0.8"
      >
        12R
      </text>
      <text
        x="101.2"
        y="131.2"
        textAnchor="middle"
        fill="#3f3f46"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="28"
        fontStyle="italic"
        fontWeight="800"
      >
        iFL
      </text>
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fill="url(#back-metal)"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="28"
        fontStyle="italic"
        fontWeight="800"
      >
        iFL
      </text>
      <text
        x="100"
        y="144"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="5.2"
        fontWeight="700"
        letterSpacing="1.4"
      >
        INDIAN FIGHT LEAGUE
      </text>
      <text
        x="100"
        y="154"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="5"
        fontWeight="600"
        letterSpacing="0.8"
      >
        by APFC
      </text>
      <text
        x="100"
        y="226"
        textAnchor="middle"
        fill="#E23B2B"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="11"
        fontWeight="800"
        letterSpacing="1.2"
      >
        UFC
      </text>
      <text
        x="100"
        y="236"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="1.6"
      >
        FIGHT PASS
      </text>
    </g>
  )
}
