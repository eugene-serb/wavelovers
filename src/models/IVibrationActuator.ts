import TPatternUnit from '@/models/TPatternUnit';

export default interface IVibrationActuator {
    type: string;
    reset(): void;
    playEffect(mode: string, pattern: TPatternUnit): void;
}

