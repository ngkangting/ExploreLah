import { defineStore } from "pinia";
import axios from "axios";

export const useItineraryStore = defineStore("itinerary", {
  state: () => ({
    foodReco: null,
    itineraryList: null,
    itineraryInput: null,
    isLoading: true,
    details: null,
  }),
  actions: {
    async fetchItinerary(formInfo) {
      // const path = "http://127.0.0.1:5000"; // LocalHost Path
      const path = "https://wad2-explorelah.as.r.appspot.com/"; // LocalHost Path
      axios
        .post(path, formInfo)
        .then((res) => {
          // console.log(res.data);
          this.itineraryList = JSON.parse(res.data.itinerary);
          this.foodReco = res.data.foodReco;
          this.itineraryInput = res.data["user"];
          this.details = res.data["details"];
          //Setting to localstorage
          // localStorage.setItem("itineraryList",JSON.parse(res.data.itinerary));
          // localStorage.setItem("itineraryInput",res.data["user"]);
          // localStorage.setItem("foodReco", res.data.foodReco);

          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = true;
        });
    },
    setItinerary(dayData) {
      //Takes in a json dump and sets the info
      this.itineraryList = JSON.parse(dayData["itinerary"]);
      this.foodReco = JSON.parse(dayData["food"]);
      this.itineraryInput = JSON.parse(dayData["input"]);
      this.details = JSON.parse(dayData["details"]);
      this.name = dayData["name"];
    },
  },
});
