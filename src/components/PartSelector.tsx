import type { ClothingPart } from '../types/design'
import { PARTS, PART_LABELS } from '../types/design'

interface PartSelectorProps {
  selectedPart: ClothingPart
  onSelectPart: (part: ClothingPart) => void
}

export default function PartSelector({
  selectedPart,
  onSelectPart,
}: PartSelectorProps) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
        Select part
      </p>
      <div className="flex flex-wrap gap-2">
        {PARTS.map((part) => {
          const active = selectedPart === part
          return (
            <button
              key={part}
              type="button"
              onClick={() => onSelectPart(part)}
              className={[
                'rounded-full border px-3 py-1.5 text-sm font-medium transition-all',
                active
                  ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900',
              ].join(' ')}
            >
              {PART_LABELS[part]}
            </button>
          )
        })}
      </div>
    </div>
  )
}
