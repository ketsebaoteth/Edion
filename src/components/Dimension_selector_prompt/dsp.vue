<script setup>
import { preset_catagories } from './dspjs/dsp';
import { ref } from 'vue';
import { state } from '../state/state';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import ScrollArea from '../ui/scroll-area/ScrollArea.vue';

const preview_box = ref(null);
const width = ref(1920);
const height = ref(1080);

function flip_wh() {
    const temp = width.value;
    width.value = height.value;
    height.value = temp;
}

function close_prompt() {
    state.value.showDimensionSelector = false;
}
</script>

<template>
    <div class="cont" v-if="state.showDimensionSelector">
        <div class="prompt_window">
            <div class="nav">
                <h1 class="">Select a preset</h1>
                <button @click="close_prompt">
                    <img src="../icons/general/close.svg" alt="">
                </button>
            </div>
            <div class="ps">
                <div class="presets">
                        <ScrollArea class="list">
                            <div class="list-wraper w-full h-full flex flex-wrap gap-2">
                            <div v-for="(catagory, catindex) in preset_catagories" :key="catindex" class="box">
                                <div class="preview scale-[0.8]" ref="preview_box" :style="'width:'+catagory.preview.width+'px;'+'height:'+catagory.preview.height+'px;'">
                                </div>
                                <h1>{{catagory.name}}</h1>
                                <h2>{{catagory.size.width+'x'+catagory.size.height}}</h2>
                            </div>
                        </div>
                        </ScrollArea>
                </div>
                <div class="settings">
                    <h2>Name</h2>
                    <input type="text" id="project_name" value="Untitled">
                    <h2>Unit</h2>
                    <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pixels" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>units</SelectLabel>
                            <SelectItem value="precent">
                              Percent
                            </SelectItem>
                            <SelectItem value="Centimeter">
                                Centimeter
                            </SelectItem>
                            <SelectItem value="Milimiters">
                                Milimiters
                            </SelectItem>
                            <SelectItem value="Inches">
                                Inches
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    <h2>Width & Height</h2>
                    <div>
                        <NumberField v-model="width" id="width" :min="0">
                            <NumberFieldContent>
                              <NumberFieldDecrement />
                              <NumberFieldInput />
                              <NumberFieldIncrement />
                            </NumberFieldContent>
                          </NumberField>
                        <button class="w-10 h-10" @click="flip_wh">
                            <img src="../icons/general/arrow_left_right.svg" alt="">
                        </button>
                        <NumberField v-model="height" id="height" :min="0">
                            <NumberFieldContent>
                              <NumberFieldDecrement />
                              <NumberFieldInput />
                              <NumberFieldIncrement />
                            </NumberFieldContent>
                          </NumberField>
                    </div>
                    <h2>DPI</h2>
                    <div>
                        <input type="text" value="72">
                        <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Pixels/Inch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Ratio</SelectLabel>
                                <SelectItem value="precent">
                                  Pixels per Inch
                                </SelectItem>
                                <SelectItem value="Centimeter">
                                    Pixels Per Centimeter
                                </SelectItem>
                                
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                    </div>
                    <h2>Backgorund</h2>
                    <div class="place-items-center">
                        <Select default-value="white">
                            <SelectTrigger>
                              <SelectValue placeholder="white"/>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Ratio</SelectLabel>
                                <SelectItem value="white">
                                  white
                                </SelectItem>
                                <SelectItem value="black">
                                    black
                                </SelectItem>
                                <SelectItem value="transparent">
                                    transparent
                                </SelectItem>
                                <SelectItem value="custom">
                                    custom
                                </SelectItem>
                                
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <div class="picker bg-white w-10 h-6 rounded cursor-pointer"></div>
                    </div>
                    <h2>Profile</h2>
                    <div>
                        <Select class="">
                            <SelectTrigger>
                              <SelectValue placeholder="sRGB" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Color Profile</SelectLabel>
                                <SelectItem value="sRGB">
                                  sRGB
                                </SelectItem>
                                <SelectItem value="AdobeRGB">
                                    Adobe RGB
                                </SelectItem>
                                <SelectItem value="Centimeter">
                                    ProPhoto RGB
                                </SelectItem>
                                <SelectItem value="Centimeter">
                                    Display P3
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger class="w-20">
                              <SelectValue placeholder="18bit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Color Profile</SelectLabel>
                                <SelectItem value="8bit">
                                  8bit
                                </SelectItem>
                                <SelectItem value="16bit">
                                    16bit
                                </SelectItem>
                                <SelectItem value="32bit">
                                    32bit
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                    </div>
                    <div class="mt-auto">
                        <button class="cancel w-full h-9 rounded-md bg-transparent text-white" @click="close_prompt">
                            Cancel
                        </button>
                        <button class="create w-full h-9 rounded-md bg-white text-black" @click="create_project">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";
.cont {
    @apply absolute top-0 left-0 w-screen h-screen flex place-items-center justify-center z-50;
    background-color: $background-base-cthrough;
    .prompt_window {
        width: 1100px;
        height: 600px;
        background-color: $background-base;
        border: 1px solid $border-base;
        @apply rounded-md flex flex-col p-4;
        .nav {
            @apply h-10 w-full flex;
            h1 {
                color: $text-base;
                font-size: $fsize-xlarge;
            }
            button {
                @apply ml-auto w-8 h-8 rounded flex place-items-center justify-center;
                background-color: $background-base;
                transition: $animation-speed ease-in-out;
                &:hover {
                    background-color: $background-base-hover;
                }
            }
        }
        .ps {
            @apply w-full h-full flex;
            .presets {
                height: 100%;
                flex-grow: 1;
                .list {
                    @apply flex flex-wrap content-start gap-2 overflow-y-scroll pt-3;
                    width: 100%;
                    min-width: 500px;
                    height: calc(100% - 40px);
                    
                    .box {
                        @apply h-44 w-40 rounded cursor-pointer flex flex-col place-items-center justify-center;
                        background-color: $background-base;
                        border: 1px solid $border-base;
                        transition: $animation-speed ease-in-out;
                        .preview {
                            @apply rounded-md;
                            border: 1px solid rgb(110, 110, 110);
                        }
                        h1 {
                            color: $text-not-focused;
                            font-size: $fsize-base;
                        }
                        h2 {
                            color: $text-base;
                        }
                        &:hover {
                            background-color: $background-base-hover;
                        }
                    }
                }
            }
            .settings {
                @apply p-4 flex flex-col gap-1 pt-5 pb-0;
                min-width: 350px !important;
                height: calc(100% - 40px);
                h2 {
                    color: $text-base;
                    font-size: $fsize-base;
                }
                div {
                    @apply flex gap-2;
                    .cancel{
                        background-color: $background-base;
                        color: $text-base;
                        transition: $animation-speed ease-in-out;
                        border: 1px solid $border-base;
                        &:hover {
                            background-color: $background-base-hover;
                        }
                    }
                }
                input {
                    @apply w-full h-9 rounded-md px-3;
                    background: transparent;
                    border: 1px solid $border-base;
                    color: $text-base;
                    outline: none;
                    transition: $animation-speed ease-in-out;
                    &:hover {
                        background: $background-base-hover;
                    }
                }
            }
        }
    }
}
</style>