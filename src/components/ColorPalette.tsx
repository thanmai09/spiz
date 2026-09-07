import { Check, Pipette } from 'lucide-react'
import { isLightColor, normalizeHex, PALETTE_COLORS } from '../data/colors'

interface ColorPaletteProps {
  currentColor: string
  onSelectColor: (hex: string) => void
}

export default function ColorPalette({
  currentColor,
  onSelectColor,
}: ColorPaletteProps) {
  const normalized = normalizeHex(currentColor)
  const isPreset = PALETTE_COLORS.some(
    (color) => normalizeHex(color.hex) === normalized,
  )

  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
        Choose color
      </p>
      <div className="grid grid-cols-6 gap-2.5">
        {PALETTE_COLORS.map((color) => {
          const selected = normalizeHex(color.hex) === normalized
          return (
            <button
              key={color.name}
              type="button"
              title={color.name}
              aria-label={color.name}
              aria-pressed={selected}
              onClick={() => onSelectColor(color.hex)}
              className={[
                'relative h-9 w-9 rounded-full border transition-transform hover:scale-105',
                selected
                  ? 'ring-2 ring-stone-900 ring-offset-2'
                  : 'border-stone-200',
              ].join(' ')}
              style={{ backgroundColor: color.hex }}
            >
              {selected && (
                <Check
                  className={[
                    'absolute inset-0 m-auto h-4 w-4',
                    isLightColor(color.hex) ? 'text-stone-900' : 'text-white',
                  ].join(' ')}
                  strokeWidth={2.5}
                />
              )}
            </button>
          )
        })}

        <label
          title="Custom Color"
          className={[
            'relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border transition-transform hover:scale-105',
            !isPreset
              ? 'ring-2 ring-stone-900 ring-offset-2'
              : 'border-stone-200',
          ].join(' ')}
        >
          <span
            className="absolute inset-0"
            style={{
              background: isPreset
                ? 'conic-gradient(#dc2626, #eab308, #16a34a, #2563eb, #7c3aed, #ec4899, #dc2626)'
                : currentColor,
            }}
          />
          <Pipette
            className="relative h-3.5 w-3.5 text-white drop-shadow"
            strokeWidth={2.25}
          />
          <input
            type="color"
            aria-label="Custom color"
            value={normalized.toLowerCase()}
            onChange={(event) => onSelectColor(event.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
      </div>
      <p className="mt-3 font-mono text-xs tracking-wide text-stone-500">
        {normalized}
      </p>
    </div>
  )
}
