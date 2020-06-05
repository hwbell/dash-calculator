<template>
  <div id="time-display-component">
    <div class="space-all-row row" id="current-time">
      <div class="app-title left-all-row col-sm-6">
        <img src="../assets/images/vuejs.png" alt="Vuejs icon" id="vue-image" />
        <strong>uejs Dashboard</strong>
      </div>
      <div>
        <span class="time-date col-sm-6">
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
  // data: function() {
  //   return {
  //   };
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
  /* margin-left: 40px; */
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
