<template>
  <div id="time-display-component">
    <div class="space-all-row" id="current-time">
      <div class="app-title left-all-row">
        <img
          src="../assets/images/vuejs.png"
          alt="Vuejs icon"
          id="vue-image"
        />
        <strong>uejs Dashboard</strong>
      </div>
      <div>
        <span class="time-date">
          {{ timeDate }}, <span class="time-hours">{{ timeHours }}</span>
        </span>
        <!-- <span class="time-date">
          Unix Time: <span class="time-hours">{{ unixTime }}</span>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ExpressionWindow from './ExpressionWindow';

export default {
  name: "TimeDisplay",
  // props: {
  //   showTime: Boolean,
  // },
  created: function() {
    const moment = require("moment");

    this.timeDate = moment().format("MMMM Do YYYY");
    this.timeHours = moment().format("h:mm a");
    this.unixTime = moment().unix();

    setInterval(() => {
      this.timeDate = moment().format("MMMM Do YYYY");
      this.timeHours = moment().format("h:mm a");
      this.unixTime = moment().unix();

    }, 60000);

    // setInterval(() => {
      // this.unixTime = moment().unix();
    // }, 1000)
  },
  // components: {ExpressionWindow},
  data: function() {
    return {
      timeDate: "",
      timeHours: "",
      unixTime: "",
      message: "This is a TimeDisplay component for us to start with!",
    };
  },
  // computed: {
  //   // a computed getter
  //   reversedMessage: function () {
  //     // `this` points to the vm instance
  //     return this.message.split('').reverse().join('')
  //   },
  // },
  // methods: {
  //   greet: function () {
  //     // `this` inside methods point to the Vue instance
  //     this.message = "Nice to meet you!";
  //   }
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#time-display-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#vue-image {
  width: 30px;
}
.app-title {
  font-size: 18pt;
  margin-left: 40px;
  /* color: white; */
}
.time-hours {
  color: rgb(55, 0, 255);
}
#current-time {
  width: 100%;
  font-size: 14pt;
}
</style>
