import { mount } from '@vue/test-utils'
import TimeConverter from '../TimeConverter.vue'

const message = 'This is a TimeConverter component for us to start with!';

describe('TimeConverter', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(TimeConverter)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders a button for each object in the array map', () => {
    expect(wrapper.findAll('.time-converter-component').length).toBe(1);
    expect(wrapper.findAll('#current-unix-time').length).toBe(1);
    expect(wrapper.findAll('#current-verbal-time').length).toBe(1);
  })

  // test(`assigns the computed value on the component properly`, () => {
  //   let revMessage = message.split('').reverse().join('');
  //   expect(wrapper.vm.reversedMessage).toBe(revMessage);
  // })  

  // test('should change the message when the greet method is called', () => {
  //   wrapper.vm.greet();
  //   expect(wrapper.vm.message).toBe('Nice to meet you!');
  // })


})