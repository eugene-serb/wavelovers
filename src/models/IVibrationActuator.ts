import TPatternUnit from '@/models/TPatternUnit';

interface IVibrationActuator {
  readonly type: string;
  reset(): void;
  playEffect(mode: string, pattern: TPatternUnit): void;
}

export default IVibrationActuator;
