import { mount } from '@vue/test-utils'
import TimeDisplay from '../TimeDisplay.vue'
import Vue from 'vue';

const moment = require('moment');
const date = moment().format("YYYY-MM-DD");
const hours = moment().format("hh:mm a");

describe('TimeDisplay', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(TimeDisplay, {
      propsData: {
        timeDate: date,
        timeHours: hours
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders the right components', async () => {
    expect(wrapper.findAll('#time-display-component').length).toBe(1)
    expect(wrapper.findAll('#current-time').length).toBe(1)
    expect(wrapper.findAll('.time-date').length).toBe(1)
    await Vue.nextTick()
    expect(wrapper.find('.time-date').text()).toBe(`${date}, ${hours}`)

  })

})