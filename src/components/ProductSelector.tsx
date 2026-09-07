import { Shirt } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import type { ProductId } from '../types/design'

interface ProductSelectorProps {
  selectedProduct: ProductId
  onSelectProduct: (id: ProductId) => void
}

export default function ProductSelector({
  selectedProduct,
  onSelectProduct,
}: ProductSelectorProps) {
  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
        Select clothing
      </p>
      <div className="grid grid-cols-3 gap-2">
        {PRODUCTS.map((product) => {
          const active = selectedProduct === product.id
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => onSelectProduct(product.id)}
              className={[
                'relative flex flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center transition-all',
                active
                  ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-white',
              ].join(' ')}
            >
              <Shirt
                className={active ? 'h-5 w-5 text-white' : 'h-5 w-5 text-stone-500'}
                strokeWidth={1.75}
              />
              <span className="text-[11px] font-medium leading-tight">
                {product.id === 'jersey' ? 'HYD Jersey' : product.name.replace(' T-Shirt', '')}
              </span>
              {!product.available && (
                <span
                  className={[
                    'absolute -top-1.5 right-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide',
                    active ? 'bg-white text-stone-900' : 'bg-stone-900 text-white',
                  ].join(' ')}
                >
                  Soon
                </span>
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}
