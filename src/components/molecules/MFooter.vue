<script setup lang="ts">
import { defineComponent, computed } from 'vue';

defineComponent({
  name: 'MFooter',
});

/**
 * Текущий год.
 */
const currentYear = computed<number>(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper container">
      <div class="annotation">
        <span class="annotation__text">
          © 2022 — {{ currentYear }} <a href="/" target="_blank" translate="no">Wavelovers</a>.
          Content licensed under
        </span>
        <a href="https://wavelovers.ru/LICENSE.md" target="_blank">
          GNU General Public License v3.0
        </a>
        <br />
        <span class="annotation__text">This site is open source. </span>
        <a href="https://github.com/eugene-serb/wavelovers/" target="_blank">
          Improve this page.
        </a>
      </div>
      <div class="annotation created-by">
        <span class="annotation__text">Created by</span>
        <a href="https://eugene-serb.github.io/" target="_blank" translate="no">Eugene Serb</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  border-top: 4px solid var(--color-footer-borderline);

  span {
    color: var(--color-footer-text);
  }

  > .footer-wrapper {
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;

    > .created-by {
      align-self: flex-end;

      > span {
        padding-right: 8px;
      }

      > a {
        font-size: 32px;
      }
    }
  }
}
</style>
