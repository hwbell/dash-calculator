<template>
  <div class="expression-window">
    <div class="expression-text" :class="alert && 'alert-text'">{{expression}}&nbsp;</div>
    <div class="answer-text" v-if="answer">{{` = ${answer}`}}</div>   

  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    expression: String,
    answer: Number,
    alert: Boolean
  },

 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.expression-window {
  height: 60px;
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 4px;
  border: 2px solid grey;
}
.answer-text {
  color: blue;
  font-weight: bolder;
}

.expression-text {
  transition: all 0.3s ease;
}
.alert-text {
  /* font-weight: bolder; */
  transform: translateY(-6px);
  color: red; 
}

/* h3 {
  margin: 40px 0 0;
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
  border: 1px solid rgb(255, 255, 255); */
/* } */
</style>
