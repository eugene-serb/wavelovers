import { sleep } from '@/utils';

/**
 * Тип TVibrator.
 */
export type TVibrator = {
  /**
   * Устройство.
   */
  device: Gamepad;

  /**
   * ID устройства.
   */
  readonly id: number;

  /**
   * Может ли устройство вибрировать.
   */
  readonly canVibrate: boolean;

  /**
   * Вибрирует ли оно в данный момент?
   */
  isVibrating: boolean;

  /**
   * Интервал.
   */
  interval: number;

  /**
   * Обновить информацию об устройстве.
   *
   * @returns
   */
  update(): void;

  /**
   * Воспроизвести и повторять дорожку вибрации.
   *
   * @param track - Дорожка вибрации.
   * @returns
   */
  loop(track: GamepadEffectParameters[]): Promise<void>;

  /**
   * Воспроизвести вибрацию.
   *
   * @param params - Шаблон вибрации
   * @returns
   */
  vibrate(params: GamepadEffectParameters): void;

  /**
   * Отключить вибрацию устройства.
   *
   * @returns
   */
  reset(): void;
};

/**
 * Интерфейс IVibrator.
 */
export interface IVibrator {
  /**
   * Устройство.
   */
  device: Gamepad;

  /**
   * ID устройства.
   */
  readonly id: number;

  /**
   * Может ли устройство вибрировать.
   */
  readonly canVibrate: boolean;

  /**
   * Вибрирует ли оно в данный момент?
   */
  isVibrating: boolean;

  /**
   * Интервал.
   */
  interval: number;

  /**
   * Обновить информацию об устройстве.
   *
   * @returns
   */
  update(): void;

  /**
   * Воспроизвести и повторять дорожку вибрации.
   *
   * @param track - Дорожка вибрации.
   * @returns
   */
  loop(track: GamepadEffectParameters[]): Promise<void>;

  /**
   * Воспроизвести вибрацию.
   *
   * @param params - Шаблон вибрации
   * @returns
   */
  vibrate(params: GamepadEffectParameters): void;

  /**
   * Отключить вибрацию устройства.
   *
   * @returns
   */
  reset(): void;
}

/**
 * Отрицательный временной сдвиг между запуском шаблонов.
 *
 * Чтобы при воспроизведении дорожки вибрации не было
 * затухания перед выполнением новой вибрации, нужно из суммарной
 * продолжительности выполнения шаблона вибрации вычесть
 * немного времени, которое задаётся в этой константе.
 *
 * @constant
 */
const NEGATIVE_OFFSET_TIME = 10;

/**
 * Класс Vibrator.
 *
 * @class
 */
export class Vibrator implements IVibrator {
  device: Gamepad;
  readonly id: number;
  readonly canVibrate: boolean;
  isVibrating: boolean;
  interval: number;

  /**
   * Конструктор класса Vibrator.
   *
   * @param device - Устройство, которое будет использоваться
   * для воспроизведения вибрации или диагностики.
   * @constructor
   */
  constructor(device: Gamepad) {
    this.device = device;
    this.id = Date.now();
    this.canVibrate = this.device.vibrationActuator ? true : false;
    this.isVibrating = false;
    this.update = this.update.bind(this);
    this.interval = window.setInterval(this.update, 1);
  }

  /**
   * Обновить информацию об устройстве.
   *
   * @returns
   */
  update(): void {
    const gamepads = navigator.getGamepads();

    const gamepad = gamepads.find((gamepad) => gamepad?.index === this.device.index);

    if (!gamepad) {
      this.reset();
      return;
    }

    this.device = gamepad;
  }

  /**
   * Воспроизвести и повторять вибрацию на устройстве по последовательности шаблонов.
   *
   * @param track - Последовательность шаблонов параметров вибрации.
   * @returns
   */
  async loop(track: GamepadEffectParameters[]): Promise<void> {
    this.isVibrating = true;

    while (this.isVibrating) {
      for (let i = 0; i < track.length; i++) {
        if (this.isVibrating) {
          this.vibrate(track[i]);

          const startDelay = track[i].startDelay || 0;
          const duration = track[i].duration || 0;

          await sleep(startDelay + duration - NEGATIVE_OFFSET_TIME);
        } else {
          return;
        }
      }
    }
  }

  /**
   * Воспроизвести вибрацию на устройстве по шаблону.
   *
   * @param params - Шаблон параметров вибрации.
   * @returns
   */
  vibrate(params: GamepadEffectParameters): void {
    if (!this.device.vibrationActuator) {
      return;
    }

    this.device.vibrationActuator.playEffect('dual-rumble', params);
  }

  /**
   * Отключить вибрацию устройства.
   *
   * @returns
   */
  reset(): void {
    this.isVibrating = false;

    if (!this.device.vibrationActuator) {
      return;
    }

    this.device.vibrationActuator.reset();
  }
}

export default Vibrator;
