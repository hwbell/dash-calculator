<template>
  <div id="news-component">
    <div v-if="articles != null" class="news-articles-holder left-all-col">
      <div style="width: 100%">
        <!-- title and sorters -->
        <div class="left-all-row" style="width: 100%">
          <p style="margin: 0px 10px 0 0">
            <strong
              >Top News since
              <strong style="color: #007bff">{{ sorter }}</strong>
            </strong>
          </p>

          <SorterButton
            v-for="(button, ind) in sorterButtons"
            v-bind:key="ind"
            :sort="sortArticles"
            :text="button.text"
            :sorter="button.sorter"
          />
        </div>

        <!-- search input -->
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
          <div
            v-if="loading"
            class="spinner-border text-primary"
            role="status"
          ></div>
        </div>
      </div>

      <!-- the articles -->
      <Article
        v-for="(article, ind) in articles"
        v-bind:key="ind"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import SorterButton from "./SorterButton";
import Article from "./Article";

export default {
  name: "News",
  // props: {
  // msg: String,
  // },
  components: { SorterButton, Article },
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
      articleType: "everything",
      sorter: lastWeek,
      message: "This is a news component for us to start with!",
      articles: [],
      today,
      lastDay,
      lastWeek,
      lastMonth,
      sorterButtons: [
        {
          sorter: lastDay,
          text: "last day",
        },
        {
          sorter: lastWeek,
          text: "last week",
        },
        {
          sorter: lastMonth,
          text: "last month",
        },
      ],
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
      const searchUrl = `https://newsapi.org/v2/${this.articleType}?q=${query}&from=${fromDate}&to=${this.today}`;

      // console.log(serverResponse)
      // check localstorage first
      if (Boolean(localStorage.getItem(searchUrl)) === true) {
        console.log(`found news search for ${searchUrl} in local storage`);
        serverResponse = JSON.parse(localStorage.getItem(searchUrl));
        this.articles = serverResponse.articles;
        this.loading = false;

        return serverResponse;
      }

      this.loading = true;

      // now send off to our backend to route to the actual newsapi.org api
      let info = { url: searchUrl };
      serverResponse = await fetch(process.env.VUE_APP_NEWS_PROXY_SERVER, {
        method: "POST",
        body: JSON.stringify(info),
        headers: { "Content-Type": "application/json" }, // this is important here! express does not automate this with app.use(express.json)
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
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
      console.log(sorter);
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
</style>
