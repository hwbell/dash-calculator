<template>
  <div class="weather-component left-all-row" v-if="currentTemp">
    <div style="font-size: 16pt">
      <span>
        Boston, MA
        <br>
        <strong style="float: right; color: rgb(55, 0, 255);">
          {{ currentTemp }}&deg;
        </strong>
      </span>
    </div>
    <div class="center-all-col" style="margin-left: 20px">
      <i
        id="weather-icon"
        :class="weatherIcon"
        v-bind:style="{ color: weatherColor }"
      />
      <span style="font-size: 10pt">{{currentSummary}}</span>
    </div>
    <p style="padding-top: 10px; margin-left: 20px">
      <strong style="font-size: 13pt">{{ highTemp }}&deg;</strong><br>
      <span style="font-size: 11pt">{{ lowTemp }}</span
      >&deg;
    </p>
  </div>
</template>

<script>
// import ExpressionWindow from './ExpressionWindow';

export default {
  name: "Weather",
  // props: {
  // msg: String,
  // },
  // components: {ExpressionWindow},
  created: async function() {
    // get the weather for boston ma. Would ask for geolocation but people looking at this will be in Boston too, so ?
    // proxy the darksky fetch through our node.js backend
    const { lat, long } = this.coords;
    const proxyUrl = `${process.env.VUE_APP_WEATHER_PROXY_SERVER}${lat}/${long}`;
    let serverResponse = await fetch(proxyUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" }, // this is important here! express does not automate this with app.use(express.json)
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));

    console.log(serverResponse);

    // save to state
    this.loadingWeather = false;
    this.weather = serverResponse;
    this.currentTemp = Math.round(serverResponse.currently.apparentTemperature);
    this.currentSummary = serverResponse.currently.summary;
    this.weatherIcon = this.getWeatherIcon(serverResponse.currently.icon);
    this.weatherColor = this.getWeatherColor(serverResponse.currently.icon);
    this.highTemp = Math.round(
      serverResponse.daily.data[0].apparentTemperatureHigh
    );
    this.lowTemp = Math.round(
      serverResponse.daily.data[0].apparentTemperatureLow
    );

    // save to local storage
    localStorage.setItem(proxyUrl, JSON.stringify(serverResponse));
    return serverResponse;
  },
  methods: {
    getWeatherIcon(iconId) {
      return this.weatherImagesList[iconId].icon;
    },
    getWeatherColor(iconId) {
      return this.weatherImagesList[iconId].color;
    },
  },
  data: function() {
    return {
      // need function to return an icon specifier, given the code from darksky
      // icon options from the dark sky api:
      // clear-day, clear-night, partly-cloudy-day, partly-cloudy-night, rain, snow, sleet, wind, fog, cloudy
      // return the class of the font-awesome icon to be used
      weather: null,

      // object list for translation of icon code from darksky into fa classes and color coding
      weatherImagesList: {
        "clear-day": {
          icon: "fas fa-sun",
          color: "yellow",
        },
        "clear-night": {
          icon: "fas fa-star-and-crescent",
          color: "darkblue",
        },
        "partly-cloudy-day": {
          icon: "fas fa-cloud-sun",
          color: "lightgrey",
        },
        "partly-cloudy-night": {
          icon: "fas fa-cloud-moon",
          color: "rgb(90, 106, 151)",
        },
        cloudy: {
          icon: "fas fa-cloud",
          color: "grey",
        },
        fog: {
          icon: "fas fa-smog",
          color: "lightgrey",
        },
        rain: {
          icon: "fas fa-cloud-rain",
          color: "lightblue",
        },
        wind: {
          icon: "fas fa-wind",
          color: "lightgrey",
        },
        sleet: {
          icon: "fas fa-cloud-showers-heavy",
          color: "grey",
        },
        snow: {
          icon: "fas fa-snowflake",
          color: "rgb(94, 173, 199)",
        },
      },
      coords: {
        lat: 42.3601, // coords for Boston, MA. I think everyone looking will be from there.
        long: -71.0589,
      },
      currentTemp: null,
      currentSummary: null,
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-component {
  padding: 0 10px;
  border-radius: 6px;
  position: relative;
}
#weather-icon {
  font-size: 24pt;
  margin: 0 20px 0 20px;
}
</style>
