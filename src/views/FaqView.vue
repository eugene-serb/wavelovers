<script setup lang="ts">
import { PUBLIC_EMAIL } from '@/constants';
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — FAQ</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">FAQ</h2>
      <dl>
        <dt>What is the purpose of this software?</dt>
        <dd>
          Wavelovers is an all-in-one software that can turn your gamepad or smartphone into a
          vibration massager, providing comfort and relaxation after a long day. But that is not
          all! Our software can also be used to diagnose the health of your controller, ensuring
          you're always ready to play. With Wavelovers on your side, you can enjoy quality
          relaxation and trouble-free operation of your equipment.
        </dd>
        <dt>Can I use this software as a hand massager?</dt>
        <dd>
          Yes, sure. If you use this as a vibrating massager, I recommend consulting with your
          doctor before the session.
        </dd>
        <dt>
          I have a gamepad with vibration, what should I do before using it as a hand massager?
        </dt>
        <dd>
          I recommend checking the device for correct operation, absence of mechanical damage and be
          sure to use an antiseptic.
        </dd>
        <dt>I'm having problems with the app or connecting my device to the app?</dt>
        <dd>Go to Troubleshooting.</dd>
      </dl>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Troubleshooting</h2>
      <dl>
        <dt>Vibration does not start on the phone.</dt>
        <dd>
          Make sure you are using the mobile device templates in the «Mobile» section, your phone is
          not in silent mode, and your hardware and software meet the recommended requirements.
        </dd>
        <dt>The app does not see my device.</dt>
        <dd>Make sure your hardware and software meet the recommended requirements.</dd>
        <dt>
          The application sees the gamepad, but writes that the vibration actuator is missing.
        </dt>
        <dd>
          This issue is specific to the Mozilla Firefox browser and the gamepad's d-input mode.
          Before using the software, check that your software meets the system requirements.
        </dd>
        <dt>
          The application sees the gamepad and vibration drive, but vibration does not start.
        </dt>
        <dd>
          Make sure your device is fully charged and the vibration on your controller is not turned
          off.
        </dd>
        <dt>My question is not here or the answer did not help.</dt>
        <dd>
          Write me
          <a :href="PUBLIC_EMAIL.link" target="_blank" translate="no">{{ PUBLIC_EMAIL.text }}</a>
        </dd>
      </dl>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">System Requirements</h2>
      <dl>
        <dt>Gamepad:</dt>
        <dd>X-Input and vibration actuator required.</dd>
        <dt>Browser:</dt>
        <dd>
          Google Chrome or any other Chromium-based browser is recommended, excluding those in the
          next paragraph.
        </dd>
        <dt>Partially supported browsers:</dt>
        <dd>
          Mozilla Firefox (gamepad diagnostic mode only), Yandex Browser (gamepad modes only), Mi
          Browser (gamepad modes only).
        </dd>
        <dt>Operating System:</dt>
        <dd>Windows 10 or higher recommended.</dd>
      </dl>
    </article>
  </div>
</template>
