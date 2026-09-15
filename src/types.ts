export type LevelId = 'venice' | 'mystic_river' | 'woodland';

export interface ItemCategory {
  id: string;
  name: string;
  description: string;
  iconId: string;
  totalCount: number;
}

export interface HiddenItem {
  id: string;
  categoryId: string;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  scale?: number; // scale multiplier (default 1)
  rotation?: number; // degrees
  label?: string;
}

export interface LevelData {
  id: LevelId;
  name: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  themeColor: string;
  backgroundImage: string;
  totalItems: number;
  categories: ItemCategory[];
  items: HiddenItem[];
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'star' | 'circle' | 'sparkle';
}

export interface FlyingItem {
  id: number;
  categoryId: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
}

export interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}
