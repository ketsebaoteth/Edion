<script setup>
import moveActions from "./all/moveActions.vue";
</script>
<!--this page contains actions tab above the tabs view actions that can be performed based on the selected element type-->
<template>
    <div class="action_bar">
        <moveActions />
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";

.action_bar{
    @apply w-full h-10;
    border-bottom: 1px solid $border-base;
    background-color: $background-base;
}
</style>