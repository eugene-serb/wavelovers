import IVibrationActuator from '@/models/IVibrationActuator';

interface IGamepad {
    id: string;
    index: number;
    timestamp: number;
    connected: boolean;
    vibrationActuator: IVibrationActuator;
}

export default IGamepad;

