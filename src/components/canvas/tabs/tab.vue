<script setup>
import { tabList } from './tabsjs/tab_list';
import { tabsContainer } from '../cglobals';
import { ref,watch } from 'vue';

const tabslist = ref(null);

watch(tabslist, (newVal) => {
  if (newVal) {
    tabsContainer.value = newVal;
  }
});
</script>

<template>
    <div ref="tabslist" class="tab_list w-full h-8 min-h-8">
        <div class="tab active" v-for="(tabs, tabindex) in tabList" :key="tabindex">
            <h2>{{ tabs.FileName}}</h2>
            <button>
                <img src="./icons/close_tab.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/colors";
@import "../../styles/variables";

.tab_list{
    background: $background-base;
    border-bottom: 1px solid $border-base;
    .active{
        background: $canvas-base !important;
        border-width: 0px !important;
    }
    .tab{
        @apply h-full max-w-36 flex place-items-center px-3;
        background: $background-base;
        border-right: 1px solid $border-base;
        h2{
            color: $text-base;
            font-size: $fsize-base;
        }
        button{
            @apply ml-auto;
            img{
                @apply w-4 h-4;
            }
        }
    }
}
</style>