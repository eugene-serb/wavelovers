import { ref, computed, onMounted, onUnmounted } from 'vue';
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
   * Геймпады.
   *
   * @description Просто массив с геймпадами. Нужен для того,
   * чтобы на его основе получить обновлённый список геймпадов.
   * @see gamepads
   * @private
   */
  const _gamepads = ref<TVibrator[]>([]);

  /**
   * Интервал.
   *
   * @private
   */
  const _interval = ref<number>(0);

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
   * Добавить геймпад.
   *
   * @param event Событие геймпада.
   */
  function addGamepad(event: GamepadEvent): void {
    if (_gamepads.value.length >= 1) {
      return;
    }

    _gamepads.value.push(new Vibrator(event.gamepad));
  }

  /**
   * Удалить геймпад.
   *
   * @param event Событие геймпада.
   */
  function deleteGamepad(event: GamepadEvent): void {
    _gamepads.value = _gamepads.value.filter((gamepad) => gamepad.device.id !== event.gamepad.id);
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
   */
  function updateTimestamp(): void {
    timestamp.value = Date.now();
  }

  onMounted(() => (_interval.value = window.setInterval(updateTimestamp, 1)));
  onUnmounted(() => clearInterval(_interval.value));

  return {
    loop,
    reset,
    change,
    vibrate,
    gamepads,
    isActive,
    patterns,
    timestamp,
    addGamepad,
    patternMode,
    deleteGamepad,
  };
});

export default useGamepadsStore;
