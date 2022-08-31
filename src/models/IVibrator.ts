import TPatternUnit from '@/models/TPatternUnit';
import IGamepad from '@/models/IGamepad';

interface IVibrator {
  unit: IGamepad;
  readonly id: number;
  readonly canVibrate: boolean;
  isVibrating: boolean;
  interval: number;
  update(): void;
  loop(pattern: TPatternUnit[]): Promise<void>;
  vibrate(pattern: TPatternUnit): void;
  reset(): void;
  sleep(ms: number): Promise<number>;
}

export default IVibrator;

