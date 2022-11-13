<template>
  <GoogleMap
    :api-key="apiKey"
    style="height: 500px; background-color: azure"
    :center="center"
    :zoom="15"
  >
    <!-- <Marker v-for="pos in pinsInfo" :options="{ position: {lat:pos[1], lng:pos[2]} }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" /> -->
    <CustomMarker
      v-for="(pos, idx) in pinsInfo"
      :options="{ position: { lat: pos[1], lng: pos[2] } }"
    >
      <!-- <img src="../../assets/img/pins/bluepin1.png" width="64" height="64" style="margin-top: 0px" /> -->
      <img
        :src="
          '../../src/assets/img/pins/bluepin' + (idx + 1).toString() + '.png'
        "
        width="64"
        height="64"
        style="margin-top: 0px"
      />
    </CustomMarker>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";

export default {
  name: "GoogleMapWPins",
  props: {
    pinsInfo: null,
  },
  components: {
    GoogleMap,
    Marker,
    CustomMarker,
  },
  data() {
    return {
      apiKey: "AIzaSyAWD7RGn64dPl6DvyAQ4GciUGSWmsiF2Ys",
      center: { lat: 1.29027, lng: 103.851959 },
      count: 1,
    };
  },
  computed: {},
  created() {
    console.log(this.pinsInfo);
  },
};
</script>

<style></style>
