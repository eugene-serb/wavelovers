<template>
    <main class="page container">
        <h1 class="visually-hidden">Wavelovers – FAQ</h1>
        <div>
            <div class="content-item">
                <h2 class="content-item__header">FAQ</h2>
                <span class="faq__ask">What is the purpose of this software?</span><br />
                <span class="faq__reply">Everyone decides for himself, but can be used as a gamepad vibration tester, or as a hand massager.</span><br /><br />

                <span class="faq__ask">Can I use this software as a hand massager?</span><br />
                <span class="faq__reply">Yes of course. If you use this as a massager, then before the session I recommend consulting with a doctor.</span><br /><br />

                <span class="faq__ask">I have a gamepad with vibration, what should I do before using it as a hand massager?</span><br />
                <span class="faq__reply">I recommend checking the device for correct operation, mechanical damage, and be sure to use an antiseptic.</span><br /><br />

                <span class="faq__ask">I'm having problems with the app or connecting my device to the app?</span><br />
                <span class="faq__reply">Go to Troubleshooting.</span>
            </div>
            <div class="content-item">
                <h2 class="content-item__header">Troubleshooting</h2>
                <span>If you are having difficulty detecting a gamepad by the browser, you can use the utility </span>
                <a href="https://eugene-serb.github.io/gamepad-master/" target="_blank">Gamepad Master</a><br /><br />

                <span class="faq__ask">The app does not see my device.</span><br />
                <span class="faq__reply">Make sure you have a chromium-based browser, then update the app and reconnect your device.</span><br /><br />

                <span class="faq__ask">The application sees the gamepad, but writes that the vibration actuator is missing.</span><br />
                <span class="faq__reply">This problem is specific to mozilla firefox browser and d-input mode. Check the system requirements before using the software.</span><br /><br />

                <span class="faq__ask">My question is not here.</span><br />
                <span class="faq__reply">Write me </span><a href="mailto:eugene.serb@gmail.com" target="_blank">eugene.serb@gmail.com</a>
            </div>
            <div class="content-item">
                <h2 class="content-item__header">System Requirements</h2>
                <span class="faq__ask">Gamepad:</span><br />
                <span class="faq__reply">X-Input and vibration actuator required.</span><br /><br />
                <span class="faq__ask">Browser:</span><br />
                <span class="faq__reply">Google Chrome or any other Chromium-based browser is recommended.</span><br /><br />
                <span class="faq__ask">Operating System:</span><br />
                <span class="faq__reply">Windows 7 or higher recommended.</span><br />
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FaqView',
    });
</script>

