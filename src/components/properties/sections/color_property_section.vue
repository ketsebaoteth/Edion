<script setup>
import gradient_area from '@/components/colorpicker/gradient_area.vue';
import fullcolorchannel from '@/components/colorpicker/fullcolorchannel.vue';
import alphachannel from '@/components/colorpicker/alphachannel.vue';
import hexpreview from './hexpreview.vue';
import hslpreview from './hslpreview.vue';
import rgbpreview from './rgbpreview.vue';
import hsbpreview from './hsbpreview.vue';
import cmykpreview from './cmykpreview.vue';
import recentColors from './recentColors.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {selectedColor} from "../../colorpicker/globals.js"
import { watch,ref } from 'vue';

const colorPreview = ref(null);
const selectedPreviewFormat = ref("hex");

function updateColorPreview(){
    colorPreview.value.style.backgroundColor = selectedColor.value;
}
watch(selectedColor,()=>{
    updateColorPreview();
})
</script>

<template>
  <div class="w-full h-full p-2 flex flex-col gap-2">
    <gradient_area />
    <fullcolorchannel />
    <alphachannel />
    <div class="infoSettings flex gap-2">
        <div ref="colorPreview" class="w-12 h-10 bg-white rounded"></div>
        <Select v-model:model-value="selectedPreviewFormat">
            <SelectTrigger>
              <SelectValue placeholder="Hex" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Color Formats</SelectLabel>
                <SelectItem value="hex">Hex</SelectItem>
                <SelectItem value="rgb">RGB</SelectItem>
                <SelectItem value="cmyk">CMYK</SelectItem>
                <SelectItem value="hsb">HSB</SelectItem>
                <SelectItem value="hsl">HSL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
    <div class="info flex flex-col gap-2">
        <hexpreview v-if="selectedPreviewFormat == 'hex'"/>
        <hslpreview v-if="selectedPreviewFormat == 'hsl'" />
        <rgbpreview v-if="selectedPreviewFormat == 'rgb'"/>
        <hsbpreview v-if="selectedPreviewFormat == 'hsb'"/>
        <cmykpreview v-if="selectedPreviewFormat == 'cmyk'"/>
    </div>
    <recentColors />
  </div>
</template>
