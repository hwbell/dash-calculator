<template>
  <div class="article-component shadow-card">
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
      <span class="article-author" v-if="article.author"
        >{{ article.author }}, </span
      ><span v-if="article.source.name"> from {{ article.source.name }}</span>
    </p>
    <p v-if="article.content" class="article-description">
      <span>{{
        article.content.slice(
          0,
          -(article.content.length - article.content.indexOf("["))
        )
      }}</span>
    </p>
    <a v-bind:href="article.url" target="_blank" alt="article link"
      >&nbsp;&nbsp;&nbsp;read full article</a
    >
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-component {
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
