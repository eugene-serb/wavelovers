<script setup lang="ts">
import { BITCOIN_ADDRESS } from '@/constants';
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Donate</h1>
  <div>
    <article class="content-item">
      <h2 class="content-item__header">Donate</h2>
      <span>If&nbsp;you like this app, you can thank me&nbsp;and donate to&nbsp;me.</span>
      <br /><br />
      <span>Why should you donate to&nbsp;Wavelovers?</span><br /><br />
      <p>
        More donation = more money<br />
        More money allows me&nbsp;buy more coffee<br />
        More coffee makes me&nbsp;write more code<br />
        More code means more features<br />
        More features make you more happiness and productive<br />
        More happiness and productive so&nbsp;you earn more money<br />
        More money you earn more donation to&nbsp;me<br />
      </p>
      <br />
      <span>Bitcoin: </span>
      <a :href="BITCOIN_ADDRESS.link" target="_blank" class="link_hash">
        {{ BITCOIN_ADDRESS.text }}
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
