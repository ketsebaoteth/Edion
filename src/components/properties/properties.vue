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

function handleSelectedColorChange(color) {
    SelectedColor.value = color;
}
</script>

<template>
    <div class="properties w-96 max-w-96 h-full px-4">
        <div class="header h-8 flex place-items-center">
            <h2 >Properties</h2>
        </div>
        <div class="sections">
            <h2>Object</h2>
            <h2 class="active">Color</h2>
            <h2>adjustment</h2>
        </div>
        <gradient_area @color-change="handleSelectedColorChange"/>
        <div class="hor flex flex-col gap-3">
            <fullcolorchannel />
            <alphachannel />
            <div class="info flex gap-2">
                <div class="w-10 min-w-10 h-8  rounded" :style="'background-color:'+SelectedColor+';'"></div>
                <Input class="h-8" v-model="SelectedColor"></Input>
                <Select>
                    <SelectTrigger class="w-32 h-8">
                        <SelectValue placeholder="RGBA"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem>RGBA</SelectItem>
                        <SelectItem>HEX</SelectItem>
                        <SelectItem>HSl</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div class="colsection flex flex-col gap-2 mt-2">
            <div class="top w-full flex place-items-center">
                <Select >
                    <SelectTrigger class="w-20 h-6 border-0 px-0" style="cursor: pointer !important;">
                        <SelectValue placeholder="Recents"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem>Recents</SelectItem>
                        <SelectItem>Collection 1</SelectItem>
                    </SelectContent>
                </Select>
                
                
                <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger class="ml-auto">
                        <Button class="w-8 h-8 ml-auto" variant="outline" size="icon">
                            <img src="../icons/general/plus.svg" alt="" class="w-5 h-5">
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add Selected To Collecion</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
            </div>
            <div class="colorcollection w-full h-32 rounded-md bg-card border border-border">

            </div>
        </div>
        
        <div class="layers">
            <div class="layer_head px-4 pr-0">
                <h2>Layers</h2>
                <button variant="outline" size="icon" class="ml-auto h-8 w-8 rounded-none border-y-0">
                    <img src="../icons/general/arrow_up.svg" alt="">
                </button>
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