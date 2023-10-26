import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/assets/routes';
import HeaderItem from '@/components/HeaderItem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('HeaderItem.vue', () => {
  it('renders slots when passed', () => {
    const wrapper = shallowMount(HeaderItem, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.html()).toContain('Wavelovers');
  });
});
