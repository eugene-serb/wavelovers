import type { TPatternUnit } from '@/models/PatternUnit';

export interface IVibrationActuator {
  readonly type: string;
  reset(): void;
  playEffect(mode: string, pattern: TPatternUnit): void;
}
