import { ref } from "vue"


export let state = ref({
    showDimensionSelector: false,
    showGettingStarted: true,
    windowIsFullscreen: false,
    showLayersPanel: true,
    showChannelsPanel: true,
    showColorEditing: true,
    showHistoryPanel: false,
    debugMode: true,
})