<script setup>
import { state } from '../state/state';
</script>

<template>
    <div class="GS " v-if="state.showGettingStarted">
        <h1>Edion Editor</h1>
        <h2>Imagin Without Subscription</h2>
        <div class="start flex flex-col">
          <h1>Start</h1>
          <h3>GetStarted by Opening A File</h3>
          <div class="com mt-3" @click="state.showDimensionSelector=true">
            <img src="./tabs/icons/new_file.svg" alt="" />
            <h2>New File</h2>
          </div>
          <div class="com">
            <img src="./tabs/icons/load_file.svg" alt="" />
            <h2>Open File</h2>
          </div>
          <div class="com">
            <img src="./tabs/icons/google_drive.svg" alt="" />
            <h2>Open File From Drive</h2>
          </div>
          <div class="com">
            <img src="./tabs/icons/drop_box.svg" alt="" />
            <h2>Open File Drop Box</h2>
          </div>
          <h3 class="mt-3">Open Other Supported File Types</h3>
          <div class="supported">
            <div>
              <img src="./tabs/icons/psd.svg" alt="" />
            </div>
            <div>
              <img src="./tabs/icons/adobe_illustrator.svg" alt="" />
            </div>
            <div>
              <img src="./tabs/icons/adobe_XD.svg" alt="" />
            </div>
            <div>
              <img src="./tabs/icons/figma.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.GS {
    @apply w-full h-full p-16 flex flex-col;
    background: transparent;
    color: $text-base;
    h1 {
      font-size: $fsize-black;
      font-weight: bold;
    }
    h2 {
      font-size: $fsize-xlarge;
      color: $text-darker;
    }
    .start {
      @apply mt-5;
      .supported {
        @apply flex gap-1 py-3;
        div {
            @apply p-2 rounded;
          img {
            @apply w-8 h-8 cursor-pointer;
          }
          &:hover {
            background: $background-base;
          }
        }
      }
      h3 {
        font-size: $fsize-base;
      }
      .com {
        @apply flex gap-2 place-items-center cursor-pointer select-none w-52 h-10 px-3 rounded-md;
        h2 {
          font-size: $fsize-large;
        }
        img {
          @apply w-5 h-5;
        }
        &:hover {
          background: $background-base;
        }
      }
      h1 {
        font-size: $fsize-xxlarge;
        color: $text-darker;
      }
    }
  }
</style>