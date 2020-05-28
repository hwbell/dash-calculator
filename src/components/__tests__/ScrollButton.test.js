import { mount } from '@vue/test-utils'
import ScrollButton from '../ScrollButton.vue'

const message = 'This is a scroll button component for us to start with!';

describe('ScrollButton', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(ScrollButton, {
      props: {
        text: 'calculator',
        target: '#calculator'
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders a button for each object in the array map', () => {
    let messageDiv = wrapper.findAll('.scroll-button-component');
    expect(messageDiv.length).toBe(1);
    // expect(messageDiv.text()).toBe('This is a base component for us to start with!')
  })

  // test('receives and uses the props', () => {
    // e
  // })
})