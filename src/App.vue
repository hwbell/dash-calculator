<template>
  <div id="app">
    <div id="content">
      <div class="space-all-row fixed-top">
        <div id="time-display">
          <TimeDisplay v-bind:showTime="true" />
        </div>
      </div>

      <div class="row" style="margin-top: 60px">

        <div class="col-sm-12 col-md-8">
          <News />
        </div>
        <div id="tools" class="col-sm-12 col-md-4 shadow-card">
          <TimeConverter />
          <div class=""><Calculator msg="Calculator" /></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import TimeDisplay from "./components/TimeDisplay.vue";
import TimeConverter from "./components/TimeConverter.vue";
import News from "./components/News.vue";

export default {
  name: "App",
  components: {
    Calculator,
    TimeDisplay,
    TimeConverter,
    News,
  },
};
</script>

<style>
#app {
  width: 100%;
  /* background-color: whitesmoke; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#content {
  /* margin: 40px; */
  padding: 40px;
  min-height: 100vh;

  border-radius: 6px;
  /* background-color:rgba(255, 255, 255, 0.719); */
  /* box-shadow: -2px 2px 12px 0px rgba(71, 70, 71, 0.514); */
}
#time-display {
  width: 100%;
  margin: 20px;
}
.fixed-top {
  /* padding: 10px 0; */
  background-color: white;
  box-shadow: -2px 2px 12px 0px #007bff;
}
#tools {
  margin-top: 24px;
  border-radius: 2px;
  height: 100%;
}
</style>
