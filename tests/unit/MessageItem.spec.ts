import { shallowMount } from '@vue/test-utils';
import MessageItem from '@/components/MessageItem.vue';

describe('MessageItem.vue', () => {
  it('renders slots when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(
      MessageItem,
      {
        slots: {
          default: msg,
        },
      }
    );
    expect(wrapper.html()).toContain(msg);
  });
});
