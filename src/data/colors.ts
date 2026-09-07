import type { PaletteColor } from '../types/design'

export const PALETTE_COLORS: PaletteColor[] = [
  { name: 'Forest', hex: '#303E2D' },
  { name: 'Sage', hex: '#3C5841' },
  { name: 'Black', hex: '#111111' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Green', hex: '#16A34A' },
  { name: 'Yellow', hex: '#EAB308' },
  { name: 'Orange', hex: '#EA580C' },
  { name: 'Purple', hex: '#7C3AED' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Gray', hex: '#6B7280' },
  { name: 'Navy', hex: '#1E3A5F' },
]

export function normalizeHex(hex: string): string {
  return hex.trim().toUpperCase()
}

export function isLightColor(hex: string): boolean {
  const value = hex.replace('#', '')
  if (value.length !== 6) return true
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 168
}
