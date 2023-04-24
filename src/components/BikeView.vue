<template>
  <div>
    <img src="/images/bike.png" alt="bige" />
    <bike-first-color></bike-first-color>
    <bike-second-color></bike-second-color>
    <bike-third-color></bike-third-color>
    <bike-forth-color></bike-forth-color>

    <!-- korpusas -->

    <!-- tekstas -->
  </div>
</template>

<script setup>
import { selectedColors } from "../stores/SelectedColors.js";
import BikeFirstColor from "./BikeFirstColor.vue";
import BikeSecondColor from "./BikeSecondColor.vue";
import BikeThirdColor from "./BikeThirdColor.vue";
import BikeForthColor from "./BikeForthColor.vue";
const colorStore = selectedColors();
</script>

<style scoped>
div {
  width: clamp(5rem, 100%, 120rem);
  position: relative;
  z-index: 1;
}


img {
  max-width: 100%;
  max-height: 100%;
  mix-blend-mode: multiply;
}
svg {
  opacity: 0.8;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
}

@media only screen and (max-width:29.875em) {
  div {
  width: clamp(10rem, 100%, 120rem);
  position: relative;
  z-index: 1;
  margin:0 auto;
}
}
</style>
