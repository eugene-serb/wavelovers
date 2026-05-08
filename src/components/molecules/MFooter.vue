<script setup lang="ts">
import { computed } from 'vue';

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
          &copy; 2022 — {{ currentYear }} <a href="/" target="_blank" translate="no">Wavelovers</a>.
          Content licensed under
        </span>
        <a href="/LICENSE.txt" target="_blank">GNU General Public License v3.0</a>
        <br />
        <span class="annotation__text">This site is&nbsp;open source. </span>
        <a href="https://github.com/eugene-serb/wavelovers/" target="_blank">
          Improve this page.
        </a>
        <br />
        <span class="annotation__text">This site does not track you or&nbsp;collect any data.</span>
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
  }
}
</style>
