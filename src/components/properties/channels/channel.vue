<script setup>
import { state } from '@/components/state/state';

</script>

<template>
    <div class="w-full h-full p-3" v-if="state.showChannelsPanel">
        <div class="channelstack h-full flex w-full flex-col gap-2">
            <div class="rgb active w-full h-12 flex place-items-center px-3 rounded-lg gap-5 border-white cursor-pointer">
                <img src="../../icons/layers/eye.svg" alt="" class="w-6 h-6">
                <h1>RGB</h1>
            </div>
            <div class="red w-full h-12 flex place-items-center px-3 rounded-lg gap-5 border-white cursor-pointer">
                <img src="../../icons/layers/eye.svg" alt="" class="w-6 h-6">
                <h1>Red</h1>
            </div>
            <div class="green w-full h-12 flex place-items-center px-3 rounded-lg gap-5 border-white cursor-pointer">
                <img src="../../icons/layers/eye.svg" alt="" class="w-6 h-6">
                <h1>Green</h1>
            </div>
            <div class="blue w-full h-12 flex place-items-center px-3 rounded-lg gap-5 border-white cursor-pointer">
                <img src="../../icons/layers/eye.svg" alt="" class="w-6 h-6">
                <h1>Blue</h1>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../../styles/colors";

.channelstack{
    .active{
        @apply border;
    }
}
.rgb{
    background: rgb(255,56,56);
    background: linear-gradient(153deg, rgba(255,56,56,0.4) 0%, rgba(145,250,92,0.4) 59%, rgba(72,188,255,0.4) 100%);
    filter: brightness(0.8);
}
.red{
    background: rgb(255,56,56);
background: linear-gradient(153deg, rgba(255,56,56,0) 0%, rgba(255,72,72,0.4) 98%);
}
.green{
    background: rgb(255,56,56);
background: linear-gradient(153deg, rgba(255,56,56,0) 0%, rgba(31,237,46,0.4) 98%);
}
.blue{
    background: rgb(255,56,56);
background: linear-gradient(153deg, rgba(255,56,56,0) 0%, rgba(31,140,237,0.4) 98%);
}
</style>