import {defineStore} from "pinia";
import axios from "axios";
import {watch} from "vue";

export const useItineraryStore = defineStore("itinerary", {

    state: () => ({
        foodReco:null,
        itineraryList:null,
        itineraryInput:null
    }),
    actions: {
        async fetchItinerary(formInfo) {
                console.log(formInfo);
                // const path = "http://127.0.0.1:5000"; // LocalHost Path
                const path = "https://wad2-explorelah.as.r.appspot.com/"; // LocalHost Path
                axios.post(path, formInfo)
                .then((res) => {
                    console.log(res.data);
                    this.itineraryList = JSON.parse(res.data.itinerary);
                    this.foodReco = res.data.foodReco;
                    this.itineraryInput = res.data["user"];
                    //Setting to localstorage
                    localStorage.setItem("itineraryList",JSON.parse(res.data.itinerary));
                    localStorage.setItem("itineraryInput",res.data["user"]);
                    localStorage.setItem("foodReco", res.data.foodReco);
            }).catch( (err) => {
                console.error(err);
            })
            },
        

        },

    }
)

