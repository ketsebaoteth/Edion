<script setup>
import tab from "./tabs/tab.vue";
import { activeTab } from "./tabs/tabsjs/tabmanager";
import gettingstarted from "./Gettingstarted.vue";
import ruler from "./ruler/ruler.vue";
import { canvasContainer } from "./cglobals";
import { onMounted,ref,watch } from "vue";

const canvasc = ref(null);

onMounted(() => {
  canvasc.value = document.getElementById('canvas');
});

watch(canvasc, (newVal) => {
  if (newVal) {
    canvasContainer.value = newVal;
  }
});
const zoomlevel = ref(1);
function handleZoomChange(e) {
  if (e.deltaY > 0) {
    zoomlevel.value -= 0.1;
  } else {
    zoomlevel.value += 0.1;
  }
  if (zoomlevel.value < 0.1) {
    zoomlevel.value = 0.1;
  }
  if (zoomlevel.value > 2) {
    zoomlevel.value = 2;
  }
}
</script>

<template>
  <div ref="cavnasc" id="canvas" class="canvas w-full h-full flex flex-col" @wheel="handleZoomChange">
    <tab />
    <gettingstarted />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.canvas {
  background-color: $canvas-base;
  max-width: 950px;
}
</style>
