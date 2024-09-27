<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { collectionList } from "./recent";
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";
import { selectedColor } from "@/components/colorpicker/globals";

const currentCollectionTab = ref("recentColors");
const collections = ref(Object.keys(collectionList.value));

function addToCurrentCollection(){
    collectionList.value[currentCollectionTab.value].collection.push(selectedColor.value);
}
</script>

<template>
    <div class="w-full min-h-32 h-32 rounded border border-border p-1">
        <div class="nav w-full h-8 flex place-items-center">
            <Select v-model:model-value="currentCollectionTab">
                <SelectTrigger  class="w-32 h-6 border-none">
                  <SelectValue placeholder="RecentColors" />
                </SelectTrigger>
                <SelectContent class="m-1">
                  <SelectGroup>
                    <SelectItem v-for="(color, colorid) in collections" :key="colorid" :value="color">{{color}}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            <Button variant="outline" size="icon" class="h-6 w-6 ml-auto" @click="addToCurrentCollection">
                <img src="../../icons/general/plus.svg" class="w-4 h-4">
            </Button>
        </div>
        <div class="collectionpreview w-full h-[calc(100%-33px)] border border-border border-dashed rounded p-1 flex flex-wrap content-start gap-1" >
            <div class="w-6 h-6 rounded" v-for="(color, colorindex) in collectionList[currentCollectionTab].collection" :key="colorindex" :style="{ backgroundColor: color }"></div>
        </div>
    </div>
</template>