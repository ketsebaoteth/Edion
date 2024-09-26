<script setup>
import tab from "./tabs/tab.vue";
import { activeTab } from "./tabs/tabsjs/tabmanager";
import gettingstarted from "./Gettingstarted.vue";
</script>

<template>
  <div class="canvas w-full h-full flex flex-col">
    <tab />
    <gettingstarted />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.canvas {
  background-color: $canvas-base;
  
}
</style>
