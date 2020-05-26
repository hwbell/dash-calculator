import { mount } from '@vue/test-utils'
import News from '../News.vue'
import Vue from "vue";

const message = 'This is a base component for us to start with!';

const mockArticles = [
  {
    source: { id: null, name: 'TheChronicleHerald.ca' },
    author: 'Joey Roulette',
    title: "Musk's SpaceX set for debut astronaut mission, renewing NASA's crewed launch program - TheChronicleHerald.ca",
    description: "<ol><li>Musk's SpaceX set for debut astronaut mission, renewing NASA's crewed launch program  TheChronicleHerald.ca\r\n" +
      '</li><li>NASA astronauts go back to the future with capsule launch  CTV News\r\n' +
      '</li><li>SpaceX launch with NASA astronauts will feature retro-s…',
    url: 'https://www.thechronicleherald.ca/news/world/musks-spacex-set-for-debut-astronaut-mission-renewing-nasas-crewed-launch-program-453854/',
    urlToImage: 'https://www.thechronicleherald.ca/media/photologue/photos/cache/musks-spacex-set-for-debut-astronaut-mission-renewing-nasas-crewed-launch-program_medium',
    publishedAt: '2020-05-26T11:14:39Z',
    content: 'By Joey Roulette\r\n' +
      "CAPE CANAVERAL, Fla. (Reuters) - Entrepreneur Elon Musk's SpaceX is set to launch two American astronauts to the International Space Station on Wednesday from NASA's Kennedy Space C… [+1974 chars]"
  },
  {
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
]
const serverResponse = {
  articles: mockArticles
}
describe('News', () => {

  let wrapper;
  beforeAll( async () => {
    wrapper = mount(News, {
      data: function() {
        return {
          test: true,
          message: "This is a news component for us to start with!",
        };
      },
      methods: {
        getArticles: function () {
          Promise.resolve(serverResponse)
            .then((response) => {
              wrapper.vm.articles = response.articles;
            })
        }
      }
    })
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  
  test('renders the correct content', () => {
    let newsDiv = wrapper.findAll('.news-component');
    expect(newsDiv.length).toBe(1);
    // expect(messageDiv.text()).toBe('This is a base component for us to start with!')
  })

  test(`renders an article for each result`, async () => {
    expect(wrapper.vm.articles.length).toBe(2)

    expect(wrapper.findAll('.news-article').length).toBe(2)
  })  

})