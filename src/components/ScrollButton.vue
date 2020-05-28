<template>
  <div
    class="scroll-button-component"
  >
    <a v-bind:href="target">
      <button class="btn btn-sm" :class="customClass ? customClass: 'btn-primary'">
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
    customClass: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-button-component {
  margin: 4px;
}
.btn-secondary {
  margin: 4px 0 4px 0;
  font-weight: bolder;
  width: 140px;
}
</style>
