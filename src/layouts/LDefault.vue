<script lang="ts">
import { defineComponent } from 'vue';
import { MHeader, MFooter } from '@/components/molecules';

export default defineComponent({
  name: 'LDefault',
  components: {
    MHeader,
    MFooter,
  },
});
</script>

<template>
  <MHeader />

  <main class="page container">
    <div class="wavelovers">
      <slot name="default" />
    </div>
  </main>

  <MFooter />
</template>

<style lang="scss">
.page {
  flex-grow: 1;
  margin-top: 32px;
  margin-bottom: 32px;
}

@media only screen and (min-width: 540px) {
  .page {
    margin-top: 64px;
    margin-bottom: 64px;
  }
}
</style>
