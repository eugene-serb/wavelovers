import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import FooterItem from '@/components/FooterItem.vue';

describe('FooterItem.vue', () => {
  it('renders slots when passed', () => {
    const wrapper = mount(FooterItem);
    expect(wrapper.html()).toContain('Wavelovers');
  });
});
