<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { canvasContainer, tabsContainer } from "../cglobals";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 10;
const MIN_INTERVAL = 10; // Minimum interval for numbers

const props = defineProps({
  horizontal: {
    type: Boolean,
    default: true,
  },
  zoom: {
    type: Number,
    default: 1,
  },
});

const rulerBody = ref(null);
const markers = ref([]);

function clampZoom(zoom) {
  return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom));
}

const computedMarkers = computed(() => {
  const zoomLevel = clampZoom(props.zoom);
  const interval = MIN_INTERVAL * zoomLevel;
  const rulerWidth = rulerBody.value ? rulerBody.value.getBoundingClientRect().width : 0;
  const maxStepCount = Math.floor(rulerWidth / interval);
  const stepValue = 100 / zoomLevel; // Adjust step value based on zoom level

  const newMarkers = [];
  for (let i = 0; i <= maxStepCount; i++) {
    newMarkers.push({
      isNumbered: i % 10 === 0,
      value: (i * stepValue).toFixed(0),
      marginLeft: i === 0 ? '0px' : `${interval}px`,
    });
  }
  return newMarkers;
});

onMounted(() => {
  watch(canvasContainer, (newVal) => {
    if (newVal && rulerBody.value) {
      rulerBody.value.style.width = `${canvasContainer.value.offsetWidth}px`;
      rulerBody.value.style.marginTop = `${tabsContainer.value.offsetHeight}px`;
    }
  });
  watch(props, () => {
    markers.value = computedMarkers.value;
  });
  watch(() => props.zoom, () => {
    markers.value = computedMarkers.value;
  });
});
</script>

<template>
  <div ref="rulerBody" class="rulerBody h-7 absolute">
    <div v-for="(marker, index) in markers" :key="index" :class="['smallmarker', { numberedmarker: marker.isNumbered }]" :style="{ marginLeft: marker.marginLeft }">
      <div v-if="marker.isNumbered" class="numbermarker">{{ marker.value }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/colors";

.rulerBody {
  background: transparent;
  @apply border-b border-gray-400 relative flex ;
  .smallmarker {
    @apply h-3 bg-white;
    width: 1px !important; // Ensure the width is 1px
    position: relative;
  }
  .numberedmarker {
    height: 5px !important; // Make numbered markers longer
  }
  .numbermarker {
    position: absolute;
    top: -20px; // Adjust as needed
    left: -5px; // Adjust as needed
    color: white;
    font-size: 10px;
    height: 30px;
  }
}
</style>