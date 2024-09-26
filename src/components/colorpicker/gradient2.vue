<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';
import { hexToRgb } from './utils/hextorgb';
import { clamp } from './utils/clamp';

const canvasElement = ref(null);
const canvasContainer = ref(null);

const props = defineProps({
  selectedColor: {
    type: String,
    default: "red"
  },
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
  const ctx = canvasElement.value.getContext("2d");
  const width = canvasElement.value.width;
  const height = canvasElement.value.height;

  // Horizontal gradient from starting color (white) to a specific color
  const horizontalGradient = ctx.createLinearGradient(0, 0, width, 0);
  horizontalGradient.addColorStop(0, props.startingPoint);
  horizontalGradient.addColorStop(1, props.color);
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
  const ctx = canvasElement.value.getContext("2d");
  ctx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);
  updateCanvasGradient();
  ctx.beginPath();
  ctx.arc(x, y, indicatorRadius, 0, 2 * Math.PI);
  ctx.fillStyle = getColorAtPosition(x, y);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, indicatorRadius + 2, 0, 2 * Math.PI);
  ctx.strokeStyle = "white";
  ctx.stroke();

  const selectedColor = getColorAtPosition(x, y);
  emit("update:selectedColor", selectedColor);
  console.log("Emitted selected color:", selectedColor);
}

function canvasMouseMove(e) {
  const canvasContainerDimensions = canvasContainer.value.getBoundingClientRect();
  let x = e.clientX - canvasContainerDimensions.left;
  let y = e.clientY - canvasContainerDimensions.top;
  x = clamp(x, 0, canvasContainerDimensions.width);
  y = clamp(y, 0, canvasContainerDimensions.height);
  drawIndicator(x, y);
}

function canvasMouseUp(e) {
  document.removeEventListener("mousemove", canvasMouseMove);
  document.removeEventListener("mouseup", canvasMouseUp);
}

function getColorAtPosition(x, y) {
  const ctx = canvasElement.value.getContext("2d");
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]})`;
}

function updateSelectedColor(e) {
  const sc = getColorAtPosition(e.offsetX, e.offsetY);
  emit("update:selectedColor", sc);
  drawIndicator(e.offsetX, e.offsetY);
}

function canvasMouseDown(e) {
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
</script>

<template>
  <div ref="canvasContainer" class="w-full h-36">
    <canvas ref="canvasElement" class="rounded" @mousedown="canvasMouseDown"></canvas>
  </div>
</template>

<style lang="sass" scoped>
</style>