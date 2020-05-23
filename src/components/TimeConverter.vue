<template>
  <div class="time-converter-component top-left-all-col">
    <div id="current-unix-time" class="top-left-all-row row">
      <div class="col-sm-4" style="padding: 0">
        <strong>Unix Timestamp:</strong>
      </div>

      <input class="unix-time-input col-sm-8" type="text" :value="unixTime" />
    </div>
    <div id="current-verbal-time" class="top-left-all-row row">
      <p class="col-sm-4" style="font-size: 16pt;">
        <strong>Regular Time & Date:</strong>
      </p>
      <div class="col-sm-8">
        <div class="row" style="margin-right: 20px">
          <div
            v-for="(prop, ind) in this.regularTime"
            v-bind:key="ind"
            class="time-input-holder col-xs-6 col-sm-4 col-md-2 col-lg-2"
          >
            <p>{{ prop.text }}</p>
            <input
              class="regular-time-input"
              type="text"
              :name="prop.text"
              v-model="prop.val"
              @input="handleRegularTimeChange(prop)"
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
    handleRegularTimeChange: function(prop) {
      // console.log(prop);
      this.regularTime.forEach((obj, i) => {
        if (this.regularTime[i].text === prop.text) {
          this.regularTime[i].val = prop.val;
          return console.log(this.regularTime);
        }
      })
    },
    resetTime: function() {
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
  width: 100%;
  margin: 20px 0;
  font-size: 16pt;
  color: white;
}
#current-verbal-time {
  width: 100%;
  /* margin: 20px; */
}
.time-input-holder {
  font-size: 14pt;
}
.regular-time-input {
  border-radius: 4px;
  width: 100px;
}
.unix-time-input {
  border-radius: 12px;
  max-width: 200px;
}
</style>
