<template>
  <div
    class="mask-merlion"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :style="merlionPos"
  >
  
    <img
      class="merlionHand"
      :style="merlionHand"
      src="../../assets/img/merlion/merlionHand.png"
      ref="merlion"
    />
    <img
      v-if="!hover"
      class="merlionBody baseShake"
      :style="merlionBodyStyle"
      src="../../assets/img/merlion/merlionBaseWEye.png"
      ref="merlion"
    />
    <img
      v-else
      class="merlionBody"
      :style="[
        merlionBodyStyle,
        'animation: merlionDuck 0.5s ease 2 alternate; width: 100%;',
      ]"
      src="../../assets/img/merlion/merlionBaseWink.png"
      ref="merlion"
    />
    <!-- Mouse position is at: {{ x }}, {{ y }} -->
  </div>
</template>

<script>
import { useMouseDistanceFromElement } from "vue-composable";
import { useMouse } from "../../helpers/mouse.js";

export default {
  name: "MerlionMascot",
  props: {
    posX: String,
    posY: String,
  },
  data() {
    return {
      mouseX: null,
      mouseY: null,
      anchorX: 0,
      anchorY: 0,
      eyeRotation: null,
      hover: false,
      isMovable: true,
    };
  },
  // setup() {
  //   const { x, y } = useMouse();
  //   return { x, y };
  // },
  methods: {
    calculateDistance(mouseX, mouseY) {
      //element.getBoundingClientRect().left
      return Math.floor(
        Math.sqrt(
          Math.pow(mouseX - this.left, 2) + Math.pow(mouseY - this.top, 2)
        )
      );
    },
  },
  computed: {
    // distanceFromMouse(){
    //   let halfScreenY = window.screen.height / 1.5;
    //   let halfScreenX = window.screen.width / 1.5;
    //   let difference = 0;
    //   if (this.y > halfScreenY) {
    //     difference = this.y - halfScreenY;
    //   }
    //   difference = Math.min(85, difference);
    //   console.log(difference)


    //   return difference
    // },
    merlionBodyStyle() {
      // if (this.isMovable) {
      //   let top = 85;
      //   let left = -12;
      //   let halfScreenY = window.screen.height / 1.4;
      //   let halfScreenX = window.screen.width / 1.4;
      //   let difference = 40;

      //   if (this.y > halfScreenY) {
      //     difference = this.y - halfScreenY;
      //   }

      //   difference = Math.min(85, difference);

      //   console.log(difference);

      //   return `position: absolute; top: ${difference}px; left: ${left}px; width: 100%;`;
      // } else {
      //   return `position: absolute; top: 85px; left: -15px; width: 100%;`;
      // }
      return `position: absolute; top: ${this.posY}px; left: ${this.posX}px; animation: merlionDuck 0.5s ease 2 alternate; width: 100%;`;
    },
    merlionHand() {
      // if (this.isMovable) {
      //   let top = 85;
      //   let left = -15;
      //   let halfScreenY = window.screen.height / 1.4;
      //   let halfScreenX = window.screen.width / 1.4;
      //   let difference = 40;
      //   if (this.y > halfScreenY) {
      //     difference = this.y - halfScreenY;
      //   }
      //   if (this.y > window.screen.height) {
      //     difference = this.y - halfScreenY;
      //     this.isMovable = false;
      //   }
      //   difference = Math.min(85, difference);
      //   return `position:absolute; z-index: 1; top:${difference}px; left: ${left}px; width: 100%;`;
      // } else {
      //   return `position:absolute; z-index: 1; top: 85px; left: -15px; width: 100%;`;
      // }
      return `position:absolute; z-index: 1; top: ${this.posY}px; left: ${this.posX}px; animation: merlionDuck 0.5s ease 2 alternate; width: 100%;`;
    },
    left() {
      return this.$refs.merlion.getBoundingClientRect().x;
    },
    top() {
      return this.$refs.merlion.getBoundingClientRect().y;
    },
    mouseDistance() {
      return this.distance;
    },
    merlionPos() {
      console.log(`top:${this.posY}px;left:${this.posX}px`);
      return `bottom:${this.posY}px;left:${this.posX}px`;
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.mask-merlion {
  // background-color: red;
  height: 250px;
  width: 250px;
  position: absolute;
  overflow: hidden;
  scale: 0.5;
}

.baseShake{
  animation: merlionShake 2s  infinite;
}
@keyframes merlionShake {
  0%{
    transform: rotate(0deg);
    right:0px;
    opacity: 0.5;
  }
  100%{
    transform: rotate(905deg);
    opacity: 1;
    right:50px
  }
}

@keyframes merlionDuck {
  0% {
    top: 85px;
  }
  100% {
    top: 95px;
  }
}

</style>
