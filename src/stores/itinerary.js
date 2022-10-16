import {defineStore} from "pinia";
import axios from "axios";

export const useItineraryStore = defineStore("itinerary", {
    state: () => ({
        itinerary: null,
    }),
    actions: {
        async fetchItinerary(formInfo) {
                console.log(formInfo);
                const path = "http://127.0.0.1:5000";
                axios.post(path, formInfo)
                .then((res) => {
                    this.itinerary = res.data;
                    console.log(res.data);
            }).catch( (err) => {
                console.error(err);
            })
            }
        }



})

