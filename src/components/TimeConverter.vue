<template>
  <div class="time-converter-component left-all-col">
    <div id="current-unix-time">
      <span><strong>Unix Timestamp:</strong> <input type="text" :value="unixTime"/></span>
    </div>
    <div id="current-verbal-time left-all-row">
      <p style="font-size: 16pt;"><strong>Regular Time & Date:</strong></p>
      <div class="">
        <div class="row">
          <div
            v-for="(prop, ind) in this.regularTime"
            v-bind:key="ind"
            class="time-input-holder col-xs-6 col-sm-4 col-md-2 col-lg-2"
          >
            <p>{{ prop.text }}</p>
            <input
              class="time-input"
              type="text"
              :name="prop.text"
              :value="prop.val"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ExpressionWindow from './ExpressionWindow';

export default {
  name: "TimeConverter",
  // props: {
  // msg: String,
  // },
  // components: {ExpressionWindow},
  created: function() {
    const moment = require("moment");

    this.unixTime = moment().unix();
    this.regularTime = [
      {
        text: "Month",
        val: moment().format("M"),
      },
      {
        text: "Day",
        val: moment().format("D"),
      },
      {
        text: "Year",
        val: moment().format("YYYY"),
      },
      {
        text: "Hour",
        val: moment().format("hh"),
      },
      {
        text: "Minute",
        val: moment().format("mm"),
      },
      {
        text: "Second",
        val: moment().format("ss"),
      },
    ];
    setInterval(() => {
      // console.log("interval");
      this.timeDate = moment().format("MMMM Do YYYY");
      this.timeHours = moment().format("h:mm a");
    }, 1000);
  },
  data: function() {
    return {
      message: "This is a TimeConverter component for us to start with!",
      regularTime: [],
      unixTime: "",
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    regularTimeKeys: function() {
      return Object.keys(this.regularTime);
    },
  },
  methods: {
    greet: function() {
      // `this` inside methods point to the Vue instance
      this.message = "Nice to meet you!";
    },
    resetTime: function() {
      const moment = require("moment");
      this.unixTime = moment().unix();
      this.regularTime = {
        year: {
          text: "Year",
          val: moment().format("YYYY"),
        },
        month: {
          text: "Month",
          val: moment().format("mmmm"),
        },
        day: {
          text: "",
          val: moment().format("dddd"),
        },
        hour: {
          text: "",
          val: moment().format("hh"),
        },
        minute: {
          text: "",
          val: moment().format("mm"),
        },
        second: {
          text: "",
          val: moment().format("ss"),
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
.time-converter-component {
  min-width: 400px;
  color: white;
}
#current-unix-time {
  margin: 20px 0;
  font-size: 16pt;
  color: white;
}
#current-verbal-time {
  width: 100%;
}
.time-input-holder {
  font-size: 14pt;
}
.time-input {
  border-radius: 4px;
  width: 100px;
  /* min-width: 100px; */
}
</style>
