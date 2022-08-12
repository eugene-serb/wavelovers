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
    import store from '@/store/index';
    import NavigationList from '@/components/NavigationList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import DiagnosticItem from '@/components/DiagnosticItem.vue';
    import Vibrator from '@/models/Vibrator';

    export default defineComponent({
        name: 'AppDiagnostic',
        components: {
            DiagnosticItem: DiagnosticItem,
            NavigationList: NavigationList,
            GamepadList: GamepadList,
            MessageItem: MessageItem,
        },
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

