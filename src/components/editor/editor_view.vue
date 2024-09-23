<script setup>
import actionsVue from "../actions/actions.vue"
import toolbar from "../toolbar/toolbar.vue"
import Canvas from "../canvas/canvas.vue";
import properties from "../properties/properties.vue";
</script>

<template>
    <div class="w-full flex" style="height: calc(100vh - 40px)">
        <toolbar />
        <div class="vertical_sep w-full h-full">
            <actionsVue />
            <div class="horizontal_sep w-full h-full flex" style="height: calc(100vh - 80px);">
                <Canvas />
                <properties />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>