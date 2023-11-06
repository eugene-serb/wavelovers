import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/assets/routes';
import MHeader from '@/components/molecules/MHeader.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('HeaderItem.vue', () => {
  it('renders slots when passed', () => {
    const wrapper = mount(MHeader, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.html()).toContain('Wavelovers');
  });
});
