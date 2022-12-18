import { shallowMount } from '@vue/test-utils';
import FooterItem from '@/components/FooterItem.vue';

describe('FooterItem.vue', () => {
  it('renders slots when passed', () => {
    const wrapper = shallowMount(FooterItem);
    expect(wrapper.html()).toContain('Wavelovers');
  });
});
