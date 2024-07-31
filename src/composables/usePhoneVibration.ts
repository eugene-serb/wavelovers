import { ref } from 'vue';

import type { Ref } from 'vue';

/**
 * Результат работы композабла управления вибрацией телефона.
 */
type PhoneVibrationComposable = {
  /**
   * Запустить вибрацию телефона по шаблону.
   *
   * @param pattern - Шаблон вибрации.
   */
  startVibrateLoop: (pattern: number | number[]) => void;
  /**
   * Остановить вибрацию.
   */
  stopVibrate: () => void;
  /**
   * Вибрация активна?
   */
  isActive: Ref<boolean>;
};

/**
 * Композабл для управления вибрацией телефона.
 *
 * @returns PhoneVibrationComposable.
 */
export function usePhoneVibration(): PhoneVibrationComposable {
  /**
   * Интервал.
   *
   * @private
   */
  let _vibrateInterval: number = 0;

  /**
   * Вибрация активна?
   */
  const isActive = ref<boolean>(false);

  /**
   * Запустить вибрацию.
   *
   * @private
   * @param pattern - Шаблон вибрации.
   */
  function _startVibrate(pattern: number | number[]): void {
    window.navigator.vibrate(pattern);
  }

  /**
   * Запустить интервал с вибрацией.
   *
   * @private
   * @param pattern - Шаблон вибрации.
   * @param duration - Продолжительность вибрации.
   */
  function _startPersistentVibrate(pattern: number | number[], duration: number): void {
    _vibrateInterval = window.setInterval(() => {
      _startVibrate(pattern);
    }, duration);
  }

  /**
   * Остановить вибрацию.
   */
  function stopVibrate(): void {
    if (_vibrateInterval) {
      clearInterval(_vibrateInterval);
    }

    window.navigator.vibrate(0);
    isActive.value = false;
  }

  /**
   * Запустить вибрацию телефона по шаблону.
   *
   * @param pattern - Шаблон вибрации.
   */
  function startVibrateLoop(pattern: number | number[]): void {
    let duration = 0;

    if (typeof pattern === 'number') {
      duration = pattern;
    }

    if (Array.isArray(pattern)) {
      duration = pattern.reduce<number>((acc, entity) => (acc += entity), 0);
    }

    _startPersistentVibrate(pattern, duration);
    isActive.value = true;
  }

  return {
    isActive,
    stopVibrate,
    startVibrateLoop,
  };
}

export default usePhoneVibration;
