<template>
  <div id="time-display-component">
    <div class="space-all-row" id="current-time">
      <div class="app-title left-all-row">
        <img src="../assets/images/vuejs.png" alt="Vuejs icon" id="vue-image" />
        <strong>uejs Dashboard</strong>
      </div>

      <div
        id="weather"
        class="center-all-row"
        v-if="currentTemp"
      >
        <div>Boston, MA&nbsp;<strong style="color: rgb(55, 0, 255); font-size: 15pt">{{currentTemp}}&deg;</strong></div>
        <div class="center-all-row">
          <i
            id="weather-icon"
            :class="weatherIcon"
            v-bind:style="{ color: weatherColor }"
          />
        </div>
        <p style="padding-top: 10px">
          <strong>{{ highTemp }}&deg;</strong> | {{ lowTemp }}&deg;
        </p>

      </div>

      <div>
        <span class="time-date">
          {{ timeDate }}, <span class="time-hours">{{ timeHours }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeDisplay",
  props: {
    timeDate: String,
    timeHours: String,
  },
  data: function() {
    return {
      // need function to return an icon specifier, given the code from darksky
      // icon options from the dark sky api:
      // clear-day, clear-night, partly-cloudy-day, partly-cloudy-night, rain, snow, sleet, wind, fog, cloudy
      // return the class of the font-awesome icon to be used
      weather: null,

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
        lat: 42.3601,
        long: -71.0589,
      },
      currentTemp: null,
      currentSummary: null,
    };
  },
  methods: {
    getWeatherIcon(iconId) {
      return this.weatherImagesList[iconId].icon;
    },
    getWeatherColor(iconId) {
      return this.weatherImagesList[iconId].color;
    },
  },
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
#weather {
  padding: 0 10px;
  border-radius: 6px;
  position: relative;
}
#weather-icon {
  font-size: 24pt;
  margin: 0 20px 0 20px;
}

</style>
