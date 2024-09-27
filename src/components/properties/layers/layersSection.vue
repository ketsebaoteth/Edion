<script setup>
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
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
    <div class="w-full h-full">
        <div class="nav flex w-full h-7 gap-2 px-3">
            <h2 class="active">Layers</h2>
            <h2>Channels</h2>
            <h2>Paths</h2>
        </div>
        <div class="blending w-full h-9 flex gap-2 place-items-center px-2 border-b border-border">
            <Select>
                <SelectTrigger class="blendingselect w-32 h-6 rounded border-0">
                    <SelectValue placeholder="Normal"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="multiply">Multiply</SelectItem>
                        <SelectItem value="screen">Screen</SelectItem>
                        <SelectItem value="overlay">Overlay</SelectItem>
                        <SelectItem value="darken">Darken</SelectItem>
                        <SelectItem value="lighten">Lighten</SelectItem>
                        <SelectItem value="color-dodge">Color Dodge</SelectItem>
                        <SelectItem value="color-burn">Color Burn</SelectItem>
                        <SelectItem value="hard-light">Hard Light</SelectItem>
                        <SelectItem value="soft-light">Soft Light</SelectItem>
                        <SelectItem value="difference">Difference</SelectItem>
                        <SelectItem value="exclusion">Exclusion</SelectItem>
                        <SelectItem value="hue">Hue</SelectItem>
                        <SelectItem value="saturation">Saturation</SelectItem>
                        <SelectItem value="color">Color</SelectItem>
                        <SelectItem value="luminosity">Luminosity</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <h2 class="ml-auto">opacity:</h2>
            <Input class="h-7 w-20" placeholder="100%"></Input>
        </div>
        <div class="lockandfill w-full h-9 flex gap-2 place-items-center px-2 border-b border-border">
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="ghost" size="image" class="w-4 h-4">
                      <img src="../../icons/layers/alpha.svg" alt="">
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lock Alpha</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="ghost" size="image" class="w-4 h-4">
                      <img src="../../icons/toolbar/brush.svg" alt="">
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lock Alpha</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="ghost" size="image" class="w-4 h-4">
                      <img src="../../icons/toolbar/move.svg" alt="">
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lock Alpha</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="ghost" size="image" class="w-4 h-4">
                      <img src="../../icons/layers/lock.svg" alt="">
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lock Alpha</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <h2 class="ml-auto">opacity:</h2>
            <Input class="h-7 w-20" placeholder="100%"></Input>

            
        </div>
        <div class="layerview w-full h-[calc(100%-125px)] p-2">
            <div class="layerlist w-full h-full border rounded border-border flex flex-col gap-1">
                <div class="layer">
                    <img src="../../icons/layers/eye.svg" class="mx-2" alt="">
                    <div class="layerpreview w-20 h-9 rounded bg-white">
                    </div>
                    <Input class="h-8 border-0" placeholder="Layer 1"></Input>
                    <img src="../../icons/layers/lock.svg"  alt="">
                    <img src="../../icons/layers/dragLayer.svg" alt="">
                </div>
                <div class="layer">
                    <img src="../../icons/layers/eye.svg" class="mx-2" alt="">
                    <div class="layerpreview w-20 h-9 rounded bg-white outline outline-gray-500 outline-dashed">
                    </div>
                    <Input class="h-8 border-0" placeholder="Layer 1"></Input>
                    <img src="../../icons/layers/lock.svg"  alt="">
                    <img src="../../icons/layers/dragLayer.svg" alt="">
                </div>
            </div>
        </div>
        <div class="bottombar h-18 w-full flex justify-end ">
            <img src="../../icons/layers/link.svg" alt="">
            <img src="../../icons/layers/effect.svg" alt="">
            <img class="makedim" src="../../icons/toolbar/mask.svg" alt="">
            <img src="../../icons/layers/addadjust.svg" alt="">
            <img src="../../icons/layers/layerFolder.svg" alt="">
            <img src="../../icons/layers/addLayer.svg" alt="">
            <img src="../../icons/layers/delLayer.svg" alt="">
            

        </div>
    </div>

</template>


<style lang="scss" scoped>
@import "../../styles/colors";
@import "../../styles/variables";
.bottombar{
    @apply px-2 flex gap-2 place-items-center px-4;
    img{
        @apply w-[18px] cursor-pointer;
    }
    .makedim{
        filter: brightness(0.5);
    }
}
.layerlist{
    @apply p-2;
    .layer{
        background: $background-base-hover;
        @apply w-full h-12 flex place-items-center gap-1 px-2 rounded;
        img{
            @apply h-[15px] cursor-pointer;
        }
        Input{
            background: $background-base-hover;
        }
    }
}
.lockandfill{
    background-color: $background-base;
    h2{
        font-size: $fsize-base;
        color: $text-muted;
    }
    .active{
        color: $text-base;
    }
}
.blending{
    h2{
        font-size: $fsize-base;
        color: $text-darker;
    }
    .blendingselect{
        background-color: $background-base-hover;
    }
}
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
</style>