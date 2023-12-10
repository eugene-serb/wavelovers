<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';

import type { TVibrator } from '@/models';

export default defineComponent({
  name: 'ComputedGamepads',
  data: () => {
    return {
      timestamp: 0,
      interval: 0,
    };
  },
  computed: {
    gamepads: function (): TVibrator[] {
      const timestamp: number = this.timestamp;
      const gamepads: TVibrator[] = store.getters.gamepads;

      gamepads.forEach((gamepad) => {
        gamepad.interval = timestamp;
      });

      return gamepads;
    },
  },
  methods: {
    updateComputed: function (): void {
      this.timestamp = Date.now();
    },
  },
  mounted() {
    this.interval = window.setInterval(this.updateComputed, 1);
  },
  unmounted() {
    clearInterval(this.interval);
  },
});
</script>
