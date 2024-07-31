<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { usePhoneVibration } from '@/composables';

const { isActive, stopVibrate, startVibrateLoop } = usePhoneVibration();

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
function start(): void {
  const pattern = [vibrationDuration.value, pauseDuration.value];

  stopVibrate();
  startVibrateLoop(pattern);
}

/**
 * Обработчик клика по кнопке.
 */
function handleClickButton(): void {
  if (isActive.value) {
    stopVibrate();
    return;
  }

  start();
}

onUnmounted(() => {
  stopVibrate();
});
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
        <button @click="handleClickButton" class="custom-form__button">
          {{ isActive ? 'Stop' : 'Start' }}
        </button>
      </div>
    </fieldset>
  </div>
</template>
