import IVibrationActuator from '@/models/IVibrationActuator';
import IGamepadButton from '@/models/IGamepadButton';

interface IGamepad {
    id: string;
    index: number;
    timestamp: number;
    connected: boolean;
    mapping: string;
    axes: number[];
    buttons: IGamepadButton[];
    vibrationActuator: IVibrationActuator;
}

export default IGamepad;

