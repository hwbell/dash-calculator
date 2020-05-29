<template>
  <div
    class="sorter-button-component"
  >
      <button @click="sort(sorter)" class="btn btn-sm btn-outline-primary">
        {{ text }}
      </button>
  </div>
</template>

<script>
export default {
  name: "SorterButton",
  props: {
    text: String,
    sorter: String,
    sort: Function
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-button-component {
  margin: 4px;
}
.btn-sm {
  margin: 4px;
  font-weight: bolder;
  /* width: 140px; */
}
</style>
