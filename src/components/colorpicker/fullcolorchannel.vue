<script setup>
import { ref, onMounted } from "vue";
const canvasParent = ref(null);
const canvasElement = ref(null);
import { clamp } from "./utils/clamp";
import { fullChannelColor } from "./globals";

function drawFullColorGradient() {
  const ctx = canvasElement.value.getContext("2d");
  const width = canvasElement.value.width;
  const height = canvasElement.value.height;
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0.15, "rgb(255, 0, 255)");
  gradient.addColorStop(0.33, "rgb(0, 0, 255)");
  gradient.addColorStop(0.49, "rgb(0, 255, 255)");
  gradient.addColorStop(0.67, "rgb(0, 255, 0)");
  gradient.addColorStop(0.84, "rgb(255, 255, 0)");
  gradient.addColorStop(1, "rgb(255, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawInducator(x) {
  const ctx = canvasElement.value.getContext("2d");
  const indicatorRadius = 6;
  ctx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);
  drawFullColorGradient();
  ctx.beginPath();
  ctx.arc(x, canvasElement.value.height / 2, indicatorRadius, 0, 2 * Math.PI);
  ctx.fillStyle = getColorAtPosition(x, canvasElement.value.height / 2);
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
  fullChannelColor.value = getColorAtPosition(x, canvasElement.value.height / 2);
}

function canvasMouseMove(event) {
  const rect = canvasElement.value.getBoundingClientRect();
  let x = event.clientX - rect.left;
  x = clamp(x, 0, canvasElement.value.width-1);
  drawInducator(x);
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

function getColorAtPosition(x, y) {
  const ctx = canvasElement.value.getContext("2d", { willReadFrequently: true });
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]})`;
}

onMounted(() => {
  canvasElement.value.width = canvasParent.value.getBoundingClientRect().width;
  canvasElement.value.height = canvasParent.value.getBoundingClientRect().height;
  drawFullColorGradient();
  drawInducator(0);
});
</script>

<template>
  <div ref="canvasParent" class="w-full h-[16px]">
    <canvas ref="canvasElement" class="rounded" @mousedown="canvasMouseDown"></canvas>
  </div>
</template>

<style lang="scss" scoped></style>
