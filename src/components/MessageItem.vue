<template>
  <div class="content-item message">
    <span>
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageItem',
});
</script>

<style lang="scss">
.message {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 16px;
}

@media only screen and (min-width: 540px) {
  .message {
    font-size: 24px;
  }
}
</style>
