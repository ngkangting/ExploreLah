<template>
    <div class="card col-10 col-sm-5 col-lg-3 m-4 bg-light border-0" >
        <div class="zoom-effect-1 effect-image-1">
            <img :src='imgLink' class="card-img-top"/>
        </div>
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-subtitle text-muted">
                - {{ subtitle }}
            </p>
            <a :href="link" target="__blank" class="btn btn-pink my-3">
                Read More
            </a>
        </div>
    </div>
</template>

<script>
import { stringifyStyle } from '@vue/shared';

export default {
name: "BlogCard",
props: {
    imgLink: String,
    title: String,
    subtitle: String,
    link: String,
},
data() {
    return {};
},
};
</script>

<style>
.zoom-effect-1{
    overflow: hidden;
}

.zoom-effect-1 img{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    transform: scale(1);
    -webkit-transform: scale(1);
}

.zoom-effect-1:hover img{
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
}

.effect-image-1{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    display: block;
}

.zoom-effect-1 img{
transition: all .4s linear;
-webkit-transition: all .4s linear;
-moz-transition: all .4s linear;
-o-transition: all .4s linear;
}
</style>