<script setup>
import { toolList } from "./tool_js/tool_list";
</script>

<template>
  <div class="toolbar">
    <div class="tools" v-for="(tool, tindex) in toolList" :key="tindex" :class="{'pl-2':tool.hassub}">
      <img :src="tool.icon" alt="" />
      <img src="../icons/toolbar/sub_element_inducator.svg" alt="" class="inducator"  v-if="tool.hassub">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors" ;
.toolbar {
    background: $background-base;
    border-right: 1px solid $border-base;
    @apply w-12 h-full flex flex-col place-items-center py-1 cursor-pointer px-1;
    .tools{
        @apply w-full h-[30px]  flex place-items-center justify-center rounded py-1;
        img{
            @apply w-5 h-4;
        }
        .inducator{
            @apply w-[14px] h-4 self-end;
        }
        &:hover{
            background: $background-base-hover;
        }
    }
}
</style>
