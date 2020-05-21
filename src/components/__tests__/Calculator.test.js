import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'

describe('Calculator', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(Calculator)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders a button for each object in the array map', () => {
    expect(wrapper.findAll('button').length).toBe(20);

    // test a unique button(s)
    let button = wrapper.find('.btn-primary');
    expect(button).toBeTruthy();
    expect(button.text()).toBe('=')
    
  })

  test(`should register the button's value with the state`, () => {
    
  })
})