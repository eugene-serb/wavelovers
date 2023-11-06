import type { IVibrationActuator } from '@/models/VibrationActuator';
import type { IGamepadButton } from '@/models/GamepadButton';

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
