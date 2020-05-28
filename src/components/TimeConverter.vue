<template>
  <div id="time-converter-component" class="top-left-all-col">
    <h4>Time Converter</h4>

    <div id="current-unix-time" class="space-all-row row">
      <div class="left-all-col">
        <p style="margin: 0"><strong>Unix Timestamp:</strong></p>
        <input class="unix-time-input" type="text" v-model="unixTime" />
        <button class="btn btn-sm btn-primary" @click="syncTime(1)">
          sync time & date
        </button>
      </div>
    </div>

    <hr />
    <div id="current-verbal-time" class="space-all-row row">
      <div class="left-all-col">
        <p style="margin: 0"><strong>Time & Date:</strong></p>
        <div class="row" style="margin-right: 20px">
          <div
            v-for="(prop, ind) in this.regularTime"
            v-bind:key="ind"
            class="time-input-holder col-xs-12 col-sm-4 col-md-6 col-lg-4"
          >
            <p style="margin: 0; font-size: 10pt">
              <strong>{{ prop.text }}</strong>
            </p>
            <input
              class="regular-time-input"
              type="text"
              :name="prop.text"
              v-model="prop.val"
              @input="handleRegularTimeChange(prop)"
            />
          </div>
        </div>
        <span id="calculator"></span>

        <button class="btn btn-sm btn-primary" @click="syncTime(0)">
          sync unix timestamp
        </button>
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
      });
    },
    syncTime: function(bool) {
      const moment = require("moment");
      // use the bool switch to determine which direction the translation is going,
      // unix --> regular happens when bool === 1
      // regular --> unix happens when bool === 0

      // from unix entry
      if (bool) {
        // construct the moment from the entered unix time, corrected to ms by * 1000
        let today = moment(this.unixTime * 1000);

        // assign the input values from the moment
        this.regularTime = [
          {
            text: "Month",
            val: today.month() + 1,
          },
          {
            text: "Day",
            val: today.date(),
          },
          {
            text: "Year",
            val: today.year(),
          },
          {
            text: "Hour",
            val: today.hour(),
          },
          {
            text: "Minute",
            val: today.minute(),
          },
          {
            text: "Second",
            val: today.second(),
          },
        ];
      }
      // from unix entries
      else {
        // moment can accept an array of values in this way to create a new date
        // [year, month, day, hour, minute, second, millisecond]
        // drop the millisecond

        // there's not a great way to sort this
        let momentArray = [
          // year
          this.regularTime[2].val,
          // month
          this.regularTime[0].val - 1,
          // etc
          this.regularTime[1].val,
          this.regularTime[3].val,
          this.regularTime[4].val,
          this.regularTime[5].val,
        ];
        // construct the moment from the input vals
        let dayEntered = moment(momentArray);
        this.unixTime = dayEntered.unix();
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
.btn {
  margin: 10px 0;
}
#time-converter-component {
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid rgb(207, 206, 206);
  border-radius: 2px;
}
#current-unix-time {
  /* width: 100%; */
  margin: 10px 0;
  /* font-size: 16pt; */
}
#current-verbal-time {
  /* width: 100%; */
  /* margin: 20px; */
  margin: 10px 0;
}
.time-input-holder {
  /* font-size: 14pt; */
}
.regular-time-input {
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid rgb(170, 170, 170);
  width: 75px;
}
.unix-time-input {
  border-radius: 4px;
  margin: 10px 0;
  border: 1px solid rgb(170, 170, 170);
  /* max-width: 200px; */
}
</style>
