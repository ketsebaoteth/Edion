<script setup>
import Input from '@/components/ui/input/Input.vue';
</script>

<template>
    <div class="hslpreview w-full flex gap-1 place-items-center">
        <Label for="c">C</Label>
        <Input id="c" placeholder="59"></Input>
        <Label for="m">M</Label>
        <Input id="m" placeholder="100%"></Input>
        <Label for="y">y</Label>
        <Input id="y" placeholder="50%"></Input>
        <Label for="k">K</Label>
        <Input id="k" placeholder="50%"></Input>
    </div>
</template>

<style scoped lang="scss">
    @import "../../styles/variables";
    @import "../../styles/colors";
    .hslpreview{
        Input{
            margin-left: -20px;
            padding-left: 25px;
        }
        Label{
            font-size: $fsize-base;
            color: $text-muted;
            z-index: 10;
            padding-left: 10px;
        }
    }
</style>