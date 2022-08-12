<template>
    <h1 class="visually-hidden">Wavelovers – FAQ</h1>
    <div>
        <div class="content-item">
            <h2 class="content-item__header">FAQ</h2>
            <dl>
                <dt>What is the purpose of this software?</dt>
                <dd>Everyone decides for himself, but can be used as a gamepad vibration tester, or as a hand massager.</dd>
                <dt>Can I use this software as a hand massager?</dt>
                <dd>Yes of course. If you use this as a massager, then before the session I recommend consulting with a doctor.</dd>
                <dt>I have a gamepad with vibration, what should I do before using it as a hand massager?</dt>
                <dd>I recommend checking the device for correct operation, mechanical damage, and be sure to use an antiseptic.</dd>
                <dt>I'm having problems with the app or connecting my device to the app?</dt>
                <dd>Go to Troubleshooting.</dd>
            </dl>
        </div>
        <div class="content-item">
            <h2 class="content-item__header">Troubleshooting</h2>
            <span>If you are having difficulty detecting a gamepad by the browser, you can use the utility </span>
            <a href="https://wavelovers.ru/diagnostic" target="_blank">Wavelovers Diagnostic</a><br /><br />
            <dl>
                <dt>The app does not see my device.</dt>
                <dd>Make sure you have a chromium-based browser, then update the app and reconnect your device.</dd>
                <dt>The application sees the gamepad, but writes that the vibration actuator is missing.</dt>
                <dd>This problem is specific to mozilla firefox browser and d-input mode. Check the system requirements before using the software.</dd>
                <dt>My question is not here.</dt>
                <dd>Write me <a href="mailto:eugene.serb@gmail.com" target="_blank">eugene.serb@gmail.com</a></dd>
            </dl>
        </div>
        <div class="content-item">
            <h2 class="content-item__header">System Requirements</h2>
            <dl>
                <dt>Gamepad:</dt>
                <dd>X-Input and vibration actuator required.</dd>
                <dt>Browser:</dt>
                <dd>Google Chrome or any other Chromium-based browser is recommended.</dd>
                <dt>Operating System:</dt>
                <dd>Windows 7 or higher recommended.</dd>
            </dl>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FaqView',
    });
</script>

