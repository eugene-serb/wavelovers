<script setup lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';

import type { TVibrator } from '@/models';

defineComponent({
  name: 'OManual',
});

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { gamepads, isActive, patternMode } = storeToRefs(store);
const { vibrate, reset } = store;

/**
 * Интервал, необходимый для запуска цикла событий.
 *
 * @see eventLoop
 */
const interval = ref<number>(0);

/**
 * Режим работы вибратора.
 */
const mode = ref<number>(0);

/**
 * Заблокирована ли интенсивность?
 */
const lock = ref<boolean>(false);

/**
 * Пауза перед стартом вибрации.
 */
const startDelay = ref<number>(0);

/**
 * Продолжительность вибрации.
 */
const duration = ref<number>(260);

/**
 * Интенсивность слабого вибропривода.
 */
const weakMagnitude = ref<number>(0);

/**
 * Интенсивность сильного вибропривода.
 */
const strongMagnitude = ref<number>(0);

/**
 * Воспроизвести вибрации.
 */
function start(): void {
  const pattern: GamepadEffectParameters = {
    startDelay: startDelay.value,
    duration: duration.value,
    weakMagnitude: weakMagnitude.value,
    strongMagnitude: strongMagnitude.value,
  };

  vibrate(pattern);
}

/**
 * Остановить вибрации.
 */
function stop(): void {
  reset();
  isActive.value = false;
  patternMode.value = 0;
}

/**
 * Запустить или остановить вибрацию.
 *
 * @description Останавливает вибрацию, если нет блокировки интенсивности,
 * иначе продолжает вибрировать до следующей проверки.
 */
function handle(): void {
  if (gamepads.value.length) {
    gamepads.value.forEach((gamepad: TVibrator) => {
      if (gamepad.device.buttons[7].value || lock.value) {
        start();
      } else {
        stop();
      }
    });
  }
}

/**
 * Обновить шаблон вибрации.
 */
function updatePattern(): void {
  if (gamepads.value.length) {
    if (!lock.value) {
      if (mode.value === 0) {
        weakMagnitude.value = gamepads.value[0].device.buttons[7].value;
        strongMagnitude.value = gamepads.value[0].device.buttons[7].value;
      }

      if (mode.value === 1) {
        weakMagnitude.value = 0;
        strongMagnitude.value = gamepads.value[0].device.buttons[7].value;
      }

      if (mode.value === 2) {
        weakMagnitude.value = gamepads.value[0].device.buttons[7].value;
        strongMagnitude.value = 0;
      }
    }
  }
}

/**
 * Обновить режим вибрации.
 */
function updateMode(): void {
  if (gamepads.value.length) {
    if (gamepads.value[0].device.buttons[1].pressed) {
      lock.value = !lock.value;
    }

    if (!lock.value) {
      if (gamepads.value[0].device.buttons[0].pressed) {
        mode.value = 0;
      }

      if (gamepads.value[0].device.buttons[2].pressed) {
        mode.value = 1;
      }

      if (gamepads.value[0].device.buttons[3].pressed) {
        mode.value = 2;
      }
    }
  }
}

/**
 * Цикл событий.
 */
function eventLoop(): void {
  updateMode();
  updatePattern();
  handle();
}

onMounted(() => (interval.value = window.setInterval(eventLoop, 250)));
onUnmounted(() => clearInterval(interval.value));
</script>

<template>
  <div class="content-item app-manual">
    <label class="manual-form__input">
      <span>Weak Magnitude</span>
      <input
        v-model="weakMagnitude"
        type="range"
        required
        disabled
        min="0.0"
        max="1.0"
        step="0.01"
      />
    </label>

    <label class="manual-form__input">
      <span>Strong Magnitude</span>
      <input
        v-model="strongMagnitude"
        type="range"
        required
        disabled
        min="0.0"
        max="1.0"
        step="0.01"
      />
    </label>

    <div class="manual-controls">
      <div>
        <kbd>RT</kbd>
        <span> — Vibrate</span>
      </div>
      <div>
        <kbd>A</kbd>
        <span> — Combined Mode</span>
      </div>
      <div>
        <kbd>X</kbd>
        <span> — Strong Mode</span>
      </div>
      <div>
        <kbd>Y</kbd>
        <span> — Light Mode</span>
      </div>
      <div>
        <kbd>B</kbd>
        <span> — Lock Intensity</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-manual {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  > .manual-form__input {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    @media only screen and (min-width: 540px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  > .manual-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;

    @media only screen and (min-width: 540px) {
      display: flex;
      flex-direction: row;
      align-self: stretch;
    }
  }
}
</style>
