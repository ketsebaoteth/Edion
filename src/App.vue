<script setup>
import titlebar from "./components/titlebar/titlebar.vue";
import editor from "./components/editor/editor_view.vue"
import dimensionSelectPrompt from "./components/Dimension_selector_prompt/dsp.vue";
</script>

<template>
  <div>
    <dimensionSelectPrompt />
    <titlebar />
    <editor />
  </div>
</template>

<style scoped>
</style>
