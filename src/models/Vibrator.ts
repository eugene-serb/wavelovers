import TPatternUnit from '@/models/TPatternUnit';
import IGamepad from '@/models/IGamepad';
import IVibrator from '@/models/IVibrator';

class Vibrator implements IVibrator {
    readonly id: number;
    readonly canVibrate: boolean;
    isVibrating: boolean;
    unit: IGamepad;
    interval: number;

    constructor(unit: IGamepad) {
        this.unit = unit;
        this.id = Date.now();
        this.canVibrate = (this.unit.vibrationActuator) ? true : false;
        this.isVibrating = false;
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
        const offsetTime = 10;
        while (this.isVibrating === true) {
            for (let i = 0; i < pattern.length; i++) {
                if (this.isVibrating === true) {
                    this.unit.vibrationActuator.playEffect('dual-rumble', pattern[i]);
                    await this.sleep(pattern[i].startDelay + pattern[i].duration - offsetTime);
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

