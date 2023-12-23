<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList } from '@/components/molecules';

export default defineComponent({
  name: 'OCustom',
  components: {
    AMessage,
    MToolsNav,
    MGamepadList,
  },
  setup() {
    const store = useGamepads();

    const { reset, loop } = store;
    const { gamepads } = storeToRefs(store);

    return { gamepads, reset, loop };
  },
  data: () => {
    return {
      startDelay: 250,
      duration: 250,
      weakMagnitude: 1,
      strongMagnitude: 1,
    };
  },
  methods: {
    start: function (): void {
      const patterns: GamepadEffectParameters[] = [
        {
          startDelay: this.startDelay,
          duration: this.duration,
          weakMagnitude: this.weakMagnitude,
          strongMagnitude: this.strongMagnitude,
        },
      ];

      this.reset();
      this.loop(patterns);
    },
    stop: function (): void {
      this.reset();
    },
  },
});
</script>

<template>
  <MToolsNav />

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
        <button @click="stop" class="custom-form__button">Stop</button>
      </div>
    </fieldset>
  </div>

  <MGamepadList v-if="gamepads.length > 0" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>

<style lang="scss">
.custom-form {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 16px;
}

.custom-form__input {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}

.custom-form__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
}

.custom-form__button {
  width: 100%;
}

@media only screen and (min-width: 540px) {
  .custom-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .custom-form__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
