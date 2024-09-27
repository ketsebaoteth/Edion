<script setup>
import { ref, onMounted, defineProps, defineEmits, watch } from 'vue';
import { hexToRgb } from './utils/hextorgb';
import { clamp } from './utils/clamp';
import { selectedColor,fullChannelColor,activeColorValue } from './globals';

const canvasElement = ref(null);
const canvasContainer = ref(null);
let inducatorPosition = {x:0,y:0};

const props = defineProps({
  color: {
    type: String,
    default: "#0000ff"
  },
  startingPoint: {
    type: String,
    default: "white",
  }
});

const emit = defineEmits(["update:selectedColor"]);

function updateCanvasGradient() {
  const ctx = canvasElement.value.getContext("2d",{ willReadFrequently: true });
  const width = canvasElement.value.width;
  const height = canvasElement.value.height;

  // Horizontal gradient from starting color (white) to a specific color
  const horizontalGradient = ctx.createLinearGradient(0, 0, width, 0);
  horizontalGradient.addColorStop(0, props.startingPoint);
  horizontalGradient.addColorStop(1, fullChannelColor.value);
  ctx.fillStyle = horizontalGradient;
  ctx.fillRect(0, 0, width, height);

  // Vertical gradient from transparent to black
  const verticalGradient = ctx.createLinearGradient(0, 0, 0, height);
  verticalGradient.addColorStop(0, "rgba(0,0,0,0)");
  verticalGradient.addColorStop(1, "rgba(0,0,0,1)");
  ctx.fillStyle = verticalGradient;
  ctx.fillRect(0, 0, width, height);
}

// Draws circular indicator for the selected color
function drawIndicator(x, y) {
  const indicatorRadius = 5;
  inducatorPosition.x = x;
  inducatorPosition.y = y;
  const ctx = canvasElement.value.getContext("2d");
  ctx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);
  updateCanvasGradient();
  ctx.beginPath();
  ctx.arc(x, y, indicatorRadius, 0, 2 * Math.PI);
  ctx.fillStyle = getColorAtPosition(x, y);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, indicatorRadius + 2, 0, 2 * Math.PI);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
  selectedColor.value = getColorAtPosition(x, y);
  activeColorValue.value = getColorAtPosition(x,y);
}

function canvasMouseMove(e) {
  const canvasContainerDimensions = canvasContainer.value.getBoundingClientRect();
  let x = e.clientX - canvasContainerDimensions.left;
  let y = e.clientY - canvasContainerDimensions.top;
  x = clamp(x, 0, canvasContainerDimensions.width);
  y = clamp(y, 0, canvasContainerDimensions.height);
  drawIndicator(x, y);
  updateSelectedColor(e);
}

function canvasMouseUp(e) {
  document.removeEventListener("mousemove", canvasMouseMove);
  document.removeEventListener("mouseup", canvasMouseUp);
}

function getColorAtPosition(x, y) {
  const ctx = canvasElement.value.getContext('2d', { willReadFrequently: true });
  const width = canvasElement.value.width;
  const height = canvasElement.value.height;

  // Clamp the coordinates to ensure they are within the canvas bounds
  x = clamp(x, 0, width - 1);
  y = clamp(y, 0, height - 1);

  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3] / 255})`;
}


function canvasMouseDown(e) {
  e.preventDefault();
  e.stopPropagation();
  document.addEventListener("mousemove", canvasMouseMove);
  document.addEventListener("mouseup", canvasMouseUp);
  updateSelectedColor(e);
}

onMounted(() => {
  const canvasContainerDimensions = canvasContainer.value.getBoundingClientRect();
  canvasElement.value.width = canvasContainerDimensions.width;
  canvasElement.value.height = canvasContainerDimensions.height;
  updateCanvasGradient();
  drawIndicator(0, 0);
});

watch(fullChannelColor, () => {
  updateCanvasGradient();
  drawIndicator(inducatorPosition.x,inducatorPosition.y)
});
</script>

<template>
  <div ref="canvasContainer" class="w-full h-36">
    <canvas ref="canvasElement" class="rounded" @mousedown="canvasMouseDown"></canvas>
  </div>
</template>

<style lang="sass" scoped>
</style>