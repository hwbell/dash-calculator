<template>
  <div id="calculator-component">
    <h4>Calculator</h4>

    <ExpressionWindow
      v-bind:expression="expressionDisplay"
      v-bind:answer="currentAnswer"
      v-bind:alert="alertSwitch"
    />

    <div class="calculator-buttons">
      <div
        v-for="(buttonrow, rowInd) in buttons"
        v-bind:key="rowInd + 1"
        :id="`calculator-button-row-${rowInd + 1}`"
      >
        <button
          v-for="(button, buttonInd) in buttonrow"
          v-bind:key="buttonInd"
          class="calculator-button btn"
          :class="!!button.class ? 'btn-' + button.class : 'btn-light'"
          :id="`calculator-button-${rowInd}-${buttonInd}`"
          v-on:click="modifyExpression(button)"
        >
          {{ button.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ExpressionWindow from "./ExpressionWindow";

export default {
  name: "Calculator",
  props: {
    msg: String,
  },
  components: { ExpressionWindow },
  data: function() {
    return {
      // the currentExpressionText and currentExpressionMath below will generally look the same, but must be held differently for user readability(text) and eval() usability for computing the answer (math).
      currentExpressionText: [],
      currentExpressionMath: [],
      // miniExpression: "",
      currentAnswer: null,
      // the alertSwitch is to turn the text red on an invalid expression.
      alertSwitch: false,
      buttons: [
        [
          {
            text: " (",
            math: " (",
            class: "secondary",
          },
          {
            text: ") ",
            math: ") ",
            class: "secondary",
          },
          {
            text: " % ",
            math: "/100",
            class: "secondary",
          },
          {
            text: "CE",
            class: "secondary",
          },
        ],
        [
          {
            text: "7",
            math: "7",
          },
          {
            text: "8",
            math: "8",
          },
          {
            text: "9",
            math: "9",
          },
          {
            text: " / ",
            math: " / ",
            class: "secondary",
          },
        ],
        [
          {
            text: "4",
            math: "4",
          },
          {
            text: "5",
            math: "5",
          },
          {
            text: "6",
            math: "6",
          },
          {
            text: " x ",
            math: " * ",
            class: "secondary",
          },
        ],
        [
          {
            text: "1",
            math: "1",
          },
          {
            text: "2",
            math: "2",
          },
          {
            text: "3",
            math: "3",
          },
          {
            text: " - ",
            math: " - ",
            class: "secondary",
          },
        ],
        [
          {
            text: "0",
            math: "0",
          },
          {
            text: ".",
            math: ".",
          },
          {
            text: "=",
            class: "primary",
          },
          {
            text: " + ",
            math: " + ",
            class: "secondary",
          },
        ],
      ],
    };
  },
  methods: {
    modifyExpression: function(button) {
      // `this` inside methods point to the Vue instance

      if (button.text === "=") {
        // evaluate
        this.evaluateExpression();
      } else if (button.text === "CE") {
        // split by spaces to properly chop the last button's contribution
        this.currentExpressionText.pop();
        this.currentExpressionMath.pop();
        this.currentAnswer = null;
      } else {
        // add a space for chopping above
        this.currentExpressionText.push(button.text);
        this.currentExpressionMath.push(button.math);
        if (this.currentAnswer != null) {
          this.currentAnswer = null;
        }
      }
    },
    evaluateExpression: function() {
      try {
        let expressionString = this.currentExpressionMath.join("");
        this.currentAnswer = eval(expressionString);
      } catch (e) {
        console.log(e);
        this.alertSwitch = true;
        setTimeout(() => {
          this.alertSwitch = false;
        }, 300);
      }
    },
  },
  computed: {
    // a computed getter
    expressionDisplay: function() {
      // `this` points to the vm instance
      if (this.currentExpressionText.length === 0) {
        return "0";
      } else {
        return this.currentExpressionText.join("");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: rgb(0, 123, 255);
}
#calculator-component {
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid rgb(207, 206, 206);
  border-radius: 2px;
}
.calculator-buttons {
  width: 100%;
}
.calculator-button {
  padding: 10px;
  width: 25%;
  border-radius: 0;
  border: 1px solid rgb(255, 255, 255);
}
</style>
