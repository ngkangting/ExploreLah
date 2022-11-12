<template>
    <div class="card m-4 col-10 ps-0 border border-blue">
        <div class="row g-0">
            <div class="col-4">
                <img src="../../assets/img/tripcard.jpg" class="img-fluid rounded-start h-100">
            </div>
            <div class="col-8">
            <div class="card-body p-4">
                <p class="card-title">
                    <h3>Trip Name</h3>
                    <p>2 Oct 2022 - 22 Oct 2022</p>
                </p>
                <p class="card-text d-none d-sm-block text-dark-blue">
                    <b>Accommodation:</b> XXX Hotel
                    <br>
                    <b>Preference:</b> Shopping, Outdoor, Adventure
                    <br>
                    <b>Transportation Method:</b> By Car
                </p>
                <button type="btn" class="btn bg-pink text-white btn-sm my-2">
                        Download as PDF
                </button>
            </div>
            <vue3-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="true"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                :filename="dayData.name.slice(1,-1)"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                pdf-orientation="landscape"
                pdf-content-width="1100px"
                @progress="onProgress($event)"
                @hasStartedGeneration="hasStartedGeneration()"
                @hasGenerated="hasGenerated($event)"
                ref="html2Pdf"
            >
                <template v-slot:pdf-content>
                <span>
                    <h1 class="text-center">
                        {{ dayData.name.slice(1,-1) }}
                    </h1>
                    <h5 class="text-center">
                        {{ startDate }} - {{ endDate }}
                    </h5>
                    <p>
                        <span class="fw-bold ms-5 ps-5">Starting Location: </span>{{ input.startLoc }}
                    </p>
                    <div v-for="(day,index1) in itinerary" :key="index1" class="py-2 ms-5 ps-5">
                        <h5 class="fw-bold">
                        Day {{ index1 + 1 }}
                        </h5>
                        <div v-for="(activity, index2) in day.itinerary" :key="index2" class="py-2 ms-5 ps-5">
                        <p class="text-decoration-underline">
                            Activity {{ index2 + 1 }}
                        </p>
                        <p>
                            <span class="fw-bold">Location: </span> {{ activity.name }}
                        </p>
                        <p>
                            <span class="fw-bold">Start time: </span> {{ activity.arriveTime }}
                        </p>
                        <p>
                            <span class="fw-bold">End Time: </span> {{ activity.endTime }}
                        </p>
                        <p>
                            <span class="fw-bold">Duration of Activity: </span> {{ activity.dur }} Hours
                        </p>
                        <p>
                            <span class="fw-bold">Travel Time: </span> {{ activity.travelTimeTo }} Minutes
                        </p>
                        <p>
                            <span class="fw-bold">Weather: </span> {{ activity.status }}
                        </p>
                        </div>
                    </div>
                </span>
                </template>
            </vue3-html2pdf>  
            </div>
        </div>
    </div>

</template>
  
<script>
import Vue3Html2pdf from 'vue3-html2pdf';

export default {
    name: "PhoneTripCard",
    props: {
    },
    components: {
        Vue3Html2pdf
    },
    data() {
        return {

        };
    },
    methods(){
        //error
        // generateReport () {
        //         this.$refs.html2Pdf.generatePdf(document.getElementById("pdf-content"))
        // },
    },
};
</script>

<style>
img {
    object-fit: cover;
}
</style>