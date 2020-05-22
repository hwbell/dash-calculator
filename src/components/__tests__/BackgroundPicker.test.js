import { mount } from '@vue/test-utils'
import Base from '../Base.vue'

const message = 'This is a base component for us to start with!';

describe('Base', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(Base)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders a button for each object in the array map', () => {
    let messageDiv = wrapper.findAll('.base-component');
    expect(messageDiv.length).toBe(1);
    // expect(messageDiv.text()).toBe('This is a base component for us to start with!')
  })

  test(`assigns the computed value on the component properly`, () => {
    let revMessage = message.split('').reverse().join('');
    expect(wrapper.vm.reversedMessage).toBe(revMessage);
  })  

  test('should change the message when the greet method is called', () => {
    wrapper.vm.greet();
    expect(wrapper.vm.message).toBe('Nice to meet you!');
  })
})