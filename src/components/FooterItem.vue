<template>
  <footer class="footer">
    <div class="footer-wrapper container">
      <div class="annotation">
        <span class="annotation__text">
          © 2023
          <a href="/" target="_blank" translate="no">Wavelovers</a>. Content licensed under
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterItem',
});
</script>

<style lang="scss">
.footer {
  border-top: 4px solid var(--color-footer-borderline);
}

.footer span {
  color: var(--color-footer-text);
}

.footer-wrapper {
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
}

.created-by {
  align-self: flex-end;
}

.created-by > span {
  padding-right: 8px;
}

.created-by > a {
  font-size: 32px;
}
</style>
