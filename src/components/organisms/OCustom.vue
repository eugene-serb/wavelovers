<script setup lang="ts">
import { ref } from 'vue';
import { useGamepadsStore } from '@/store';

const { reset, loop } = useGamepadsStore();

/**
 * Пауза перед стартом вибрации.
 */
const startDelay = ref<number>(250);

/**
 * Продолжительность вибрации.
 */
const duration = ref<number>(250);

/**
 * Интенсивность слабого вибропривода.
 */
const weakMagnitude = ref<number>(1);

/**
 * Интенсивность сильного вибропривода.
 */
const strongMagnitude = ref<number>(1);

/**
 * Воспроизвести вибрации.
 */
function start(): void {
  const patterns: GamepadEffectParameters[] = [
    {
      startDelay: startDelay.value,
      duration: duration.value,
      weakMagnitude: weakMagnitude.value,
      strongMagnitude: strongMagnitude.value,
    },
  ];

  reset();
  loop(patterns);
}
</script>

<template>
  <div class="content-item app-custom">
    <fieldset class="custom-form">
      <label class="custom-form__input">
        <span>Start Delay (ms)</span>
        <input
          v-model="startDelay"
          type="number"
          placeholder="Start Delay"
          min="0"
          max="1000"
          step="25"
          required
        />
      </label>
      <label class="custom-form__input">
        <span>Duration (ms)</span>
        <input
          v-model="duration"
          type="number"
          placeholder="Duration"
          min="0"
          max="1000"
          step="25"
          required
        />
      </label>
      <label class="custom-form__input">
        <span>Weak Magnitude</span>
        <input v-model="weakMagnitude" type="range" required min="0.0" max="1.0" step="0.01" />
      </label>
      <label class="custom-form__input">
        <span>Strong Magnitude</span>
        <input v-model="strongMagnitude" type="range" required min="0.0" max="1.0" step="0.01" />
      </label>
      <div class="custom-form__buttons">
        <button @click="start" class="custom-form__button">Start</button>
        <button @click="reset" class="custom-form__button">Stop</button>
      </div>
    </fieldset>
  </div>
</template>

<style lang="scss">
.app-custom {
  .custom-form {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 16px;

    @media only screen and (min-width: 540px) {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    > .custom-form__input {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;

      @media only screen and (min-width: 540px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

    > .custom-form__buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 32px;

      > .custom-form__button {
        width: 100%;

        &:hover {
          transition: all 0.5s ease;
          background-color: var(--color-link-hover);
          color: var(--color-white);
        }
      }
    }
  }
}
</style>
