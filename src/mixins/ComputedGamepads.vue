<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';
import Vibrator from '@/models/Vibrator';

export default defineComponent({
  name: 'ComputedGamepads',
  data: () => {
    return {
      timestamp: 0 as number,
      interval: 0 as number,
    };
  },
  computed: {
    gamepads: function (): Vibrator[] {
      const timestamp: number = this.timestamp;
      const result: Vibrator[] = store.getters.gamepads as Vibrator[];
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
