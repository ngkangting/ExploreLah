<template>
  <div class="container-fluid d-flex pb-5">
    <div class="row px-5">
      <h1 class="fw-bold text-center mt-3 py-5">
        Iconic Landmarks in Singapore
      </h1>

      <div class="landmark p-2 col-12 col-md-12 col-lg-8 flex-column">
        <a href="https://www.gardensbythebay.com.sg/" target="__blank">
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark1.jpg"
            alt="Landmark1"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>Gardens By The Bay</h2>
          </div>
        </a>
      </div>

      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <a
          href="https://www.rwsentosa.com/en/attractions/sea-aquarium"
          target="__blank"
        >
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark2.jpg"
            alt="Landmark2"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>S.E.A Aquarium</h2>
          </div>
        </a>
      </div>

      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <a
          href="https://visitkamponggelam.com.sg/street/haji-lane/"
          target="__blank"
        >
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark3.jpg"
            alt="Landmark3"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>Haji Lane</h2>
          </div>
        </a>
      </div>

      <div class="p-2 col-12 col-md-12 col-lg-4">
        <div
          class="d-flex justify-content-center align-items-center bg-light-blue h-100 w-100 text-center p-3 py-5 rounded-4"
        >
          <div class="fw-bold w-90 display-5 me-3">258</div>
          <h5>
            trips planned in
            <br/>
            the last hour
          </h5>
        </div>
      </div>

      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <a href="https://www.jewelchangiairport.com/en.html" target="__blank">
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark4.jpg"
            alt="Landmark4"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>Jewel Changi Airport</h2>
          </div>
        </a>
      </div>

      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <a href="https://sultanmosque.sg/" target="__blank">
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark5.jpg"
            alt="Landmark5"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>Masjid Sultan</h2>
          </div>
        </a>
      </div>

      <div class="landmark p-2 col-12 col-md-12 col-lg-8">
        <a href="https://www.marinabaysands.com/" target="__blank">
          <img
            class="w-100 h-100"
            src="../assets/img/Landmark6.jpg"
            alt="Landmark6"
          />
          <div class="description p-3 text-white fw-bolder">
            <h2>Marina Bay Sands</h2>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="px-5">
    <h1 class="fw-bold text-center pt-4 pb-5">Amazing Guides to Singapore</h1>

    <div class="row justify-content-center mb-5">
      <BlogCard
        v-for="(card, index) in cards"
        :key="index"
        :img="card.img"
        :title="card.title"
        :subtitle="card.subtitle"
        :link="card.link"
      >
      </BlogCard>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/common/BlogCard.vue";
import LocalFood from "../assets/img/LocalFood.jpg";
import NightLife from "../assets/img/Nightlife.jpg";
import Attractions from "../assets/img/Attractions.jpg";
import Culture from "../assets/img/culture.jpg";
import FunActivities from "../assets/img/FunActivities.jpg";
import Shopping from "../assets/img/shopping.jpg";

export default {
  name: "Discover",
  components: {
    BlogCard,
    LocalFood,
    NightLife,
  },
  data() {
    return {
      cards: [
        {
          img: LocalFood,
          title:
            "Eat like a local in Singapore: An epic list of authentic local food and drinks",
          subtitle: "Honeycombers",
          link: "https://thehoneycombers.com/singapore/best-local-food-singapore/",
        },
        {
          img: NightLife,
          title: "Singapore Nightlife Guide: 14 Best Things to Do at Night",
          subtitle: "Klook ANZ",
          link: "https://www.klook.com/en-AU/blog/singapore-nightlife-guide/",
        },
        {
          img: Attractions,
          title: "Must-Visit Attractions in Singapore",
          subtitle: "Tarandip Kaur",
          link: "https://theculturetrip.com/asia/singapore/articles/20-must-visit-attractions-in-singapore/",
        },
        {
          img: Culture,
          title: "20 ways to get cultured in Singapore",
          subtitle: "Timeout",
          link: "https://www.timeout.com/singapore/art/things-to-do-in-singapore-arts-culture",
        },
        {
          img: FunActivities,
          title: "55 Best Things To Do In Singapore",
          subtitle: "Expat Living",
          link: "https://expatliving.sg/things-to-do-in-singapore-this-weekend-fun-activities-top-places/",
        },
        {
          img: Shopping,
          title:
            "Shopping In Singapore: 19 Places For Buying The Best Handbags, Electronics & More",
          subtitle: "Reema Arora",
          link: "https://traveltriangle.com/blog/shopping-in-singapore/",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style>
.landmark {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 1;
  border-radius: 10px;
}

.landmark img {
  transition: 0.5s all ease-in-out;
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
}

.landmark:hover img {
  transform: scale(1.2);
}

.description {
  position: absolute;
  background: rgba(98, 96, 96, 0) !important;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}
</style>
