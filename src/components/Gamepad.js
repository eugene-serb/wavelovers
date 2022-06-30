module.exports = class Gamepad {
    constructor(gamepad) {
        this.unit = gamepad;
        this.init();
    }
    init = () => {
        this.id = Date.now();
        this.canVibrate = (this.unit.vibrationActuator) ? true : false;
        this.isVibrating = false;
        this.pattern = [];
    };
    update = () => {
        let gamepads = navigator.getGamepads();
        this.unit = gamepads[this.unit.index];
    };
    reset = () => {
        this.isVibrating = false;
        this.unit.vibrationActuator.reset();
    };
    vibrate = async (pattern) => {
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
    };
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
};

