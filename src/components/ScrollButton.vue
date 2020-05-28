<template>
  <div class="scroll-button-component">
    <a v-bind:href="target">
      <button class="btn btn-sm btn-light">
        {{ text }}
      </button>
    </a>
  </div>
</template>

<script>


export default {
  name: "ScrollButton",
  props: {
    target: String,
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-button-component {
  margin: 4px;
}
</style>
