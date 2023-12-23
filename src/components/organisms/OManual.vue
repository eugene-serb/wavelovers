<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList } from '@/components/molecules';
import ComputedGamepads from '@/mixins/ComputedGamepads.vue';

import type { TVibrator } from '@/models';

export default defineComponent({
  name: 'OManual',
  mixins: [ComputedGamepads],
  components: {
    AMessage,
    MToolsNav,
    MGamepadList,
  },
  setup() {
    const store = useGamepads();

    const { isActive, mode: patternMode } = storeToRefs(store);
    const { vibrate, reset } = store;

    return { isActive, patternMode, vibrate, reset };
  },
  data: () => {
    return {
      mode: 0,
      lock: false,
      startDelay: 0,
      duration: 260,
      weakMagnitude: 0,
      strongMagnitude: 0,
    };
  },
  methods: {
    start: function (): void {
      const pattern: GamepadEffectParameters = {
        startDelay: this.startDelay,
        duration: this.duration,
        weakMagnitude: this.weakMagnitude,
        strongMagnitude: this.strongMagnitude,
      };

      this.vibrate(pattern);
    },
    stop: function (): void {
      this.reset();
      this.isActive = false;
      this.patternMode = 0;
    },
    eventLoop: function (): void {
      this.updateComputed();
      this.updateMode();
      this.updatePattern();
      this.handle();
    },
    updateMode: function (): void {
      if (this.gamepads.length) {
        if (this.gamepads[0].device.buttons[1].pressed) {
          this.lock = !this.lock;
        }

        if (!this.lock) {
          if (this.gamepads[0].device.buttons[0].pressed) {
            this.mode = 0;
          }

          if (this.gamepads[0].device.buttons[2].pressed) {
            this.mode = 1;
          }

          if (this.gamepads[0].device.buttons[3].pressed) {
            this.mode = 2;
          }
        }
      }
    },
    updatePattern: function (): void {
      if (this.gamepads.length) {
        if (!this.lock) {
          if (this.mode === 0) {
            this.weakMagnitude = this.gamepads[0].device.buttons[7].value;
            this.strongMagnitude = this.gamepads[0].device.buttons[7].value;
          }

          if (this.mode === 1) {
            this.weakMagnitude = 0;
            this.strongMagnitude = this.gamepads[0].device.buttons[7].value;
          }

          if (this.mode === 2) {
            this.weakMagnitude = this.gamepads[0].device.buttons[7].value;
            this.strongMagnitude = 0;
          }
        }
      }
    },
    handle: function (): void {
      if (this.gamepads.length) {
        this.gamepads.forEach((gamepad: TVibrator) => {
          if (gamepad.device.buttons[7].value || this.lock) {
            this.start();
          } else {
            this.stop();
          }
        });
      }
    },
  },
  mounted() {
    this.interval = window.setInterval(this.eventLoop, 250);
  },
});
</script>

<template>
  <MToolsNav />

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

  <MGamepadList v-if="gamepads.length > 0" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>

<style lang="scss">
.app-manual {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.manual-form__input {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}

.manual-controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
}

@media only screen and (min-width: 540px) {
  .manual-form__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .manual-controls {
    display: flex;
    flex-direction: row;
    align-self: stretch;
  }
}
</style>
