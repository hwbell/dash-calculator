import { mount } from '@vue/test-utils'
import TimeDisplay from '../TimeDisplay.vue'
import Vue from 'vue';

const message = 'This is a TimeDisplay component for us to start with!';

describe('TimeDisplay', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(TimeDisplay)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders the right components', async () => {
    let messageDiv = wrapper.findAll('.time-display-component');
    expect(messageDiv.length).toBe(1);

    // time needs the showTime boolean to render
    let timeDiv = wrapper.findAll('#current-time');
    expect(wrapper.findAll('#current-time').length).toBe(0);

    // change the boolean
    wrapper.setProps({ showTime: true });
    await Vue.nextTick();
    expect(wrapper.findAll('#current-time').length).toBe(1);


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