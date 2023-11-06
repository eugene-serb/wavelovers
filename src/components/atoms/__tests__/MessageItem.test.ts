import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AMessage from '@/components/atoms/AMessage.vue';

describe('AMessage.vue', () => {
  it('renders slots when passed', () => {
    const msg = 'new message';
    const wrapper = mount(AMessage, {
      slots: {
        default: msg,
      },
    });
    expect(wrapper.html()).toContain(msg);
  });
});
