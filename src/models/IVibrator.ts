import TPatternUnit from '@/models/TPatternUnit';
import IGamepad from '@/models/IGamepad';

interface IVibrator {
    readonly id: number;
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    interval: number;
    update(): void;
    reset(): void;
    vibrate(pattern: TPatternUnit[]): void;
    sleep(ms: number): Promise<number>;
}

export default IVibrator;

