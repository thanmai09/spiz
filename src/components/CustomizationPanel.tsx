import { Clock3 } from 'lucide-react'
import ColorPalette from './ColorPalette'
import PartSelector from './PartSelector'
import type { ClothingPart, ProductId } from '../types/design'
import { PART_LABELS } from '../types/design'

interface CustomizationPanelProps {
  selectedProduct: ProductId
  selectedPart: ClothingPart
  currentColor: string
  onSelectPart: (part: ClothingPart) => void
  onSelectColor: (hex: string) => void
}

export default function CustomizationPanel({
  selectedProduct,
  selectedPart,
  currentColor,
  onSelectPart,
  onSelectColor,
}: CustomizationPanelProps) {
  const locked = selectedProduct !== 'jersey'

  return (
    <section className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-tight text-stone-900">
          Customize Your Jersey
        </h2>
        <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-500">
          {PART_LABELS[selectedPart]}
        </span>
      </div>

      <div className={locked ? 'pointer-events-none select-none blur-[2px]' : ''}>
        <PartSelector selectedPart={selectedPart} onSelectPart={onSelectPart} />
        <div className="mt-5">
          <ColorPalette currentColor={currentColor} onSelectColor={onSelectColor} />
        </div>
      </div>

      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 px-6 text-center backdrop-blur-[2px]">
          <Clock3 className="mb-2 h-6 w-6 text-stone-400" strokeWidth={1.75} />
          <p className="text-sm font-semibold text-stone-900">Coming soon</p>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            This piece is in the studio. The MMA HYD jersey is ready to customize
            today.
          </p>
        </div>
      )}
    </section>
  )
}
