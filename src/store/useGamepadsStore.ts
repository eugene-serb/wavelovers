import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Vibrator } from '@/models';
import patterns from '@/assets/patterns.json';

import type { TVibrator } from '@/models';

/**
 * Стор геймпадов.
 */
export const useGamepadsStore = defineStore('gamepads', () => {
  /**
   * Номер шаблона вибрации.
   */
  const patternMode = ref<number>(0);

  /**
   * Активна вибрация?
   */
  const isActive = ref<boolean>(false);

  /**
   * Временная метка.
   *
   * @description Нужна для обновления состояния геймпадов, т.к. сами они это не делают.
   */
  const timestamp = ref<number>(0);

  /**
   * Интервал.
   *
   * @private
   */
  const _interval = ref<number>(0);

  /**
   * Геймпады.
   *
   * @description Просто массив с геймпадами. Нужен для того,
   * чтобы на его основе получить обновлённый список геймпадов.
   * @see gamepads
   * @private
   */
  const _gamepads = ref<TVibrator[]>([]);

  /**
   * Геймпады.
   */
  const gamepads = computed<TVibrator[]>(() => {
    const time: number = timestamp.value;
    const gamepads: TVibrator[] = _gamepads.value;

    gamepads.forEach((gamepad) => {
      gamepad.interval = time;
    });

    return gamepads;
  });

  /**
   * Сменить вибрацию.
   *
   * @param index Номер вибрации.
   */
  function change(index: number): void {
    if (patternMode.value === index) {
      isActive.value = !isActive.value;
    } else {
      isActive.value = true;
      patternMode.value = index;
    }

    reset();

    if (isActive.value) {
      loop(patterns[patternMode.value].pattern);
    }
  }

  /**
   * Воспроизвести дорожку вибрации.
   *
   * @param pattern Дорожка шаблонов вибраций.
   */
  function loop(pattern: GamepadEffectParameters[]): void {
    _gamepads.value.forEach((gamepad) => gamepad.loop(pattern));
  }

  /**
   * Запустить вибрацию.
   *
   * @param pattern Шаблон вибрации.
   */
  function vibrate(pattern: GamepadEffectParameters): void {
    _gamepads.value.forEach((gamepad) => gamepad.vibrate(pattern));
  }

  /**
   * Отключить вибрацию.
   */
  function reset(): void {
    _gamepads.value.forEach((gamepad) => gamepad.reset());
  }

  /**
   * Обновить временную метку.
   * 
   * @private
   */
  function _updateTimestamp(): void {
    timestamp.value = Date.now();
  }

  /**
   * Добавить геймпад.
   *
   * @private
   * @param event Событие геймпада.
   */
  function _addGamepad(event: GamepadEvent): void {
    if (_gamepads.value.length >= 1) {
      return;
    }

    _gamepads.value.push(new Vibrator(event.gamepad));
  }

  /**
   * Удалить геймпад.
   *
   * @private
   * @param event Событие геймпада.
   */
  function _deleteGamepad(event: GamepadEvent): void {
    _gamepads.value = _gamepads.value.filter((gamepad) => gamepad.device.id !== event.gamepad.id);
  }

  /**
   * Добавить слушатели событий.
   * 
   * @private
   */
  function _addEventListeners(): void {
    window.addEventListener('gamepadconnected', _addGamepad);
    window.addEventListener('gamepaddisconnected', _deleteGamepad);
  }

  /**
   * Убрать слушатели событий.
   * 
   * @private
   */
  function _removeEventListeners(): void {
    window.removeEventListener('gamepadconnected', _addGamepad);
    window.removeEventListener('gamepaddisconnected', _deleteGamepad);
  }

  /**
   * Запустить работу приложения.
   * 
   * @description Запускает слушатели событий для добавления и удаления геймпадов,
   * а также, их обновления.
   */
  function initialize() {
    _addEventListeners();
    _interval.value = window.setInterval(_updateTimestamp, 1);
  }

  /**
   * Завершить работу приложения.
   * 
   * @description Удаляет слушатели событий для добавления и удаления геймпадов,
   * а также, их обновления.
   */
  function terminate() {
    _removeEventListeners();
    _interval.value = window.setInterval(_updateTimestamp, 1);
  }

  return {
    gamepads,
    patterns,
    isActive,
    timestamp,
    patternMode,
    loop,
    change,
    vibrate,
    reset,
    terminate,
    initialize,
  };
});

export default useGamepadsStore;
