import { IVibrationActuator } from '@/models/IVibrationActuator';

export interface IGamepad {
    id: string;
    index: number;
    timestamp: number;
    connected: boolean;
    vibrationActuator: IVibrationActuator;
}

