import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import MFooter from '@/components/molecules/MFooter.vue';

describe('FooterItem.vue', () => {
  it('renders slots when passed', () => {
    const wrapper = mount(MFooter);
    expect(wrapper.html()).toContain('Wavelovers');
  });
});
