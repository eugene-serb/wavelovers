import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Vibrator } from '@/models';
import patterns from '@/assets/patterns.json';

import type { TVibrator } from '@/models';

/**
 * Стор геймпадов.
 */
export const useGamepads = defineStore('gamepads', () => {
  /**
   * Номер шаблона вибрации.
   */
  const mode = ref<number>(0);

  /**
   * Активна вибрация?
   */
  const isActive = ref<boolean>(false);

  /**
   * Геймпады.
   */
  const gamepads = ref<TVibrator[]>([]);

  /**
   * Сменить вибрацию.
   *
   * @param index Номер вибрации.
   */
  function change(index: number): void {
    if (mode.value === index) {
      isActive.value = !isActive.value;
    } else {
      isActive.value = true;
      mode.value = index;
    }

    reset();

    if (isActive.value) {
      loop(patterns[mode.value].pattern);
    }
  }

  /**
   * Добавить геймпад.
   *
   * @param event Событие геймпада.
   */
  function addGamepad(event: GamepadEvent): void {
    if (gamepads.value.length >= 1) {
      return;
    }

    gamepads.value.push(new Vibrator(event.gamepad));
  }

  /**
   * Удалить геймпад.
   *
   * @param event Событие геймпада.
   */
  function deleteGamepad(event: GamepadEvent): void {
    gamepads.value = gamepads.value.filter((gamepad) => gamepad.device.id !== event.gamepad.id);
  }

  /**
   * Воспроизвести дорожку вибрации.
   *
   * @param pattern Дорожка шаблонов вибраций.
   */
  function loop(pattern: GamepadEffectParameters[]): void {
    gamepads.value.forEach((gamepad) => gamepad.loop(pattern));
  }

  /**
   * Запустить вибрацию.
   *
   * @param pattern Шаблон вибрации.
   */
  function vibrate(pattern: GamepadEffectParameters): void {
    gamepads.value.forEach((gamepad) => gamepad.vibrate(pattern));
  }

  /**
   * Отключить вибрацию.
   */
  function reset(): void {
    gamepads.value.forEach((gamepad) => gamepad.reset());
  }

  return {
    mode,
    loop,
    reset,
    change,
    vibrate,
    gamepads,
    isActive,
    patterns,
    addGamepad,
    deleteGamepad,
  };
});
