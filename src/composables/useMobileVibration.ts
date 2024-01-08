import { ref } from 'vue';

export function useMobileVibration() {
  /**
   * Интервал.
   */
  let _vibrateInterval: number = 0;

  /**
   * Вибрация активна?
   */
  const isActive = ref<boolean>(false);

  /**
   * Запустить вибрацию.
   *
   * @param pattern Шаблон вибрации.
   */
  function _startVibrate(pattern: number | number[]): void {
    window.navigator.vibrate(pattern);
  }

  /**
   * Запустить интервал с вибрацией.
   *
   * @param pattern Шаблон вибрации.
   * @param duration Продолжительность вибрации.
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
   * Запустить вибрацию.
   *
   * @param pattern Шаблон вибрации.
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
    startVibrateLoop,
    stopVibrate,
    isActive,
  };
}

export default useMobileVibration;
