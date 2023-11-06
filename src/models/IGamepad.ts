import type { IVibrationActuator } from '@/models/IVibrationActuator';
import type { IGamepadButton } from '@/models/IGamepadButton';

export interface IGamepad {
  readonly id: string;
  readonly index: number;
  readonly timestamp: number;
  readonly connected: boolean;
  readonly mapping: string;
  readonly axes: number[];
  readonly buttons: IGamepadButton[];
  readonly vibrationActuator: IVibrationActuator;
}
