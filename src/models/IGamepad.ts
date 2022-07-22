import IVibrationActuator from '@/models/IVibrationActuator';

export default interface IGamepad {
    id: string;
    index: number;
    timestamp: number;
    connected: boolean;
    vibrationActuator: IVibrationActuator;
}

