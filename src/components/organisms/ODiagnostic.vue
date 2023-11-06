<script lang="ts">
import { defineComponent } from 'vue';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList, MDiagnosticItem } from '@/components/molecules';
import ComputedGamepads from '@/mixins/ComputedGamepads.vue';

export default defineComponent({
  name: 'ODiagnostic',
  mixins: [ComputedGamepads],
  components: {
    AMessage,
    MToolsNav,
    MGamepadList,
    MDiagnosticItem,
  },
});
</script>

<template>
  <MToolsNav />
  
  <div v-if="gamepads.length > 0" class="content-item">
    <MDiagnosticItem
      v-for="gamepad in gamepads"
      :key="gamepad.id"
      :gamepad="gamepad"
      :timestamp="timestamp"
    />
  </div>
  
  <MGamepadList v-if="gamepads.length > 0" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>
