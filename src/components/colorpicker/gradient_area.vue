<script setup>
import { onMounted, ref } from "vue";
import { hexToHSL } from "./utils/hextohsl";
import { hexToRgb } from "./utils/hextorgb";

const props = defineProps({
  color: {
    type: String,
    default: "#e73939",
  },
});

function drawGradient(canvas, ctx) {
  let rgb = hexToRgb(props.color);
  console.log("RGB Values:", rgb); // Debugging statement
  let canvasw = canvas.width;
  let canvash = canvas.height;
  console.log("Canvas Dimensions:", canvasw, canvash); // Debugging statement

  for (let i = 0; i < canvasw; i++) {
    for (let j = 0; j < canvash; j++) {
      // Interpolate from white to the target color horizontally
      let r = 255 - (255 - rgb.r) * (i / canvasw);
      let g = 255 - (255 - rgb.g) * (i / canvasw);
      let b = 255 - (255 - rgb.b) * (i / canvasw);

      // Interpolate from white to black vertically
      r = r * (1 - j / canvash);
      g = g * (1 - j / canvash);
      b = b * (1 - j / canvash);

      ctx.fillStyle = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
      ctx.fillRect(i, j, 1, 1);
    }
  }
}

const canvasref = ref(null);
const canvasParent = ref(null);
const ind = ref(null);

function init() {
  const canvas = canvasref.value;
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions to match the parent container
  canvas.width = canvasParent.value.clientWidth;
  canvas.height = canvasParent.value.clientHeight;
  console.log(
    "Canvas Parent Dimensions:",
    canvasParent.value.clientWidth,
    canvasParent.value.clientHeight
  ); // Debugging statement

  drawGradient(canvas, ctx);
}

function getColorAt(x, y) {
  const canvas = canvasref.value;
  const ctx = canvas.getContext("2d");
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
}

function gradientClick(event) {
  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  ind.value.style.top = Math.max(0, Math.min(offsetY, rect.height)) + rect.y + "px";
  ind.value.style.left = Math.max(0, Math.min(offsetX, rect.width)) + rect.x + "px";
  ind.value.style.backgroundColor = getColorAt(offsetX, offsetY);
}

function gradientMove(event) {
  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  const clampedX = Math.max(0, Math.min(offsetX, rect.width));
  const clampedY = Math.max(0, Math.min(offsetY, rect.height));

  ind.value.style.top = clampedY + rect.y + "px";
  ind.value.style.left = clampedX + rect.x + "px";
  ind.value.style.backgroundColor = getColorAt(clampedX, clampedY);
}

function gradientUp() {
  document.removeEventListener("mousemove", gradientMove);
  document.removeEventListener("mouseup", gradientUp);
}

function gradient_Click_drag() {
  document.addEventListener("mousemove", gradientMove);
  document.addEventListener("mouseup", gradientUp);
}

// Use the onMounted lifecycle hook to initialize the canvas
onMounted(() => {
  init();
});
</script>

<template>
  <div
    ref="canvasParent"
    class="canvasParent w-full h-44 bg-transparent my-3 rounded"
  >
    <div class="ind" ref="ind"></div>
    <canvas
      ref="canvasref"
      class="rounded"
      @click="gradientClick"
      @mousedown="gradient_Click_drag"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.canvasParent {
  .ind {
    @apply w-3 h-3 bg-white rounded-full absolute translate-x-[-50%]
      translate-y-[-50%];
    box-shadow: 0 0 0 1px white, /* Middle border */
      0 0 0 2px black;
  }
}
</style>