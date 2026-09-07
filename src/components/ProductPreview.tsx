import { RotateCcw, RotateCw, Scan } from 'lucide-react'
import ClientJerseySvg from './ClientJerseySvg'
import HoodieSvg from './HoodieSvg'
import PoloSvg from './PoloSvg'
import type { ClothingPart, Design, ProductId, ShirtView } from '../types/design'

interface ProductPreviewProps {
  productId: ProductId
  design: Design
  view: ShirtView
  selectedPart: ClothingPart
  onSelectPart: (part: ClothingPart) => void
  onRotateLeft: () => void
  onRotateRight: () => void
  onResetView: () => void
  onSetView: (view: ShirtView) => void
}

export default function ProductPreview({
  productId,
  design,
  view,
  selectedPart,
  onSelectPart,
  onRotateLeft,
  onRotateRight,
  onResetView,
  onSetView,
}: ProductPreviewProps) {
  const isJersey = productId === 'jersey'

  return (
    <section className="relative flex min-h-[520px] flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#ece8e1_68%)] shadow-sm lg:min-h-[700px]">
      <div className="flex items-start justify-between px-5 pt-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
            Client Jersey
          </p>
          <p className="mt-1 text-sm font-medium capitalize text-stone-700">
            {isJersey ? `MMA HYD · ${view}` : 'Studio look'}
          </p>
        </div>
        {isJersey && (
          <div className="inline-flex rounded-full bg-white/80 p-1 text-[11px] font-medium shadow-sm ring-1 ring-stone-200/80">
            <button
              type="button"
              onClick={() => onSetView('front')}
              className={[
                'rounded-full px-3 py-1 transition',
                view === 'front' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-800',
              ].join(' ')}
            >
              Front
            </button>
            <button
              type="button"
              onClick={() => onSetView('back')}
              className={[
                'rounded-full px-3 py-1 transition',
                view === 'back' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-800',
              ].join(' ')}
            >
              Back
            </button>
          </div>
        )}
      </div>

      <div className="relative flex flex-1 items-center justify-center px-6 py-4">
        <div className="pointer-events-none absolute bottom-16 left-1/2 h-8 w-48 -translate-x-1/2 rounded-[100%] bg-stone-900/10 blur-md" />
        {productId === 'jersey' && (
          <ClientJerseySvg
            design={design}
            view={view}
            selectedPart={selectedPart}
            onSelectPart={onSelectPart}
          />
        )}
        {productId === 'polo' && <PoloSvg />}
        {productId === 'hoodie' && <HoodieSvg />}
      </div>

      {isJersey ? (
        <div className="flex justify-center pb-6">
          <div className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/90 p-1 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={onRotateLeft}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} />
              Left
            </button>
            <button
              type="button"
              onClick={onResetView}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
            >
              <Scan className="h-3.5 w-3.5" strokeWidth={2} />
              Reset
            </button>
            <button
              type="button"
              onClick={onRotateRight}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
            >
              Right
              <RotateCw className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pb-8">
          <span className="rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Coming soon
          </span>
        </div>
      )}
    </section>
  )
}
