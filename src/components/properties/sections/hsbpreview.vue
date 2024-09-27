<script setup>
import Input from '@/components/ui/input/Input.vue';
</script>

<template>
    <div class="hslpreview w-full flex gap-2 place-items-center">
        <Label for="h">H</Label>
        <Input id="h" placeholder="59"></Input>
        <Label for="s">S</Label>
        <Input placeholder="100%"></Input>
        <Label for="b">B</Label>
        <Input id="b" placeholder="50%"></Input>
    </div>
</template>

<style scoped lang="scss">
    @import "../../styles/variables";
    @import "../../styles/colors";
    .hslpreview{
        Input{
            margin-left: -30px;
            padding-left: 30px;
        }
        Label{
            font-size: $fsize-base;
            color: $text-muted;
            z-index: 10;
            padding-left: 13px;
        }
    }
</style>