import TPatternUnit from '@/models/TPatternUnit';

interface IVibrationActuator {
    type: string;
    reset(): void;
    playEffect(mode: string, pattern: TPatternUnit): void;
}

export default IVibrationActuator;

