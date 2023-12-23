<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'DonateView',
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Donate</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">Donate</h2>
      <span>If you like this app, you can thank me and donate to me.</span><br /><br />
      <span>Why should you donate to Wavelovers?</span><br /><br />
      <p>
        More donation = more money <br />
        More money allows me buy more coffee <br />
        More coffee makes me write more code <br />
        More code means more features <br />
        More features make you more happiness and productive <br />
        More happiness and productive so you earn more money <br />
        More money you earn more donation to me <br />
      </p>
      <br />
      <span>Bitcoin: </span>
      <a
        href="bitcoin:bc1qe53gsp0t5ehlvtgsxc952ujmxtvp6zj9zyh29d"
        target="_blank"
        class="link_hash"
      >
        bc1qe53gsp0t5ehlvtgsxc952ujmxtvp6zj9zyh29d
      </a>
      <br />
    </article>
  </div>
</template>

<style>
.link_hash {
  word-break: break-all;
}
</style>
