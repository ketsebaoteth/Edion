<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { hexToHSL } from "./utils/hextohsl";
import { hexToRgb } from "./utils/hextorgb";
import { defineEmits } from "vue";

const emit = defineEmits(["colorChange"]);

const props = defineProps({
  color: {
    type: String,
    default: "#e73939",
  },
});

function drawGradient(canvas, ctx) {
  let rgb = hexToRgb(props.color);
  let canvasw = canvas.width;
  let canvash = canvas.height;

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

  drawGradient(canvas, ctx);
}

//gives color back at specfic location
function getColorAt(x, y) {
  const canvas = canvasref.value;
  const ctx = canvas.getContext("2d");

  // Ensure x and y are within the canvas boundaries
  x = Math.max(0, Math.min(x, canvas.width - 1));
  y = Math.max(0, Math.min(y, canvas.height - 1));

  const pixel = ctx.getImageData(x, y, 1, 1).data;
  emit("colorChange", `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);

  return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
}

//updates Selected color inducators position
function updateIndicatorPosition(offsetX, offsetY, rect) {
  //to stop it from going out of bounds
  const clampedX = Math.max(0, Math.min(offsetX, rect.width));
  const clampedY = Math.max(0, Math.min(offsetY, rect.height));

  ind.value.style.top = clampedY + "px";
  ind.value.style.left = clampedX + "px";
  ind.value.style.backgroundColor = getColorAt(clampedX, clampedY);
}

//gradient canvas onclick handler
function gradientClick(event) {
  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  updateIndicatorPosition(offsetX, offsetY, rect);
}

//gradient canvas move handler
function gradientMove(event) {
  event.preventDefault(); // Prevent text selection

  const rect = canvasref.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  updateIndicatorPosition(offsetX, offsetY, rect);
}

function gradientUp() {
  document.removeEventListener("mousemove", gradientMove);
  document.removeEventListener("mouseup", gradientUp);
  document.body.classList.remove("no-select");
}

function gradient_Click_drag(event) {
  event.stopPropagation();
  event.preventDefault();
  document.addEventListener("mousemove", gradientMove);
  document.addEventListener("mouseup", gradientUp);
  document.body.classList.add("no-select");
}

let lastScrollTop = 0;

function handleScroll() {
  const rect = canvasref.value.getBoundingClientRect();
  const scrollOffsetY = canvasParent.value.parentNode.scrollTop;

  const offsetX = parseFloat(ind.value.style.left);
  const offsetY = ind.value.getBoundingClientRect().y - (scrollOffsetY - lastScrollTop);

  // Ensure the indicator stays within the bounds of the canvas
  const clampedY = Math.max(0, Math.min(offsetY, rect.height));

  ind.value.style.top = clampedY + "px";

  lastScrollTop = scrollOffsetY;
}

// Use the onMounted lifecycle hook to initialize the canvas and add scroll event listener
onMounted(() => {
  init();
  const parentNode = canvasParent.value.parentNode;
  parentNode.addEventListener("scroll", handleScroll);

  // Cleanup event listener on component unmount
  onBeforeUnmount(() => {
    parentNode.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <div
    ref="canvasParent"
    class="canvasParent w-full h-44 bg-transparent my-3 rounded relative"
  >
    <canvas
      ref="canvasref"
      class="rounded"
      @click="gradientClick"
      @mousedown="gradient_Click_drag"
    ></canvas>
    <div class="ind" ref="ind"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.canvasParent {
  position: relative;
}

.ind {
  @apply w-3 h-3 bg-white rounded-full absolute translate-x-[-50%]
    translate-y-[-50%];
  box-shadow: 0 0 0 2px white, /* Middle border */
    0 0 0 3px black;
}

.no-select {
  user-select: none;
}
</style>