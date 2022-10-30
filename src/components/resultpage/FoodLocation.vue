<template>
    <!-- Because you will be near {{Object.keys(data)[0]}} during lunch, you can head to: -->
    <div>
        <div class="m-3">
            For some highly rated food places around Singapore, you can head to:
        </div>

        <div v-for="places in data[Object.keys(data)[0]]">
            <!-- {{places}} -->
            <div class="card m-3 bg-light" style="width: 90%">
                <div class="card-body">
                    <h6 class="fw-bold">{{places[0]}}</h6>
                    <!-- <p>{{places[1]}}</p> -->
                    <span>Ratings: </span>
                    <!-- <span v-for="index in getRandomNumber()" class="bi bi-star-fill icon-pink" ></span> -->
                    <span class="ms-1" v-html="starRating"></span>
                    
                </div>
            </div>
        </div>
    </div>
    
    
</template>
  
<script>
export default {
    name: "FoodLocation",
    props: {
        data: {
            type:Object
        }
    },
    data() {
        return {};
    },
    computed: {
        starRating(){
            //Gets number between 6 and 10, divide by 2 to get number of full stars
            const rndInt = Math.floor(Math.random() * 4) + 6;
            let output = "";
            output += '<i class="bi bi-star-fill icon-pink"></i>'.repeat(Math.floor(rndInt / 2));
            if (output % 2 != 0) {
                output += '<i class="bi bi-star-half icon-pink"></i>'
            }
            console.log(output);
            return output
        }
    },  
    methods: {
        getRandomNumber(){
            return Math.floor(Math.random() * 10);
        },
        getRatingStar(){
            let output = `<i class="bi bi-star-fill icon-pink"></i>` * this.getRandomNumber();
            console.log(output);
            return output
        }

    },
};
</script>

<style lang="scss">

</style>
