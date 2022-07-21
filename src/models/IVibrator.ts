import { TPatternUnit } from '@/models/TPatternUnit';
import { IGamepad } from '@/models/IGamepad';

export interface IVibrator {
    readonly id: number,
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    pattern: TPatternUnit[];
    update(): void;
    reset(): void;
    vibrate(pattern: TPatternUnit[]): void;
    sleep(ms: number): Promise<number>;
}

