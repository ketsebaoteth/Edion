<script setup>
import Input from '@/components/ui/input/Input.vue';
</script>

<template>
    <div class="hexpreview flex place-items-center">
        <Label for="hex">Hex</Label>
        <Input id="hex" placeholder="#0000ff" class="w-full"></Input>
    </div>
</template>

<style scoped lang="scss">
    @import "../../styles/colors";
    @import "../../styles/variables";
    .hexpreview{
        Input{
            margin-left: -30px;
            padding-left: 40px;
        }
        Label{
            font-size: $fsize-base;
            color: $text-muted;
            z-index: 10;
            padding-left: 8px;
        }
    }
</style>
