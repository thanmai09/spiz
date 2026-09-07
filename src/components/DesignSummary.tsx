import { RotateCcw, Save, Share2, Shuffle, Undo2 } from 'lucide-react'
import { isLightColor, normalizeHex } from '../data/colors'
import type { Design } from '../types/design'
import { PARTS, PART_LABELS } from '../types/design'

interface DesignSummaryProps {
  design: Design
  canUndo: boolean
  status: string | null
  onUndo: () => void
  onRandomize: () => void
  onSave: () => void
  onShare: () => void
  onReset: () => void
}

export default function DesignSummary({
  design,
  canUndo,
  status,
  onUndo,
  onRandomize,
  onSave,
  onShare,
  onReset,
}: DesignSummaryProps) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-stone-900">
            Your Design
          </h2>
          <p className="mt-1 text-xs text-stone-500">5 customizable areas · logos stay fixed</p>
        </div>
      </div>

      <ul className="space-y-2.5">
        {PARTS.map((part) => {
          const hex = normalizeHex(design[part])
          return (
            <li
              key={part}
              className="flex items-center justify-between rounded-xl bg-stone-50 px-3 py-2.5"
            >
              <span className="text-sm text-stone-700">{PART_LABELS[part]}</span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-stone-400">{hex}</span>
                <span
                  className="h-6 w-6 rounded-full border border-stone-200 shadow-inner"
                  style={{ backgroundColor: hex }}
                  title={hex}
                />
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Undo2 className="h-3.5 w-3.5" />
          Undo
        </button>
        <button
          type="button"
          onClick={onRandomize}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Randomize
        </button>
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50"
        >
          <Save className="h-3.5 w-3.5" />
          Save
        </button>
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50"
        >
          <Share2 className="h-3.5 w-3.5" />
          Share
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-stone-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
      >
        <RotateCcw className="h-4 w-4" />
        Reset Design
      </button>

      {status && (
        <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-center text-xs font-medium text-emerald-800">
          {status}
        </p>
      )}

      <p className="mt-auto pt-5 text-[11px] leading-relaxed text-stone-400">
        Local preview only. Colors update instantly on the garment — nothing is
        sent to a server.
      </p>

      <span className="sr-only">
        {PARTS.map((part) => `${PART_LABELS[part]} ${isLightColor(design[part]) ? 'light' : 'dark'}`).join(', ')}
      </span>
    </section>
  )
}
