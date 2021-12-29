import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Search';
    const wrapper = shallowMount(Button, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
