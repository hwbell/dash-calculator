import { mount } from '@vue/test-utils'
import App from '../../App.vue'

const message = 'This is a base component for us to start with!';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(App)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders the correct elements', () => {
    expect(wrapper.findAll('#app').length).toBe(1)
    expect(wrapper.findAll('#content').length).toBe(1)
    expect(wrapper.findAll('#news-component').length).toBe(1)
    expect(wrapper.findAll('#tools').length).toBe(1)
    expect(wrapper.findAll('#calculator-component').length).toBe(1)
    expect(wrapper.findAll('#time-converter-component').length).toBe(1)
    expect(wrapper.findAll('#time-display-component').length).toBe(1)


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