<script setup>
import { onMounted, ref, defineEmits } from "vue";

const canvasref = ref(null);
const canvasParent = ref(null);
const ind = ref(null);

const emit = defineEmits(["colorChange"]);

function drawColorSpectrum(canvas) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  const gradient = ctx.createLinearGradient(0, 0, width, 0);

  // Define color stops for the gradient
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1 / 6, "yellow");
  gradient.addColorStop(2 / 6, "green");
  gradient.addColorStop(3 / 6, "cyan");
  gradient.addColorStop(4 / 6, "blue");
  gradient.addColorStop(5 / 6, "magenta");
  gradient.addColorStop(1, "red");

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function getColorAt(x) {
  const canvas = canvasref.value;
  const ctx = canvas.getContext("2d");
  const pixel = ctx.getImageData(x, 0, 1, 1).data;
  return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
}

function updateIndicatorAndEmitColor(offsetX, rect) {
  const clampedX = Math.max(0, Math.min(offsetX, rect.width-10));
  const color = getColorAt(clampedX);

  ind.value.style.left = clampedX + rect.x + "px";
  ind.value.style.backgroundColor = color;

  emit("colorChange", color);
}

function spectrumClick(event) {
  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  updateIndicatorAndEmitColor(offsetX, rect);
}

function spectrumMove(event) {
  event.preventDefault(); // Prevent text selection

  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  updateIndicatorAndEmitColor(offsetX, rect);
}

function spectrumUp() {
  document.removeEventListener("mousemove", spectrumMove);
  document.removeEventListener("mouseup", spectrumUp);
  document.body.classList.remove("no-select");
}

function spectrum_Click_drag(event) {
  event.stopPropagation();
  event.preventDefault();
  document.addEventListener("mousemove", spectrumMove);
  document.addEventListener("mouseup", spectrumUp);
  document.body.classList.add("no-select");
}

onMounted(() => {
  const canvas = canvasref.value;
  canvas.width = canvasParent.value.clientWidth;
  canvas.height = canvasParent.value.clientHeight;
  drawColorSpectrum(canvas);
});
</script>

<template>
  <div ref="canvasParent" class="fullchannel w-full h-8">
    <canvas ref="canvasref" class="rounded" @click="spectrumClick" @mousedown="spectrum_Click_drag"></canvas>
    <div class="ind" ref="ind" @click="spectrumClick" @mousedown="spectrum_Click_drag"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.fullchannel {
  @apply w-full h-3;
}

.ind {
  @apply w-3 h-3 bg-white rounded-full absolute translate-y-[-100%];
  box-shadow: 0 0 0 2px white, /* Middle border */
              0 0 0 3px black;
}

.no-select {
  user-select: none;
}
</style>