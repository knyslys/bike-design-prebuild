<template>
  <Transition name="main-trans" mode="out-in">
  <welcome-screen v-if="!loaded" @load-creator='loadCreator'></welcome-screen>
 
  <div class="bike-container" v-else>
    <bike-view></bike-view>
    <div class="select-color">
      <!-- first color -->
      <span>Body</span>
      <div class="color-container">
        <SlickList
          axis="x"
          v-model:list="firstColorPicked"
          group="firstColorPicked"
          :accept="['firstColorPicker']"
          @update:list="updateFirstList"
          lockAxis="x"
         
        >
          <SlickItem
            v-for="(color, i) in firstColorPicked"
            :key="color"
            :index="i"
            class="color-box picked-color"
            :style="{ 'background-color': color }"
          >
          </SlickItem>
        </SlickList>
        <div class="pick-color">
          <SlickList
            axis="x"
            v-model:list="pickFirstColor"
            group="firstColorPicker"
            :accept="['firstColorPicker']"
            lockAxis="x"
            :pressDelay=50
      
          >
            <SlickItem
              v-for="(color, i) in pickFirstColor"
              :key="color"
              :index="i"
              class="color-box"
              :style="{ 'background-color': color }"
            >
            </SlickItem>
          </SlickList>
        </div>
      </div>

      <!-- first color -->
      <!-- second color -->
      <span>Brand</span>
      <div class="color-container">
        <SlickList
          axis="x"
          v-model:list="secondColorPicked"
          group="secondColorPicked"
          :accept="['secondColorPicker']"
          @update:list="updateSecondList"
          lockAxis="x"
          :pressDelay=50
          
        >
          <SlickItem
            v-for="(color, i) in secondColorPicked"
            :key="color"
            :index="i"
            class="color-box picked-color"
            :style="{ 'background-color': color }"
          >
          </SlickItem>
        </SlickList>

        <div class="pick-color">
          <SlickList
            axis="x"
            v-model:list="pickSecondColor"
            group="secondColorPicker"
            :accept="['secondColorPicker']"
            lockAxis="x"
            :pressDelay=50
          >
            <SlickItem
              v-for="(color, i) in pickSecondColor"
              :key="color"
              :index="i"
              class="color-box"
              :style="{ 'background-color': color }"
            >
            </SlickItem>
          </SlickList>
        </div>
        <!-- third color colums -->
      </div>

      <!-- second color -->

      <!-- third color -->
      <span>Wheels</span>
      <div class="color-container">
        <SlickList
          axis="x"
          v-model:list="thirdColorPicked"
          group="thirdColorPicked"
          :accept="['thirdColorPicker']"
          @update:list="updateThirdList"
          lockAxis="x"
          :pressDelay=50
        >
          <SlickItem
            v-for="(color, i) in thirdColorPicked"
            :key="color"
            :index="i"
            class="color-box picked-color"
            :style="{ 'background-color': color }"
          >
          </SlickItem>
        </SlickList>

        <div class="pick-color">
          <SlickList
            axis="x"
            v-model:list="pickThirdColor"
            group="thirdColorPicker"
            :accept="['thirdColorPicker']"
            lockAxis="x"
            :pressDelay=50
          >
            <SlickItem
              v-for="(color, i) in pickThirdColor"
              :key="color"
              :index="i"
              class="color-box"
              :style="{ 'background-color': color }"
            >
            </SlickItem>
          </SlickList>
        </div>
        <!-- third color colums -->
      </div>

      <!-- third color -->

      <!-- forth color -->
      <span>Rims</span>
      <div class="color-container">
        <SlickList
          axis="x"
          v-model:list="forthColorPicked"
          group="forthColorPicked"
          :accept="['forthColorPicker']"
          @update:list="updateForthList"
          lockAxis="x"
        >
          <SlickItem
            v-for="(color, i) in forthColorPicked"
            :key="color"
            :index="i"
            class="color-box picked-color"
            :style="{ 'background-color': color }"
          >
          </SlickItem>
        </SlickList>
        <!-- second color column -->
        <div class="pick-color">
          <SlickList
            axis="x"
            v-model:list="pickForthColor"
            group="forthColorPicker"
            :accept="['forthColorPicker']"
            lockAxis="x"
          >
            <SlickItem
              v-for="(color, i) in pickForthColor"
              :key="color"
              :index="i"
              class="color-box"
              :style="{ 'background-color': color }"
            >
            </SlickItem>
          </SlickList>
        </div>
        <!-- third color colums -->
      </div>

      <!-- forth color -->
    </div>
  </div>

</Transition>
</template>

<script setup>
import { ref, defineComponent, onMounted } from "vue";
import { SlickList, SlickItem } from "vue-slicksort";
import { selectedColors } from "./stores/SelectedColors.js";

import BikeView from "./components/BikeView.vue";
import WelcomeScreen from "./components/Loading/WelcomeScreen.vue";


const loaded = ref(undefined);
const loadCreator = () => {
  loaded.value = true;
  console.log("veikiu");
};
onMounted(() => {
  if (localStorage.getItem('loaded') !== null) {
    loaded.value = true;
  } else {
    loaded.value = false;
  }
})

const colorStore = selectedColors();

const firstColorPicked = ref(["#172121"]);
const pickFirstColor = ref([
  "#172121",
  "#157F1F",
  "#FFC759",
  "#00A1E4",
  "#5448C8",
  "#000000",
  "#AD343E",
  "#B8F3FF",
]);

const secondColorPicked = ref(["#172121"]);
const pickSecondColor = ref([
  "#172121",
  "#157F1F",
  "#FFC759",
  "#00A1E4",
  "#5448C8",
  "#000000",
  "#AD343E",
  "#B8F3FF",
]);

const thirdColorPicked = ref(["#172121"]);
const pickThirdColor = ref([
  "#172121",
  "#157F1F",
  "#FFC759",
  "#00A1E4",
  "#5448C8",
  "#000000",
  "#AD343E",
  "#B8F3FF",
]);

const forthColorPicked = ref(["#172121"]);
const pickForthColor = ref([
  "#172121",
  "#157F1F",
  "#FFC759",
  "#00A1E4",
  "#5448C8",
  "#000000",
  "#AD343E",
  "#B8F3FF",
]);
defineComponent({
  BikeView,
});

const updateFirstList = (index) => {
  if (firstColorPicked.value.length >= 2) {
    pickFirstColor.value = [
      "#172121",
      "#157F1F",
      "#FFC759",
      "#00A1E4",
      "#5448C8",
      "#000000",
      "#AD343E",
      "#B8F3FF",
    ];
    firstColorPicked.value = [index[1]];
  }
  colorStore.colors.firstColor = firstColorPicked.value[0];
};
const updateSecondList = (index) => {
  if (secondColorPicked.value.length >= 2) {
    pickSecondColor.value = [
      "#172121",
      "#157F1F",
      "#FFC759",
      "#00A1E4",
      "#5448C8",
      "#000000",
      "#AD343E",
      "#B8F3FF",
    ];
    secondColorPicked.value = [index[1]];
  }
  colorStore.colors.secondColor = secondColorPicked.value[0];
};
const updateThirdList = (index) => {
  if (thirdColorPicked.value.length >= 2) {
    pickThirdColor.value = [
      "#172121",
      "#157F1F",
      "#FFC759",
      "#00A1E4",
      "#5448C8",
      "#000000",
      "#AD343E",
      "#B8F3FF",
    ];
    thirdColorPicked.value = [index[1]];
  }
  colorStore.colors.thirdColor = thirdColorPicked.value[0];
};
const updateForthList = (index) => {
  if (forthColorPicked.value.length >= 2) {
    pickForthColor.value = [
      "#172121",
      "#157F1F",
      "#FFC759",
      "#00A1E4",
      "#5448C8",
      "#000000",
      "#AD343E",
      "#B8F3FF",
    ];
    forthColorPicked.value = [index[1]];
  }
  colorStore.colors.forthColor = forthColorPicked.value[0];
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



#app {
  min-height: 100vh;
 
  display: flex;
  align-items: center;
  justify-content:center;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Mukta", sans-serif;
  background-color: #2c363f;
}

.main-trans-enter-active {
  animation:1s fadeIn
}

.main-trans-leave-active {
  animation:1s fadeOut
}

.bike-container {
  max-width: 80%;
  min-height: 50vh;
  background-color: #eae0d5;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 1rem;
  border: 5px solid #f8f5f1;
  box-shadow: 0 2.5px 2px 2px rgba(0,0,0,0.1);
}

.color-box {
  min-height: 3.5rem;
  min-width: 3.5rem;
  border:2.5px solid rgba(254,254,254,0.6);
  cursor:pointer;
}

.picked-color {
  padding: 0.1rem;
  border: 1px solid #000;
  border-radius: 10px;
  border:2.5px solid #fff;
}

.pick-color div {
  display: flex;
  gap:0.75rem;

}

.color-container {
  display: flex;
  /* justify-content: space-around; */
  gap:6rem;
  align-items:center;
}

.select-color {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.select-color span {
  font-size: 2.5rem;
}


@media only screen and (max-width:75.25em) {
  .bike-container {
    grid-template-columns: 0.3fr;
    justify-content:center;
  }
  body {
    font-size:56.5%;
  }
}

@media only screen and (max-width:37.5em) {
  .bike-container {
    min-width:95%;
    /* padding:0; */
  }

  .color-box {
  min-height: 2.2rem;
  min-width: 2.4rem;
  }

  .select-color span {
  font-size: 1.6rem;
}
}
</style>
