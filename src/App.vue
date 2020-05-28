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
          <span id="time-converter"></span>
          <p style="margin: 10px 0">
            <strong>
              Your Dashboard Tools
            </strong>
          </p>

          <div class="left-all-row">
            <ScrollButton
              v-for="(button, ind) in navButtons"
              v-bind:key="ind"
              v-bind:target="button.target"
              v-bind:text="button.text"
              customClass="btn-outline-secondary"
            />
          </div>

          <div class=""><TimeConverter /></div>

          <div class=""><Calculator msg="Calculator" /></div>
        </div>
      </div>
    </div>

    <div class="center-all-row fixed-bottom scroll-to-top">
      <ScrollButton target="#app" text="back to top" customClass="btn-secondary"/>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import TimeDisplay from "./components/TimeDisplay.vue";
import TimeConverter from "./components/TimeConverter.vue";
import News from "./components/News.vue";
import ScrollButton from "./components/ScrollButton";

export default {
  name: "App",
  components: {
    Calculator,
    TimeDisplay,
    TimeConverter,
    News,
    ScrollButton,
  },
  data: function() {
    return {
      navButtons: [
        {
          text: "calculator",
          target: "#calculator",
        },
        {
          text: "time converter",
          target: "#time-converter",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100%;
  /* background-color: whitesmoke; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100vh;
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
  box-shadow: -2px 2px 12px 0px #007e4e;
}
#tools {
  margin-top: 24px;
  border-radius: 2px;
  height: 100%;
}
/* for the abs-positioned button near the bottom of news articles */
.scroll-to-top {
  padding: 20px;
}
</style>
