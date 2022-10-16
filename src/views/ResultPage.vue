<template>
    <h1>Result Page</h1>


</template>
  
  <script>
  import {useItineraryStore} from "@/stores/itinerary";

  export default {
    name: "ResultPage",
    components: {
    },
    data() {
      return {

      };
    },
    setup() {
      const itineraryStore = useItineraryStore();
      return {itineraryStore};
    },
    methods: {
      
    },
    created(){
      this.itineraryStore.fetchItinerary();
    }
  };
  </script>
  
  <style lang="scss"></style>
  