/* -------------- */
/* GAMEPAD MASTER */
/* -------------- */

'use strict';

const __PATTERNS = [
    /* Dotted, 0.1s, 0.1s */
    {
        name: 'Dotted Weak',
        type: 'Simple',
        icon: '😌',
        pattern: [
            {
                startDelay: 100,
                duration: 100,
                weakMagnitude: 1.0,
                strongMagnitude: 0.0,
            },
        ],
    },
    {
        name: 'Dotted Strong',
        type: 'Simple',
        icon: '😉',
        pattern: [
            {
                startDelay: 100,
                duration: 100,
                weakMagnitude: 0.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    {
        name: 'Dotted Max',
        type: 'Simple',
        icon: '🙃',
        pattern: [
            {
                startDelay: 0,
                duration: 100,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    /* Short Dashed, 0.1s, 0.25s */
    {
        name: 'Short Dashed Weak',
        type: 'Simple',
        icon: '🙂',
        pattern: [
            {
                startDelay: 100,
                duration: 250,
                weakMagnitude: 1.0,
                strongMagnitude: 0.0,
            },
        ],
    },
    {
        name: 'Short Dashed Strong',
        type: 'Simple',
        icon: '😇',
        pattern: [
            {
                startDelay: 100,
                duration: 250,
                weakMagnitude: 0.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    {
        name: 'Short Dashed Max',
        type: 'Simple',
        icon: '😊',
        pattern: [
            {
                startDelay: 0,
                duration: 250,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    /* Long Dashed, 0.1s, 0.5s */
    {
        name: 'Long Dashed Weak',
        type: 'Simple',
        icon: '😋',
        pattern: [
            {
                startDelay: 100,
                duration: 500,
                weakMagnitude: 1.0,
                strongMagnitude: 0.0,
            },
        ],
    },
    {
        name: 'Long Dashed Strong',
        type: 'Simple',
        icon: '😜',
        pattern: [
            {
                startDelay: 100,
                duration: 500,
                weakMagnitude: 0.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    {
        name: 'Long Dashed Max',
        type: 'Simple',
        icon: '🤪',
        pattern: [
            {
                startDelay: 0,
                duration: 500,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    /* Constant, 0s, 1s */
    {
        name: 'Constant Weak',
        type: 'Simple',
        icon: '😏',
        pattern: [
            {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 1.0,
                strongMagnitude: 0.0,
            },
        ],
    },
    {
        name: 'Constant Strong',
        type: 'Simple',
        icon: '🤩',
        pattern: [
            {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 0.0,
                strongMagnitude: 1.0,
            },
        ],
    },
    {
        name: 'Constant Max',
        type: 'Simple',
        icon: '😍',
        pattern: [
            {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            },
        ],
    },
];

class Gamepad {
    constructor(gamepad, $container, library) {
        this.unit = gamepad;
        this.$container = $container;
        this.library = library;
        this.init();
    };

    init = () => {
        this.id = Date.now();
        this.isSelected = false;
        this.isVibrating = false;
        this.isLocked = false;
        this.cooldown = 0;
        this.index = 0;
        this.pattern = [
            {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            }
        ];
        this.generateBox();
    };

    delete = () => {
        this.$list_item.parentNode.removeChild(this.$list_item);
    };
    generateBox = () => {
        const $list_item = document.createElement('div');
        const $info_box = document.createElement('div');
        const $button = document.createElement('button');

        $list_item.classList.add('list-item');
        $info_box.classList.add('list-item__info');
        $button.innerText = 'Select';

        $button.addEventListener('click', () => {
            this.isSelected = !this.isSelected;
        });

        $list_item.appendChild($info_box);
        $list_item.appendChild($button);
        this.$container.appendChild($list_item);

        this.$list_item = $list_item;
        this.$info_box = $info_box;
        this.draw();
    };
    draw = () => {
        this.$info_box.innerHTML = `
                    <h3>#${this.unit.index + 1}. ${this.unit.id}</h3>
                    <span>Vibration Actuator: ${this.unit.vibrationActuator ? 'Available' : 'missing'}</span>
                    <div>
                        <span>Status: </span>
                        <span>${this.isVibrating ? 'Vibrating' : 'Idle'}</span>
                        <span>A / B</span>
                        <span>Key locked: </span>
                        <span>${this.isLocked ? 'Yes' : 'No'}</span>
                        <span>X + Y</span>
                        <span>Mode: </span>
                        <span>${this.index + 1}. ${this.library[this.index].name}</span>
                        <span>LB / RB</span>
                    </div>`;
        if (this.isSelected === true) {
            this.$list_item.classList.add('list-item_selected');
        } else {
            this.$list_item.classList.remove('list-item_selected');
        };
    };

    update = () => {
        let gamepads = navigator.getGamepads();
        this.unit = gamepads[this.unit.index];
    };

    reset = () => {
        this.isVibrating = false;
        this.unit.vibrationActuator.reset();
    };
    vibrate = async () => {
        this.isVibrating = true;
        this.pattern = this.library[this.index].pattern;

        while (this.isVibrating) {
            for (let i = 0; i < this.pattern.length; i++) {
                if (this.isVibrating) {
                    this.unit.vibrationActuator.playEffect('dual-rumble', this.pattern[i]);
                    await this.sleep(this.pattern[i].startDelay + this.pattern[i].duration + 100);
                } else {
                    return;
                };
            };
        };
    };
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    previous = () => {
        if (Date.now() >= this.cooldown) {
            if (this.index === 0) {
                this.index = this.library.length - 1;
            } else {
                this.index--;
            };
            this.pattern = this.library[this.index].pattern;
            this.cooldown = Date.now() + 500;
        };
    };
    next = () => {
        if (Date.now() >= this.cooldown) {
            if (this.index === this.library.length - 1) {
                this.index = 0;
            } else {
                this.index++;
            };
            this.pattern = this.library[this.index].pattern;
            this.cooldown = Date.now() + 500;
        };
    };
    lock = () => {
        if (Date.now() >= this.cooldown) {
            this.isLocked = !this.isLocked;
            this.cooldown = Date.now() + 500;
        };
    };
    change = (index) => {
        this.index = index;
        this.pattern = this.library[this.index].pattern;
    };
};

class VibrationMaster {
    constructor() {
        this.init();
    };
    init = () => {
        this.#DOMs();
        this.print(__PATTERNS);

        if (!this.checkGamepadSupport()) {
            console.log(`This browser does not support of gamepads.`);
            this.$MESSAGE.innerText = `This browser does not support of gamepads.`;
            return;
        } else {
            console.log(`Press any gamepad's button or connect new gamepad.`);
            this.$MESSAGE.innerText = `Press any gamepad's button or connect new gamepad.`;
        };

        this.gamepads = [];
        this.#eventListeners();

        this.interval = setInterval(this.eventLoop, 1);
    };

    eventLoop = () => {
        this.update();
        this.draw();
        this.eventHandler();
    };
    update = () => {
        if (this.gamepads.length > 0) {
            this.$MESSAGE_BOX.classList.add('hidden');
            this.$DEVICE_BOX.classList.remove('hidden');
            this.gamepads.forEach(gamepad => {
                gamepad.update();
            });
        } else {
            this.$MESSAGE_BOX.classList.remove('hidden');
            this.$DEVICE_BOX.classList.add('hidden');
        };
    };
    draw = () => {
        if (this.gamepads.length > 0) {
            this.gamepads.forEach(gamepad => {
                gamepad.draw();
            });
        };
    };
    eventHandler = () => {
        if (this.gamepads.length > 0) {
            this.gamepads.forEach(gamepad => {
                if (gamepad.unit.vibrationActuator) {
                    if (gamepad.unit.buttons[2].pressed === true &&
                        gamepad.unit.buttons[3].pressed === true) {
                        gamepad.lock();
                    };
                    if (gamepad.isLocked === false) {
                        if (gamepad.unit.buttons[0].pressed === true) {
                            if (gamepad.isVibrating === false) {
                                gamepad.vibrate();
                            };
                        };
                        if (gamepad.unit.buttons[1].pressed === true) {
                            gamepad.reset();
                        };
                        if (gamepad.unit.buttons[4].pressed === true) {
                            gamepad.previous();
                        };
                        if (gamepad.unit.buttons[5].pressed === true) {
                            gamepad.next();
                        };
                    };
                };
            });
        };
    };

    print = (patterns) => {
        patterns.forEach((pattern, index) => {
            const $container = document.createElement('div');
            const $icon = document.createElement('span');
            const $name = document.createElement('span');

            $container.classList.add('pattern-item');
            $icon.classList.add('pattern-item__icon');
            $name.classList.add('pattern-item__name');

            $icon.innerHTML = pattern.icon;
            $name.innerHTML = pattern.name;

            $container.appendChild($icon);
            $container.appendChild($name);

            $container.addEventListener('click', () => this.change(index));

            this.$PATTERN_LIST.appendChild($container);
        });
    };
    change = (index) => {
        if (this.gamepads.length > 0) {
            this.gamepads.forEach(gamepad => {
                if (gamepad.isSelected === true) {
                    gamepad.change(index);
                };
            });
        } else {
            console.log('No connected devices...');
            return;
        };
    };

    checkGamepadSupport = () => {
        return 'getGamepads' in window.navigator;
    };

    #DOMs = () => {
        this.$MESSAGE_BOX = document.querySelector('#message-box');
        this.$MESSAGE = document.querySelector('#message');
        this.$DEVICE_BOX = document.querySelector('#device-box');
        this.$DEVICE_LIST = document.querySelector('#device-list');
        this.$PATTERN_BOX = document.querySelector('#pattern-box');
        this.$PATTERN_LIST = document.querySelector('#pattern-list');
    };
    #eventListeners = () => {
        window.addEventListener('gamepadconnected', (event) => {
            this.gamepads.push(new Gamepad(event.gamepad, this.$DEVICE_LIST, __PATTERNS));
        });
        window.addEventListener('gamepaddisconnected', (event) => {
            this.gamepads.forEach((gamepad, index) => {
                if (gamepad.unit.id === event.gamepad.id) {
                    this.gamepads[index].delete();
                    this.gamepads.splice(index, 1);
                };
            });
        });
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const VIBRATION_MASTER = new VibrationMaster();

