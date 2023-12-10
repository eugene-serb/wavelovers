<script lang="ts">
import { defineComponent } from 'vue';

import type { PropType } from 'vue';
import type { TVibrator } from '@/models';

export default defineComponent({
  name: 'MDiagnosticItem',
  props: {
    gamepad: {
      type: Object as PropType<TVibrator>,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    },
  },
});
</script>

<template>
  <div class="output-gamepad">
    <h3>#{{ gamepad.device.index + 1 }}. {{ gamepad.device.id }}</h3>
    <div class="gamepad-group">
      <div>
        <span :class="[gamepad.device.buttons[0].value === 1 ? 'pressed' : '']">
          A: {{ gamepad.device.buttons[0].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[1].value === 1 ? 'pressed' : '']">
          B: {{ gamepad.device.buttons[1].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[2].value === 1 ? 'pressed' : '']">
          X: {{ gamepad.device.buttons[2].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[3].value === 1 ? 'pressed' : '']">
          Y: {{ gamepad.device.buttons[3].value.toFixed(2) }}
        </span>
      </div>
      <div>
        <span :class="[gamepad.device.buttons[4].value === 1 ? 'pressed' : '']">
          LB: {{ gamepad.device.buttons[4].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[5].value === 1 ? 'pressed' : '']">
          RB: {{ gamepad.device.buttons[5].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[6].value === 1 ? 'pressed' : '']">
          LT: {{ gamepad.device.buttons[6].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[7].value === 1 ? 'pressed' : '']">
          RT: {{ gamepad.device.buttons[7].value.toFixed(2) }}
        </span>
      </div>
      <div>
        <span :class="[gamepad.device.buttons[8].value === 1 ? 'pressed' : '']">
          Back: {{ gamepad.device.buttons[8].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[9].value === 1 ? 'pressed' : '']">
          Start: {{ gamepad.device.buttons[9].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[10].value === 1 ? 'pressed' : '']">
          Left Stick: {{ gamepad.device.buttons[10].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[11].value === 1 ? 'pressed' : '']">
          Right Stick: {{ gamepad.device.buttons[11].value.toFixed(2) }}
        </span>
      </div>
      <div>
        <span :class="[gamepad.device.buttons[12].value === 1 ? 'pressed' : '']">
          Forward: {{ gamepad.device.buttons[12].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[13].value === 1 ? 'pressed' : '']">
          Backward: {{ gamepad.device.buttons[13].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[14].value === 1 ? 'pressed' : '']">
          Left: {{ gamepad.device.buttons[14].value.toFixed(2) }}
        </span>
        <span :class="[gamepad.device.buttons[15].value === 1 ? 'pressed' : '']">
          Right: {{ gamepad.device.buttons[15].value.toFixed(2) }}
        </span>
      </div>
      <div>
        <span>
          Left Stick X: {{ gamepad.device.axes[0] ? gamepad.device.axes[0].toFixed(2) : 'missing' }}
        </span>
        <span>
          Left Stick Y: {{ gamepad.device.axes[1] ? gamepad.device.axes[1].toFixed(2) : 'missing' }}
        </span>
        <span>
          Right Stick X: {{ gamepad.device.axes[2] ? gamepad.device.axes[2].toFixed(2) : 'missing' }}
        </span>
        <span>
          Right Stick Y: {{ gamepad.device.axes[3] ? gamepad.device.axes[3].toFixed(2) : 'missing' }}
        </span>
      </div>
    </div>
    <span>Vibration Actuator: {{ gamepad.device.vibrationActuator ? 'Available' : 'Missing' }}</span>
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
}

.gamepad-group {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.gamepad-group > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.pressed {
  background-color: var(--color-link-hover);
  color: var(--color-background);
}
</style>
