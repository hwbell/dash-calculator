const fetch = require('node-fetch');
const searchUrl = 'https://newsapi.org/v2/everything?q=news&from=2020-05-25&to=2020-05-26'
// const headlinesUrl = 'https://newsapi.org/v2/everything?q=news&from=2020-05-25&to=2020-05-26'

async function fetchArticles(query) {

  let headers = {
    Authorization: process.env.VUE_APP_NEWSAPIKEY
  };

  console.log(headers)
  let serverResponse = await fetch(searchUrl+`&q=${query}`, {
    method: 'GET',
    headers
  })
    .then(response => response.json())
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch(err => console.log(err))

  // console.log(serverResponse.articles);
  return serverResponse;
}

// getArticles(searchUrl);

module.exports = {
  fetchArticles
}