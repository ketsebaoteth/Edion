<script setup>
import { ref, onMounted,watch } from 'vue';
import { clamp } from './utils/clamp';
import { alphaChannelValue, activeColorValue } from './globals'; // Assuming you have a global state for alpha and active color values

const canvasParent = ref(null);
const canvasElement = ref(null);
let inducatorPosition = {x:0};

function drawAlphaGradient() {
  const ctx = canvasElement.value.getContext("2d",{ willReadFrequently: true });
  const width = canvasElement.value.width;
  const height = canvasElement.value.height;

  // Draw checkered background
  const checkerSize = 10;
  for (let y = 0; y < height; y += checkerSize) {
    for (let x = 0; x < width; x += checkerSize) {
      ctx.fillStyle = (x / checkerSize + y / checkerSize) % 2 === 0 ? '#ccc' : '#fff';
      ctx.fillRect(x, y, checkerSize, checkerSize);
    }
  }

  // Draw alpha gradient
  //this adjusts the gradient for the color section not to be very small
  let ExtentCorrection = 200;
  const gradient = ctx.createLinearGradient(0, 0, width+ExtentCorrection, 0);
  gradient.addColorStop(0, activeColorValue.value);
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawIndicator(x) {
  const ctx = canvasElement.value.getContext("2d",{ willReadFrequently: true });
  inducatorPosition.x = x;
  const indicatorRadius = 6;
  ctx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);
  drawAlphaGradient();
  ctx.beginPath();
  ctx.arc(x, canvasElement.value.height / 2, indicatorRadius, 0, 2 * Math.PI);
  ctx.fillStyle = getAlphaAtPosition(x);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
  alphaChannelValue.value = getAlphaAtPosition(x);
}

function canvasMouseMove(event) {
  const rect = canvasElement.value.getBoundingClientRect();
  let x = event.clientX - rect.left;
  x = clamp(x, 0, canvasElement.value.width);
  drawIndicator(x);
}

function canvasMouseUp(event) {
  document.removeEventListener("mousemove", canvasMouseMove);
  document.removeEventListener("mouseup", canvasMouseUp);
}

function canvasMouseDown(event) {
  document.addEventListener("mousemove", canvasMouseMove);
  document.addEventListener("mouseup", canvasMouseUp);
  event.preventDefault();
  event.stopPropagation();
}

function getAlphaAtPosition(x) {
  const ctx = canvasElement.value.getContext('2d', { willReadFrequently: true });
  const pixel = ctx.getImageData(x, canvasElement.value.height / 2, 1, 1).data;
  return `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3] / 255})`;
}

onMounted(() => {
  const parentRect = canvasParent.value.getBoundingClientRect();
  canvasElement.value.width = parentRect.width;
  canvasElement.value.height = parentRect.height;
  drawAlphaGradient();
  drawIndicator(0);
});

watch(activeColorValue, () => {
  drawAlphaGradient();
  drawIndicator(inducatorPosition.x);
});
</script>

<template>
    <div ref="canvasParent" class="w-full h-[16px]">
      <canvas ref="canvasElement" class="rounded" @mousedown="canvasMouseDown"></canvas>
    </div>
</template>

<style lang="scss" scoped>

</style>