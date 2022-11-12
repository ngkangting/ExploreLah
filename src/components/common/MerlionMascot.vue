<template>
    <div class="mask" @mouseover="hover = true" @mouseleave="hover = false" :style="merlionPos">
        <img class="merlionHand"   src="../../assets/img/merlion/merlionHand.png" ref="merlion"  />
        <img v-if="!hover" class="merlionBody"   src="../../assets/img/merlion/merlionBaseWEye.png" ref="merlion"  />
        <img v-else class="merlionBody" src="../../assets/img/merlion/merlionBaseWink.png" ref="merlion"   />
    </div>

</template>
  
<script>
import { useMouseDistanceFromElement } from "vue-composable";



export default {
name: "MerlionMascot",
props: {
    posX: String,
    posY: String,
},
data() {
    return {
        mouseX : null,
        mouseY : null,
        anchorX: 0,
        anchorY: 0,
        eyeRotation: null,
        hover:false,
        


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
        // let {distance} = useMouseDistanceFromElement(this.$refs.merlion)

        // console.log(distance.value)
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

    },
    mouseDistance(){
        
        return this.distance;
    },
    merlionPos(){
        console.log(`top:${this.posY}px;left:${this.posX}px`);
        return `bottom:${this.posY}px;left:${this.posX}px`
    }

    

},
mounted(){  
    console.log(this.posX, this.posY)

}
}
</script>

<style lang="scss">



.mask{
    // background-color: red;
    height:250px;
    width:250px;
    position: fixed;
    overflow: hidden;
    scale: .5;
}

.merlionBody{
    animation: merlionDuck 0.5s ease 2 alternate;
    position: absolute;
    top:85px;
    left: -25px;
}

.merlionHand{
    position: absolute;
    z-index: 1;
    top:85px;
    left:-25px;
}


@keyframes merlionDuck{
    0%{
        top: 85px;
    }
    100%{
        top:95px;
    }
}


</style>
