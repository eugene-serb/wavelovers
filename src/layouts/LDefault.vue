<script setup lang="ts">
import { MHeader, MFooter, MAnnouncement } from '@/components/molecules';
import { URL_TO_HOME, URL_TO_FAQ, URL_TO_ABOUT, URL_TO_DONATE, URL_TO_MOBILE } from '@/constants';
import announcements from '@/assets/announcements.json';

import type { Link } from '@/models';

/**
 * Интерфейс слотов, который содержит компонент.
 */
interface Slots {
  /**
   * Слот по умолчанию.
   */
  default(): any;
}

defineSlots<Slots>();

/**
 * Ссылки.
 */
const links: Link[] = [
  {
    text: 'Gamepad',
    to: URL_TO_HOME,
    target: '_self',
  },
  {
    text: 'Mobile',
    to: URL_TO_MOBILE,
    target: '_self',
  },
  {
    text: 'FAQ',
    to: URL_TO_FAQ,
    target: '_self',
  },
  {
    text: 'About',
    to: URL_TO_ABOUT,
    target: '_self',
  },
  {
    text: 'Donate',
    to: URL_TO_DONATE,
    target: '_self',
  },
];
</script>

<template>
  <MHeader :links="links" />

  <main class="page container">
    <MAnnouncement :announcements="announcements" />
    <slot name="default" />
  </main>

  <MFooter />
</template>

<style lang="scss">
.page {
  flex-grow: 1;
  margin-top: 32px;
  margin-bottom: 32px;

  @media only screen and (min-width: 540px) {
    margin-bottom: 64px;
  }
}
</style>
