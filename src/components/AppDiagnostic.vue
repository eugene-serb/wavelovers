<template>
  <NavigationList />
  <div v-if="gamepads.length > 0" class="content-item">
    <DiagnosticItem v-for="gamepad in gamepads"
                    :key="gamepad.id"
                    :gamepad="gamepad"
                    :timestamp="timestamp" />
  </div>
  <GamepadList v-if="gamepads.length > 0"
               :gamepads="gamepads" />
  <MessageItem v-else>Press any gamepad button or connect a new gamepad to vibrate.</MessageItem>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavigationList from '@/components/NavigationList.vue';
  import GamepadList from '@/components/GamepadList.vue';
  import MessageItem from '@/components/MessageItem.vue';
  import DiagnosticItem from '@/components/DiagnosticItem.vue';
  import ComputedGamepads from '@/mixins/ComputedGamepads.vue';

  export default defineComponent({
    name: 'AppDiagnostic',
    mixins: [ComputedGamepads],
    components: {
      DiagnosticItem: DiagnosticItem,
      NavigationList: NavigationList,
      GamepadList: GamepadList,
      MessageItem: MessageItem,
    },
  });
</script>

