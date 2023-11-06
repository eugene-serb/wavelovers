<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';

import type { TVibrator } from '@/models';

export default defineComponent({
  name: 'ComputedGamepads',
  data: () => {
    return {
      timestamp: 0 as number,
      interval: 0 as number,
    };
  },
  computed: {
    gamepads: function (): TVibrator[] {
      const timestamp: number = this.timestamp;
      const result: TVibrator[] = store.getters.gamepads as TVibrator[];
      result.forEach((item) => {
        item.interval = timestamp;
      });
      return result;
    },
  },
  methods: {
    updateComputed: function (): void {
      this.timestamp = Date.now();
    },
  },
  mounted() {
    this.interval = setInterval(this.updateComputed, 1);
  },
  unmounted() {
    clearInterval(this.interval);
  },
});
</script>
