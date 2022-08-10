import IVibrationActuator from '@/models/IVibrationActuator';
import IGamepadButton from '@/models/IGamepadButton';

interface IGamepad {
    readonly id: string;
    readonly index: number;
    readonly timestamp: number;
    readonly connected: boolean;
    readonly mapping: string;
    readonly axes: number[];
    readonly buttons: IGamepadButton[];
    readonly vibrationActuator: IVibrationActuator;
}

export default IGamepad;

