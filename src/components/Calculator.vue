<template>
  <div class="calculator">
    <h3>{{ msg }}</h3>

    <ExpressionWindow expression='hellow!'/>

    <div class="calculator-buttons">
      <div class="" v-for="(buttonrow, ind) in buttons" v-bind:key="ind">
        <button
          v-for="(button, ind) in buttonrow"
          v-bind:key="ind"
          class="calculator-button btn"
          :class="!!button.class ? 'btn-'+button.class : 'btn-light'"
        >
          {{ button.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import ExpressionWindow from './ExpressionWindow';

export default {
  name: "Calculator",
  props: {
    msg: String,
  },
  data: function() {
    return {
      buttons: [
        [
          {
            text: "(",
            class: "secondary",
          },
          {
            text: ")",
            class: "secondary",
          },
          {
            text: "%",
            class: "secondary",
          },
          {
            text: "AC",
            class: "secondary",
          },
        ],
        [
          {
            text: "7",
          },
          {
            text: "8",
          },
          {
            text: "9",
          },
          {
            text: "/",
            class: "secondary",
          },
        ],
        [
          {
            text: "4",
          },
          {
            text: "5",
          },
          {
            text: "6",
          },
          {
            text: "X",
            class: "secondary",
          },
        ],
        [
          {
            text: "1",
          },
          {
            text: "2",
          },
          {
            text: "3",
          },
          {
            text: "-",
            class: "secondary",
          },
        ],
        [
          {
            text: "0",
          },
          {
            text: ".",
          },
          {
            text: "=",
            class: "primary",
          },
          {
            text: "+",
            class: "secondary",
          },
        ],
      ],
    };
  },
  components: {ExpressionWindow}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
.calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.calculator-buttons {
  width: 80%;
}
.calculator-button {
  padding: 10px;
  width: 100px;
  border-radius: 0;
  border: 1px solid rgb(255, 255, 255);
}
</style>
