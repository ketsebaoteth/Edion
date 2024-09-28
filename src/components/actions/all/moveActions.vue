<script setup>
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import { Select, SelectTrigger,SelectGroup,SelectItem,SelectContent,SelectValue } from '@/components/ui/select';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
    <div class="moveactions w-full h-full p-2 flex place-items-center px-3 gap-2">
        <img src="../../icons/toolbar/move.svg" alt="">
        <Checkbox />
        <h2>Auto Select</h2>
        <Select>
            <SelectTrigger class="w-44 h-8">
                <SelectValue placeholder="layer" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="layer">Layer</SelectItem>
                    <SelectItem value="folder">Folder</SelectItem>
                    
                </SelectGroup>
            </SelectContent>
        </Select>
        <checkbox />
        <h2>Transform handles</h2>
        <checkbox />
        <h2>Distance Measurments</h2>
        <div class="flex aligntools ml-3">
            <Button variant="ghost" size="icon" class="min-w-7 h-7 ">
                <img src="../../icons/actions/alignLeft.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/alignCenter.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/alignRIght.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/horizontalSpacing.svg" alt="">
            </Button>
        </div>
        
        <div class="flex aligntools">
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/alignTop.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/alignMiddle.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/alignBottom.svg" alt="">
            </Button>
            <Button variant="ghost" size="icon" class="min-w-7 h-7">
                <img src="../../icons/actions/verticalSpacing.svg" alt="">
            </Button>
        </div>
        
        <Button variant="ghost" size="icon" class="min-w-7 h-7">
            <img src="../../icons/actions/putInGrid.svg" alt="">
        </Button>
        <Button variant="ghost" size="icon" class="min-w-7 h-7">
            <img src="../../icons/actions/scatterOnSpline.svg" alt="">
        </Button>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/colors";
@import "../../styles/variables";

.moveactions{
    @apply w-10 h-10;
    .aligntools{
        @apply border-x border-border;
        Button{
            @apply w-7 h-7;
            img{
                @apply w-5 h-5;
            }
        }
    }
    h2{
        @apply text-nowrap ;
        font-size: $fsize-base;
    }
}
</style>