<script setup lang="ts">
import { defineComponent, defineProps, computed } from 'vue';

import type { PropType } from 'vue';

defineComponent({
  name: 'MDiagnosticItem',
});

/**
 * Входные параметры компонента.
 */
const props = defineProps({
  /**
   * Геймпад.
   */
  gamepad: {
    type: Object as PropType<Gamepad | null>,
    default: null,
  },
  /**
   * Временная метка.
   *
   * @description Нужна для обновления состояния геймпадов и компонента,
   * т.к. сами они это не делают.
   */
  timestamp: {
    type: Number,
    required: true,
  },
});

/**
 * Индекс геймпада.
 */
const gamepadIndex = computed<string>(() =>
  props.gamepad ? String(props.gamepad.index + 1) : '1',
);

/**
 * ID геймпада.
 */
const gamepadId = computed<string>(() => (props.gamepad ? props.gamepad.id : 'Missing'));

/**
 * Кнопка "A".
 */
const aButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[0].value ? props.gamepad.buttons[0].value : 0,
);

/**
 * Кнопка "B".
 */
const bButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[1].value ? props.gamepad.buttons[1].value : 0,
);

/**
 * Кнопка "X".
 */
const xButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[2].value ? props.gamepad.buttons[2].value : 0,
);

/**
 * Кнопка "Y".
 */
const yButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[3].value ? props.gamepad.buttons[3].value : 0,
);

/**
 * Кнопка "LB".
 */
const lbButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[4].value ? props.gamepad.buttons[4].value : 0,
);

/**
 * Кнопка "RB".
 */
const rbButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[5].value ? props.gamepad.buttons[5].value : 0,
);

/**
 * Кнопка "LT".
 */
const ltButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[6].value ? props.gamepad.buttons[6].value : 0,
);

/**
 * Кнопка "RT".
 */
const rtButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[7].value ? props.gamepad.buttons[7].value : 0,
);

/**
 * Кнопка "Back".
 */
const backButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[8].value ? props.gamepad.buttons[8].value : 0,
);

/**
 * Кнопка "Start".
 */
const startButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[9].value ? props.gamepad.buttons[9].value : 0,
);

/**
 * Кнопка "Left Stick".
 */
const leftStickButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[10].value ? props.gamepad.buttons[10].value : 0,
);

/**
 * Кнопка "Right Stick".
 */
const rightStickButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[11].value ? props.gamepad.buttons[11].value : 0,
);

/**
 * Кнопка "Forward".
 */
const forwardButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[12].value ? props.gamepad.buttons[12].value : 0,
);

/**
 * Кнопка "Backward".
 */
const backwardButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[13].value ? props.gamepad.buttons[13].value : 0,
);

/**
 * Кнопка "Left".
 */
const leftButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[14].value ? props.gamepad.buttons[14].value : 0,
);

/**
 * Кнопка "Right".
 */
const rightButton = computed<number>(() =>
  props.gamepad && props.gamepad.buttons[15].value ? props.gamepad.buttons[15].value : 0,
);

/**
 * Ось "X" левого стика.
 */
const leftStickX = computed<number>(() =>
  props.gamepad && props.gamepad.axes[0] ? props.gamepad.axes[0] : 0,
);

/**
 * Ось "Y" левого стика.
 */
const leftStickY = computed<number>(() =>
  props.gamepad && props.gamepad.axes[1] ? props.gamepad.axes[1] : 0,
);

/**
 * Ось "X" правого стика.
 */
const rightStickX = computed<number>(() =>
  props.gamepad && props.gamepad.axes[2] ? props.gamepad.axes[2] : 0,
);

/**
 * Ось "Y" правого стика.
 */
const rightStickY = computed<number>(() =>
  props.gamepad && props.gamepad.axes[3] ? props.gamepad.axes[3] : 0,
);

/**
 * Наличие вибропривода.
 */
const vibrationActuator = computed<string>(() =>
  props.gamepad && props.gamepad.vibrationActuator ? 'Available' : 'Missing',
);
</script>

<template>
  <div class="output-gamepad">
    <h3>#{{ gamepadIndex }}. {{ gamepadId }}</h3>
    <div class="gamepad-group">
      <div>
        <span :class="[aButton ? 'pressed' : '']">A: {{ aButton.toFixed(2) }}</span>
        <span :class="[bButton ? 'pressed' : '']">B: {{ bButton.toFixed(2) }}</span>
        <span :class="[xButton ? 'pressed' : '']">X: {{ xButton.toFixed(2) }}</span>
        <span :class="[yButton ? 'pressed' : '']">Y: {{ yButton.toFixed(2) }}</span>
      </div>
      <div>
        <span :class="[lbButton ? 'pressed' : '']">LB: {{ lbButton.toFixed(2) }}</span>
        <span :class="[rbButton ? 'pressed' : '']">RB: {{ rbButton.toFixed(2) }}</span>
        <span :class="[ltButton ? 'pressed' : '']">LT: {{ ltButton.toFixed(2) }}</span>
        <span :class="[rtButton ? 'pressed' : '']">RT: {{ rtButton.toFixed(2) }}</span>
      </div>
      <div>
        <span :class="[backButton ? 'pressed' : '']">Back: {{ backButton.toFixed(2) }}</span>
        <span :class="[startButton ? 'pressed' : '']">Start: {{ startButton.toFixed(2) }}</span>
        <span :class="[leftStickButton ? 'pressed' : '']">
          Left Stick: {{ leftStickButton.toFixed(2) }}
        </span>
        <span :class="[rightStickButton ? 'pressed' : '']">
          Right Stick: {{ rightStickButton.toFixed(2) }}
        </span>
      </div>
      <div>
        <span :class="[forwardButton ? 'pressed' : '']">
          Forward: {{ forwardButton.toFixed(2) }}
        </span>
        <span :class="[backwardButton ? 'pressed' : '']">
          Backward: {{ backwardButton.toFixed(2) }}
        </span>
        <span :class="[leftButton ? 'pressed' : '']">Left: {{ leftButton.toFixed(2) }}</span>
        <span :class="[rightButton ? 'pressed' : '']">Right: {{ rightButton.toFixed(2) }}</span>
      </div>
      <div>
        <span>Left Stick X: {{ leftStickX ? leftStickX.toFixed(2) : 'Missing' }}</span>
        <span>Left Stick Y: {{ leftStickY ? leftStickY.toFixed(2) : 'Missing' }}</span>
        <span>
          Right Stick X:
          {{ rightStickX ? rightStickX.toFixed(2) : 'Missing' }}
        </span>
        <span>
          Right Stick Y:
          {{ rightStickY ? rightStickY.toFixed(2) : 'Missing' }}
        </span>
      </div>
    </div>
    <span>Vibration Actuator: {{ vibrationActuator }}</span>
  </div>
</template>

<style lang="scss">
.output-gamepad {
  width: 100%;
  padding: 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--number-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  > .gamepad-group {
    @media only screen and (min-width: 520px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 680px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 840px) {
      grid-template-columns: repeat(5, 1fr);
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
      margin-top: 8px;

      > .pressed {
        background-color: var(--color-link-hover);
        color: var(--color-background);
      }
    }
  }
}
</style>
