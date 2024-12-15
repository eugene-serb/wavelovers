<script setup lang="ts">
/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Идентификатор анонса.
   */
  id: string;
  /**
   * Включён ли анонс.
   */
  enabled: boolean;
  /**
   * Можно ли закрыть.
   */
  closable?: boolean;
}

/**
 * Интерфейс событий, которые может сгенерировать компонент.
 */
interface Emits {
  /**
   * Закрытие анонса.
   *
   * @param e - Имя события.
   * @param id - ID анонса.
   */
  (e: 'close', id: string): void;
}

/**
 * Интерфейс слотов, который содержит компонент.
 */
interface Slots {
  /**
   * Слот по умолчанию.
   */
  default(): any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Входные параметры компонента.
 */
const props = withDefaults(defineProps<Props>(), {
  closable: false,
});

/**
 * События, которые может сгенерировать компонент.
 */
const emits = defineEmits<Emits>();

defineSlots<Slots>();

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
