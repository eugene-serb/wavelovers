import { TPatternUnit } from '@/models/TPatternUnit';

export interface IVibrationActuator {
    type: string;
    reset(): void;
    playEffect(mode: string, pattern: TPatternUnit): void;
}

