import { defineStore } from "pinia";
import { ref } from "vue";
export const selectedColors = defineStore("colors", () => {
  const colors = ref({
    firstColor: "#172121",
    secondColor: "#172121",
    thirdColor: "#172121",
    forthColor: "#172121",
  });

  return { colors };
});
