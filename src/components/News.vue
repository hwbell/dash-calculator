<template>
  <div id="news-component">
    <div v-if="articles != null" class="news-articles-holder left-all-col">
      <div style="width: 100%">
        <div class="left-all-row" style="width: 100%">
          <p style="margin: 0px 10px 0 0">
            <strong
              >Top News since
              <strong style="color: #007bff">{{ sorter }}</strong>
            </strong>
          </p>
          <button
            @click="sortArticles(lastDay)"
            class="btn btn-sm btn-outline-primary"
          >
            last day
          </button>
          <button
            @click="sortArticles(lastWeek)"
            class="btn btn-sm btn-outline-primary"
          >
            last week
          </button>
          <button
            @click="sortArticles(lastMonth)"
            class="btn btn-sm btn-outline-primary"
          >
            last month
          </button>
        </div>

        <div class="left-all-row">
          <input
            class="search-input"
            @keyup.enter="fireSearch()"
            v-model="searchQuery"
            type="text"
          />
          <button @click="fireSearch()" class="btn btn-sm btn-primary">
            search
          </button>
          <div v-if="loading" class="spinner-border text-primary" role="status">
          </div>
        </div>
      </div>

      <div
        v-for="(article, ind) in articles"
        v-bind:key="ind"
        class="news-article shadow-card"
      >
        <div class="space-all-row">
          <div class="left-all-col">
            <p class="article-title">{{ article.title }}</p>
            <p>{{ article.publishedAt.slice(0, 10) }}</p>
          </div>
          <img
            class="article-image"
            v-bind:src="article.urlToImage"
            alt="article image"
          />
        </div>
        <p>
          <span class="article-author" v-if="article.author">{{ article.author }}, </span
          ><span v-if="article.source.name">
            from {{ article.source.name }}</span
          >
        </p>
        <p v-if="article.content" class="article-description">
          <span>{{ article.content.slice(0, -(article.content.length-article.content.indexOf('['))) }}</span>
        </p>
        <a v-bind:href="article.url" target="_blank" alt="article link"
          >&nbsp;&nbsp;&nbsp;read full article</a
        >
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
    const moment = require("moment");
    let today = moment().format("YYYY-MM-DD");
    let lastDay = moment()
      .subtract(1, "d")
      .format("YYYY-MM-DD");

    let lastWeek = moment()
      .subtract(7, "d")
      .format("YYYY-MM-DD");
    let lastMonth = moment()
      .subtract(30, "d")
      .format("YYYY-MM-DD");

    return {
      loading: true,
      searchQuery: "covid-19",
      sorter: lastWeek,
      message: "This is a news component for us to start with!",
      articles: [],
      today,
      lastDay,
      lastWeek,
      lastMonth,
    };
  },
  created: function() {
    this.getArticles(this.searchQuery, this.sorter);
  },
  computed: {
    // a computed getter
  },
  methods: {
    getArticles: async function(query, fromDate) {
      if (Boolean(fromDate) === false) {
        fromDate = this.lastDay;
      }
      let serverResponse;

      // construct the url with the query and to / from dates
      const searchUrl = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&to=${this.today}`;

      // check localstorage first
      if (Boolean(localStorage.getItem(searchUrl)) === true) {
        console.log(`found news search for ${searchUrl} in local storage`);
        serverResponse = JSON.parse(localStorage.getItem(searchUrl));
        this.articles = serverResponse.articles;
        this.loading = false;

        return serverResponse;
      }

      let headers = {
        Authorization: process.env.VUE_APP_NEWSAPIKEY,
        'Access-Control-Allow-Origin': '*'
      };
      this.loading = true;

      serverResponse = await fetch(searchUrl, {
        method: "GET",
        headers,
      })
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
        .catch((err) => console.log(err));

      console.log(serverResponse);

      // save to state
      this.loading = false;
      this.articles = serverResponse.articles;
      // save to local storage
      localStorage.setItem(searchUrl, JSON.stringify(serverResponse));
      return serverResponse;
    },
    sortArticles: async function(sorter) {
      this.loading = true;
      this.sorter = sorter;
      console.log(`re-fetching articles since ${sorter}`);
      this.getArticles(this.searchQuery, sorter);
    },
    fireSearch: function() {
      this.loading = true;
      console.log(`searching for ${this.searchQuery}`);
      this.getArticles(this.searchQuery, this.sorter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
.btn {
  margin: 4px;
}
a {
  font-weight: bolder;
}
.spinner-border {
  font-size: 12pt;
  margin: 0 10px;
}
#news-component {
  /* width: 100%; */
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.search-input {
  /* width: 100%; */
  border-radius: 4px;
  margin: 10px 0;
  border: 1px solid rgb(170, 170, 170);
}
.news-article {
  background-color: white;
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 2px;
  /* border: 1px solid rgb(207, 206, 206); */
}
.article-image {
  /* width: 100px; */
  height: 100px;
  border-radius: 10px;
}
.article-title {
  color: black;
  font-weight: bolder;
  font-size: 14pt;
}
.article-author {
  color: rgb(63, 63, 63);
  font-weight: bolder;
  font-size: 12pt;
}
.article-description {
  color: black;
  font-size: 12pt;
}
</style>
