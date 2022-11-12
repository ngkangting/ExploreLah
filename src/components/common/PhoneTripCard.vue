<template>
    <div class="card m-4 col-10 ps-0 border border-blue">
        <div class="row g-0">
            <div class="col-4">
                <img src="../../assets/img/tripcard.jpg" class="img-fluid rounded-start h-100">
            </div>
            <div class="col-8">
            <div class="card-body p-4">
                <p class="card-title">
                    <h3>{{ dayData.name.slice(1, -1) }}</h3>
                    <p>{{ startDate }} - {{ endDate }}</p>
                </p>
                <p class="card-text d-none d-sm-block text-dark-blue">
                    <b>Starting Location:</b> {{ input.startLoc }}
                    <br>
                    <b>Transportation Method:</b> {{ byCar }}
                </p>
                <button type="btn" class="btn bg-pink text-white btn-sm my-2" @click="generatePDF()">
                        Download as PDF
                </button>
            </div>
            </div>
        </div>
    </div>

</template>
  
<script>
import { useItineraryStore } from "@/stores/itinerary";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
    name: "PhoneTripCard",
    setup() {
        const itineraryStore = useItineraryStore();
        return { itineraryStore };
    },
    props: {
        dayData:null,
    },
    created() {
        let currDate = new Date();
    },
    computed: {
        startDate() {
        let startDate = new Date(this.input["dates"][0].toString());
        let outputStr =
            startDate.getDate() + " " + this.numToMonth[startDate.getMonth()];
        return outputStr;
        },
        endDate() {
        let endDate = new Date(this.input["dates"][1].toString());
        let outputStr =
            endDate.getDate() + " " + this.numToMonth[endDate.getMonth()];
        return outputStr;
        },
        byCar() {
        if (this.input.byCar) {
            return "Private Transport";
        }
        return "Public Transport";
        },
    },
    data() {
        return {
            numToMonth: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            itinerary: JSON.parse(this.dayData["itinerary"]),
            food: JSON.parse(this.dayData["food"]),
            input: JSON.parse(this.dayData["input"]),
        };
    },
    
    methods:{
        viewItinerary() {
        //Set this to be the defacto inside intinerary store
        this.itineraryStore.setItinerary(this.dayData);
        this.itineraryStore.viewingTrip = true;
        this.itineraryStore.isLoading = false;
        //Redirect
        this.$router.push({
            path: "/result",
        });
        },
        generatePDF() {
            var dayCounter = 1;
            var activityCounter = 1;
            var docDefinition = {
                content: [
                "Trip Name: " + this.dayData.name.slice(1, -1),
                "Starting Location: " + this.input.startLoc,
                " ",
                ],
            };
            for (let day of this.itinerary) {
                docDefinition.content.push("Day" + dayCounter);
                docDefinition.content.push(" ");
                dayCounter += 1;

                for (let activity of day.itinerary) {
                docDefinition.content.push("Activity" + activityCounter);
                docDefinition.content.push("Location: " + activity.name);
                docDefinition.content.push("Start Time: " + activity.arriveTime);
                docDefinition.content.push("End Time: " + activity.endTime);
                docDefinition.content.push("Duration of Activity: " + activity.dur);
                docDefinition.content.push(
                    "Travel Time to Location: " + activity.travelTimeTo
                );
                docDefinition.content.push("Weather: " + activity.status);
                docDefinition.content.push(" ");
                activityCounter += 1;
                }
                docDefinition.content.push(" ");
                activityCounter = 1;
            }

            pdfMake.createPdf(docDefinition).download();
         },      
    },
};
</script>

<style>
img {
    object-fit: cover;
}
</style>