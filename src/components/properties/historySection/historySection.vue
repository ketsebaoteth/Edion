<script setup>
import { state } from '@/components/state/state';

</script>

<template>
    <div class="historypane w-full h-full" v-if="state.showHistoryPanel">

    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/colors";

.historypane{
    background: $background-base-lighter;
}
</style>