<script setup>
import { onMounted, ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#e73939",
  },
});

const canvasref = ref(null);
const canvasParent = ref(null);
const ind = ref(null);

const emit = defineEmits(["alphaChange"]);

function drawCheckeredPattern(ctx, width, height) {
  const size = 10;
  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      ctx.fillStyle = (x / size + y / size) % 2 === 0 ? "#ccc" : "#fff";
      ctx.fillRect(x, y, size, size);
    }
  }
}

function drawAlphaGradient(canvas, color) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Draw checkered pattern
  drawCheckeredPattern(ctx, width, height);

  // Create gradient from color to transparent
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function getAlphaAt(x) {
  const canvas = canvasref.value;
  const ctx = canvas.getContext("2d");
  const pixel = ctx.getImageData(x, 0, 1, 1).data;
  return pixel[3] / 255; // Alpha value is in the range 0-255
}

function updateIndicatorAndEmitAlpha(offsetX, rect) {
  const clampedX = Math.max(0, Math.min(offsetX, rect.width));
  const alpha = getAlphaAt(clampedX);

  ind.value.style.left = clampedX + rect.x + "px";
  ind.value.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;

  emit("alphaChange", alpha);
}

function alphaClick(event) {
  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  updateIndicatorAndEmitAlpha(offsetX, rect);
}

function alphaMove(event) {
  event.preventDefault(); // Prevent text selection

  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  updateIndicatorAndEmitAlpha(offsetX, rect);
}

function alphaUp() {
  document.removeEventListener("mousemove", alphaMove);
  document.removeEventListener("mouseup", alphaUp);
  document.body.classList.remove("no-select");
}

function alpha_Click_drag(event) {
  event.stopPropagation();
  event.preventDefault();
  document.addEventListener("mousemove", alphaMove);
  document.addEventListener("mouseup", alphaUp);
  document.body.classList.add("no-select");
}

onMounted(() => {
  const canvas = canvasref.value;
  canvas.width = canvasParent.value.clientWidth;
  canvas.height = canvasParent.value.clientHeight;
  drawAlphaGradient(canvas, props.color);
});
</script>

<template>
  <div ref="canvasParent" class="alphachannel w-full h-8">
    <canvas ref="canvasref" class="rounded" @click="alphaClick" @mousedown="alpha_Click_drag"></canvas>
    <div class="ind" ref="ind" @click="alphaClick" @mousedown="alpha_Click_drag"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.alphachannel {
  @apply h-3;
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