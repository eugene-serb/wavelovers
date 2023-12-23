import { ref } from 'vue';
import { defineStore } from 'pinia';
import patterns from '@/assets/patterns.json';
import { Vibrator } from '@/models';

import type { TVibrator } from '@/models';

export const useGamepads = defineStore('gamepads', () => {
  const mode = ref<number>(0);
  const isActive = ref<boolean>(false);
  const gamepads = ref<TVibrator[]>([]);

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

  function addGamepad(event: GamepadEvent): void {
    if (gamepads.value.length >= 1) {
      return;
    }

    gamepads.value.push(new Vibrator(event.gamepad));
  }

  function deleteGamepad(event: GamepadEvent): void {
    gamepads.value = gamepads.value.filter((gamepad) => gamepad.device.id !== event.gamepad.id);
  }

  function loop(pattern: GamepadEffectParameters[]): void {
    gamepads.value.forEach((gamepad) => gamepad.loop(pattern));
  }

  function vibrate(pattern: GamepadEffectParameters): void {
    gamepads.value.forEach((gamepad) => gamepad.vibrate(pattern));
  }

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
