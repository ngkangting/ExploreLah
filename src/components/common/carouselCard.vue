<template>
        <div class="card d-inline-block h-500" >
            <div class="card-body">
                <h5 class="card-title">{{ review.name }}</h5>
                <p class="card-text">{{ review.reviewText }}</p>
                <p>{{ review.stars }}</p>
            </div>
        </div>
</template>

  
<script>
  export default {
    name: "carouselCard",
    props: {
        review: Array
    },
    data() {
      return {};
    },
  };
</script>


  
  <style lang="scss"></style>
  