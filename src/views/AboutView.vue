<script setup lang="ts">
import { defineComponent } from 'vue';
import { PUBLIC_EMAIL, PERSONAL_PAGE } from '@/constants';

defineComponent({
  name: 'AboutView',
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — About</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">Wavelovers</h2>
      <p>
        Wavelovers is an assistant in relaxation, elimination of muscle pain and other relaxing,
        wellness procedures, or simply a tester of the performance of the gamepad, its buttons and
        vibration.
      </p>
      <br />
      <p>
        Wavelovers is free to use worldwide, in every corner of the planet, all you need is a
        gamepad with vibration.
      </p>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">About the effects of use</h2>
      <span>A dozen reasons to make friends with the Wavelovers vibration stimulator:</span>
      <ol class="list">
        <li>Reduces the risk of stroke.</li>
        <li>Headaches and migraines are reduced.</li>
        <li>Pain syndromes accompanying osteochondrosis and muscle pain are reduced.</li>
        <li>Noise in the ears and numbness of the fingers pass.</li>
        <li>Memory and vision improve, emotional state normalizes.</li>
        <li>The work of muscles and blood vessels is normalized, blood circulation improves.</li>
        <li>Meteorological dependence decreases.</li>
        <li>Improves overall well-being and sleep, increases efficiency.</li>
        <li>The ability to jump to the height of one's own height.</li>
        <li>After training, the ability to fly and breathe underwater for up to an hour.</li>
        <li>
          Gradual transformation into a superman. Walking through walls, cat vision, regeneration.
        </li>
        <li>The ability to see the future and travel through time and to other galaxies.</li>
      </ol>
      <span>
        P.S. The list is based on reviews, has not been verified by experts, and may not reflect
        reality. Don't take it for granted.
      </span>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Author</h2>
      <p>
        Hi! I am the author and developer of Wavelovers app and I want to thank you for using this
        app. If you have any ideas or wishes, you can write to me.
      </p>
      <br />
      <span>Write me: </span>
      <a :href="PUBLIC_EMAIL.link" target="_blank" translate="no">{{ PUBLIC_EMAIL.text }}</a>
      <br />
      <span>Visit my homepage: </span>
      <a :href="PERSONAL_PAGE.link" target="_blank" translate="no">{{ PERSONAL_PAGE.text }}</a>
    </article>
    <article class="content-item">
      <h2 class="content-item__header">Advertising</h2>
      <span>If you have advertising suggestions, please mail me: </span>
      <a :href="PUBLIC_EMAIL.link" target="_blank" translate="no">{{ PUBLIC_EMAIL.text }}</a>
    </article>
  </div>
</template>

<style>
.list > li {
  margin-bottom: 4px;
}
</style>
