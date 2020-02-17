import { shallowMount } from '@vue/test-utils';
import ExperienceSamplingMethodForm from '@/components/ExperienceSamplingMethodForm.vue';

describe('ExperienceSamplingMethodForm.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(ExperienceSamplingMethodForm, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
