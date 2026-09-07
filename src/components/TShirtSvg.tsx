import type { ClothingPart, Design, ShirtView } from '../types/design'
import { PART_LABELS } from '../types/design'

interface TShirtSvgProps {
  design: Design
  view: ShirtView
  selectedPart: ClothingPart
  onSelectPart: (part: ClothingPart) => void
}

function partClass(isSelected: boolean): string {
  return [
    'cursor-pointer transition-[fill,filter] duration-200 ease-out outline-none',
    isSelected ? 'drop-shadow-[0_0_7px_rgba(15,23,42,0.45)]' : 'hover:brightness-[1.04]',
  ].join(' ')
}

export default function TShirtSvg({
  design,
  view,
  selectedPart,
  onSelectPart,
}: TShirtSvgProps) {
  const strokeFor = (part: ClothingPart) =>
    selectedPart === part ? '#0EA5E9' : 'rgba(15,23,42,0.12)'

  const widthFor = (part: ClothingPart) => (selectedPart === part ? 1.8 : 0.45)

  const sleeveLeftColor = view === 'front' ? design.leftSleeve : design.rightSleeve
  const sleeveRightColor = view === 'front' ? design.rightSleeve : design.leftSleeve
  const sleeveLeftPart: ClothingPart =
    view === 'front' ? 'leftSleeve' : 'rightSleeve'
  const sleeveRightPart: ClothingPart =
    view === 'front' ? 'rightSleeve' : 'leftSleeve'

  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Classic T-shirt preview"
      className="h-auto w-full max-w-[420px] select-none"
    >
      <defs>
        <linearGradient id="fabricShade" x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="42%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id="sleeveShadeL" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="sleeveShadeR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="collarShade" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <filter id="softCloth" x="-8%" y="-8%" width="116%" height="116%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1c1917" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#softCloth)">
        {/* Left sleeve */}
        <g
          role="button"
          tabIndex={0}
          aria-label={PART_LABELS[sleeveLeftPart]}
          aria-pressed={selectedPart === sleeveLeftPart}
          className={partClass(selectedPart === sleeveLeftPart)}
          onClick={() => onSelectPart(sleeveLeftPart)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelectPart(sleeveLeftPart)
            }
          }}
        >
          <path
            d="M53.8 49.5C33 54.2 16.5 66.8 11.6 84.4C7.2 100.2 10.4 112.8 21.2 117.4C30.4 121.4 40.2 117.6 47.4 105.8C51.6 98.6 53.2 84 53.6 70.2C53.8 62.2 53.9 55.2 53.8 49.5Z"
            fill={sleeveLeftColor}
            stroke={strokeFor(sleeveLeftPart)}
            strokeWidth={widthFor(sleeveLeftPart)}
            style={{ transition: 'fill 180ms ease' }}
          />
          <path
            d="M53.8 49.5C33 54.2 16.5 66.8 11.6 84.4C7.2 100.2 10.4 112.8 21.2 117.4C30.4 121.4 40.2 117.6 47.4 105.8C51.6 98.6 53.2 84 53.6 70.2C53.8 62.2 53.9 55.2 53.8 49.5Z"
            fill="url(#sleeveShadeL)"
            pointerEvents="none"
          />
          <path
            d="M21.8 114.6C29.4 118 38.2 114.6 45 104.4"
            fill="none"
            stroke="rgba(0,0,0,0.16)"
            strokeWidth="0.7"
            pointerEvents="none"
          />
        </g>

        {/* Right sleeve */}
        <g
          role="button"
          tabIndex={0}
          aria-label={PART_LABELS[sleeveRightPart]}
          aria-pressed={selectedPart === sleeveRightPart}
          className={partClass(selectedPart === sleeveRightPart)}
          onClick={() => onSelectPart(sleeveRightPart)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelectPart(sleeveRightPart)
            }
          }}
        >
          <path
            d="M146.2 49.5C167 54.2 183.5 66.8 188.4 84.4C192.8 100.2 189.6 112.8 178.8 117.4C169.6 121.4 159.8 117.6 152.6 105.8C148.4 98.6 146.8 84 146.4 70.2C146.2 62.2 146.1 55.2 146.2 49.5Z"
            fill={sleeveRightColor}
            stroke={strokeFor(sleeveRightPart)}
            strokeWidth={widthFor(sleeveRightPart)}
            style={{ transition: 'fill 180ms ease' }}
          />
          <path
            d="M146.2 49.5C167 54.2 183.5 66.8 188.4 84.4C192.8 100.2 189.6 112.8 178.8 117.4C169.6 121.4 159.8 117.6 152.6 105.8C148.4 98.6 146.8 84 146.4 70.2C146.2 62.2 146.1 55.2 146.2 49.5Z"
            fill="url(#sleeveShadeR)"
            pointerEvents="none"
          />
          <path
            d="M178.2 114.6C170.6 118 161.8 114.6 155 104.4"
            fill="none"
            stroke="rgba(0,0,0,0.16)"
            strokeWidth="0.7"
            pointerEvents="none"
          />
        </g>

        {/* Body */}
        <g
          role="button"
          tabIndex={0}
          aria-label={PART_LABELS.body}
          aria-pressed={selectedPart === 'body'}
          className={partClass(selectedPart === 'body')}
          onClick={() => onSelectPart('body')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelectPart('body')
            }
          }}
        >
          {view === 'front' ? (
            <path
              d="M53.8 49.5L68.2 35.8C74.4 52.6 85.6 62.4 100 62.4C114.4 62.4 125.6 52.6 131.8 35.8L146.2 49.5C148.4 72 150.6 122 151.4 164L150.2 212.4C150.2 223.2 129.4 230.4 100 230.4C70.6 230.4 49.8 223.2 49.8 212.4L48.6 164C49.4 122 51.6 72 53.8 49.5Z"
              fill={design.body}
              stroke={strokeFor('body')}
              strokeWidth={widthFor('body')}
              style={{ transition: 'fill 180ms ease' }}
            />
          ) : (
            <path
              d="M53.8 49.5L68.2 35.8C79.4 47.2 88.8 52.4 100 52.4C111.2 52.4 120.6 47.2 131.8 35.8L146.2 49.5C148.4 72 150.6 122 151.4 164L150.2 212.4C150.2 223.2 129.4 230.4 100 230.4C70.6 230.4 49.8 223.2 49.8 212.4L48.6 164C49.4 122 51.6 72 53.8 49.5Z"
              fill={design.body}
              stroke={strokeFor('body')}
              strokeWidth={widthFor('body')}
              style={{ transition: 'fill 180ms ease' }}
            />
          )}
          {view === 'front' ? (
            <path
              d="M53.8 49.5L68.2 35.8C74.4 52.6 85.6 62.4 100 62.4C114.4 62.4 125.6 52.6 131.8 35.8L146.2 49.5C148.4 72 150.6 122 151.4 164L150.2 212.4C150.2 223.2 129.4 230.4 100 230.4C70.6 230.4 49.8 223.2 49.8 212.4L48.6 164C49.4 122 51.6 72 53.8 49.5Z"
              fill="url(#fabricShade)"
              pointerEvents="none"
            />
          ) : (
            <path
              d="M53.8 49.5L68.2 35.8C79.4 47.2 88.8 52.4 100 52.4C111.2 52.4 120.6 47.2 131.8 35.8L146.2 49.5C148.4 72 150.6 122 151.4 164L150.2 212.4C150.2 223.2 129.4 230.4 100 230.4C70.6 230.4 49.8 223.2 49.8 212.4L48.6 164C49.4 122 51.6 72 53.8 49.5Z"
              fill="url(#fabricShade)"
              pointerEvents="none"
            />
          )}
          <path
            d="M62 214H138"
            fill="none"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.8"
            pointerEvents="none"
          />
        </g>

        {/* Collar */}
        <g
          role="button"
          tabIndex={0}
          aria-label={PART_LABELS.collar}
          aria-pressed={selectedPart === 'collar'}
          className={partClass(selectedPart === 'collar')}
          onClick={() => onSelectPart('collar')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelectPart('collar')
            }
          }}
        >
          {view === 'front' ? (
            <>
              <path
                d="M68.2 35.8C68.4 22.6 131.6 22.6 131.8 35.8C124.2 29.8 112.8 26.2 100 26.2C87.2 26.2 75.8 29.8 68.2 35.8Z"
                fill={design.collar}
                stroke={strokeFor('collar')}
                strokeWidth={widthFor('collar')}
                style={{ transition: 'fill 180ms ease' }}
              />
              <path
                d="M70 38.2C78.4 54.8 88.6 62.4 100 62.4C111.4 62.4 121.6 54.8 130 38.2C122.4 45.4 112 49.8 100 49.8C88 49.8 77.6 45.4 70 38.2Z"
                fill={design.collar}
                stroke={strokeFor('collar')}
                strokeWidth={widthFor('collar')}
                style={{ transition: 'fill 180ms ease' }}
              />
              <path
                d="M68.2 35.8C68.4 22.6 131.6 22.6 131.8 35.8C124.2 29.8 112.8 26.2 100 26.2C87.2 26.2 75.8 29.8 68.2 35.8Z"
                fill="url(#collarShade)"
                pointerEvents="none"
              />
              <path
                d="M70 38.2C78.4 54.8 88.6 62.4 100 62.4C111.4 62.4 121.6 54.8 130 38.2C122.4 45.4 112 49.8 100 49.8C88 49.8 77.6 45.4 70 38.2Z"
                fill="url(#collarShade)"
                pointerEvents="none"
              />
              <path
                d="M74.6 40.4C82.4 52.6 90.6 58.2 100 58.2C109.4 58.2 117.6 52.6 125.4 40.4C118.2 34.8 109.4 31.4 100 31.4C90.6 31.4 81.8 34.8 74.6 40.4Z"
                fill="rgba(0,0,0,0.18)"
                pointerEvents="none"
              />
            </>
          ) : (
            <>
              <path
                d="M68.2 35.8C68.4 22.2 131.6 22.2 131.8 35.8C122.6 46.6 112 52.4 100 52.4C88 52.4 77.4 46.6 68.2 35.8Z"
                fill={design.collar}
                stroke={strokeFor('collar')}
                strokeWidth={widthFor('collar')}
                style={{ transition: 'fill 180ms ease' }}
              />
              <path
                d="M68.2 35.8C68.4 22.2 131.6 22.2 131.8 35.8C122.6 46.6 112 52.4 100 52.4C88 52.4 77.4 46.6 68.2 35.8Z"
                fill="url(#collarShade)"
                pointerEvents="none"
              />
              <path
                d="M74.8 36.4C80.2 28.6 119.8 28.6 125.2 36.4C117.4 44.8 108.4 48.6 100 48.6C91.6 48.6 82.6 44.8 74.8 36.4Z"
                fill="rgba(0,0,0,0.16)"
                pointerEvents="none"
              />
            </>
          )}
        </g>

        {/* Pocket — front only */}
        {view === 'front' && (
          <g
            role="button"
            tabIndex={0}
            aria-label={PART_LABELS.pocket}
            aria-pressed={selectedPart === 'pocket'}
            className={partClass(selectedPart === 'pocket')}
            onClick={() => onSelectPart('pocket')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelectPart('pocket')
              }
            }}
          >
            <path
              d="M71.5 84H93.5V105.2C93.5 109.4 71.5 109.4 71.5 105.2V84Z"
              fill={design.pocket}
              stroke={strokeFor('pocket')}
              strokeWidth={widthFor('pocket')}
              style={{ transition: 'fill 180ms ease' }}
            />
            <path
              d="M71.5 84H93.5V105.2C93.5 109.4 71.5 109.4 71.5 105.2V84Z"
              fill="url(#fabricShade)"
              pointerEvents="none"
            />
            <path
              d="M71.5 84H93.5V88.4H71.5V84Z"
              fill="rgba(0,0,0,0.08)"
              pointerEvents="none"
            />
            <path
              d="M73.2 88.4V103.6M91.8 88.4V103.6"
              fill="none"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="0.45"
              strokeDasharray="1.1 0.9"
              pointerEvents="none"
            />
          </g>
        )}
      </g>
    </svg>
  )
}
