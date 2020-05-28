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
  height: 50px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 4px;
  border: 2px solid rgb(224, 224, 224);
  background: white;
}
.answer-text {
  color: blue;
  font-weight: bolder;
}

.expression-text {
  transition: all 0.3s ease;
}
.evaluated {
  transform: translateY(-10px);
}
.alert-text {
  /* font-weight: bolder; */
  transform: translateY(-6px);
  color: red; 
}

</style>
