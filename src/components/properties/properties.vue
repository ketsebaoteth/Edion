<script setup>
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import layersSection from './layers/layersSection.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import ScrollArea from '../ui/scroll-area/ScrollArea.vue';
import { ref, computed } from 'vue';
import color_property_section from './sections/color_property_section.vue';
import channel from './channels/channel.vue';
import { state } from '../state/state';
import historySection from './historySection/historySection.vue';

const SelectedColor = ref("rgb(255, 255, 255)");
const layersExpanded = ref(false);

function handleSelectedColorChange(color) {
    SelectedColor.value = color;
}
function expandlayers(){
    layersExpanded.value = !layersExpanded.value;
}

function enableLayersPanel(){
    state.value.showLayersPanel = true;
    state.value.showChannelsPanel = false;
}
function enableChannelsPanel(){
    state.value.showLayersPanel = false;
    state.value.showChannelsPanel = true;
}
function enableHistory(){
    state.value.showHistoryPanel = true;
    state.value.showColorEditing = false;
}
function enableColorEditing(){
    state.value.showHistoryPanel = false;
    state.value.showColorEditing = true;
}

const layersHeight = computed(() => {
    return layersExpanded.value ? '300px' : '0px';
});
</script>

<template>
    <div class="properties w-96 max-w-96 h-full">
        <div class="header h-8 flex place-items-center px-4">
            <h2 >Properties</h2>
        </div>
        <div class="tabs w-full h-10 border-b border-border flex px-4 gap-3 place-items-center">
            <h2 :class="{'active':state.showColorEditing}" @click="enableColorEditing">Color</h2>
            <h2 >Editing</h2>
            <h2 @click="enableHistory">History</h2>
        </div>
        <color_property_section :class="{'overflow-x-scroll':layersExpanded}"/>
        <historySection />
        <div class="layers">
            <div class="layer_head px-4 pr-0" @click="expandlayers">
                <h2>Layers</h2>
                <button variant="outline" size="icon" class="ml-auto h-8 w-8 rounded-none border-y-0">
                    <img src="../icons/general/arrow_up.svg" alt="" :class="{'rotate-180':layersExpanded}">
                </button>
            </div>
            
            <div ref="layerscont" class="layerscont w-full" :style="{ height: layersHeight }">
                <div class="nav flex w-full h-7 gap-2 px-3">
                    <h2 :class="{'active':state.showLayersPanel}" @click="enableLayersPanel">Layers</h2>
                    <h2 :class="{'active':state.showChannelsPanel}" @click="enableChannelsPanel">Channels</h2>
                    <h2>Paths</h2>
                </div>
                <layersSection />
                <channel />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.properties{
    background-color: $background-base;
    border-left: 1px solid $border-base;
    @apply flex flex-col;
    .nav{
        background-color: $background-base;
        border-bottom: 1px solid $border-base;
        h2{
            font-size: $fsize-base;
            color: $text-muted;
            cursor: pointer;
        }
        .active{
            color: $text-base;
        }
    }
    .header{
        h2{
            font-size: $fsize-large;
        }
    }
    .tabs{
        font-size: $fsize-base;
        .active{
            color: $text-base;
        }
        h2{
            cursor: pointer;
            color: $text-darker;
        }
    }
    .sections{
        @apply flex mt-2;
        h2{
            font-size: $fsize-base;
            margin-right: 1rem;
            color: $text-darker;
            cursor: pointer;
        }
        .active{
            color: $text-base;
            font-size: $fsize-large;
        }
    }
    .layers{
        @apply w-full mt-auto;
        .layerscont{
            @apply overflow-hidden;
            transition: 0.2s ease-in-out;
        }
        .layer_head{
            @apply h-8 w-full border-t border-border flex place-items-center cursor-pointer;
            transform: $animation_speed ease-in-out;
            &:hover{
                background-color: $background-base-hover;
            }
            h2{
                font-size: $fsize-large;
            }
        }
    }
    .rotate-180 {
        transform: rotate(180deg);
    }
}
</style>