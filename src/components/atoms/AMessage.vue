<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AMessage',
});
</script>

<template>
  <div class="content-item message">
    <span>
      <slot name="default" />
    </span>
  </div>
</template>

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
