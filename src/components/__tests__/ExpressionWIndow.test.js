import { mount } from '@vue/test-utils'
import ExpressionWindow from '../ExpressionWindow.vue'

describe('ExpressionWindow', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(ExpressionWindow, {
      propsData: {
        expression: '4*3-2'
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.props().expression).toBe('4*3-2');
  })
  
  test('renders a button for each object in the array map', () => {
    // test a unique button(s)
    let window = wrapper.find('.expression-window');
    expect(window).toBeTruthy();
  })

})