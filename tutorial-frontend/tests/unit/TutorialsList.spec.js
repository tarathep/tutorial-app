import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/TutorialsList.vue'

describe('TutorialsList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Search Tutorials List Remove All'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
