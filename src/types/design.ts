export type ClothingPart =
  | 'body'
  | 'collar'
  | 'leftSleeve'
  | 'rightSleeve'
  | 'pattern'
  | 'pocket'

export type ShirtView = 'front' | 'back'

export type ProductId = 'jersey' | 'polo' | 'hoodie'

export interface Design {
  body: string
  collar: string
  leftSleeve: string
  rightSleeve: string
  pattern: string
  pocket: string
}

export interface Product {
  id: ProductId
  name: string
  description: string
  available: boolean
}

export interface PaletteColor {
  name: string
  hex: string
}

export const PARTS: ClothingPart[] = [
  'body',
  'collar',
  'leftSleeve',
  'rightSleeve',
  'pattern',
]

export const PART_LABELS: Record<ClothingPart, string> = {
  body: 'Body',
  collar: 'Collar',
  leftSleeve: 'Left Sleeve',
  rightSleeve: 'Right Sleeve',
  pattern: 'Pattern/Accent',
  pocket: 'Pocket',
}

export const DEFAULT_DESIGN: Design = {
  body: '#303E2D',
  collar: '#26352A',
  leftSleeve: '#303E2D',
  rightSleeve: '#303E2D',
  pattern: '#3C5841',
  pocket: '#303E2D',
}

export const STORAGE_KEY = 'spiz-mma-hyd-design'
