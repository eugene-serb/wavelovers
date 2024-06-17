<script setup lang="ts">
/**
 * Входные параметры компонента.
 */
const props = defineProps({
  /**
   * Идентификатор анонса.
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * Включён ли анонс.
   */
  enabled: {
    type: Boolean,
    required: true,
  },
  /**
   * Можно ли закрыть.
   */
  closable: {
    type: Boolean,
    default: false,
  },
});

/**
 * События, которые может сгенерировать компонент.
 */
const emits = defineEmits({
  close(id: string): boolean {
    return typeof id === 'string' && id.length > 0;
  },
});

/**
 * Закрыть анонс.
 */
function close(): void {
  emits('close', props.id);
}
</script>

<template>
  <div v-if="enabled" class="content-item a-announcement">
    <span class="text">
      <slot name="default" />
    </span>

    <div v-if="closable" class="close" @click="close">×</div>
  </div>
</template>

<style lang="scss">
.a-announcement {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: start;
  font-size: 16px;
  padding: 16px 16px;

  @media only screen and (min-width: 540px) {
    padding: 16px 32px;
  }

  > .close {
    font-size: 20px;
    margin-left: 16px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>
