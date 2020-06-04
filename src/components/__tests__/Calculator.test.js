import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'

describe('Calculator', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(Calculator)
  })

  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
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

    // test a group of button(s)
    let secondaryButtons = wrapper.findAll('.btn-secondary');
    expect(secondaryButtons.length).toBe(8);
    expect(secondaryButtons.at(0).text()).toBe('(')
    
  })

  test(`should register the button's math value with the expression state`, () => {
    // things start out empty
    expect(wrapper.vm.currentExpressionText).toEqual([]);
    expect(wrapper.vm.currentExpressionMath).toEqual([]);

    // and then when we click some buttons ...
    wrapper.find('#calculator-button-0-0').trigger('click')
    wrapper.find('#calculator-button-1-2').trigger('click')
    wrapper.find('#calculator-button-3-0').trigger('click')
    wrapper.find('#calculator-button-0-1').trigger('click')
    expect(wrapper.vm.currentExpressionText).toEqual([' (', '9', '1', ') ']);
    expect(wrapper.vm.currentExpressionMath).toEqual([' (', '9', '1', ') ']);

    // reset
    wrapper.vm.currentExpressionMath = [];
    wrapper.vm.currentExpressionText = [];

    // try one that creates different arrays for math / text
    wrapper.find('#calculator-button-1-2').trigger('click')
    wrapper.find('#calculator-button-2-2').trigger('click')
    wrapper.find('#calculator-button-0-2').trigger('click')
    wrapper.find('#calculator-button-2-3').trigger('click')
    expect(wrapper.vm.currentExpressionText).toEqual(['9', '6', ' % ', ' x ']);
    expect(wrapper.vm.currentExpressionMath).toEqual(['9', '6', '/100', ' * ']);

  })

  test('should evaluate a valid expression', () => {
    // starts out null
    expect(wrapper.vm.currentAnswer).toBe(null);

    // and then when we click some buttons ...
    wrapper.find('#calculator-button-1-0').trigger('click')
    wrapper.find('#calculator-button-1-1').trigger('click')
    wrapper.find('#calculator-button-1-2').trigger('click')
    wrapper.find('#calculator-button-2-3').trigger('click')
    wrapper.find('#calculator-button-2-2').trigger('click')
    wrapper.find('#calculator-button-1-2').trigger('click')
    wrapper.find('#calculator-button-1-1').trigger('click')
    
    expect(wrapper.vm.currentExpressionText).toEqual(['7', '8', '9', ' x ', '6','9','8']);
    expect(wrapper.vm.currentExpressionMath).toEqual(['7', '8', '9', ' * ', '6','9','8']);

    // evaluate
    wrapper.find('#calculator-button-4-2').trigger('click')
    expect(wrapper.vm.currentAnswer).toBe(550722);

  })
})