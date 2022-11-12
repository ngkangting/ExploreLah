<template>
    <div class="d-none d-sm-none d-md-none d-lg-block">
        <div class="card m-3 bg-light" style="width: 90%; height: 160px">
            <div class="row g-0 h-100">
                <div class="col-md-4 col-lg-4 h-100 mask">
                    <img :src="foodImg" class="img-fluid rounded-start w-100 h-100" />
                </div>
                <div class="col-md-8 col-lg-8">
                    <div class="card-body">
                        <h6 class="fw-bold">{{ placeName }}</h6>
                        <span class="fs-6">
                            <i class="bi bi-person-circle pe-2"></i>"{{
                                    this.comments[randomNum % 23]
                            }}"</span>
                        <p>Ratings:<span class="ms-1" v-html="starRating"></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="d-block d-sm-block d-md-block d-lg-none">
        <div class="card m-3 bg-light" style="width: 90%; height: 160px">
            <div class="row g-0 h-100">
                <div class="card-body">
                    <h6 class="fw-bold">{{ placeName }}</h6>
                    <span class="fs-6">
                        <i class="bi bi-person-circle pe-2"></i>"{{
                                this.comments[randomNum % 23]
                        }}"</span>
                    <p>Ratings:<span class="ms-1" v-html="starRating"></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "FoodCard",
    props: {
        placeName: {
            type: String,
            default: null,
        },
        randomNum: {
            type: Object,
        },
    },
    data() {
        return {
            comments: [
                "Very good food, delicious and also affordable!",
                "Great food and quick service",
                "Value for money, good food!",
                "Good food, cheap food, awesome food!",
                "Good food.",
                "Good food, friendly and excellent service",
                "Wonderful atmosphere, great food and service",
                "Good food and good service",
                "Good food that's well priced.",
                "Good food good service.",
                "Awesome food!",
                "Great food and atmosphere",
                "Great food for good price",
                "Delicious!",
                "So yummy!",
                "Best food",
                "So delicious",
                "Delicious food at good price",
                "Yummy food!",
                "Love this place",
                "One of my favourite places!",
                "I love the food here",
                "My favourite place to visit",
            ],
        };
    },
    computed: {
        foodImg() {
            return "../../src/assets/img/food/food" + this.randomNum + ".jpg";
        },
        starRating() {
            //Gets number between 6 and 10, divide by 2 to get number of full stars
            const rndInt = Math.floor(Math.random() * 4) + 6;
            let output = "";
            output += '<i class="bi bi-star-fill icon-pink"></i>'.repeat(
                Math.floor(rndInt / 2)
            );
            if (output % 2 != 0) {
                output += '<i class="bi bi-star-half icon-pink"></i>';
            }
            console.log(output);
            return output;
        },
    },
};
</script>

<style lang="scss">
.mask {
    overflow: hidden;
}

// body::before {
//     content: "XS";
//     color: red;
//     font-size: 2rem;
//     font-weight: bold;
//     position: fixed;
//     top: 250px;
//     right: 50px;
// }

// @media (min-width: 576px) {
//     body::before {
//         content: "SM";
//     }
// }

// @media (min-width: 768px) {
//     body::before {
//         content: "MD";
//     }
// }

// @media (min-width: 992px) {
//     body::before {
//         content: "LG";
//     }
// }

// @media (min-width: 1200px) {
//     body::before {
//         content: "XL";
//     }
// }

// @media (min-width: 1400px) {
//     body::before {
//         content: "XXL";
//     }
// }
</style>
