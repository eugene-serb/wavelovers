<script setup lang="ts">
import { PUBLIC_EMAIL, PERSONAL_PAGE } from '@/constants';
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — About</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">Wavelovers</h2>
      <p>
        Wavelovers will turn your gamepad or&nbsp;phone with vibration function into the best
        assistant on&nbsp;the path to&nbsp;relaxation and wellness. It&nbsp;is&nbsp;ideal for those
        who lead an&nbsp;active lifestyle and feel a&nbsp;constant need to&nbsp;recuperate. With
        Wavelovers, your life will become more comfortable and healthy, and you will be&nbsp;more
        energetic and full of&nbsp;strength to&nbsp;achieve new heights.
      </p>
      <br />
      <p>
        Wavelovers offers comprehensive solutions for managing and diagnosing your equipment. Our
        product comes with free vibration patterns that allow you to&nbsp;customize your device
        to&nbsp;suit your preferences. You can also use manual mode to&nbsp;control vibration using
        the device buttons. Additionally, Wavelovers&rsquo; diagnostic feature allows you
        to&nbsp;check the health of&nbsp;your device. This is&nbsp;especially useful for gamers who
        want to&nbsp;make sure their hardware is&nbsp;fully functional before playing.
      </p>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">About the effects of&nbsp;use</h2>
      <span>
        A&nbsp;dozen reasons to&nbsp;make friends with the Wavelovers vibration stimulator:
      </span>
      <ol class="list">
        <li>Reduces the risk of&nbsp;stroke.</li>
        <li>Headaches and migraines are reduced.</li>
        <li>Pain syndromes accompanying osteochondrosis and muscle pain are reduced.</li>
        <li>Noise in&nbsp;the ears and numbness of&nbsp;the fingers pass.</li>
        <li>Memory and vision improve, emotional state normalizes.</li>
        <li>
          The work of&nbsp;muscles and blood vessels is&nbsp;normalized, blood circulation improves.
        </li>
        <li>Meteorological dependence decreases.</li>
        <li>Improves overall well-being and sleep, increases efficiency.</li>
        <li>The ability to&nbsp;jump to&nbsp;the height of&nbsp;one&rsquo;s own height.</li>
        <li>
          After training, the ability to&nbsp;fly and breathe underwater for
          up&nbsp;to&nbsp;an&nbsp;hour.
        </li>
        <li>
          Gradual transformation into a&nbsp;superman. Walking through walls, cat vision,
          regeneration.
        </li>
        <li>
          The ability to&nbsp;see the future and travel through time and to&nbsp;other galaxies.
        </li>
      </ol>
      <span>
        The list is&nbsp;based on&nbsp;reviews, has not been verified by&nbsp;experts, and may not
        reflect reality. Don&rsquo;t take it&nbsp;for granted.
      </span>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Advertising</h2>
      <span>If&nbsp;you have advertising suggestions, please mail&nbsp;me: </span>
      <a :href="PUBLIC_EMAIL.link" target="_blank" translate="no">{{ PUBLIC_EMAIL.text }}</a>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Author</h2>
      <p>
        Hi! I&nbsp;am the author and developer of&nbsp;Wavelovers app and&nbsp;I want to&nbsp;thank
        you for using this app. If&nbsp;you have any ideas or&nbsp;wishes, you can write to&nbsp;me.
      </p>
      <br />
      <span>Write me: </span>
      <a :href="PUBLIC_EMAIL.link" target="_blank" translate="no">{{ PUBLIC_EMAIL.text }}</a>
      <br />
      <span>Visit my&nbsp;homepage: </span>
      <a :href="PERSONAL_PAGE.link" target="_blank" translate="no">{{ PERSONAL_PAGE.text }}</a>
    </article>
  </div>
</template>

<style>
.list > li {
  margin-bottom: 4px;
}
</style>
