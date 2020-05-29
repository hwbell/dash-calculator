import { mount } from '@vue/test-utils';
import SorterButton from '../SorterButton.vue';

const moment = require('moment');
const lastDay = moment()
  .subtract(1, "d")
  .format("YYYY-MM-DD");

const sortStub = jest.fn();

describe('SorterButton', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(SorterButton, {
      propsData: {
        text: 'last day',
        sorter: lastDay,
        sort: sortStub
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
    expect(wrapper.findAll('.sorter-button-component').length).toBe(1);
    expect(wrapper.findAll('.btn-outline-primary').length).toBe(1);
  })

  test('receives and uses the props', () => {
    expect(wrapper.vm.text).toBe('last day');

    wrapper.vm.sort();
    expect(sortStub).toHaveBeenCalledTimes(1);

  })
})