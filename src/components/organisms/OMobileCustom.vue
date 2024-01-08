<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useMobileVibration } from '@/composables';

defineComponent({
  name: 'OMobileCustom',
});

const {
  startVibrateLoop,
  stopVibrate,
} = useMobileVibration();

/**
 * Продолжительность вибрации.
 */
 const vibrationDuration = ref<number>(250);

/**
 * Пауза перед стартом вибрации.
 */
const pauseDuration = ref<number>(250);

/**
 * Запустить вибрацию.
 */
function start() {
  const pattern = [vibrationDuration.value, pauseDuration.value];

  stopVibrate();
  startVibrateLoop(pattern);
}

/**
 * Остановить вибрацию.
 */
function stop() {
  stopVibrate();
}
</script>

<template>
  <div class="content-item app-custom">
    <fieldset class="custom-form">
      <label class="custom-form__input">
        <span>Start Delay (ms)</span>
        <input
          v-model="vibrationDuration"
          type="number"
          placeholder="Start Delay"
          min="0"
          max="10000"
          step="25"
          required
        />
      </label>
      <label class="custom-form__input">
        <span>Duration (ms)</span>
        <input
          v-model="pauseDuration"
          type="number"
          placeholder="Duration"
          min="0"
          max="10000"
          step="25"
          required
        />
      </label>
      <div class="custom-form__buttons">
        <button @click="start" class="custom-form__button">Start</button>
        <button @click="stop" class="custom-form__button">Stop</button>
      </div>
    </fieldset>
  </div>
</template>
