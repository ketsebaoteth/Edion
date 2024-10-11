<script setup>
import { state } from '@/components/state/state';
import Button from '@/components/ui/button/Button.vue';
import { IconPencil } from '@tabler/icons-vue';
import { IconTrash } from '@tabler/icons-vue';
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
import { ref } from 'vue';

let actions = ref([
    {
        actionNamve: "Move",
    },
    {
        actionNamve: "Resize",
    },
    {
        actionNamve: "Rotate",
    },
    {
        actionNamve: "Fill",
    },
    {
        actionNamve: "Stroke",
    },
    {
        actionNamve: "Add",
    },
    {
        actionNamve: "Delete",
    },
    {
        actionNamve: "Copy",
    },
    {
        actionNamve: "Paste",
    },
    {
        actionNamve: "Duplicate",
    },
    {
        actionNamve: "Group",
    },
    {
        actionNamve: "Ungroup",
    },
    {
        actionNamve: "Lock",
    },
    {
        actionNamve: "Unlock",
    },
    {
        actionNamve: "Hide",
    },
    {
        actionNamve: "Show",
    },
    {
        actionNamve: "Merge",
    },
    {
        actionNamve: "Split",
    },
    {
        actionNamve: "Align",
    },
    {
        actionNamve: "Distribute",
    },
    {
        actionNamve: "Flip",
    },
    {
        actionNamve: "Send Backward",
    },
    {
        actionNamve: "Send to Back",
    },
    {
        actionNamve: "Bring Forward",
    },
    {
        actionNamve: "Bring to Front",
    },
    {
        actionNamve: "Edit",
    },
    {
        actionNamve: "Select",
    },
    {
        actionNamve: "Zoom",
    },
    {
        actionNamve: "Pan",
    },
    {
        actionNamve: "Scroll",
    },
    {
        actionNamve: "Zoom In",
    },
    {
        actionNamve: "Zoom Out",
    },
    {
        actionNamve: "Fit",
    },
    {
        actionNamve: "Actual Size",
    },
    {
        actionNamve: "Center",
    },
    {
        actionNamve: "Fit to Width",
    },
    {
        actionNamve: "Fit to Height",
    },
    {
        actionNamve: "Fit to Screen",
    },
    {
        actionNamve: "Fit to Selection",
    },
    {
        actionNamve: "Fit to Artboard",
    },
])

function deleteAction(index){
    actions.splice(index,1);
}
</script>

<template>
        <ScrollArea class="h-[calc(100%-100px)]" v-if="state.showHistoryPanel">
            <div class="w-full h-full mb-0 flex flex-col p-1 gap-1">
                <div v-for="(action,actionindex) in actions" :key="actionindex" class="actions w-full h-16 flex place-items-center px-5 gap-1 border border-border cursor-pointer rounded">
                    <h2 class="text-gray-600 text-sm">Action:</h2>
                    <h1 class="action-name">Move</h1>
                    <Button class="h-7 w-20 ml-auto" variant="outline">Undo</Button>
                    <Button size="icon" class="h-7 w-7" variant="outline" @click="deleteAction(actionindex)">
                        <IconPencil stroke={2} class="h-5 w-5"/>
                    </Button>
                    <Button size="icon" class="h-7 w-7" variant="outline">
                        <IconTrash stroke={2} class="h-5 w-5"/>
                    </Button>
                </div>
            </div>
            
        </ScrollArea>
</template>

<style lang="scss" scoped>
@import "../../styles/colors";
.actions{
    transition: 0.1s ease-in-out;
    &:hover{
        background: $background-base-hover;
    }
}

</style>