import { shallowMount } from '@vue/test-utils';
import ExperienceSamplingMethodForm from '@/components/ExperienceSamplingMethodForm.vue';

describe('ExperienceSamplingMethodForm.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ExperienceSamplingMethodForm, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
