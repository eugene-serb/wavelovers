<script setup lang="ts">
import { PUBLIC_EMAIL } from '@/constants';
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — FAQ</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">FAQ</h2>
      <dl>
        <dt>What is&nbsp;the purpose of&nbsp;this software?</dt>
        <dd>
          Wavelovers is&nbsp;an&nbsp;all-in-one software that can turn your gamepad
          or&nbsp;smartphone into a vibration massager, providing comfort and relaxation after
          a&nbsp;long day. But that is&nbsp;not all! Our software can also be&nbsp;used
          to&nbsp;diagnose the health of&nbsp;your controller, ensuring you&rsquo;re always ready
          to&nbsp;play. With Wavelovers on&nbsp;your side, you can enjoy quality relaxation and
          trouble-free operation of&nbsp;your equipment.
        </dd>
        <dt>Can I&nbsp;use this software as&nbsp;a&nbsp;hand massager?</dt>
        <dd>
          Yes, sure. If&nbsp;you use this as&nbsp;a&nbsp;vibrating massager, I&nbsp;recommend
          consulting with your doctor before the session.
        </dd>
        <dt>
          I&nbsp;have a&nbsp;gamepad with vibration, what should I&nbsp;do before using
          it&nbsp;as&nbsp;a&nbsp;hand massager?
        </dt>
        <dd>
          I&nbsp;recommend checking the device for correct operation, absence of&nbsp;mechanical
          damage and be sure to&nbsp;use an&nbsp;antiseptic.
        </dd>
        <dt>
          I&rsquo;m having problems with the app or&nbsp;connecting my&nbsp;device to&nbsp;the app?
        </dt>
        <dd>Go&nbsp;to&nbsp;Troubleshooting.</dd>
      </dl>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Troubleshooting</h2>
      <dl>
        <dt>Vibration does not start on&nbsp;the phone.</dt>
        <dd>
          Make sure you are using the mobile device templates in&nbsp;the &laquo;Mobile&raquo;
          section, your phone is not in&nbsp;silent mode, and your hardware and software meet the
          recommended requirements.
        </dd>
        <dt>The app does not see my&nbsp;device.</dt>
        <dd>Make sure your hardware and software meet the recommended requirements.</dd>
        <dt>
          The application sees the gamepad, but writes that the vibration actuator is&nbsp;missing.
        </dt>
        <dd>
          This issue is&nbsp;specific to&nbsp;the Mozilla Firefox browser and the gamepad&rsquo;s
          d-input mode. Before using the software, check that your software meets the system
          requirements.
        </dd>
        <dt>
          The application sees the gamepad and vibration drive, but vibration does not start.
        </dt>
        <dd>
          Make sure your device is&nbsp;fully charged and the vibration on&nbsp;your controller
          is&nbsp;not turned off.
        </dd>
        <dt>My&nbsp;question is&nbsp;not here or&nbsp;the answer did not help.</dt>
        <dd>
          Write&nbsp;me
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
          Google Chrome or&nbsp;any other Chromium-based browser is&nbsp;recommended, excluding
          those in&nbsp;the next paragraph.
        </dd>
        <dt>Partially supported browsers:</dt>
        <dd>
          Mozilla Firefox (gamepad diagnostic mode only), Yandex Browser (gamepad modes only), Mi
          Browser (gamepad modes only).
        </dd>
        <dt>Operating System:</dt>
        <dd>Windows 10&nbsp;or higher recommended.</dd>
      </dl>
    </article>
  </div>
</template>
