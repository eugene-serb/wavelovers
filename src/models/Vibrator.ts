import TPatternUnit from '@/models/TPatternUnit';
import IGamepad from '@/models/IGamepad';
import IVibrator from '@/models/IVibrator';

class Vibrator implements IVibrator {
    readonly id: number;
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    pattern: TPatternUnit[];
    interval: number;

    constructor(unit: IGamepad) {
        this.unit = unit;
        this.id = Date.now();
        this.canVibrate = (this.unit.vibrationActuator) ? true : false;
        this.isVibrating = false;
        this.pattern = [];

        this.update = this.update.bind(this);
        this.interval = setInterval(this.update, 1);
    }

    update(): void {
        const gamepads = navigator.getGamepads();
        this.unit = gamepads[this.unit.index] as unknown as IGamepad;
    }

    reset(): void {
        this.isVibrating = false;
        this.unit.vibrationActuator.reset();
    }

    async vibrate(pattern: TPatternUnit[]) {
        this.isVibrating = true;
        this.pattern = pattern;
        while (this.isVibrating === true) {
            for (let i = 0; i < this.pattern.length; i++) {
                if (this.isVibrating === true) {
                    this.unit.vibrationActuator.playEffect('dual-rumble', this.pattern[i]);
                    await this.sleep(this.pattern[i].startDelay + this.pattern[i].duration - 10);
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

export default Vibrator;

