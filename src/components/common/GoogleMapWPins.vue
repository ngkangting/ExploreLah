<template>
    <GoogleMap :api-key="apiKey" style="height:500px; background-color: azure;" :center="center" :zoom="15">
        <Marker v-for="pos in pinsInfo" :options="{ position: {lat:pos[1], lng:pos[2]} }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" />
        <!-- <CustomMarker v-for="(pos, index) in markers" :options="{ position: pos}">
            <img src="../../public/ico/food.ico" width="32" height="32" style="margin-top: 8px" />
        </CustomMarker> -->
    </GoogleMap> 
    
</template>
  
<script>
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";

export default {
name: "GoogleMapWPins",
props:{
    pinsInfo:null,
},
components:{
    GoogleMap,
    Marker,
    CustomMarker,
},
data() {
    return {
        apiKey: 'AIzaSyAWD7RGn64dPl6DvyAQ4GciUGSWmsiF2Ys',
        center: { lat: 1.29027, lng: 103.851959 },

    };
},
computed:{

},
created(){
    console.log("Created");
    console.log(this.pinsInfo)
},

};
</script>

<style>

</style>