import { mount } from '@vue/test-utils'
import Article from '../Article.vue'

const article = {
  source: { id: null, name: 'Global News' },
  author: 'Curt Anderson And Brian Mahoney',
  title: 'U.S. Memorial Day crowds small, subdued amid coronavirus pandemic - Global News',
  description: '<ol><li>U.S. Memorial Day crowds small, subdued amid coronavirus pandemic  Global News\r\n' +
    '</li><li>US marks quiet Memorial Day as coronavirus deaths near 100,000  Al Jazeera English\r\n' +
    '</li><li>What Is the Difference Between Memorial Day and Veterans Day?  Newswe…',
  url: 'http://globalnews.ca/news/6981600/coronavirus-memorial-day-warnings/',
  urlToImage: 'https://shawglobalnews.files.wordpress.com/2020/05/1000-32.jpeg?quality=70&strip=all&w=720&h=379&crop=1',
  publishedAt: '2020-05-25T11:01:48Z',
  content: 'Americans settled for small processions and online tributes instead of parades Monday as they observed Memorial Day in the shadow of the pandemic, which forced communities to honour the nation’s mili… [+5855 chars]'
}

describe('Article', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(Article, {
      propsData: {
        article
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
    expect(wrapper.findAll('.article-component').length).toBe(1)
  })

  test('receives and uses the props', () => {
    expect(wrapper.find('.article-title').text()).toBe(article.title);
    expect(wrapper.find('.article-image').attributes().src).toBe(article.urlToImage)
  })
})