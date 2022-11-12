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
            </div>
        </div>
    </div>

</template>
  
<script>
export default {
name: "PhoneTripCard",
props: {
},
data() {
    return {};
},
};
</script>

<style>
img {
    object-fit: cover;
}
</style>