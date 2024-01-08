import { ref } from "vue";

export function useMobileVibration() {
  let _vibrateInterval: number = 0;
  const isActive = ref<boolean>(false);
  
  function _startVibrate(pattern: number | number[]): void {
    window.navigator.vibrate(pattern);
  }

  function _startPersistentVibrate(pattern: number | number[], duration: number): void {
    _vibrateInterval = window.setInterval(() => {
      _startVibrate(pattern);
    }, duration);
  }

  function stopVibrate(): void {
    if (_vibrateInterval) {
      clearInterval(_vibrateInterval);
    }

    window.navigator.vibrate(0);
    isActive.value = false;
  }

  function startVibrateLoop(pattern: number | number[]) {
    let duration = 0;

    if (typeof pattern === 'number') {
      duration = pattern;
    }

    if (Array.isArray(pattern)) {
      duration = pattern.reduce<number>((acc, entity) => acc += entity, 0);
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
