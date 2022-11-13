<template>
  <div
    class="mask-merlion"
    @mouseover="handleHoverOn"
    @mouseleave="handleHoverOff"

    :style="merlionPos"
  >

  
    <img
      class="merlionHands"
      src="../../assets/img/merlion/merlionHand.png"
      ref="merlion"
    />
    <!-- <img
      v-if="!hover"
      class="merlionBody"
      src="../../assets/img/merlion/merlionBaseWEye.png"
      ref="merlion"
    /> -->
    <img
      v-if="!hover"
      class="merlionBody merlionIdle"
      src="../../assets/img/merlion/merlionBaseWEye.png"
      ref="merlion"
    />
    <img
      v-else
      class="merlionBody merlionWinkAnimation"      
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
      animationPlaying:false,
    };
  },
  // setup() {
  //   const { x, y } = useMouse();
  //   return { x, y };
  // },
  methods: {
    handleHoverOn(){
      //Set animation to true
      //append and remove class
      if (this.hover == false){
        this.hover = true;
      } 
    },
    handleHoverOff(){
      if (this.hover == true) {}
      setTimeout(()=>{
        this.hover = false;
      }, 750)
    },
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
      // console.log(`top:${this.posY}px;left:${this.posX}px`);
      return `bottom:${this.posY}px;left:${this.posX}px`;
    },
  },
  mounted() {
  },
};
</script>
T
<style lang="scss">
.mask-merlion {
  //Edit posx and y here here
  // background-color: red;
  height: 250px;
  width: 250px;
  position: absolute;
  overflow: hidden;
  scale: 0.5;
  z-index:15
}

.merlionBody{
  position: absolute;
  top: 65px;
  left: -22px;
  z-index: -1;
  // animation: popUp 1s ease alternate 1 ;
  // animation-delay: 2s;

}

@keyframes popUp{
  0%{
    top: px;
  }
  65%{
    top:85px
  }
  100%{
    top: 65px;
  }

}

.merlionHands{
  position: absolute;
  top: 80px;
  left: -22px;
  z-index: 1;
  // animation: handsUp 1s ease alternate 1 ;
  // animation-delay: 2s;

}

@keyframes handsUp {
  15%{
    top: 0px;
  }
  65%{
    top:15px
  }
  100%{
    top: 0px;
  }
}

.merlionIdle{
  animation: bobbing 2s ease alternate infinite;
}

@keyframes bobbing{
  0%{
    top:65px;
  }
  50%{
    top:65px;
  }


  75%{
    top:85px;
    transform: rotate(-1deg);
  }
  100%{
    top:65px;
    transform: rotate(2deg);
  }
}

.merlionWinkAnimation{
  animation: hideUnder 0.5s ease 2 alternate;
}
@keyframes hideUnder {
  0%{
    top: 65px;
  }
  100%{
    top: 85px
  }
}



</style>
