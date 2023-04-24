<template>
  <div class="loading-container">
    <img src="/images/load.gif" alt="loading gif"/>
    <p><span class="simple" style="--delay:0.5s">Hey</span> <span class="simple" style="--delay:1.5s">and</span> <span class="simple" style="--delay:1.5s">welcome</span><span class="special" style="--delay:1.6s">!</span></p>
    <p class="simple--02" style="--delay:3.5s">Design your own bike!</p>
    <div class="tutorial-container">


      <Icon icon="ph:cursor" class="icon icon--mouse" />
      <div class="block"></div>
    </div>

    <button @click="takeToDesign">TAKE ME IN!</button>
 </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { defineEmits } from "vue";
import 'animate.css';
const emit = defineEmits(['load-creator']);

const takeToDesign = () => {
  localStorage.setItem('loaded','1');
  emit('load-creator');
}

</script>

<style scoped>

button {
  padding:0.25rem 1rem;
  font-family:inherit;
  border-radius:10px;
  border:none;
  cursor:pointer;
  animation:bounceIn;
  animation-duration:2s;
  animation-fill-mode:backwards;
  animation-delay:4.5s;
  box-shadow:0 5px 10px rgba(0,0,0,0.1);
  transition:0.5s all linear;
  font-size:2.5rem;
}

button:hover {
  transform:translateY(-10%);
  box-shadow:0 5px 13px rgba(0,0,0,0.5);
}

button:active {
  transform:translateY(10%);
  box-shadow:0 5px 5px rgba(0,0,0,0.7);
}

.loading-container {
  display:flex;
  flex-direction:column;
  align-items:center;
}
span {
  font-size:3rem;
}


.simple {
  animation:fadeIn;
  animation-duration:2s;
  animation-fill-mode:backwards;
  animation-delay:var(--delay);
  font-size:4rem;
}

.simple--02 {
  animation:fadeIn;
  animation-duration:2s;
  animation-fill-mode:backwards;
  animation-delay:var(--delay);
  font-size:2rem;
}

.special {
  display:inline-block;
  animation:bounceInDown;
  animation-duration:2.5s;
  animation-fill-mode:backwards;
  animation-delay:var(--delay);
  font-size:5rem;
}


.tutorial-container {
  min-width:100%;
  min-height:10rem;
  /* background-color:red; */
  animation:fadeIn;
  animation-duration:2s;
  animation-delay:3.8s;
  animation-fill-mode:backwards;
  position:relative;
}

.block {
  position:absolute;
  bottom:50%;
  right:15%;
  background-color:red;
  min-height:4rem;
  min-width:4rem;
  animation:mouse-first 5s infinite;
  border:2px solid white;
}

.icon {
  position:absolute;
}

.icon--mouse {
  color:#fff;
  bottom:20%;
  right:30%;
  z-index:1;
  font-size:2rem;
  animation:mouse-first 5s infinite;
  

}

@keyframes mouse-first {
0% {
}
50% {
  bottom:50%;
  right:15%;
}
100% {
  bottom:50%;
  right:50%;
}
}
/* @keyframes mouse-second {
0% {

}

100% {
 
  right:60%;
}
} */

p {
  word-spacing:3px;
  color:#fff;
}
img {
  width:clamp(5rem,20%,30rem);
  animation:fadeIn;
  animation-duration:2s;
  animation-fill-mode:backwards;
}

span {

}
</style>