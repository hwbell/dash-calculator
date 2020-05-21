<template>
  <div id="app">
    <div id="content">
      <div class="space-all-row">
        <div id="time-display">
          <TimeDisplay v-bind:showTime="true" />
        </div>
      </div>
      <div class="row">
        <div class="col"><Calculator msg="Calculator" /></div>
        <!-- <div class="col"><Calculator msg="Calculator" /></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import TimeDisplay from "./components/TimeDisplay.vue";

export default {
  name: "App",
  components: {
    Calculator,
    TimeDisplay,
  },
};
</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  margin: 40px;
  /* padding: 40px; */
  min-height: 100vh;

  border-radius: 6px;
  background-color:rgba(255, 255, 255, 0.719);
  box-shadow: -2px 2px 12px 0px rgba(71, 70, 71, 0.514);
}
#time-display {
  width: 100%;
  margin: 20px;
}
</style>
