<template>
  <div class="base-component">
    {{ message }}
  </div>
</template>

<script>

// import ExpressionWindow from './ExpressionWindow';

export default {
  name: "Base",
  // props: {
    // msg: String,
  // },
  // components: {ExpressionWindow},
  data: function() {
    return {
      message: 'This is a base component for us to start with!',
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    greet: function () {
      // `this` inside methods point to the Vue instance
      this.message = "Nice to meet you!";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
.base-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
