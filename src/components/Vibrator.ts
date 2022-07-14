interface IPatternUnit {
    startDelay: number,
    duration: number,
    weakMagnitude: number,
    strongMagnitude: number,
}

interface IVibrationActuator {
    type: string;
    reset(): void;
    playEffect(mode: string, pattern: IPatternUnit): void;
}

interface IGamepad {
    id: string;
    index: number;
    timestamp: number;
    connected: boolean;
    vibrationActuator: IVibrationActuator;
}

interface IVibrator {
    readonly id: number,
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    pattern: IPatternUnit[];
    update(): void;
    reset(): void;
    vibrate(pattern: IPatternUnit[]): void;
    sleep(ms: number): Promise<number>;
}

export default class Vibrator implements IVibrator {
    readonly id: number;
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    pattern: IPatternUnit[];

    constructor(unit: IGamepad) {
        this.unit = unit;
        this.id = Date.now();
        this.canVibrate = (this.unit.vibrationActuator) ? true : false;
        this.isVibrating = false;
        this.pattern = [];
    }

    update(): void {
        const gamepads = navigator.getGamepads();
        this.unit = <IGamepad><any>gamepads[this.unit.index];
    }

    reset(): void {
        this.isVibrating = false;
        this.unit.vibrationActuator.reset();
    }

    async vibrate(pattern: IPatternUnit[]) {
        this.isVibrating = true;
        this.pattern = pattern;

        while (this.isVibrating === true) {
            for (let i = 0; i < this.pattern.length; i++) {
                if (this.isVibrating === true) {
                    this.unit.vibrationActuator.playEffect('dual-rumble', this.pattern[i]);
                    await this.sleep(this.pattern[i].startDelay + this.pattern[i].duration + 100);
                } else {
                    return;
                }
            }
        }
    }

    sleep(ms: number): Promise<number> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

