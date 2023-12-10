import type { TPattern } from '@/models';

export interface IRootState {
  mode: number;
  isActive: boolean;
  patterns: TPattern[];
}
