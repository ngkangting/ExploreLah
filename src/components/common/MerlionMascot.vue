<template>
    <img id ="anchor"  src="../../assets/img/merlion/merlionBaseWEye.png" :style='merlionStyle'/>
    <div id="eyes" @mouseenter="mouseEnter" @mousemove="mousemove">
        <img class="mascot" src="../../assets/img/merlion/merlionEye.png" :style='leftEyeStyle'/>
        <img class="mascot" src="../../assets/img/merlion/merlionEye.png" :style='rightEyeStyle'/> 
    </div>
    <!-- <img class="mascot" src="../../assets/img/merlion/merlionHand.png"/> -->

</template>
  
<script>
const element = document.getElementById("anchor");

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
        calculateDistance(elem, mouseX, mouseY){
            return Math.floor(Math.sqrt(Math.pow(mouseX - (.left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
        },
        mouseMove(event) {
            // this.getAngle(event.clientX, event.clientY, this.anchorX, this.anchorY)
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
     
            let rad = Math.atan2(event.clientY - this.anchorY, event.clientX - this.anchorX);
            let deg = rad * 180 / Math.PI;
            this.eyeRotation = deg;

            console.log(this.calculateDistance(element, this.mouseX, this.mouseY))
            
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
        }

    },
    mounted(){
        window.addEventListener('mousemove', this.mouseMove);
        const anchor = document.getElementById("anchor");
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
    }
  };
</script>
  
<style lang="scss">

#anchor::before{
    top: 50px;
    right: 50px;

}

#eyes, #eyes img {
    position: absolute;
}

</style>
  