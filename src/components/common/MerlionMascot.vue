<template>
  <div
    class="mask"
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
      class="merlionBody"
      :style="merlionBodyStyle"
      src="../../assets/img/merlion/merlionBaseWEye.png"
      ref="merlion"
    />
    <img
      v-else
      class="merlionBody"
      :style="merlionBodyStyle"
      src="../../assets/img/merlion/merlionBaseWink.png"
      ref="merlion"
    />
    Mouse position is at: {{ x }}, {{ y }}
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
    isMovable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mouseX: null,
      mouseY: null,
      anchorX: 0,
      anchorY: 0,
      eyeRotation: null,
      hover: false,
    };
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },
  methods: {
    calculateDistance(mouseX, mouseY) {
      //element.getBoundingClientRect().left
      return Math.floor(
        Math.sqrt(
          Math.pow(mouseX - this.left, 2) + Math.pow(mouseY - this.top, 2)
        )
      );
    },
    mouseMove(event) {
      // this.getAngle(event.clientX, event.clientY, this.anchorX, this.anchorY)
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;

      let { distance } = useMouseDistanceFromElement(this.$refs.merlion);

      // console.log(distance.value)
      // console.log(this.$refs.merlion);
      // console.log(this.mouseX, this.mouseY);
      // console.log(element)

      console.log(this.calculateDistance(this.x, this.y));
    },
  },
  computed: {
    merlionBodyStyle() {
      let top = 85;
      let left = -12;
      let halfScreenY = window.screen.height / 1.5;
      let halfScreenX = window.screen.width / 1.5;
      let difference = 0;

      if (this.y > halfScreenY) {
        difference = this.y - halfScreenY;
      }

      difference = Math.min(85, difference);

      console.log(difference);

      return `position: absolute; top: ${top}px; left: ${left}px; animation: merlionDuck 0.5s ease 2 alternate;`;
    },
    merlionHand() {
      let top = 85;
      let left = -15;
      let halfScreenY = window.screen.height / 1.5;
      let halfScreenX = window.screen.width / 1.5;
      let difference = 0;

      if (this.y > halfScreenY) {
        difference = this.y - halfScreenY;
      }

      return `position:absolute; z-index: 1; top:${top}px; left: ${left}px; `;
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
    console.log(this.posX, this.posY);
  },
};
</script>

<style lang="scss">
.mask {
  // background-color: red;
  height: 250px;
  width: 250px;
  position: fixed;
  overflow: hidden;
  scale: 0.5;
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
