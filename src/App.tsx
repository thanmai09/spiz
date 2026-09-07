import { useCallback, useEffect, useState } from 'react'
import CustomizationPanel from './components/CustomizationPanel'
import DesignSummary from './components/DesignSummary'
import ProductPreview from './components/ProductPreview'
import ProductSelector from './components/ProductSelector'
import { normalizeHex, PALETTE_COLORS } from './data/colors'
import {
  DEFAULT_DESIGN,
  STORAGE_KEY,
  type ClothingPart,
  type Design,
  type ProductId,
  type ShirtView,
} from './types/design'

function pickRandomColor(exclude?: string): string {
  const pool = exclude
    ? PALETTE_COLORS.filter((color) => color.hex !== exclude)
    : PALETTE_COLORS
  const index = Math.floor(Math.random() * pool.length)
  return pool[index]?.hex ?? '#FFFFFF'
}

function readStoredDesign(value: unknown): Design | null {
  if (!value || typeof value !== 'object') return null
  const record = value as Record<string, unknown>
  if (
    typeof record.body !== 'string' ||
    typeof record.collar !== 'string' ||
    typeof record.leftSleeve !== 'string' ||
    typeof record.rightSleeve !== 'string' ||
    typeof record.pattern !== 'string'
  ) {
    return null
  }
  return {
    body: record.body,
    collar: record.collar,
    leftSleeve: record.leftSleeve,
    rightSleeve: record.rightSleeve,
    pattern: record.pattern,
    pocket: typeof record.pocket === 'string' ? record.pocket : record.body,
  }
}

function initialView(): ShirtView {
  if (typeof window === 'undefined') return 'front'
  const nextView = new URLSearchParams(window.location.search).get('view')
  return nextView === 'back' ? 'back' : 'front'
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductId>('jersey')
  const [selectedPart, setSelectedPart] = useState<ClothingPart>('body')
  const [design, setDesign] = useState<Design>(DEFAULT_DESIGN)
  const [history, setHistory] = useState<Design[]>([])
  const [view, setView] = useState<ShirtView>(initialView)
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = readStoredDesign(JSON.parse(raw) as unknown)
      if (parsed) setDesign(parsed)
    } catch {
      // Ignore malformed local data.
    }
    const params = new URLSearchParams(window.location.search)
    const nextView = params.get('view')
    if (nextView === 'front' || nextView === 'back') setView(nextView)
  }, [])

  useEffect(() => {
    if (!status) return
    const timer = window.setTimeout(() => setStatus(null), 2200)
    return () => window.clearTimeout(timer)
  }, [status])

  const pushHistory = useCallback((current: Design) => {
    setHistory((prev) => [...prev, current])
  }, [])

  const applyColor = (hex: string) => {
    const next = normalizeHex(hex)
    setDesign((current) => {
      if (normalizeHex(current[selectedPart]) === next) return current
      pushHistory(current)
      return { ...current, [selectedPart]: next }
    })
  }

  const undo = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev
      const next = prev.slice(0, -1)
      const last = prev[prev.length - 1]
      if (last) setDesign(last)
      return next
    })
  }

  const randomize = () => {
    pushHistory(design)
    const body = pickRandomColor()
    const matchedSleeves = Math.random() > 0.35
    const sleeve = matchedSleeves ? body : pickRandomColor(body)
    setDesign({
      body,
      collar: pickRandomColor(body),
      leftSleeve: sleeve,
      rightSleeve: matchedSleeves ? sleeve : pickRandomColor(body),
      pattern: pickRandomColor(body),
      pocket: Math.random() > 0.5 ? body : pickRandomColor(body),
    })
  }

  const saveDesign = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(design))
    setStatus('Design saved on this device')
  }

  const shareDesign = async () => {
    const payload = JSON.stringify(
      { product: selectedProduct, view, design },
      null,
      2,
    )
    try {
      await navigator.clipboard.writeText(payload)
      setStatus('Design JSON copied to clipboard')
    } catch {
      setStatus('Could not copy — check browser permissions')
    }
  }

  const resetDesign = () => {
    pushHistory(design)
    setDesign(DEFAULT_DESIGN)
    setSelectedPart('body')
    setView('front')
  }

  return (
    <div className="min-h-screen bg-[#f3f1ec] text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#f3f1ec]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-[11px] font-bold tracking-[0.18em] text-white">
              SZ
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-stone-900">
                SPIZ
              </p>
              <p className="text-[11px] text-stone-500">Studio configurator</p>
            </div>
          </div>
          <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-medium text-stone-500">
            Local MVP
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-6 max-w-xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Customize Your Jersey
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-stone-500 sm:text-base">
            MMA HYD kit. Pick a panel, choose a color, and watch the garment
            update live. Logos and sponsor marks stay fixed.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[300px_minmax(0,1fr)_300px] xl:grid-cols-[320px_minmax(0,1fr)_320px]">
          <div className="order-1 flex flex-col gap-4">
            <ProductSelector
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
            <CustomizationPanel
              selectedProduct={selectedProduct}
              selectedPart={selectedPart}
              currentColor={design[selectedPart]}
              onSelectPart={setSelectedPart}
              onSelectColor={applyColor}
            />
          </div>

          <div className="order-2 lg:order-2">
            <ProductPreview
              productId={selectedProduct}
              design={design}
              view={view}
              selectedPart={selectedPart}
              onSelectPart={setSelectedPart}
              onRotateLeft={() =>
                setView((current) => (current === 'front' ? 'back' : 'front'))
              }
              onRotateRight={() =>
                setView((current) => (current === 'front' ? 'back' : 'front'))
              }
              onResetView={() => setView('front')}
              onSetView={setView}
            />
          </div>

          <div className="order-3 lg:sticky lg:top-24">
            <DesignSummary
              design={design}
              canUndo={history.length > 0}
              status={status}
              onUndo={undo}
              onRandomize={randomize}
              onSave={saveDesign}
              onShare={() => {
                void shareDesign()
              }}
              onReset={resetDesign}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
