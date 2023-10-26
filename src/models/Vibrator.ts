import TPatternUnit from '@/models/TPatternUnit';
import IGamepad from '@/models/IGamepad';
import IVibrator from '@/models/IVibrator';

class Vibrator implements IVibrator {
  unit: IGamepad;
  readonly id: number;
  readonly canVibrate: boolean;
  isVibrating: boolean;
  interval: number;

  constructor(unit: IGamepad) {
    this.unit = unit;
    this.id = Date.now();
    this.canVibrate = this.unit.vibrationActuator ? true : false;
    this.isVibrating = false;
    this.update = this.update.bind(this);
    this.interval = setInterval(this.update, 1);
  }

  update(): void {
    const gamepads = navigator.getGamepads();
    this.unit = gamepads[this.unit.index] as unknown as IGamepad;
  }

  async loop(pattern: TPatternUnit[]): Promise<void> {
    this.isVibrating = true;
    const offsetTime = 10;
    while (this.isVibrating === true) {
      for (let i = 0; i < pattern.length; i++) {
        if (this.isVibrating === true) {
          this.vibrate(pattern[i]);
          await this.sleep(pattern[i].startDelay + pattern[i].duration - offsetTime);
        } else {
          return;
        }
      }
    }
  }

  vibrate(pattern: TPatternUnit): void {
    this.unit.vibrationActuator.playEffect('dual-rumble', pattern);
  }

  reset(): void {
    this.isVibrating = false;
    this.unit.vibrationActuator.reset();
  }

  sleep(ms: number): Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default Vibrator;
