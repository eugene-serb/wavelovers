import type { TPatternUnit } from '@/models/PatternUnit';

export type TPattern = {
  name: string;
  type: string;
  icon: string;
  pattern: TPatternUnit[];
};
