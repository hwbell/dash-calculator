<template>
  <div class="news-component">
    <div v-if="articles != null" class="news-articles-holder left-all-col">
      <p style="margin: 0">
        <strong>Top News this <strong style="color:blue">{{ sorter }}</strong> </strong>
      </p>
      <div
        v-for="(article, ind) in articles"
        v-bind:key="ind"
        class="news-article"
      >
        <div class="space-all-row">
          <div class="left-all-col">
            <p class="article-title">{{ article.title }}</p>
            <p>{{ article.publishedAt.slice(0,10) }}</p>
          </div>
          <img class="article-image" v-bind:src="article.urlToImage" alt="article image">
        </div>
        <p class="article-author">{{ article.author }}</p>
        <p class="article-description">
          <span>{{ article.content }}</span>
          <a v-bind:href="article.link" alt="article link"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { fetchArticles } from "../tools/newsapi";

export default {
  name: "News",
  // props: {
  // msg: String,
  // },
  // components: {ExpressionWindow},
  data: function() {
    return {
      sorter: "week",
      message: "This is a news component for us to start with!",
      articles: [],
    };
  },
  created: function() {
    this.getArticles();
  },
  computed: {
    // a computed getter
  },
  methods: {
    getArticles: async function(query) {
      const searchUrl =
        "https://newsapi.org/v2/everything?q=news&from=2020-05-25&to=2020-05-26";

      let headers = {
        Authorization: process.env.VUE_APP_NEWSAPIKEY,
      };

      console.log(headers);
      let serverResponse = await fetch(searchUrl + `&q=${query}`, {
        method: "GET",
        headers,
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log(response)
          return response;
        })
        .catch((err) => console.log(err));

      console.log(serverResponse.articles);
      this.articles = serverResponse.articles;
      return serverResponse;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
.news-component {
  /* width: 100%; */
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

}
.news-article {
  background-color: white;
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 2px;
  /* border: 1px solid rgb(207, 206, 206); */
  box-shadow: -2px 2px 12px 10px rgba(47, 0, 255, 0.137);
}
.article-image {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.article-title {
  color: black;
  font-weight: bolder;
  font-size: 14pt;
}
.article-author {
  color: blue;
  font-weight: bolder;
  font-size: 12pt;
}
.article-description {
  color: black;
  font-weight: 400;
  font-size: 12pt;
}
</style>
