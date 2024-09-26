<script setup>
import gradient_area from '../colorpicker/gradient_area.vue';
import fullcolorchannel from '../colorpicker/fullcolorchannel.vue';
import alphachannel from '../colorpicker/alphachannel.vue';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
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
import { ref } from 'vue';

const SelectedColor = ref("rgb(255, 255, 255)");
const layersExpanded = ref(false);

function handleSelectedColorChange(color) {
    SelectedColor.value = color;
}
function expandlayers(){
    layersExpanded.value = !layersExpanded.value;
}
</script>

<template>
    <div class="properties w-96 max-w-96 h-full">
        <div class="header h-8 flex place-items-center px-4">
            <h2 >Properties</h2>
        </div>
        
        
        
        <div class="layers">
            <div class="layer_head px-4 pr-0" @click="expandlayers">
                <h2>Layers</h2>
                <button variant="outline" size="icon" class="ml-auto h-8 w-8 rounded-none border-y-0">
                    <img src="../icons/general/arrow_up.svg" alt="">
                </button>
            </div>
            <div class="layerscont w-full" :class="{'h-60':layersExpanded}">

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
    .header{
        h2{
            font-size: $fsize-large;
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
        }
    }
    .layers{
        @apply w-full mt-auto;
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
}
</style>