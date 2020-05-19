<template>
  <div class="">
    {{expression}}    
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    expression: String,
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.window {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid whitesmoke;

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
