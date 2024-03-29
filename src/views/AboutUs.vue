<template>
  <div class="container-fluid pb-5">
    <div
      class="row d-flex align-items-center justify-content-center mb-5"
      style="background-color: #d6f4ff"
      :style="{ minHeight: 'calc(100vh - 75px)' }"
    >
      <div class="col-12 col-lg-6">
        <h1 class="display-4 fw-bold lh-1 text-center p-5">
          We help you make exploring Singapore easier than ever!
        </h1>
        <h3 class="lh-1 text-center px-5 text-muted w-75 mx-auto">
          The all-in-one platform to create your travel plans
        </h3>
      </div>
      <div
        class="col-12 col-lg-6 d-flex justify-content-center align-items-center p-5"
      >
        <lottie-player
          class="w-75 mx-auto"
          src="https://assets3.lottiefiles.com/private_files/lf30_5i5tlydx.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>

    <div v-motion-slide-visible-once-left class="row pt-4 pb-4">
      <div class="col-12">
        <div class="text-center mb-5">
          <h1 style="color: #ff8397; font-weight: bold">About Us</h1>
          <h3 style="color: #174877">Creating a community of explorers</h3>
          <p class="about-description lead mx-auto pt-3">
            ExploreLah! enables you to quickly and easily explore Singapore's
            offerings and create personalized itineraries by utilizing local
            expertise and cutting-edge artificial intelligence
          </p>
          <div
            class="d-flex justify-content-center align-items-center w-50 mx-auto"
          >
            <lottie-player
              class="about-animation mx-auto"
              src="https://assets9.lottiefiles.com/packages/lf20_jmuq5aha.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>

    <div
      v-motion-slide-visible-once-left
      class="row d-flex justify-content-center py-4 mx-3 mx-sm-4 mx-md-5"
    >
      <div class="col-12 col-lg-6 d-flex justify-content-center mb-5 mb-lg-0">
        <div
          class="card text-center h-100 w-100 p-4 me-lg-2"
          style="background-color: #174877; border: none; color: white"
        >
          <div class="mx-auto d-flex justify-content-center">
            <lottie-player
              class=""
              style="width: 60%; object-fit: cover"
              src="https://assets1.lottiefiles.com/packages/lf20_x9h8ar8l.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            >
            </lottie-player>
          </div>
          <div class="card-body">
            <h2 class="card-title" style="color: #ff8397; font-weight: bold">
              Our Mission
            </h2>
            <p class="card-text lead">
              To create a platform that makes planning trips quick and
              efficient, enabling more travelers to explore the wonders of
              Singapore and solve their various problems when planning trips
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <div
          class="card text-center h-100 w-100 p-4 ms-lg-2"
          style="border-color: #174877; border: solid 2px; color: #174877"
        >
          <div class="card-body">
            <h2 class="card-title" style="color: #ff8397; font-weight: bold">
              Our Vision
            </h2>
            <p class="card-text lead">
              By making planning trips around Singapore easier, we hope to
              effectively promote inbound tourism for Singapore so more people
              are able to explore what our beautiful city has to offer
            </p>
            <div class="mx-auto d-flex justify-content-center">
              <lottie-player
                class=""
                style="width: 60%; object-fit: cover"
                src="https://assets6.lottiefiles.com/packages/lf20_swnrn2oy.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              >
              </lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-motion-slide-visible-once-left
      class="row d-flex justify-content-center py-5 px-2 px-sm-3 px-md-4 px-lg-5"
    >
      <h1
        class="text-center mb-2 mb-lg-5"
        style="color: #ff8397; font-weight: bold"
      >
        Learn more about us
      </h1>
      <AboutCard
        v-for="(card, index) in cards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :subtitle="card.subtitle"
        :content="card.content"
      >
      </AboutCard>
    </div>
  </div>
</template>

<script>
import AboutCard from "@/components/common/AboutCard.vue";

export default {
  name: "AboutUs",
  components: {
    AboutCard,
  },
  data() {
    return {
      cards: [
        {
          icon: "bi bi-people",
          title: "Our Team",
          subtitle: "SMU Y2 Information System Students",
          content:
            "Some of us have had no prior web application design experience, while others have strong background in programming. We  would like to think of ourselves as explorers who try to create new things like this web app, ExploreLah!",
        },
        {
          icon: "bi bi-book",
          title: "Our Story",
          subtitle: "How did we get here?",
          content:
            "Our shared WAD2 class brought us together to bring ExploreLah! to life. ExploreLah! saw many setbacks and obstacles that we overcame to bring you a platform commited to solving travellers' various problems when it comes to planning trips in Singapore.",
        },
        {
          icon: "bi bi-code-slash",
          subtitle: "The magic behind ExploreLah!",
          title: "How we do it",
          content:
            "Our algorithm does all the research for you and compiles the best destinations into one place. Drawing from a database of over 260 attractions, Explorelah! makes planning trips easy, intuitive and enjoyable!",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.about-description {
  width: 75%;
}

.about-animation {
  width: 100%;
}

@media only screen and (min-width: 576px) {
  .about-animation {
    width: 90%;
  }
}

@media only screen and (min-width: 992px) {
  .about-animation {
    width: 75%;
  }
}

@media (min-width: 1200px) {
  .about-description {
    width: 50%;
  }

  .about-animation {
    width: 75%;
  }
}
</style>
