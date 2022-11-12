<template>
    <div class="mask" ref="merlion">
        <img id ="anchor"  src="../../assets/img/merlion/merlionBaseWEye.png"  />
    </div>

    <!-- <div id="eyes" @mouseenter="mouseEnter" @mousemove="mousemove">
        <img class="mascot" src="../../assets/img/merlion/merlionEye.png" :style='leftEyeStyle'/>
        <img class="mascot" src="../../assets/img/merlion/merlionEye.png" :style='rightEyeStyle'/> 
    </div> -->
    <!-- <img class="mascot" src="../../assets/img/merlion/merlionHand.png"/> -->

</template>
  
<script>
import { useMouseDistanceFromElement } from "vue-composable";

  export default {
    name: "MerlionMascot",
    props: {
        positionX: String,
        positionY: String,
    },
    data() {
      return {
          mouseX : null,
          mouseY : null,
          anchorX: 0,
          anchorY: 0,
          eyeRotation: null,
  
      };
    },
    methods : {
        calculateDistance(mouseX, mouseY) {
            //element.getBoundingClientRect().left
            return Math.floor(Math.sqrt(Math.pow(mouseX - this.left, 2) + Math.pow(mouseY - this.top, 2)));      
         },
        mouseMove(event) {

            // this.getAngle(event.clientX, event.clientY, this.anchorX, this.anchorY)
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            // console.log(this.$refs.merlion);
            // console.log(this.mouseX, this.mouseY);
            // console.log(element)

            // console.log(this.calculateDistance(this.mouseX, this.mouseY))
            
        },

    },
    computed : {
        leftEyeStyle(){
            return `transform:rotate(${90 + this.eyeRotation}deg);top: -198px;left: 107px`
        },
        rightEyeStyle(){
            return `transform:rotate(${90 + this.eyeRotation}deg);top: 463px;left: 183px;`
        },
        merlionStyle(){
            return `position:absolute;bottom:${this.positionY}px;left:${this.positionX}`
        },
        left(){
            return this.$refs.merlion.getBoundingClientRect().x;
        },
        top(){
            return this.$refs.merlion.getBoundingClientRect().y;

        }

        

    },
    mounted(){  
        
        window.addEventListener('mousemove', this.mouseMove);
        const anchor = document.getElementById("anchor");
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;

        //Trying get X and Y of merlion...
        console.log("Please fucking work")
        console.log(this.$refs.merlion)
        console.log(this.$refs.merlion.getBoundingClientRect().left);
        console.log(this.$refs.merlion.getBoundingClientRect().top);
    }
  };
</script>
  
<style lang="scss">



.mask{
    background-color: red;
    height:250px;
    width:250px;
    position: fixed;

}



</style>
  